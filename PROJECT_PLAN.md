# ARCHITECH DUBAI — PROJECT PLAN & ARCHITECTURAL SPECIFICATION

## 1. Project Requirement Analysis
- **Brand Identity**: ARCHITECH (Dubai, UAE) — Luxury International Architecture, Interior Architecture, and Urban Masterplanning Studio.
- **Tone & Style**: Editorial, minimalist, architectural, ultra-luxurious, confident, refined, timeless.
- **Target Audience**: Ultra-High-Net-Worth Individuals (UHNWI), real estate developers, hospitality groups, luxury residential clients across Dubai, Abu Dhabi, GCC, and internationally.
- **Key Deliverables**:
  - Full multi-page architecture studio digital presence.
  - Responsive, high-performance React application with seamless routing.
  - Editorial typography (Cormorant Garamond + Plus Jakarta Sans / Inter).
  - Curated architectural photography system with authentic Dubai luxury contexts (Palm Jumeirah villas, DIFC commercial towers, Emirates Hills residences, desert eco-resorts).
  - Rich dynamic project showcase with filtering and dynamic detail templates.
  - Interactive Design Approach, Services, Journal, About, and Contact pages with client-side validation.
  - Complete SEO foundations (meta tags, Open Graph, JSON-LD schema, sitemap, robots.txt).

---

## 2. Website Sitemap & Route Structure
| Route | Page | Purpose / Key Sections |
|---|---|---|
| `/` | **Home** | Editorial Hero, Philosophy, Curated Featured Works, Practice Statistics, Core Disciplines, Method Preview, Client Inquiries CTA |
| `/about` | **About Studio** | The Practice, Dubai Heritage & Global Vision, Design Philosophy, Leadership Principals, Studio Values, Milestones, Accolades |
| `/services` | **Services & Disciplines** | Architectural Design, Interior Architecture, Masterplanning, Sustainable Engineering, Landscape Integration, Inquire CTA |
| `/projects` | **Portfolio / Works** | Editorial Filterable Grid (All, Residential, Commercial, Hospitality, Cultural), Dynamic Metadata, Layout Variations |
| `/projects/:slug` | **Project Details** | Cinematic Hero, Architectural Vision & Concept, Technical Specifications, Gallery Grid, Materiality, Previous/Next Navigation |
| `/approach` | **Design Approach** | 6-Phase Methodology: Discovery, Concept, Schematic Design, Detail & Materiality, Technical Coordination, Turnkey Delivery |
| `/journal` | **Journal & Insights** | Editorial Essays, Architectural Discourse, Gulf Materiality, Sustainable Luxury, Detail Template |
| `/journal/:slug` | **Article Details** | Full Article, Reading Time, Author, Related Insights, Newsletter Subscription |
| `/contact` | **Contact & Inquiries** | Studio Location (DIFC / Dubai Design District), Project Inquiries Form with Validation, Representation Details, FAQ |
| `*` | **404 Not Found** | Architectural 404 with return navigation |

---

## 3. Design Direction & Visual System
- **Color Palette**:
  - Sandstone Bone (Warm Ivory): `#F6F4EE` (Primary Light Surface)
  - Obsidian Noir (Charcoal): `#121211` (Primary Dark & Editorial Body)
  - Raw Travertine: `#E6E1D6` (Subtle borders, card backdrops)
  - Bronze Dune: `#9E8A78` (Accent & Metadata)
  - Desert Gold / Ochre: `#B89D6C` (Interactive Highlights)
  - Pure White: `#FFFFFF`
- **Typography**:
  - Display / Serif: `'Cormorant Garamond', Georgia, serif` (Editorial, commanding, high-contrast italic elegance)
  - Sans / Technical: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif` (Clean, contemporary, legible)
  - Mono / Spatial Metadata: `'JetBrains Mono', monospace` (Coordinates, dimensions, technical data labels)
- **Visual Design Rules**:
  - Generous architectural whitespace (80px - 140px section spacing).
  - Asymmetrical grid breaks and editorial proportions.
  - Ultra-crisp hairline borders (`1px solid rgba(18, 18, 17, 0.08)`).
  - High-definition architectural photography highlighting light, shadow, stone, glass, and concrete.
  - Micro-interactions: subtle cursor follower, image hover zooms, smooth tab transitions, and smooth scrolling.

---

## 4. Component Architecture
```
src/
├── assets/                  # High-res architecture visuals, icons, logos
├── components/
│   ├── common/              # SeoHelmet, CustomCursor, ScrollToTop, SectionHeader
│   ├── navigation/          # StudioNavbar, MobileMenu, ProjectDrawer
│   ├── footer/              # StudioFooter
│   ├── ui/                  # Button, Badge, Modal, FormInput, Textarea, Select
│   └── cards/               # ProjectCard, ArticleCard, ServiceCard, TeamCard
├── data/
│   ├── navigation.js        # Global menus, social links, studio addresses
│   ├── projects.js          # Detailed portfolio data (Dubai villas, towers, resorts)
│   ├── services.js          # Studio services and capabilities
│   ├── journal.js           # Architectural essays and news
│   └── studio.js            # Team, milestones, philosophy, FAQs
├── layouts/
│   └── MainLayout.jsx       # Global wrapper (Navbar, Main, Footer, Cursor)
├── pages/
│   ├── Home/                # Cinematic Home experience
│   ├── About/               # Studio narrative & leadership
│   ├── Services/            # Core disciplines & service details
│   ├── Projects/            # Filterable editorial project gallery
│   ├── ProjectDetails/      # Dynamic project study
│   ├── Approach/            # Architectural design process
│   ├── Journal/             # Architecture thoughts & essays
│   ├── JournalDetails/      # Essay detail view
│   ├── Contact/             # Project inquiry & studio location
│   └── NotFound/            # 404 page
├── styles/
│   ├── globals.css          # Design tokens, reset, typography, utilities
│   └── animations.css       # Keyframes, transitions, smooth motion
├── App.jsx                  # React Router configuration
└── main.jsx                 # Entry point
```

---

## 5. Technology Stack & Dependencies
- **Core**: React 19 + Vite
- **Routing**: `react-router-dom`
- **Icons**: `lucide-react`
- **Animation**: CSS transitions, hardware-accelerated transforms, IntersectionObserver for reveal triggers
- **Forms**: React stateful controlled form with strict validation (Name, Email, Phone, Project Type, Budget, Message)
- **SEO**: Meta tags, OpenGraph tags, JSON-LD Schema (`LocalBusiness` / `ArchitecturalStudio`)

---

## 6. Implementation Roadmap
- **Phase 1**: Project Audit & Foundation Setup (Clean structure, install `react-router-dom`, `lucide-react`, configure fonts).
- **Phase 2**: Design System & Global Styles (`globals.css`, typography, custom cursor, buttons, layouts).
- **Phase 3**: Rich Architectural Data (`projects.js`, `services.js`, `journal.js`, `studio.js`).
- **Phase 4**: Global Navigation, Mobile Menu & Luxury Footer.
- **Phase 5**: Home Page Implementation (Cinematic Hero, Featured Works, Statement, Stats, Process).
- **Phase 6**: About & Philosophy Page (Narrative, Partners, Dubai presence, Awards).
- **Phase 7**: Services & Disciplines Page (Architecture, Interior, Masterplanning, Landscape).
- **Phase 8**: Portfolio Grid & Dynamic Project Details (Category filters, technical specs, gallery).
- **Phase 9**: Design Approach Page (6-step methodology).
- **Phase 10**: Journal & Article Detail Pages.
- **Phase 11**: Contact & Private Commissions Inquiry Page.
- **Phase 12**: SEO, Accessibility, Production Build Verification & Interactive Testing.
