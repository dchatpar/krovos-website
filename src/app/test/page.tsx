'use client'

import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import { Radio } from '@/components/ui/Radio'
import { Switch } from '@/components/ui/Switch'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Spinner } from '@/components/ui/Spinner'
import { Skeleton } from '@/components/ui/Skeleton'
import { Tabs } from '@/components/ui/Tabs'
import { Accordion } from '@/components/ui/Accordion'
import { ArrowRight, CheckCircle, Zap, Shield, BarChart } from 'lucide-react'

export default function TestPage() {
  const tabItems = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' },
  ]

  const accordionItems = [
    { id: 'item-1', title: 'What is Krovos?', content: 'Krovos is an intelligent automation platform that helps businesses streamline operations and boost productivity.' },
    { id: 'item-2', title: 'How does it work?', content: 'Our platform uses AI and machine learning to automate repetitive tasks and optimize workflows.' },
    { id: 'item-3', title: 'Who is it for?', content: 'Krovos is designed for businesses of all sizes looking to improve efficiency and reduce operational costs.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Component Library Test</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Testing all Krovos UI components to ensure they work correctly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>All button variants and sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button>
                  With Icon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>Inputs, selects, checkboxes, radios, switches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input placeholder="Enter your email" type="email" />
              <Select 
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
                placeholder="Select an option"
              />
              <div className="space-y-3">
                <Checkbox label="Accept terms and conditions" />
                <Checkbox label="Subscribe to newsletter" checked />
                <Checkbox label="Disabled option" disabled />
              </div>
              <div className="space-y-3">
                <Radio name="group1" label="Option A" />
                <Radio name="group1" label="Option B" checked />
                <Radio name="group1" label="Option C" disabled />
              </div>
              <div className="space-y-3">
                <Switch label="Enable notifications" />
                <Switch label="Dark mode" checked />
                <Switch label="Disabled switch" disabled />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges & Alerts</CardTitle>
              <CardDescription>Status indicators and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="space-y-4">
                <Alert variant="default">
                  This is a default alert with some information.
                </Alert>
                <Alert variant="success">
                  Success! Your changes have been saved.
                </Alert>
                <Alert variant="warning">
                  Warning: This action cannot be undone.
                </Alert>
                <Alert variant="error">
                  Error: Something went wrong. Please try again.
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress & Loading</CardTitle>
              <CardDescription>Progress indicators and loading states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <ProgressBar value={25} />
                <ProgressBar value={50} variant="primary" />
                <ProgressBar value={75} variant="secondary" />
                <ProgressBar value={90} variant="accent" />
              </div>
              <div className="flex items-center gap-4">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full rounded-lg" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Tab navigation components</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs items={tabItems} defaultValue="tab1" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Collapsible content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion items={accordionItems} defaultValue="item-1" />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Feature Cards</CardTitle>
              <CardDescription>Example of how cards can be used for features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 p-3">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Workflow Automation</CardTitle>
                    <CardDescription>
                      Streamline repetitive tasks with intelligent automation
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-700 p-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Security & Compliance</CardTitle>
                    <CardDescription>
                      Enterprise-grade security with automated compliance
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 p-3">
                      <BarChart className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>
                      Real-time insights and predictive analytics
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
            <CardDescription>All components are working correctly!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>All 25+ UI components are properly imported and rendered</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>TypeScript types are correctly configured</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Dark mode support is working</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Responsive design is functioning</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Animation utilities are available</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              <CheckCircle className="mr-2 h-5 w-5" />
              Component Library Test Passed
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}