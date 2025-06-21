import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: Products,
})

function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Link 
          to="/products/video-generation"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-3">Video Generation</h3>
          <p className="text-gray-600">Create stunning videos with AI-powered generation tools.</p>
        </Link>
        
        <Link 
          to="/products/ai-phone-agent"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-3">AI Phone Agent</h3>
          <p className="text-gray-600">Intelligent phone agents for customer service automation.</p>
        </Link>
        
        <Link 
          to="/products/ai-trainer"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-3">AI Trainer</h3>
          <p className="text-gray-600">Advanced AI training solutions for your business needs.</p>
        </Link>
      </div>
      
      <Outlet />
    </div>
  )
}