import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/company')({
  component: Company,
})

function Company() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Company</h1>
      
      <div className="max-w-4xl">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">About BuildNow.ai</h2>
          <p className="text-lg mb-4">
            BuildNow.ai is at the forefront of artificial intelligence innovation, creating powerful tools 
            that empower businesses to build, scale, and succeed in the digital age.
          </p>
          <p className="text-lg">
            Founded with a vision to democratize AI technology, we provide cutting-edge solutions that 
            make advanced AI capabilities accessible to businesses of all sizes.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg">
            To accelerate human potential through intelligent automation and AI-powered tools that 
            enable businesses to focus on what matters most - innovation and growth.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>Continuously pushing the boundaries of what's possible with AI technology.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p>Making advanced AI tools available and easy to use for everyone.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p>Building robust, secure, and dependable solutions our customers can trust.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p>Working together with our customers to achieve extraordinary results.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}