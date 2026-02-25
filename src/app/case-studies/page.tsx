'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, BarChart, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise Workflow Automation',
    clientName: 'TechCorp Inc.',
    industry: 'Technology',
    category: 'Automation',
    challenge: 'Manual processes were consuming 40% of employee time',
    results: ['75% time savings', '99.9% accuracy', '$2M annual savings'],
    image: 'workflow'
  },
  {
    id: 2,
    title: 'AI-Powered Customer Service',
    clientName: 'RetailMax',
    industry: 'Retail',
    category: 'AI & ML',
    challenge: 'Customer response times averaging 24+ hours',
    results: ['90% faster responses', '85% customer satisfaction', '60% cost reduction'],
    image: 'ai'
  },
  {
    id: 3,
    title: 'Data Integration Platform',
    clientName: 'FinanceFirst',
    industry: 'Finance',
    category: 'Integration',
    challenge: 'Disconnected systems causing data silos and delays',
    results: ['Real-time sync', '100% data accuracy', 'Instant reporting'],
    image: 'integration'
  },
  {
    id: 4,
    title: 'Automated Document Processing',
    clientName: 'LegalPro',
    industry: 'Legal',
    category: 'Automation',
    challenge: 'Manual document review taking 3 days per case',
    results: ['85% faster processing', '99% accuracy', 'Zero manual errors'],
    image: 'automation'
  },
  {
    id: 5,
    title: 'Predictive Analytics Dashboard',
    clientName: 'HealthPlus',
    industry: 'Healthcare',
    category: 'AI & ML',
    challenge: 'Unable to predict patient flow and resource needs',
    results: ['90% prediction accuracy', '40% resource optimization', 'Improved care'],
    image: 'ai'
  },
  {
    id: 6,
    title: 'E-commerce Automation',
    clientName: 'ShopSmart',
    industry: 'E-commerce',
    category: 'Automation',
    challenge: 'Manual order processing causing delays and errors',
    results: ['99.9% order accuracy', '80% faster processing', '24/7 operations'],
    image: 'automation'
  }
]

const categories = ['All', 'Automation', 'AI & ML', 'Integration']

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses transform their operations with innovative automation solutions.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart className="h-16 w-16 text-gray-600/20" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{study.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary-600 mb-2">{study.industry}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{study.challenge}</p>
                    
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-8 md:p-12">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-900/90">
                Let's discuss how automation can drive measurable results for your organization.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

