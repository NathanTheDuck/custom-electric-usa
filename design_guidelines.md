# Custom Electric Inc - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional contracting and B2B service websites (Turner Construction, Bechtel, professional service firms) combined with modern web design standards. This approach emphasizes trust-building, credibility, and clear communication of technical expertise while maintaining contemporary aesthetics.

## Key Design Principles
1. **Professional Authority**: Establish immediate credibility through polished layouts and strategic content hierarchy
2. **Visual Proof**: Showcase 40+ years of experience through prominent project imagery
3. **Clear Communication**: Direct, accessible information architecture for business decision-makers
4. **Trust Signals**: Emphasize longevity, safety certifications, and client satisfaction throughout

## Typography System

**Primary Font**: Inter or Roboto (via Google Fonts CDN) - professional, highly legible sans-serif
**Secondary Font**: Same family for consistency

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl, font-normal
- Body Text: text-base, font-normal, leading-relaxed
- Small Text: text-sm, font-normal

## Layout System

**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24, and 32 for all margins, padding, and gaps
- Component internal padding: p-6 to p-8
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-6 to gap-12
- Grid gutters: gap-8

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Responsive Grid**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3-4 columns (lg:grid-cols-3 or lg:grid-cols-4)

## Page Structure & Sections

### 1. Hero Section (80vh minimum)
- **Layout**: Full-width with large hero image background (professional electrical work, construction site, or completed project)
- **Content Overlay**: Left-aligned or centered content container (max-w-3xl)
- **Elements**:
  - Company logo (h-12 to h-16)
  - Primary headline emphasizing expertise and service area
  - Supporting subheadline about 40+ years experience
  - Dual CTA buttons with blur backgrounds (bg-white/10 backdrop-blur-md): "Request Quote" and "View Projects"
  - Trust indicator badge: "Licensed & Insured | CT Certified"

### 2. Services Overview (3-column grid on desktop)
- **Layout**: Container with grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- **Service Cards** (3 cards):
  - Icon from Heroicons (wrench, building, bolt symbols)
  - Service title (text-xl font-semibold)
  - Brief description (3-4 lines)
  - Bullet list of specific offerings (4-5 items each)
- Cards: Commercial Electrical | Industrial Systems | Municipal Contracts

### 3. Featured Projects Gallery
- **Layout**: Masonry-style or standard grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Project Cards** (6-8 projects):
  - Large project image (aspect-ratio-4/3)
  - Project name overlay or below
  - Location and brief description
  - Hover state reveals additional details
- Include: Hartford Hospital, CT Science Center, Glastonbury-East Hartford Magnet School, plus others

### 4. Why Custom Electric - 2-column split
- **Left Column**: 
  - Section header
  - 3-4 paragraph description of company values, approach, team expertise
  - Key differentiators in bold or highlighted
- **Right Column**:
  - Stats grid (2x2): "40+ Years" | "Licensed Team" | "100+ Projects" | "Safety First"
  - Each stat with icon, large number, and descriptor

### 5. Client Testimonials
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Testimonial Cards** (3-6 testimonials):
  - Quote text with quotation marks
  - Client name and company
  - Project type or context
- Cards have equal height with subtle borders

### 6. Capabilities & Certifications
- **Layout**: Mixed content section
- **Left side**: List of technical capabilities (lighting systems, industrial wiring, smart building integration, etc.)
- **Right side**: Certification badges and affiliations
  - Equal Opportunity Employer badge
  - Safety certifications
  - Professional associations

### 7. Contact Section - 2-column layout
- **Left Column** (40% width):
  - Contact information card
  - Phone number (large, clickable)
  - Email address
  - Physical address
  - Business hours
  - Social proof: "Serving Connecticut since 1998"
- **Right Column** (60% width):
  - Contact form with fields:
    - Name (required)
    - Email (required)
    - Phone
    - Project Type (dropdown: Commercial/Industrial/Municipal)
    - Message (textarea)
    - Submit button (prominent)

### 8. Footer
- **Layout**: Multi-column (grid-cols-2 md:grid-cols-4)
- **Columns**:
  - Company info with logo
  - Quick links (Services, Projects, About, Contact)
  - Service areas list
  - Contact snippet
- **Bottom Bar**: Copyright, licenses, privacy links

## Component Library

### Navigation Header
- Sticky header (sticky top-0 z-50)
- Logo left, navigation center/right
- Links: Home | Services | Projects | About | Testimonials | Contact
- Mobile: Hamburger menu with slide-out drawer
- CTA button in header: "Get Quote"

### Buttons
- Primary: Large padding (px-8 py-4), rounded-lg, font-semibold
- Secondary: Similar sizing with outline variant
- On hero images: backdrop-blur-md with semi-transparent background

### Cards
- Padding: p-6 to p-8
- Rounded corners: rounded-xl
- Subtle borders or shadows for depth
- Consistent internal spacing (space-y-4)

### Form Elements
- Input fields: Consistent height (h-12), rounded-lg, clear focus states
- Labels: text-sm font-medium, mb-2
- Textarea: min-h-32
- Full-width inputs in contact form

### Icons
- **Library**: Heroicons (via CDN)
- **Common icons needed**:
  - Wrench/Tools (services)
  - Building/Office (commercial)
  - Bolt/Lightning (electrical)
  - CheckCircle (certifications)
  - Phone/Mail (contact)
  - MapPin (location)

## Images

### Hero Image
**Large hero background image** spanning full viewport width, 80vh height minimum. Image should depict professional electrical work - options include:
- Electrical panel installation with professional technician
- Modern commercial building exterior with dramatic lighting
- Industrial electrical systems in action
- Connecticut landmark building (suggests local presence)
Image should convey professionalism, technical expertise, and scale of work.

### Project Gallery Images
6-8 project images showcasing completed work:
- Hartford Hospital - modern medical facility
- Connecticut Science Center - contemporary architecture
- Glastonbury-East Hartford Magnet School - educational institution
- Industrial facility with electrical systems
- Commercial office building
- Municipal building or infrastructure
- Electrical panel/technical work close-up
- Team at work on site

All images should be high-quality, professional photography emphasizing scale, complexity, and quality of work.

### Section Background Considerations
- Services section: Clean, minimal background or subtle texture
- About section: Could include team photo or workspace image
- Testimonials: Clean background to emphasize content

## Accessibility & UX

- All images have descriptive alt text
- Form inputs have proper labels and ARIA attributes
- Keyboard navigation fully supported
- Focus states clearly visible on all interactive elements
- Minimum touch target size: 44x44px for mobile
- Contrast ratios meet WCAG AA standards
- Phone numbers and email addresses are clickable links

## Animation & Interactions

**Minimal, Professional Animations**:
- Smooth scroll behavior for anchor links
- Subtle fade-in on scroll for section reveals (use sparingly, only for hero and major sections)
- Hover states on cards: slight scale (scale-105) or shadow increase
- Button hover: subtle transform or shadow
- No excessive motion or distracting effects