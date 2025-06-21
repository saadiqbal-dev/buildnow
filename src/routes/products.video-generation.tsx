import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/video-generation')({
  component: VideoGeneration,
})

function VideoGeneration() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Video Generation</h2>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Transform your ideas into stunning videos with our AI-powered video generation platform.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>• AI-powered script generation</li>
              <li>• Automated video editing</li>
              <li>• Custom branding options</li>
              <li>• Multiple export formats</li>
              <li>• Real-time collaboration</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li>• Marketing campaigns</li>
              <li>• Social media content</li>
              <li>• Training materials</li>
              <li>• Product demonstrations</li>
              <li>• Educational content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}