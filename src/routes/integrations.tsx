import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/integrations')({
  component: Integrations,
})

function Integrations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Integrations</h1>
      
      <div className="max-w-4xl">
        <p className="text-lg mb-8">
          Connect BuildNow.ai with your existing tools and workflows through our comprehensive integration ecosystem.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">CRM Systems</h3>
            <p className="text-gray-600 mb-4">Integrate with Salesforce, HubSpot, and more.</p>
            <ul className="text-sm space-y-1">
              <li>• Salesforce</li>
              <li>• HubSpot</li>
              <li>• Pipedrive</li>
              <li>• Zoho CRM</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Communication</h3>
            <p className="text-gray-600 mb-4">Connect with popular communication platforms.</p>
            <ul className="text-sm space-y-1">
              <li>• Slack</li>
              <li>• Microsoft Teams</li>
              <li>• Discord</li>
              <li>• Zoom</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-gray-600 mb-4">Track performance with analytics tools.</p>
            <ul className="text-sm space-y-1">
              <li>• Google Analytics</li>
              <li>• Mixpanel</li>
              <li>• Amplitude</li>
              <li>• Segment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}