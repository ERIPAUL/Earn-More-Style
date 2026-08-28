import { type FormEvent, useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { useInitializePaystackTransaction } from "@workspace/api-client-react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const initializePayment = useInitializePaystackTransaction();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    initializePayment.mutate(
      { data: { name: name.trim(), email: email.trim() } },
      {
        onSuccess: ({ authorizationUrl }) => {
          window.location.assign(authorizationUrl);
        },
        onError: () => {
          setError("Checkout could not be started. Please check your details and try again.");
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
          <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Course fee</p>
              <p className="text-sm text-foreground/60 mt-1">Level 1, 8 total hours</p>
            </div>
            <p className="text-xl font-bold text-foreground">₦100,000</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="enrollment-name">Participant name</Label>
            <Input
              id="enrollment-name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              minLength={2}
              maxLength={100}
              required
              className="h-11"
              placeholder="Your full name"
            />
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
            disabled={initializePayment.isPending}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-md transition-all"
          >
            {initializePayment.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
            {initializePayment.isPending ? "Opening secure checkout..." : "Continue to Paystack"}
          </button>

          <p className="flex items-center justify-center gap-2 text-xs text-foreground/50">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Secure test checkout powered by Paystack
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}