# screenings4u Testing Customer Portal

Domain: `customers.screenings4u.com`
Supabase project: `screenings4u` (`elpbnytpciqnbexiaebp`)

## Purpose
Customer-facing portal for purchasers of screenings4u drug and alcohol testing services from screenings4u.com.

## Customer pages
- Dashboard
- My Orders
- My Testing
- Donor Passes
- Results
- Documents
- My Profile
- Support

## Backend
- `testing-customer-portal` Edge Function
- Existing `customer-support-actions` for support conversations
- `testing_customer_portal_access` internal access-control table
- `orders`, `order_items`, `testing_cases`, `testing_case_documents`, `scheduling_appointments`, `compliance_collection_sites`

Paid qualifying testing orders automatically activate Testing Customer Portal access. Training-only purchases do not.
