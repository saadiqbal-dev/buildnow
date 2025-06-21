import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/ai-trainer')({
  component: AiTrainer,
})

function AiTrainer() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">AI Trainer</h2>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Empower your team with personalized AI training solutions that adapt to individual learning styles.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Training Features</h3>
            <ul className="space-y-2">
              <li>• Personalized learning paths</li>
              <li>• Interactive simulations</li>
              <li>• Progress tracking</li>
              <li>• Skill assessments</li>
              <li>• Certification management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Applications</h3>
            <ul className="space-y-2">
              <li>• Employee onboarding</li>
              <li>• Skills development</li>
              <li>• Compliance training</li>
              <li>• Leadership development</li>
              <li>• Technical certification</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}