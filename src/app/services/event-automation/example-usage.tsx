'use client'

import ServiceHero from '@/components/service/ServiceHero'

// Example usage for Event Automation service page
export function EventAutomationHero() {
  return (
    <ServiceHero
      title="Event Automation"
      description="Transform your conferences, trade shows, and corporate events with end-to-end automation. From registration and ticketing to attendee management and post-event analytics, our platform handles everything seamlessly."
      ctaText="Automate Your Next Event"
      showAnimatedBackground={true}
      showStats={true}
      stats={[
        { label: 'Events Automated', value: '500+', suffix: '+' },
        { label: 'Attendee Satisfaction', value: '95', suffix: '%' },
        { label: 'Time Saved', value: '70', suffix: '%' },
        { label: 'ROI Increase', value: '3.5', suffix: 'x' },
      ]}
    />
  )
}

// Example with custom background image
export function EventAutomationHeroWithImage() {
  return (
    <ServiceHero
      title="Premium Event Automation"
      description="Elevate your events with our premium automation suite featuring AI-powered insights, real-time analytics, and seamless integration with your existing tools."
      backgroundImage="/images/event-automation-hero.jpg"
      ctaText="Schedule a Demo"
      showAnimatedBackground={false}
      showStats={true}
    />
  )
}

// Example with minimal configuration
export function MinimalEventHero() {
  return (
    <ServiceHero
      title="Event Automation"
      description="Streamline your event management with intelligent automation."
      ctaText="Learn More"
      showAnimatedBackground={false}
      showStats={false}
      className="bg-gradient-to-r from-primary-50 to-secondary-50 from-primary-950 to-secondary-950"
    />
  )
}
