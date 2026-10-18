# SAMADHAN India — Institutional Platform & 2026 Strategy Deck

Built with **Once UI (`@once-ui-system/core`)** and **Next.js App Router** for **SAMADHAN** (*Society for the Aid of Mentally and Developmentally Handicapped*, founded in December 1981 in New Delhi, Reg. No. 12183, FCRA Reg. No. 231650031, NGOsource US 501(c)(3) Equivalency Certified).

## Architecture & Routes

The legacy 36-page fragmented WordPress site has been consolidated into a clean, high-conversion 7-route architecture tailored to SAMADHAN's 4 primary user personas (Parents/Families, Corporate CSR Heads, International/NRI Donors, and Clinical Interns/Volunteers):

1. `/` — **Institutional Overview**: 44-year clinical mission, audited FY 2024–25 metrics, 4-persona interactive routing gateway, 7 clinical programmes, longitudinal child case studies, and philanthropic unit costs.
2. `/programmes` — **Cradle-to-Livelihood Clinical Continuum**: Deep dive into Early Intervention (0–6 yrs), Disha & Inclusive School Bridge (6–18 yrs), SMAS ABA Therapy Room, JCB Sugamya Quissa Pitara Accessible Library, Matrika Maternal Mental Health, Vocational Sheltered Workshop, and Community Outreach.
3. `/centres` — **Centres & Parent Referral Protocol**: Dakshinpuri (South Delhi), Dwarka Sector 13 (West Delhi), and Tigri Community Outreach Hub with direct telephone lines, maps, and 4-step parent intake workflow.
4. `/impact-reports` — **12-Year Audited Report Vault & Child Outcomes**: Full PDF archive from FY 2012–13 through FY 2024–25, statutory registrations (Societies Act, FCRA, RPwD Sec 51(2), 80G/12A, National Trust, NGOsource ED), and 8 longitudinal child outcome audits.
5. `/about` — **44-Year Heritage & Governance**: Founding story of clinical psychologist Pramila Balasundaram (Dec 1981), the Mother-Child clinical thesis, 18-milestone chronology (1981–2025), and leadership directory.
6. `/donate` — **80G Domestic & MHA FCRA Remittance Hub**: Dual one-click copy banking cards for Indian Rupee (Union Bank of India, Yusuf Sarai) and Foreign Currency (State Bank of India FCRA New Delhi Main Branch, SWIFT `SBININBB104`), plus 6 unit-cost sponsorship tiers.
7. `/strategy` — **Interactive 5-Slide Executive Presentation**:
   - **Slide 1**: Competitor Benchmark (Tamana, Action For Autism, Muskaan, ASTHA, Ummeed)
   - **Slide 2**: Search Engine Dominance & Keyword Outranking ROI Matrix
   - **Slide 3**: CSR, Crowdfunding & Global Grant Syndication (8 Platforms)
   - **Slide 4**: Strategic Partnerships (Pediatric Hospitals, RCI Universities, Corporate CSR, ESG Gifting)
   - **Slide 5**: 90-Day Execution Roadmap
8. `/contact` — **Direct Clinical & CSR Intake Desk**

## Design System (Once UI)

- **Typography**: `Newsreader` (Editorial Display Serif) + `Plus Jakarta Sans` (Clinical UI & Body Sans) + `JetBrains Mono` (Statutory Registrations, IFSC/SWIFT & Audited Figures).
- **Color Palette**: Warm Alabaster Paper (`#FAF7F2`), Deep Indigo-Navy (`#14244B` / `#233A73`), Warm Terracotta & Marigold Ochre (`#C2621A` / `#E48F45`), and Sage Clinical Green (`#2D6A4F`).

## Development

```bash
npm install
npm run dev
```

## Production Build (Static Export Ready)

```bash
npm run build
```
