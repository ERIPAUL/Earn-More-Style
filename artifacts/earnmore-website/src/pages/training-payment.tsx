import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, Loader2, XCircle } from "lucide-react";
import { Link } from "wouter";
import { useVerifyPaystackTransaction } from "@workspace/api-client-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";

export default function TrainingPaymentPage() {
  const [reference, setReference] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReference(params.get("reference") ?? params.get("trxref") ?? "");
  }, []);

  const verification = useVerifyPaystackTransaction(reference);

  const status = verification.data?.status;
  const isLoading = Boolean(reference) && verification.isLoading;
  const isSuccess = status === "success";
  const isPending = status === "pending";

  return (
    <>
      <Seo
        title="Training Payment Status | EarnMore Group"
        description="Check the status of your EarnMore Corporate ESG Level 1 training payment."
        canonical="/training/payment"
        noIndex
      />
      <Navbar />
      <main className="min-h-[75vh] bg-emerald-50 px-6 pt-32 pb-20 flex items-center justify-center">
        <section className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-emerald-100 p-8 md:p-10 text-center">
          {isLoading ? (
            <>
              <Loader2 className="w-14 h-14 text-primary animate-spin mx-auto mb-5" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Verifying your payment</h1>
              <p className="text-foreground/60 mt-3">Please wait while we confirm your transaction with Paystack.</p>
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-5" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Enrollment confirmed</h1>
              <p className="text-foreground/60 mt-3 leading-relaxed">{verification.data?.message}</p>
              <p className="text-sm text-foreground/55 mt-3">
                {verification.data?.confirmationEmailSent
                  ? "A confirmation email with your course details has been sent."
                  : "Your payment is confirmed, but the confirmation email could not be sent. Please contact us for assistance."}
              </p>
            </>
          ) : isPending ? (
            <>
              <Clock3 className="w-16 h-16 text-amber-500 mx-auto mb-5" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Payment processing</h1>
              <p className="text-foreground/60 mt-3 leading-relaxed">{verification.data?.message}</p>
            </>
          ) : (
            <>
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-5" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Payment not confirmed</h1>
              <p className="text-foreground/60 mt-3 leading-relaxed">
                {verification.isError
                  ? "We could not verify this transaction. Please try again or contact EarnMore if you were charged."
                  : "No valid payment reference was received, or the payment was not completed."}
              </p>
            </>
          )}

          {reference && (
            <p className="mt-6 text-xs text-foreground/40 break-all">Reference: {reference}</p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/training" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              Return to Training
            </Link>
            <Link href="/contact" className="border border-gray-200 hover:border-primary text-foreground font-semibold px-6 py-3 rounded-md transition-colors">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}