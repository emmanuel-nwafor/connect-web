import React from 'react'
import Hero from './Hero'
import TrustedSection from './TrustedSection'
import PropertiesSection from './PropertiesSection'
import TestimonialsSection from './TestimonialsSection'
import { AnimatedTestimonials } from './AnimatedTestimonials'

export default function RenderHome() {
  return (
    <div>
      <Hero />
      <TrustedSection />
      <PropertiesSection />
      <TestimonialsSection />
      <AnimatedTestimonials />
    </div>
  )
}
