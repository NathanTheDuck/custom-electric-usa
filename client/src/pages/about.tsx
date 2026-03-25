import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  Building2,
  ArrowLeft
} from "lucide-react";
import companyLogo from "@assets/custom-sign_1770907979564.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={companyLogo} alt="Custom Electric Inc" className="h-10 w-auto rounded-md object-cover" />
              <span className="text-xl font-bold">Custom Electric Inc</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline" data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Custom Electric</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Our History
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Custom Electric, Co., was started in <strong>1982</strong> by David Laraia. Edward Peterson joined the company a year later and became a 50% partner shortly thereafter. Custom Electric Co. incorporated in 1985 to become <strong>Custom Electric, Inc.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2007, David Laraia retired from Custom Electric. Since then, Custom Electric, Inc. has been solely owned and operated by <strong>Edward T. Peterson</strong>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Our Location
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our company has been located in <strong>Manchester, Connecticut</strong> for over 40 years. We are currently located in a 7,000 square foot facility at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-semibold text-lg">52 Main Street</p>
                  <p className="text-muted-foreground">Manchester, CT</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Commercial Buildings",
                "Industrial Facilities",
                "Retail Spaces",
                "Institutional Projects",
                "Municipal Buildings",
                "Hotels & Hospitality"
              ].map((area) => (
                <Card key={area}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{area}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Specialized Services
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Custom Electric, Inc. has been involved in <strong>voice/data, fiberoptics, and OSP installations</strong> for over 15 years, serving a variety of clients across Connecticut.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Heavy industrial work has been - and currently is - prominent in our project mix due to the extensive experience of our ownership and team.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Union Affiliation
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  We became affiliated with the <strong>IBEW Local 35</strong> as a signatory contractor in January of 2002, due to the consistency, quality of training, and certification of the technicians available. This partnership ensures our clients receive work performed by highly trained, certified electrical professionals.
                </p>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <footer className="border-t bg-muted/50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Custom Electric, Inc. All rights reserved.</p>
          <p className="mt-2">52 Main Street, Manchester, CT 06042 | (860) 643-7110 | CT License #104587</p>
        </div>
      </footer>
    </div>
  );
}
