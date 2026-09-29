# Training Pricing Decision

Level 1 costs USD 50 total with no added contingency. Checkout is charged in
NGN using the current USD/NGN quote, rounded to the nearest kobo.
Previously issued payments retain their original signed amounts for verification,
but older pricing quotes cannot initialize new checkouts.

Quotes come only from the public USD/NGN FX endpoint when its timestamp is
fresh; there is intentionally no static or guessed FX fallback. Each short
lived quote is signed server-side with the existing session or Paystack secret.
The signed quote is stored in the new Paystack transaction metadata so payment
verification uses the original amount even if FX or payment fees later change.

New FX-priced references use the `emg-l1-fx-` prefix and must pass signed
metadata validation. The historical fixed-NGN verifier remains only for older
`emg-l1-` references, preventing a newly priced transaction from downgrading to
the legacy amount check.