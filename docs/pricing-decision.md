# Training Pricing Decision

Level 1 retains its NGN 100,000 course fee, expressed to visitors as the live
USD equivalent plus a USD 2 contingency. Checkout is charged in NGN: the
contingency is converted using the same current USD/NGN quote and added to the
NGN course fee.

Quotes come only from the public USD/NGN FX endpoint when its timestamp is
fresh; there is intentionally no static or guessed FX fallback. Each short
lived quote is signed server-side with the existing session or Paystack secret.
The signed quote is stored in the new Paystack transaction metadata so payment
verification uses the original amount even if FX or payment fees later change.

New FX-priced references use the `emg-l1-fx-` prefix and must pass signed
metadata validation. The historical fixed-NGN verifier remains only for older
`emg-l1-` references, preventing a newly priced transaction from downgrading to
the legacy amount check.