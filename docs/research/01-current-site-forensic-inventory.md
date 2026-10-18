# Forensic inventory: samadhanindia.org (captured 18 Oct 2026)

The site is a WordPress install rebuilt in January 2026. It uses Vektor's X-T9 block theme, is hosted on Hostinger with LiteSpeed caching, and sits behind Cloudflare. There are 37 pages, 21 posts and 124 media files, and none of it has an XML sitemap.

**What I could and couldn't read:**
- **Cloudflare blocked every direct request.** curl got an HTTP 403 "Just a moment…" challenge on HTML, images, `robots.txt` and the REST API. The built-in browser stalled on the same challenge. The Wayback Machine returned 429 (rate limited), and the r.jina.ai, allorigins and codetabs proxies were refused or failed.
- **The data below comes from two sources that did get through:**
  - the WebFetch tool, which returns page text but strips links and images;
  - the site's public WordPress REST API (`/wp-json/wp/v2/pages|posts|media|categories|navigation|users`).
- **These items are therefore unverified:** meta descriptions, Open Graph tags, JSON-LD, canonical tags, script counts, Google Analytics tags, and the footer's social links. I mark them "unverified" wherever they come up.

---

## 1. Sitemap & Nav Tree

**Sitemap and robots**
- `/sitemap.xml` shows homepage content, so there is no XML sitemap.
- `/wp-sitemap.xml` returns 404.
- `/robots.txt` contains only `Disallow: /wp-admin/` and `Allow: /wp-admin/admin-ajax.php`. There is no `Sitemap:` line.
- A made-up URL correctly returns 404.

**All URLs found** (from `/wp-json/wp/v2/pages`, `/posts` and `/categories`)

- **Pages (37):**
  - `/`, `/home/` (a duplicate with empty content), `/about-us/`, `/our-founder/`, `/notes-from-our-founder/`, `/milestones/`, `/organisation-details/`, `/the-executive-board/`, `/samadhan-brochure/`
  - `/programmes/`, `/special-education/`, `/rehabilitation-services/`, `/community-outreach/`, `/communication-network-on-disability/`, `/dramatherapy/`, `/women-empowerment/`, `/early-intervention/`
  - `/activities/`, `/events/`, `/participating-events/`, `/conferences/`, `/cultural-programmes/`, `/training-workshops/`, `/gallery/`
  - `/get-involved/` (titled "Donate From India"), `/international-donations/`, `/volunteer/`, `/internship/`, `/application-form-for-volunteer-and-internship-programmes/`
  - `/reports/`, `/success-stories/`, `/collaborations/`, `/able-x-course/`, `/statistics-of-children-surveyed-by-samadhan-in-2008/`, `/document-library/`, `/contact-us/`, `/privacy-policy/`
- **Posts (21):**
  - Success stories (9): `/payal/`, `/children-at-dwarka-center/`, `/ranjeet/`, `/farman-safi/`, `/manu/`, `/ishan/`, `/roopali/`, `/shubhan/`, `/sneha/`
  - Volunteer feedback (7): `/danielle/`, `/deborah-ann-trott/`, `/kavitha/`, `/mallika-singh/`, `/nikita/`, `/simran-deep-singh/`, `/tina-neogi/`
  - Donor feedback (4): `/software-ag-stiftung-darmstadt-germany/`, `/registered-nurses-from-uk/`, `/jss-steel-italia-ltd-india/`, `/carlson-wagonlit-travel-india/`
  - Founder (1): `/three-qualities-of-leadership/`
- **Category archives (13):**
  - With posts: success_stories (9), volunteer-feedback (7), donor-feedback (4), founders-page (1).
  - Empty (0 posts): conferences, cultural-programmes, events, blog, parents-feedback, participating-events, photo-gallery, training-workshops, video-gallery.
- **Author archive:** `/author/admin/`.

**Navigation tree, exactly as stored** (source: `/wp-json/wp/v2/navigation`, id 1). The link targets were stripped by the fetch, so which page each label points to is inferred from matching labels.

```
Home
About Us
 ├ Our Founder
 ├ Notes from our Founder
 ├ Milestones
 ├ Organisation Details
 ├ The Executive Board
 └ Samadhan Brochure
Programmes
 ├ Special Education
 ├ Rehabilitation Services
 ├ Community Outreach
 ├ Communication Network On Disability
 ├ Dramatherapy
 ├ Women Empowerment
 └ Early Intervention
Activities
 ├ Events
 ├ Participating Events
 ├ Conferences
 ├ Cultural Programmes
 ├ Training & Workshops
 └ Gallery
Get Involved
 ├ International Donations
 ├ Donate From India
 ├ Volunteer
 └ Internship
Resource Center
 ├ Reports
 ├ Success Stories
 ├ Feedback
 │ ├ Donor Reflections
 │ ├ Parents' Experiences
 │ └ Voices Of Our Volunteers
 ├ Collaborations
 ├ Gallery              (second appearance of Gallery)
 ├ Download Our Brochure
 ├ ABLE X Course
 └ Application form for Volunteer and Internship Programmes
Contact Us
```

Three pages exist but are not in the nav: `/statistics-of-children-surveyed-by-samadhan-in-2008/`, `/document-library/` and `/privacy-policy/`. Whether the footer links to the privacy policy is unverified.

---

## 2. Page-by-page inventory

**Applies to every page:**
- **Title format:** `{Page} | Samadhan India - Dignity, Growth, and Inclusion` (verified).
- **Meta description:** unverified. No SEO plugin is installed; the VK ExUnit plugin can output one, but I couldn't confirm it does.
- **Footer on every page:** "Society for the Aid of Mentally and Developmentally Handicapped 'SAMADHAN'", both office addresses, and three phone numbers: +91-11-45516693, +91-74284 50880 and +91-11-2605 6812. The footer emails are hidden by Cloudflare's email obfuscation (they appear as "[email protected]").
- **Headings:** WebFetch converts H1 to `#`. Pages marked "no H1 detected" below showed no top-level heading in that conversion.

| URL | H1 / H2s | Summary | Key facts | CTAs | Problems |
|---|---|---|---|---|---|
| `/` (title "Samadhan India - Dignity, Growth, and Inclusion \| Empowering lives at the intersection of intellectual disability and poverty.") | No H1 detected. H2s: "Championing dignity for persons with intellectual disabilities in need", "More Information" | Hero promise plus two cards: therapy for children and empowerment of mothers. | None | "Annual Report" | No impact numbers, no visible donate text. The front page is built from a theme template, so I couldn't inspect its structure. |
| `/home/` | none | Empty duplicate of the homepage. | — | — | Thin duplicate URL |
| `/about-us/` | H2 "What is SAMADHAN?" (no H1 detected) | 1981 origin, dual focus on disability and poverty, two centres. | Registered 1981; two international awards (World Bank, Inclusion International); members of National Trust and AFID; research links with IASSIDD | none | Run-on first sentence ("…in New Delhi, Service models…"); "have been established" left dangling |
| `/our-founder/` | H1 "Our Founder" | Bio of Mrs Pramila Balasundaram. | MA from Bangalore University; trained under Dr Sue Jennings; YWCA Delhi President 1993-94; Inclusion International award 1998; World Bank award **2002**; Hind Prabha 2011; *Sunny's Story* (2005) | none | "she has underwent", "humanitrian"; calls her "currently First Vice President" of AFID, but Milestones says Samadhan was elected AFID President in 2011 |
| `/notes-from-our-founder/` | H1 only | **Empty.** | — | — | The founder's essay sits in the post `/three-qualities-of-leadership/` and is not linked here |
| `/milestones/` | H1 "Milestones"; second H1 "A Record of Service, 1981–The Story So Far" | Custom JavaScript timeline with 18 entries (1981–2013). | See section 3 | Search box and filter buttons | Visible developer sentence: "New milestones can be added to the data list below without touching the design." The page source contains an editing tutorial in a CSS comment. "No entries match that search or filter." appears in the text-only fetch; whether real visitors see it is unverified. Two H1s. Nothing after 2013. |
| `/organisation-details/` | H1; H3s Membership, Awards, Legal Status | Memberships, five awards, legal registrations. | Society reg. no. 12183; 80G (no number given); FCRA 231650031; RPwD Act 2016 s.51 | none | World Bank award listed as **2001** (2002 elsewhere). Cites "Societies Registration Act of 1981"; the Act dates from 1860, so this is probably an error. No 12A, CSR-1 or NGO Darpan ID. |
| `/the-executive-board/` | H1 "The Executive Board – 2026" | Seven-person board table. | President: Prabodh Bhambal. Secretary/Executive Director: Sumathi Morgan. | none | Founder spelled "Prameela" here, "Pramila" elsewhere. "Charter Accountant". |
| `/samadhan-brochure/` | — | Embedded PDF plus a Download link. | — | Download | The brochure PDF was uploaded twice (`Samadhan-brochure.pdf` and `-1.pdf`, 496 KB each) |
| `/programmes/` | H1; 13 card H2s | Card grid listing Events, Conferences, Training & Workshops, Participating Events, Internship, Dramatherapy, Women Empowerment, Cultural Programmes, Rehabilitation, Special Education, Early Intervention, Community Outreach and CND. | — | Cards | Mixes activities and the internship into "Programmes"; the cards link to empty pages |
| `/special-education/` | H1; H3 "On POPULAR DEMAND.." | Five-day school for ages 6–14, 1:5 ratio, individual education plans, low-cost teaching aids. | Ratio about 1:5; ages 6–14; mainstream classes of 40–50 | none | "facilities the learning", "the the", "sometime". Refers to a Vocational Training Unit that has no page. ALL-CAPS list. |
| `/rehabilitation-services/` | H1 | Survey referral, then multidisciplinary assessment and therapy. | Clinic two days a week at Dakshinpuri, one day at Dwarka | none | Single paragraph |
| `/community-outreach/` | H1; H3s School Survey, Community Awareness, Training of Trainers | Door-to-door surveys, puppet theatre, health camps, training local women as community workers. | Surveys of ages 0–12; six-monthly orientation sessions | none | "Community OutreachThrough" (missing space); "ORD" (should be ORS); "numbers of the community" (members) |
| `/communication-network-on-disability/` | H1 | Plan for an online information hub; described as a "new programme". | — | none | Stale ("a small beginning"); "ad the Asian" |
| `/dramatherapy/` | H1 | Drama therapy in the curriculum; grew out of the A.R.T.S. programme. | British Institute of Dramatherapists workshops | none | — |
| `/women-empowerment/` | H1; H3s Papier Mache, Nutritious Laddoo, Spices Unit | Mothers' income units. | Laddoos evaluated by the Nutrition Foundation of India; Samadhan Spices made at Dwarka | none | "diisablities"; no way to buy the products |
| `/early-intervention/` | H1 | Ages 0–6, home programme for under-3s, nutrition advice. | — | none | "ORD" (should be ORS) |
| `/activities/`, `/participating-events/`, `/conferences/`, `/cultural-programmes/` | H1 only | **Empty** | — | — | Empty pages linked from the nav |
| `/events/`, `/training-workshops/` | no H1 detected | **Empty** | — | — | Empty pages linked from the nav |
| `/gallery/` | H1 | About 30 image blocks; the media library attaches 37 images to this page. | — | — | No captions, no alt text, low resolution |
| `/get-involved/` (title "Donate From India") | H5 "DONATE VIA BANK TRANSFERS"; H6 "Indian Bank Account Details"; H2 about 80G | Appeal text, an embedded payment form, bank details, cheque address. | Union Bank of India A/C 113210011004448, IFSC UBIN0811327; 80G | "Click on the button below…" plus the embedded form | The form is an empty `<form><script></script></form>`, the shape of a Razorpay Payment Button. This is an inference; the gateway is unverified. No suggested amounts, no impact-per-rupee message, no 80G number. Heading order runs H5, H6, H2. |
| `/international-donations/` | no H1 detected | SBI FCRA bank details. | SBI A/C 40052266279, SWIFT SBININBB104, IFSC SBIN0000691, purpose code P1303 | none | The account name shows truncated ("…MENTALLY AND DEVE"). No online foreign-giving route, although GlobalGiving and GuideStar logos are in the media library. |
| `/volunteer/` | H1; H3 | Eight types of volunteer roles. | Unpaid; incidental costs may be covered | Form button | "conductingimportant", "schedulesof", "homevisits", "!!" |
| `/internship/` | H1; H2s Our Offer, BUDGET | Long practical guide for (mostly US) interns. | Four-week rotation; 120 hours = 4 credits; about $10/day for food | "Click Here to Apply Now" | Says "35-yr-old NGO" (Samadhan is 45 in 2026). Mentions STD booths and Meru cabs, "organaisations", "Praticuum", "Farenheit". Gives temperatures in °F only. |
| `/application-form-…/` | H1 | WPForms form #621: name, phone, email, address, age, education, centre, availability. | — | Submit | Collects personal data, but the privacy policy doesn't cover it |
| `/reports/` | H3s "Annual Reports +", "Programme Reports +" (no H1) | Accordions linking 12 annual reports plus ICT and AFID reports. | Annual reports from 2013-14 to 2024-25 | Download | **No 2013-14 PDF exists in the media library**, so that link is probably broken (unverified). PDFs are up to 6.7 MB. |
| `/success-stories/` | H1 | **Page body empty**; the stories live in the category archive instead. | — | — | The archive thumbnails show the logo instead of the child |
| `/collaborations/` | H2s International, National, Corporate | 26 partner names as plain text. | See section 3 | none | "Johnsons & Johnsons", "Carlson Wagonlit Travels", "AG Software" (should be Software AG). No logos or dates. |
| `/able-x-course/` | H1 | Promotes the University of Queensland ABLE101x course on edX (2016). | Some course footage was filmed at the Dakshinpuri centre | edX links | Links to a 2016 course run, with a truncated "xser…" URL; "ABELX", "QCIDDn" |
| `/statistics-…-2008/` | H1; H3s | Survey numbers from 2007–08. | See section 3 | none | 18 years old; "Khanpur village" listed twice |
| `/document-library/` | — | Shows the raw text `[doc_library]` | — | — | **Broken:** the shortcode's plugin isn't running |
| `/contact-us/` | H1 | Both addresses plus WPForms form #628. | Email samadhan.dwarka@gmail.com | Submit | PIN code written "1100 75"; Gmail address; no map, opening hours or directions (unverified) |
| `/privacy-policy/` | H2s | Default WordPress template text. | — | — | Doesn't cover donations, the forms, or Site Kit/analytics. Problematic under India's DPDP Act. |
| Success stories (9 posts) | — | Detailed case stories (2005–2016) about Payal, the Dwarka children, Ranjeet, Farman, Manu, Ishan, Roopali, Shubhan and Sneha. | "more than 50,000 families" (in `/shubhan/`) | — | All dated January 2026 (the migration date), though the stories are years old. "mentally handicapped" appears five times in `/payal/`; also "Downs Syndrome", "Vineeet", "microcepahalic", "yaer". Children's names, diagnoses and medical histories are published in full; whether consent was recorded is unknown. |
| Volunteer feedback (7) | — | Testimonials with 150 px headshots. | — | — | `/danielle/` publishes a personal email address and says "in 2020" |
| Donor feedback (4) | — | Software AG Stiftung, UK nurses, JSS Steel Italia, CWT India. | 250 laddoo boxes ordered for Diwali 2016 | — | From 2016; contains "mentally handicapped daughter", "suffering disabled children", "TMr" |
| `/three-qualities-of-leadership/` | — | Founder essay. | "36 years down the line" | — | "matra" (should be mantra); outdated |

---

## 3. Key facts & proof points (verbatim)

| Fact | Source |
|---|---|
| "Registered in 1981" / "set up in 1981 in New Delhi" | `/about-us/` |
| "SAMADHAN has two centers, one in Dakshinpuri in South Delhi and the other in Dwarka, South-West Delhi" | `/about-us/` |
| "registration no.12183"; "Registered under section 80G of Income Tax Act of 1961"; "FCRA … Registration No. 231650031"; "Registered under sub section (2) of Section 51 of the Rights of Persons with Disabilities Act, 2016" | `/organisation-details/` |
| Awards: PVR Nest & Ummeed Collective of Leaders; "Most Promising Social Programme … Coffee Because, Delhi, 2018"; "World Bank, 2001"; "Inclusion International … Hague, 1998"; "Good Practice Award – Dubai International Awards … 2005" | `/organisation-details/` |
| "Award for Innovation from world Bank in 2002"; "Hind Prabha 2011" | `/our-founder/` |
| Memberships: National Trust, Inclusion International, AFID, ARC (Tokyo), IASSIDD | `/organisation-details/` |
| Timeline: 1981 registered; 1983 first special education unit at Dakshinpuri; 1984–85 first public performance ("The Carnival of Animals"); 1986 first early-intervention workshop; 1988 "first member of Inclusion International from India"; 1989 vocational unit; 1990 rehabilitation clinic; 1992 first national drama therapy workshop; 1993 Dakshinpuri foundation stone (Lebenshilfe); 1994 Dakshinpuri centre opened by Dr Kiran Bedi; 1998 Inclusion International award and community-based rehabilitation (CBR) launched; 2000 mothers' income generation; 2002 World Bank award; 2003 Dwarka building completed; 2006 25th anniversary; 2007 AFID 2nd Vice President; 2011 "elected President of AFID"; 2013 hosted the 21st AFID Conference | `/milestones/` (page source) |
| "We have reached out to more than 50,000 families." | `/shubhan/` |
| "The student teacher ratio is about 1:5"; ages "six and fourteen" | `/special-education/` |
| "two-day clinical service at Dakshinpuri and one day clinic at Dwarka" | `/rehabilitation-services/` |
| 2007–Dec 2008 surveys: "2469 households … Dwarka … 109 children"; "Dakshinpuri, 3282 households … 68 children"; schools: "28 MCD primary schools, 63 private primary schools, 6 MCD Dispensaries, 33 private clinics, 18 govt. schools"; "In Dwarka 44 schools" | `/statistics-of-children-surveyed-by-samadhan-in-2008/` |
| Partners (26): Ford Foundation, Walt Disney, GlobalGiving, Heart & Hand Foundation, Japanese Volunteers group, Irish Aid, Share and Care Foundation, Lebenshilfe Germany, Inclusion International, IIC, Vibrant Women, Tokuri-Kai; DISHA (National Trust), Ministry of Culture, MoEFCC, Ummeed-PVR Nest; CWT, S&P Global, J&J, XL Group, McGraw Hill, Sumitomo, "AG Software", Edgeware, GAP International, Shoppers Stop | `/collaborations/` |
| "Diwali 2016, JSS Steelitalia Ltd, placed an order for 250 boxes of Laddoos" | `/jss-steel-italia-ltd-india/` |
| Board 2026 (7 members): President Prabodh Bhambal; Treasurer Janak Kumar Gandhi; Secretary Sumathi Morgan (Executive Director) | `/the-executive-board/` |
| Trust badges in the media library: GuideStar, NGOsource, GlobalGiving (2019 logo) | `/wp-json/wp/v2/media` ids 54–56 |

**Facts that conflict:**
- **World Bank award year:** 2001 vs 2002.
- **Founder's name:** Pramila vs Prameela.
- **Founder's AFID role:** "currently First Vice President" vs elected President in 2011.
- **Organisation's age:** "35-yr-old" and "36 years" vs the actual 45.

**Not mentioned anywhere:** 12A, CSR-1, NGO Darpan ID, PAN, an annual count of children served, staff numbers.

---

## 4. Image & media inventory

There are 124 media items: 108 images, 15 PDFs and 1 DOCX, all under `https://samadhanindia.org/wp-content/uploads/2026/01/` unless noted. Only 3 of the 108 images have alt text: `offcanvas-logo.png` ("Samadhan India"), `samadhan-donation.jpg` ("Samadhan Logo") and `mappointer-2.png` ("Samadhan"). What each image shows is my guess from its filename and the page it's attached to.

**Children in therapy and learning (real photos, low resolution)**
- Sneha: `Sneha01.jpg` (271×284), `Sneha02.jpg` (520×247), `Sneha03.jpg` (602×401), plus `-1`/`-2`/`-edited` duplicates.
- Shubhan: `Shubhan01.jpg` (276×233), `Shubhan02.jpg` (268×314), `Shubhan03.jpg` (255×170).
- Roopali with her mother and therapist: `ROOPALI.jpg` (835×505), `ROOPALI2.jpg` (281×338), `ROOPALI3.jpg` (237×298), `ROOPALI4.jpg` (470×305).
- Ishan: `ISHAN.jpg` (518×631).
- Probably children at the centres: `donation-pics.jpg` (307×253), `donation-pics-new.jpg` (1600×860), `Donation-Pics-2.jpg` (1600×700), `DonationAdvert.jpg` (700×376).

**Events, camps and workshops**
- `AWAKENTHEMAGIC01/02.jpg` (~1024×620; probably a children's performance)
- `Using-ICT-for-Inclusive-Education-in-India-01…04.jpg` (253–765 px)
- `WorkshoponAutism02–04.jpg` (300–400 px)
- `Legal-Literacy-Camp-02/03.jpg` (~450 px)
- `FREE-HEALTH-CAMP-CONDUCTED-FOR-CHILDREN-WITH-SPECIAL-NEEDS*.jpg/png` (a 350×350 PNG weighing about 260 KB)
- `AFID-Conference-on-November-18-24-2017-at-Dhaka-Bangladesh.jpg` (600×350)
- `afid.jpg` (970×468)
- `SAMADHAN-RECEIVES-THE-MOST-PROMISING-PROGRAMME-AWARD-2018-02/03.jpg` (350–1049 px)
- `XECUTIVE-BOARD-MEETING-2017-01/02.jpg` (the filename is missing its first letter)
- `Milestones2016.jpg` (928×1208)

**Mothers and livelihoods:** I found no files that clearly show this (no laddoo, spice or papier-mâché photos). This is a gap.

**Banners and heroes**
- `01-mainbanner.jpg` and `03-mainbanner.jpg` (1920×500)
- `mainbanner-bg-01.jpg` (1920×800)
- `01a-mainbanner.png` (674×500) and `02a-mainbanner.png` (666×500)

**Logos and brand**
- `offcanvas-logo.png` (360×75) is the site logo.
- `samadhan-donation.jpg` (127×121, JPG) is the site icon. That is below WordPress's recommended 512 px.
- Variants of the same mark: `samadhan-donation-png*.png/jpg` (48–127 px).
- `2026/08/Black-and-White-Initial-A-Tech-Business-Logo-wo-background.png` (2000×2000) and a 375×375 `.avif` version: Canva or AI-template filenames, probably a logo experiment.
- `Untitled-design.png`, `-1.png`, `-2.png` (2000×2000, about 1 MB each): Canva default names, attached to a theme template.

**Trust badges:** `GUIDE-STAR-key.png`, `NOGSource.jpg`, `GlobalGiving-small-2019.png` (about 150×72 each).

**Partner logos** (330×180, plus `-edited` versions at 320×180). My guesses at what the abbreviations stand for:
- `CWT.jpg`: Carlson Wagonlit
- `FF.jpg`: Ford Foundation
- `Hand.jpg`: Heart & Hand
- `MoC.jpg`: Ministry of Culture
- `SCAO.jpg`: Share and Care
- `TNT.jpg`: The National Trust

**Team and people**
- `Mrs_Pramila_Balasundaram.jpg` (221×221)
- Volunteer headshots, about 150 px wide: Danielle, Kavitha, Mallika, Nikita, Tina, Simran, and `20180624_203326.jpg` (Deborah)
- `image-scaled.png` (2560×1172), attached to the Executive Board page (probably a group photo)

**Icons:** `Becoming-a-volunteer.png`, `Donating-and-Sponsoring-icon.png`, `Events-icon.png` (120×120); `mappointer*.png` (76×102).

**Buildings:** none identifiable.

**Documents**
- Annual reports (Jan 2026 uploads): `Annual-report-2014-15.pdf` (2.2 MB), `Annual-Report-2015-16.pdf` (5.8 MB), `-2016-17.pdf` (6.7 MB), `-17-18.pdf` (4.6 MB), `-2018-19.pdf` (6.0 MB), `-2019-20.pdf` (3.0 MB).
- Annual reports (`2026/05/` uploads): `ANNUAL-REPORT-2020-21-FINAL.pdf` (5.3 MB), `Annual-Report-21-22-PDF-535.86-kb.pdf`, `Final-2223.pdf` (552 KB), `Samadhan-AR-23-24-200225-compressed.pdf` (1.1 MB), `Annual-Report-2024-2025-compressed.pdf` (3.0 MB).
- Programme reports: `ICT-workshop-report-final.pdf` (3.3 MB), `AFID-2013-Report-.pdf` (1.0 MB).
- `Samadhan-brochure.pdf` ×2 and `INTERNSHIP-APPLICATION-FORM.docx`.

**Video:** no YouTube or other video embeds in any page or post content, and the Video Gallery category has 0 posts. The homepage template couldn't be inspected for video.

**Quality:**
- **Resolution:** almost every real photo is under 800 px wide, which will look soft on a modern hero or card layout.
- **Authenticity:** the photos are genuine (not stock), which is the main asset worth keeping.
- **Duplicates:** heavy, through `-1` and `-edited` copies.
- **Wasted weight:** PNGs used for photos.
- **Wrong thumbnails:** six success stories use the 127 px logo (`samadhan-donation-png-3.png`) as their featured image (post `featured_media: 448`).

---

## 5. Tech & SEO findings

**Platform and hosting** (all verified)
- WordPress with the **X-T9 v1.42.1** theme by Vektor (`/wp-content/themes/x-t9/style.css`), a full-site-editing block theme. It "Requires at least: 7.0", so WordPress is version 7.0 or later.
- Hostinger hosting with LiteSpeed caching, inferred from the `hostinger-*` and `litespeed/v1|v3` entries in `/wp-json/`.
- Cloudflare in front, confirmed by the `Server: cloudflare` and `Cf-Mitigated: challenge` headers.
- Site timezone set to UTC (`gmt_offset: "0"`), not Asia/Kolkata, so post timestamps are 5.5 hours off.

**Plugins** (from `/wp-json/` namespaces and post meta)
- Hostinger: Easy Onboarding, Tools, Reach (email marketing), Amplitude
- LiteSpeed Cache
- VK Blocks and VK Blocks Pro (`vbp`)
- VK All in One Expansion Unit
- Smush and the WPMU DEV Hub Connector
- Google Site Kit
- WPForms (forms #621 and #628)
- ACF (`_acf_changed` in page meta)
- `sbc/v1` (couldn't identify)
- A document-library plugin that is missing or inactive (the raw `[doc_library]` shortcode)

**SEO**
- Title tags are present and follow one pattern (verified).
- **No XML sitemap.**
- No dedicated SEO plugin.
- Meta description, Open Graph, Twitter cards and canonical: unverified (VK ExUnit can generate them).
- JSON-LD / schema.org: unverified. Neither the theme nor any plugin outputs NGO or Organization schema, so it's probably absent.
- Several pages have no H1 or two H1s, and heading levels are out of order (H5 → H6 → H2 on the donate page).
- The duplicate `/home/` page.

**Mobile, HTTPS and page weight**
- Viewport meta: unverified. WordPress core normally outputs it for block themes, so it's probably present.
- HTTPS: yes. HSTS: unverified.
- Weight: individual PNG uploads up to about 1 MB, PDFs up to 6.7 MB. The script count is unverified.

**Analytics:** the Google Site Kit plugin is active, so GA4 or Search Console is probably connected, but I couldn't see the tag. Hostinger Amplitude is plugin telemetry.

**Donation gateway:** unverified. The empty `<form><script></script></form>` on `/get-involved/` matches a Razorpay Payment Button embed. Bank transfer and cheque are the only routes visible in the text.

**Social links:** none visible in the fetched text, and I couldn't check the footer's icon links. The web search turned up `facebook.com/indiasamadhan` and `instagram.com/samadhan.india`, but I didn't see these on the site. I found no LinkedIn, YouTube or X profiles.

**Security and privacy**
- `/wp-json/wp/v2/users` exposes the username `admin`.
- The privacy policy is boilerplate.
- A volunteer's personal email address is published on `/danielle/`.
- Children's medical details are published in the success stories.

**Cloudflare challenge:** it challenged `robots.txt`, `sitemap.xml`, images and the REST API for my client. My network has a poor reputation, but the same rule could also block social preview bots and donors using VPNs.

---

## 6. Brand assets

**Logo:** `https://samadhanindia.org/wp-content/uploads/2026/01/offcanvas-logo.png` (360×75 PNG). Icon: `…/samadhan-donation.jpg` (127×121).

**Colours** (the theme's default `theme.json` palette). Any colour changes saved in the WordPress editor would override these, and that endpoint returned 401, so I couldn't check.

| Role | Hex |
|---|---|
| Primary | `#233A73` |
| Primary hover | `#1c45ab` |
| Complementary | `#715B23` |
| Danger | `#C00000` |
| Text | `#333` |
| Dark background | `#222` |
| Light background | `#f5f5f5` |

**Fonts:**
- The theme's default body font stack is Japanese: "Hiragino Kaku Gothic ProN", "Meiryo", then sans-serif.
- It also ships Source Serif Pro (Source Serif 4 variable, as woff2).
- The fonts actually applied on the live site are unverified. If the defaults are still in place, Windows users see Latin text set in Meiryo.

**Brand voice and tagline:** "Dignity, Growth, and Inclusion"; "Empowering lives at the intersection of intellectual disability and poverty."

---

## 7. Top 15 problems, by severity

1. **"Mentally Handicapped" appears in the footer on every page**, and "mentally handicapped", "the intellectually disabled", "Downs Syndrome" and "suffering disabled children" appear in the stories. The legal society name may need to stay, but it should be presented as a legal line, not as the brand. (Seen on all pages, `/payal/` and `/software-ag-stiftung-…/`.)
2. **Nine nav destinations are empty or broken:** the six Activities pages, `/gallery/` (images only, no captions), `/notes-from-our-founder/`, Parents' Experiences (0 posts), plus `/document-library/` showing a raw shortcode.
3. **Donating is weak.** Bank details are the only visible route, the payment button is unverified, and there are no suggested amounts, no impact-per-rupee message, no 80G or 12A numbers, no recurring giving, and no foreign online route despite holding GlobalGiving and GuideStar badges (`/get-involved/`, `/international-donations/`).
4. **The homepage gives no proof of impact.** There are no numbers, stories or partner logos in the text, and the "50,000 families" claim is buried in one story (`/`, `/shubhan/`).
5. **The site contradicts itself:** World Bank award in 2001 vs 2002, Pramila vs Prameela, AFID First Vice President vs President, and a "35/36-year-old NGO" that is actually 45 (`/organisation-details/`, `/our-founder/`, `/the-executive-board/`, `/internship/`).
6. **Milestones leaks developer copy,** may show "No entries match", has two H1s, and stops at 2013 (`/milestones/`).
7. **Accessibility:** 105 of 108 images have no alt text, and the image-only gallery is unusable with a screen reader.
8. **Children's privacy and consent:** full names, diagnoses and medical histories are published with no consent statement. The privacy policy is boilerplate and doesn't cover form data (applications, contact form, success stories, `/privacy-policy/`).
9. **No XML sitemap or Sitemap line in robots.txt; schema.org is probably missing; the `/home/` duplicate exists; headings are out of order.**
10. **Image quality:** most photos are under 600 px, there are many duplicate uploads, six story thumbnails use the logo, and there are no livelihood photos of the mothers.
11. **Content is old:** stories from 2005–2016, a 2008 statistics page, the 2016 ABLE-X course, STD booths and Meru cabs on the internship page, and story dates reset to January 2026.
12. **Information architecture:** Gallery appears twice, the Programmes hub mixes in Events and Internship, and the Resource Center has eight unrelated children.
13. **About 35 typos:** "diisablities", "humanitrian", "facilities the learning", "ORD", "organaisations", "Praticuum", "Vineeet", "matra", "yaer", "conductingimportant", "1100 75", and more.
14. **Trust signals:** a Gmail address is the organisation's contact, the FCRA account name is truncated, partner names are misspelled ("Johnsons & Johnsons", "AG Software"), and 12A, CSR-1 and Darpan are missing.
15. **Tech hygiene:** the `admin` username is exposed, a volunteer's personal email is published, the timezone is UTC, unused Canva and template uploads are around 1 MB each, annual-report PDFs reach 6.7 MB, and the 2013-14 report probably has no file behind it. The Cloudflare challenge may also block preview bots.