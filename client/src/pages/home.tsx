import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Menu, 
  X, 
  Construction,
  Building2, 
  Factory, 
  Landmark, 
  CheckCircle, 
  Clock,
  Award,
  Users,
  Shield,
  TrendingUp,
  ImageOff
} from "lucide-react";

import companyLogo from "@assets/custom-sign_1770907979564.jpg";
import heroImage from "@assets/customelectric/HH-Lobby-2.jpg";
import hospital1 from "@assets/customelectric/hh7.jpg";

const projects = [
  {
    name: "Hartford Hospital",
    location: "Hartford, CT",
    description: "One of Connecticut's largest hospitals with an enormous physical plant and thousands of physicians and employees. Custom Electric, Inc. completed electrical, data communication and environmental control wiring of this facility.",
    image: hospital1,
  },
  {
    name: "Pratt & Whitney",
    location: "East Hartford, CT",
    description: "",
    image: null,
  },
  {
    name: "Manchester Police Department",
    location: "Manchester, CT",
    description: "",
    image: null,
  },
];

const testimonials = [
  {
    quote: "In our business with the constant pressure of time and cost, Custom has proven their ability to deliver on both. Their management and tradesmen in the field have always proven their commitment to harmony with other trades and high-quality workmanship.",
    author: "Jaime Almeida",
    company: "Vice President, CFM Construction Corporation",
  },
  {
    quote: "It has been our privilege to work with Custom Electric, Inc. throughout our Hartford campus as well as our satellite facilities. Since 1999 all of their employees were very conscientious of quality of work, safety and their surroundings, honest, genuine, and timely. Our experience has been nothing less than wonderful.",
    author: "Stephen Donahue",
    company: "Program Director, CESI, Hartford Hospital",
  },
  {
    quote: "I have used Custom Electric on numerous projects over the years. Regardless of whether the job has been small or fully wiring a new facility, Custom Electric has always been quick to respond to our needs with the appropriately trained staff. They are very thorough with the quality of work and documentation.",
    author: "Steven Alexandre",
    company: "Director of Real Estate, Hartford Hospital",
  },
  {
    quote: "Custom Electric has been performing installations for Automated Logic since 2007. We have exclusively used them on high level projects such as Data Centers, Universities, and Pre-K through 12 projects. Where conducting business requires a level of professionalism, they exemplify this both in the office and in the field.",
    author: "John Beauton",
    company: "Installation Manager, Automated Logic Connecticut",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={companyLogo} alt="Custom Electric Inc" className="h-10 w-auto rounded-md object-cover" data-testid="img-logo" />
              <span className="text-xl font-bold text-foreground" data-testid="text-company-name">Custom Electric Inc</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-home">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-services">
                Services
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-projects">
                Projects
              </button>
              <Link href="/about" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-about">
                About
              </Link>
              <Link href="/gallery" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-gallery">
                Job Photos
              </Link>
              <Link href="/press/hartford-healthare" className="text-sm font-medium text-primary font-semibold hover-elevate px-3 py-2 rounded-md" data-testid="link-press">
                In the Press
              </Link>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-testimonials">
                Testimonials
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover-elevate rounded-md"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2" data-testid="mobile-menu">
              <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate rounded-md" data-testid="mobile-link-home">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate rounded-md" data-testid="mobile-link-services">
                Services
              </button>
              <button onClick={() => scrollToSection("projects")} className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate rounded-md" data-testid="mobile-link-projects">
                Projects
              </button>
              <Link href="/about" className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate rounded-md" data-testid="mobile-link-about">
                About
              </Link>
              <Link href="/gallery" className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate rounded-md" data-testid="mobile-link-gallery">
                Job Photos
              </Link>
              <Link href="/press/hartford-healthare" className="block w-full text-left px-4 py-2 text-sm font-semibold text-primary hover-elevate rounded-md" data-testid="mobile-link-press">
                In the Press
              </Link>
              <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate rounded-md" data-testid="mobile-link-testimonials">
                Testimonials
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Under Construction Banner */}
      <div className="bg-primary text-primary-foreground py-3 px-6 text-center" data-testid="banner-under-construction">
        <div className="flex items-center justify-center gap-2">
          <Construction className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            Website Under Construction — We are updating our site. Please check back soon for a refreshed experience.
          </p>
          <Construction className="h-5 w-5 flex-shrink-0" />
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${companyLogo})`,
            backgroundPosition: '35% 40%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-headline">
              Professional Electrical Solutions for Connecticut
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed" data-testid="text-hero-subheadline">
              Custom Electric specializes in commercial, industrial, and municipal electrical contracts throughout Connecticut.
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8" data-testid="text-hero-experience">
              40+ years of experience delivering state-of-the-art electrical solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("projects")} 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-projects"
              >
                View Projects
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-white/90" data-testid="text-badge-licensed">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Licensed & Insured | CT Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-services-heading">
              Our Electrical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              Comprehensive electrical solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover-elevate" data-testid="card-service-commercial">
              <Building2 className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Commercial Electrical</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete electrical services for office buildings, retail spaces, and commercial facilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>New construction electrical installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tenant fit-outs and renovations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lighting design and installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Energy-efficient upgrades</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Emergency power systems</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-service-industrial">
              <Factory className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Industrial Systems</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Heavy-duty electrical infrastructure for manufacturing and industrial facilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>High-voltage power distribution</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Motor controls and automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Industrial lighting systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Equipment installations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Preventive maintenance programs</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-service-municipal">
              <Landmark className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Municipal Contracts</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Reliable electrical services for government buildings and public facilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Schools and educational facilities</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Healthcare and hospital systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Government buildings</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Public infrastructure projects</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Code compliance and safety upgrades</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-projects-heading">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-projects-description">
              Delivering excellence across Connecticut's most notable facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-elevate group" data-testid={`card-project-${index}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-project-${index}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex flex-col items-center justify-center gap-2" data-testid={`placeholder-project-${index}`}>
                      <ImageOff className="h-10 w-10 text-muted-foreground/40" />
                      <span className="text-xs text-muted-foreground/50">No photo available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-project-name-${index}`}>{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`text-project-location-${index}`}>{project.location}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed" data-testid={`text-project-description-${index}`}>{project.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 inline-block">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">100+ successful projects</span> delivered across Connecticut
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-about-heading">
                Why Choose Custom Electric?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                We take pride in our honest and creative approach with excellent communication skills to provide our customers with complete satisfaction.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Our team is comprised of skilled men and women who have been with Custom Electric, Inc. for over 40 years. They are trained on the most up-to-date technology, techniques, and construction safety policies.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                This ensures innovation and growth of skills to stay current in lighting, wiring, and engineering so we can achieve advanced state-of-the-art performance. Custom Electric employees will engineer ideas that are well thought out, and carry our customers through the project from start to finish.
              </p>
              <p className="text-base font-semibold text-foreground">
                We are an Affirmative Action/Equal Opportunity Employer.
              </p>
              <p className="text-lg font-bold text-primary mt-6" data-testid="text-tagline">
                Satisfaction and commitment are the keys to our success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-years">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-team">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Licensed Team</div>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-projects">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-safety">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">Safety</div>
                <div className="text-sm text-muted-foreground">First Priority</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-testimonials-heading">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-description">
              Trusted by Connecticut's leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-elevate" data-testid={`card-testimonial-${index}`}>
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={companyLogo} alt="Custom Electric Inc" className="h-10 w-auto rounded-md object-cover" />
                <span className="font-bold text-foreground">Custom Electric Inc</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional electrical contractors serving Connecticut for over 40 years.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Commercial Electrical</li>
                <li>Industrial Systems</li>
                <li>Municipal Contracts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hartford County</li>
                <li>New Haven County</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(860) 643-7110</li>
                <li>info@customelectricusa.com</li>
                <li>CT License #104587</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Custom Electric Inc. All rights reserved. | Equal Opportunity Employer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
