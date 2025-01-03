import { Phone } from "lucide-react";
import DeployCard from "./deploy-card";

export default function Deploy() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
            DEPLOY
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B252A] leading-tight">
            Effortlessly Deploy AI Calls
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="grid gap-6">
            <DeployCard
              title="Display Branded Caller ID"
              description="Enable branded Caller IDs from trusted numbers. Gain trust for outbound call campaigns."
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
              imageClassName="aspect-video"
            />
            <DeployCard
              title="Batch Calling"
              description="Effortlessly execute hundreds of calls without hitting concurrency limits. You can see the conversation rate directly after each campaign."
              image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              imageClassName="aspect-video"
            />
          </div>

          {/* Right column */}
          <div className="grid gap-6">
            <DeployCard
              title="Using SIP Trunking"
              description="Use your existing phone numbers or purchase VOIP provisions. You can connect to any telephony using Twilio SIP trunking."
              image="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80"
              imageClassName="aspect-video"
            />
            <DeployCard
              title="Verified Phone Numbers"
              description="Prevent your phone number being marked as 'Spam likely'. Build trust with your customers."
              image="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?auto=format&fit=crop&w=800&q=80"
              imageClassName="aspect-video"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#0B252A] px-6 py-3 font-medium text-white transition duration-300 ease-out hover:bg-[#163A42]">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">Start deploying calls</span>
          </button>
        </div>
      </div>
    </section>
  );
}
