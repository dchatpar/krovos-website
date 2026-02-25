"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";
import {
  CheckCircle,
  Mail,
  Phone,
  User,
  Building,
  Calendar,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Badge } from "./Badge";

interface ContactFormProps {
  title?: string;
  description?: string;
  showServiceSelection?: boolean;
  className?: string;
}

export function ContactForm({
  title = "Get in Touch",
  description = "Fill out the form below and our automation experts will contact you within 24 hours.",
  showServiceSelection = true,
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredDate: "",
    file: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    "Event Automation",
    "DOM Automation",
    "App Development",
    "Workflow Automation",
    "AI Automation",
    "Integration Automation",
    "Not Sure - Need Consultation",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        preferredDate: "",
        file: null,
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  if (isSubmitted) {
    return (
      <Card className={`max-w-2xl mx-auto ${className}`}>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600 text-gray-400 mb-6">
              Your message has been sent successfully. Our automation experts will contact you
              within 24 hours.
            </p>
            <Badge variant="outline" className="text-green-600 border-green-200">
              <Mail className="mr-2 h-4 w-4" />
              Confirmation email sent to {formData.email}
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`max-w-2xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <User className="mr-2 h-4 w-4" />
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500 flex items-center">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Email Address *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Phone Number
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Building className="mr-2 h-4 w-4" />
                Company
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Inc."
              />
            </div>

            {showServiceSelection && (
              <>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium">Interested Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Preferred Consultation Date
                  </label>
                  <Input
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Attach Requirements (Optional)
                  </label>
                  <Input type="file" onChange={handleFileChange} className="cursor-pointer" />
                  {formData.file && (
                    <p className="text-sm text-gray-600">Selected: {formData.file.name}</p>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Your Message *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your automation needs, challenges, and goals..."
              rows={4}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="mr-1 h-4 w-4" />
                {errors.message}
              </p>
            )}
          </div>

          <div className="rounded-lg bg-blue-50 p-4 bg-blue-900/20">
            <p className="text-sm text-blue-700 text-blue-300">
              <strong>What happens next?</strong>
              <br />
              1. We'll review your requirements within 24 hours
              <br />
              2. Schedule a free 30-minute consultation
              <br />
              3. Provide a customized automation proposal
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-center text-sm text-gray-500">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            . We'll never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

