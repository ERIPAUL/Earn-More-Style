import { type FormEvent, useEffect, useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import {
  useGetTrainingPaymentQuote,
  useInitializePaystackTransaction,
  type TrainingEnrollmentInput,
} from "@workspace/api-client-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TrainingEnrollmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TrainingEnrollmentDialog({
  open,
  onOpenChange,
}: TrainingEnrollmentDialogProps) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [gender, setGender] = useState<TrainingEnrollmentInput["gender"]>();
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const initializePayment = useInitializePaystackTransaction();
  const paymentQuote = useGetTrainingPaymentQuote({
    query: {
      queryKey: ["training-price-quote"],
      enabled: open,
      staleTime: 0,
      refetchOnMount: "always",
      retry: 1,
    },
  });

  useEffect(() => {
    if (open) {
      setError("");
    }
  }, [open]);

  const formatUsd = (cents: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!paymentQuote.data) {
      setError("A current price quote is required before checkout. Please try again shortly.");
      return;
    }

    initializePayment.mutate(
      {
        data: {
          firstName: firstName.trim(),
          secondName: secondName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          organisation: organisation.trim() || undefined,
          jobTitle: jobTitle.trim() || undefined,
          gender,
          age: age ? Number(age) : undefined,
          quoteToken: paymentQuote.data.quoteToken,
        },
      },
      {
        onSuccess: ({ authorizationUrl }) => {
          window.location.assign(authorizationUrl);
        },
        onError: (requestError) => {
          const message =
            requestError instanceof Error ? requestError.message : "";

          if (message.includes("valid email domain")) {
            setError(
              "Please enter an email address from a valid provider, company, or university domain.",
            );
            return;
          }

          if (message.includes("could not verify the email domain")) {
            setError(
              "We could not verify the email domain right now. Please try again shortly.",
            );
            return;
          }

          if (message.includes("price quote")) {
            setError("Your quote expired. Refreshing a new price quote now.");
            void paymentQuote.refetch();
            return;
          }

          setError(
            "Checkout could not be started. Please check your details and try again.",
          );
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90dvh] rounded-2xl p-0 overflow-y-auto border-0">
        <div className="px-7 py-6 text-white" style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Enroll in Level 1</DialogTitle>
            <DialogDescription className="text-green-100/75">
              Corporate ESG Strategy and Compliance, 14 November 2026
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="px-7 pb-7 space-y-5">
          <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
            {paymentQuote.isLoading ? (
              <p className="flex items-center gap-2 text-sm text-foreground/60">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading price…
              </p>
            ) : paymentQuote.data ? (
              <p className="text-xl font-bold text-foreground text-right whitespace-nowrap">
                {formatUsd(paymentQuote.data.usdTotalCents)}
              </p>
            ) : (
              <p role="alert" className="text-sm text-red-700">
                Price unavailable. Please try again shortly.
              </p>
            )}
          </div>

          <fieldset className="space-y-4">
          <legend className="text-base font-semibold">Participant details</legend>
          <p className="text-xs text-foreground/60">Fields marked * are required.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="enrollment-first-name">First name *</Label>
              <Input
                id="enrollment-first-name"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                minLength={2}
                maxLength={50}
                required
                className="h-11"
                placeholder="First name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enrollment-second-name">Last name *</Label>
              <Input
                id="enrollment-second-name"
                name="secondName"
                autoComplete="family-name"
                value={secondName}
                onChange={(event) => setSecondName(event.target.value)}
                minLength={2}
                maxLength={50}
                required
                className="h-11"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="enrollment-email">Email address *</Label>
            <Input
              id="enrollment-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              maxLength={254}
              required
              className="h-11"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enrollment-phone">Phone number *</Label>
            <Input id="enrollment-phone" name="phone" type="tel" autoComplete="tel"
              value={phone} onChange={(event) => setPhone(event.target.value)}
              required minLength={7} maxLength={25} pattern={"\\+?[0-9 \\(\\)\\-]{7,25}"}
              title="Enter a phone number with country code, using digits, spaces, brackets or hyphens."
              placeholder="e.g. +234 801 234 5678" className="h-11" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="enrollment-gender">Gender (optional)</Label>
              <select id="enrollment-gender" name="gender" value={gender ?? ""}
                onChange={(event) => setGender((event.target.value || undefined) as TrainingEnrollmentInput["gender"])}
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="enrollment-age">Age (optional)</Label>
              <Input id="enrollment-age" name="age" type="number" min={1} max={120} step={1}
                value={age} onChange={(event) => setAge(event.target.value)} placeholder="Age in years" className="h-11" />
            </div>
          </div>
          </fieldset>

          <fieldset className="space-y-4 border-t pt-5">
            <legend className="text-base font-semibold">Professional details</legend>
            <div className="space-y-2">
              <Label htmlFor="enrollment-organisation">Organisation / company (optional)</Label>
              <Input id="enrollment-organisation" name="organisation" autoComplete="organization"
                value={organisation} onChange={(event) => setOrganisation(event.target.value)}
                maxLength={150} placeholder="Organisation, company or independent professional" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enrollment-job-title">Job title / role (optional)</Label>
              <Input id="enrollment-job-title" name="jobTitle" autoComplete="organization-title"
                value={jobTitle} onChange={(event) => setJobTitle(event.target.value)}
                maxLength={100} placeholder="Your current role" className="h-11" />
            </div>
          </fieldset>

          <fieldset className="space-y-2 border-t pt-5">
            <legend className="text-base font-semibold">Training programme</legend>
            <p className="text-sm font-medium">Corporate ESG Strategy and Compliance</p>
            <p className="text-sm text-foreground/60">Level 1: Foundation · Online · 14 November 2026 · 4 hours, one day</p>
          </fieldset>

          {error && (
            <p role="alert" className="text-sm text-red-700 bg-red-50 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={initializePayment.isPending || paymentQuote.isLoading || !paymentQuote.data}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-md transition-all"
          >
            {initializePayment.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
            {initializePayment.isPending ? "Opening secure checkout..." : "Continue to Paystack"}
          </button>

          <p className="flex items-center justify-center gap-2 text-xs text-foreground/50">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Secure checkout powered by Paystack
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}