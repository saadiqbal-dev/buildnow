import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: Pricing,
})

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing</h1>
      
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-center mb-12">
          Choose the perfect plan for your business needs. All plans include our core AI features.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Up to 100 AI generations/month
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic video generation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Email support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Standard integrations
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Up to 1,000 AI generations/month
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced video generation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                AI Phone Agent (Basic)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced integrations
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited AI generations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Full AI Phone Agent suite
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                AI Trainer platform
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                24/7 dedicated support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                On-premise deployment
              </li>
            </ul>
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}