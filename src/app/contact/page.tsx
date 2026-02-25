import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ui/contact-form";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Zap, CheckCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <Container className="relative">
          <div className="py-20 text-center md:py-32">
            <Badge className="mb-6">Contact Us</Badge>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let's Automate Your
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Business Together
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
              Ready to transform your business with automation? Get in touch with our team of
              experts for a free consultation and discover how we can help you achieve your goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Info & Form */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <div className="mb-10">
                <Badge className="mb-4">Get in Touch</Badge>
                <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  We're Here to Help
                </h2>
                <p className="text-gray-600">
                  Whether you have questions about our services, need a custom quote, or want to
                  discuss your automation needs, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-600">contact@krovos.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-600">+1 (604) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Automation Street
                      <br />
                      Vancouver, BC V6B 1A1
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Why Choose Krovos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    <span>Expert automation specialists</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    <span>Custom solutions for your business</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    <span>Proven track record with 250+ clients</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    <span>24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm
                title="Send us a Message"
                description="Fill out the form below and our automation experts will contact you within 24 hours."
                showServiceSelection={true}
              />

              {/* FAQ Preview */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>Quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium">How quickly can you start a project?</h4>
                    <p className="text-sm text-gray-600">
                      Most projects start within 1-2 weeks after initial consultation and
                      requirements gathering.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Do you offer ongoing support?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, we offer comprehensive support packages including maintenance, updates,
                      and 24/7 monitoring.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">What industries do you serve?</h4>
                    <p className="text-sm text-gray-600">
                      We serve all industries including finance, healthcare, retail, technology,
                      education, and logistics.
                    </p>
                  </div>
                  <Button variant="ghost" className="w-full">
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Availability */}
      <Section variant="dark">
        <Container>
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
              Expert Support
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dedicated Automation Team
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Our team of automation specialists is ready to help you transform your business
              operations with cutting-edge solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-gray-200 p-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Automation Experts</div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-gray-200 p-4">
                <Zap className="h-8 w-8 text-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-gray-200 p-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-gray-200 p-4">
                <CheckCircle className="h-8 w-8 text-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="rounded-2xl bg-gradient-primary p-8 text-center md:p-12">
            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              Ready to Start Your Automation Journey?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-900/90">
              Schedule a free 30-minute consultation with our automation experts and discover how we
              can transform your business operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-gray-100 text-primary hover:bg-gray-100/90">
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-200"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}

