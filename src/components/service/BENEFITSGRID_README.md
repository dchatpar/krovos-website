# BenefitsGrid Component

A reusable 6-card benefits grid component for service pages with responsive design and hover animations.

## Features

- **3x2 Grid Layout**: Perfectly displays 6 benefit cards
- **Responsive Design**: 1 column on mobile, 2 on tablet, 3 on desktop
- **Hover Animations**: Smooth transitions, scale effects, and shadow enhancements
- **Customizable**: Multiple color options, card variants, and layout configurations
- **Accessible**: Proper semantic HTML and ARIA attributes
- **Dark Mode Support**: Full dark mode compatibility

## Installation

The component is located at `/src/components/service/BenefitsGrid.tsx`

## Usage

### Basic Usage

```tsx
import BenefitsGrid, { BenefitItem } from '@/components/service/BenefitsGrid'
import { Zap, Shield } from 'lucide-react'

const benefits: BenefitItem[] = [
  {
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks to boost productivity.',
    icon: <Zap />,
    color: 'primary'
  },
  {
    title: 'Enhanced Security',
    description: 'Enterprise-grade security with encryption.',
    icon: <Shield />,
    color: 'secondary'
  },
  // Add 4 more benefits...
]

function ServicePage() {
  return (
    <BenefitsGrid
      benefits={benefits}
      title="Our Benefits"
      description="Discover what makes our solution exceptional"
    />
  )
}
```

### Using Predefined Benefits

```tsx
import BenefitsGrid from '@/components/service/BenefitsGrid'
import { getBenefitsByServiceType } from '@/constants/benefits'

function AiAutomationPage() {
  const benefits = getBenefitsByServiceType('ai-automation')
  
  return (
    <BenefitsGrid
      benefits={benefits}
      title="AI Automation Benefits"
      description="Transform your business with intelligent automation"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `benefits` | `BenefitItem[]` | **Required** | Array of 6 benefit items |
| `title` | `string` | Optional | Section title |
| `description` | `string` | Optional | Section description |
| `columns` | `Object` | `{ mobile: 1, tablet: 2, desktop: 3 }` | Responsive column configuration |
| `cardVariant` | `'default' \| 'elevated' \| 'outline' \| 'interactive'` | `'interactive'` | Card style variant |
| `showIcons` | `boolean` | `true` | Show/hide benefit icons |
| `className` | `string` | Optional | Additional CSS classes |

## BenefitItem Interface

```typescript
interface BenefitItem {
  title: string
  description: string
  icon: ReactNode
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info'
}
```

## Color Options

- `primary`: Primary brand color (blue/purple)
- `secondary`: Secondary brand color 
- `accent`: Accent color
- `success`: Green for positive outcomes
- `warning`: Amber for important notices
- `info`: Blue for informational content

## Responsive Behavior

- **Mobile (< 640px)**: 1 column
- **Tablet (640px - 1024px)**: 2 columns  
- **Desktop (≥ 1024px)**: 3 columns (3x2 grid)

## Animation Features

1. **Card Hover**: Scale up, shadow enhancement, border color change
2. **Icon Hover**: Scale animation on benefit icons
3. **Background Effect**: Subtle gradient overlay on hover
4. **Text Color**: Title color change on hover
5. **Learn More Indicator**: Appears on hover with arrow animation

## Integration with Existing Components

- Uses the existing `Card` component from `/src/components/ui/Card.tsx`
- Compatible with existing design system and utilities
- Follows established patterns from other service pages

## Example Service Page Integration

```tsx
// In your service page (e.g., /app/services/ai-automation/page.tsx)
import BenefitsGrid from '@/components/service/BenefitsGrid'
import { getBenefitsByServiceType } from '@/constants/benefits'

export default function AiAutomationPage() {
  const benefits = getBenefitsByServiceType('ai-automation')
  
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section>...</section>
      
      {/* Benefits section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BenefitsGrid
            benefits={benefits}
            title="Why Choose AI Automation"
            description="Experience the transformative power of intelligent automation"
          />
        </div>
      </section>
      
      {/* Other sections */}
    </div>
  )
}
```

## Available Benefit Sets

Predefined benefit sets are available in `/src/constants/benefits.tsx`:

- `GENERAL_BENEFITS`: Generic benefits for any service
- `AI_AUTOMATION_BENEFITS`: AI-specific benefits
- `EVENT_AUTOMATION_BENEFITS`: Event automation benefits
- `DOM_AUTOMATION_BENEFITS`: DOM automation benefits
- `APP_DEVELOPMENT_BENEFITS`: App development benefits
- `WORKFLOW_AUTOMATION_BENEFITS`: Workflow automation benefits
- `INTEGRATION_AUTOMATION_BENEFITS`: Integration automation benefits

Use `getBenefitsByServiceType(serviceId)` to get the appropriate benefits.

## Customization

### Custom Colors
Add custom color classes to the `colorClasses` object in the component.

### Custom Layout
Override the `columns` prop for different grid configurations.

### Custom Styling
Use the `className` prop or extend the component with additional Tailwind classes.

## Best Practices

1. Always provide exactly 6 benefits for optimal 3x2 grid layout
2. Use descriptive titles (under 5 words)
3. Keep descriptions concise (1-2 sentences)
4. Choose appropriate icons that represent the benefit
5. Use color coding consistently across related benefits
6. Test responsive behavior on different screen sizes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Optimized with CSS transitions (no JavaScript animations)
- Efficient rendering with React memoization
- Minimal bundle size impact
- Lazy-loading compatible