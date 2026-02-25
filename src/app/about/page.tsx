'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Users, Target, Zap, Shield, Heart, Globe, Award, TrendingUp, Star } from 'lucide-react'

const stats = [
  { icon: Users, value: '250+', label: 'Clients Worldwide' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Zap, value: '500+', label: 'Projects Delivered' },
  { icon: Award, value: '15+', label: 'Years Experience' },
]

const values = [
  { icon: Target, title: 'Innovation First', description: 'We constantly push boundaries to deliver cutting-edge automation solutions.', color: 'from-blue-500 to-cyan-500' },
  { icon: Shield, title: 'Reliability & Trust', description: 'Our solutions are built on robust foundations with enterprise-grade security.', color: 'from-purple-500 to-pink-500' },
  { icon: Heart, title: 'Client Success', description: 'We measure our success by the success of our clients.', color: 'from-red-500 to-orange-500' },
  { icon: Globe, title: 'Global Impact', description: 'We build scalable solutions that help businesses worldwide.', color: 'from-green-500 to-teal-500' },
]

const team = [
  { name: 'Alex Chen', role: 'CEO & Founder', bio: 'Former Google engineering lead with 15+ years in automation.', image: 'AC' },
  { name: 'Maria Rodriguez', role: 'CTO', bio: 'AI/ML expert previously at Microsoft.', image: 'MR' },
  { name: 'James Wilson', role: 'Lead Developer', bio: 'Full-stack expert specializing in scalable systems.', image: 'JW' },
  { name: 'Sarah Johnson', role: 'Head of Operations', bio: 'Operations expert with Fortune 500 experience.', image: 'SJ' },
]

const testimonials = [
  { name: 'Michael Thompson', role: 'CTO, TechCorp', quote: 'Krovos transformed our operations completely.', rating: 5 },
  { name: 'Sarah Williams', role: 'Director, RetailPlus', quote: 'The ROI was immediate and substantial.', rating: 5 },
  { name: 'David Chen', role: 'Manager, GlobalBank', quote: 'Best automation partner we have worked with.', rating: 5 },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 py-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Krovos</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We&apos;re on a mission to transform how businesses operate through intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/20 mb-4">
                    <stat.icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${value.color} mb-4`}>
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The experts behind your success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{member.image}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-400 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Trusted by industry leaders worldwide</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-900/80 mb-8 max-w-2xl mx-auto">
                We are happy to discuss how automation can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100">
                  View Our Work
                </Button>
              </div>
            </Card>
          </div>
        </section>
    </main>
  )
}

