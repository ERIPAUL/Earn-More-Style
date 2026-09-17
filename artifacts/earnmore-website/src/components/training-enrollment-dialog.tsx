import { type FormEvent, useEffect, useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import {
  useGetTrainingPaymentQuote,
  useInitializePaystackTransaction,
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
  const formatNgn = (kobo: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: kobo % 100 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(kobo / 100);

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
      <DialogContent className="max-w-md rounded-2xl p-0 overflow-hidden border-0">
        <div className="px-7 py-6 text-white" style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Enroll in Level 1</DialogTitle>
            <DialogDescription className="text-green-100/75">
              Corporate ESG Strategy and Compliance, 10 and 17 October 2026
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="px-7 pb-7 space-y-5">
          <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Live course quote</p>
            {paymentQuote.isLoading ? (
              <p className="mt-2 flex items-center gap-2 text-sm text-foreground/60">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading the current USD equivalent…
              </p>
            ) : paymentQuote.data ? (
              <>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">NGN 100,000 course fee + USD 2 contingency</p>
                    <p className="mt-1 text-xs text-foreground/50">
                      USD equivalent: {formatUsd(paymentQuote.data.usdCourseEquivalentCents)} + {formatUsd(paymentQuote.data.usdContingencyCents)}
                    </p>
                  </div>
                  <p className="text-xl font-bold text-foreground whitespace-nowrap">
                    {formatUsd(paymentQuote.data.usdTotalCents)}
                  </p>
                </div>
                <div className="mt-3 border-t border-emerald-200 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Exact NGN payable through Paystack</p>
                  <p className="mt-1 text-lg font-bold text-foreground">{formatNgn(paymentQuote.data.ngnPayableKobo)}</p>
                  <p className="mt-1 text-xs text-foreground/50">
                    Includes the USD 2 contingency converted at this quote’s rate. Quote expires {new Date(paymentQuote.data.expiresAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.
                  </p>
                </div>
              </>
            ) : (
              <p role="alert" className="mt-2 text-sm text-red-700">
                We could not obtain a current USD/NGN quote. Checkout is unavailable until a live quote can be retrieved.
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="enrollment-first-name">First name</Label>
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
              <Label htmlFor="enrollment-second-name">Second name</Label>
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
                placeholder="Second name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="enrollment-email">Email address</Label>
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