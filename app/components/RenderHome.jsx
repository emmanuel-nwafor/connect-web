import React from 'react'
import Hero from './Hero'
import TrustedSection from './TrustedSection'
import PropertiesSection from './PropertiesSection'
import { DemoAnimatedTestimonials } from './AnimatedTestimonials'

export default function RenderHome() {
  return (
    <div>
      <div className="bg-white">
        <Hero />
        <TrustedSection />
        <PropertiesSection />
        <DemoAnimatedTestimonials />
      </div>
    </div>
  )
}
