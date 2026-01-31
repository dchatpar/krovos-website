export interface Service {
  id: string
  title: string
  description: string
  icon: string
  href: string
  features: string[]
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  image: string
  href: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: TeamMember
  publishedAt: string
  category: string
  tags: string[]
  readTime: number
  image: string
  slug: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
  date: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}