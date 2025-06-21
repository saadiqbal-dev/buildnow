import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/ai-phone-agent')({
  component: AiPhoneAgent,
})

function AiPhoneAgent() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">AI Phone Agent</h2>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Revolutionize your customer service with intelligent AI phone agents that handle calls 24/7.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Capabilities</h3>
            <ul className="space-y-2">
              <li>• Natural conversation flow</li>
              <li>• Multi-language support</li>
              <li>• CRM integration</li>
              <li>• Call analytics</li>
              <li>• Escalation management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
            <ul className="space-y-2">
              <li>• 24/7 availability</li>
              <li>• Reduced operational costs</li>
              <li>• Consistent service quality</li>
              <li>• Instant response times</li>
              <li>• Scalable solution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}