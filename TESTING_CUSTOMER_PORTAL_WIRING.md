# screenings4u Testing Customer Portal — Wiring Baseline

Domain: customers.screenings4u.com
Supabase project: screenings4u Enterprise (elpbnytpciqnbexiaebp)

## Customer flow
- Paid qualifying drug/alcohol testing orders grant Testing Customer Portal access.
- New testing purchasers are invited to customers.screenings4u.com/auth-handoff.html.
- Orders and Testing cases use the existing screenings4u authoritative records.
- Donor Pass page supports USPS-verified testing-area submission.
- Portal states: Choose Testing Area -> Location Submitted -> Pass Ready.
- A screenings4u branded donor pass is printable after collection site/appointment information is available.
- Released results only are shown to customers.

## Live functions
- testing-customer-portal v3
- testing-customer-admin v1
- screenings4u-testing-workflow v6
- stripe-webhook v49
- auth-send-email v14

## Donor pass architecture
The current pass is a screenings4u authorization, not a laboratory-issued CCF/registration document.
Enterprise Testing can create/regenerate the S4U-DP-* pass. Scheduling auto-generates a pass number when missing.
A future laboratory API document can supersede/augment the screenings4u pass without changing the customer portal model.
