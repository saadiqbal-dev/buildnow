import { Shield } from "lucide-react";
import Badge from "./badge";
import Rating from "./rating";
import PersonaCard from "./personal-card";

export default function Roleplay() {
  return (
    <section className="bg-gray-50 w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 grid gird-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Backed by</span>
              <span className="font-medium">YCombinator</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-medium">SOC 2 compliant</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0B252A] mb-6 max-w-4xl">
            Identify and close your GTM team's skill gaps with Hyperbound
          </h1>

          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            Stop practicing on prospects. Roleplay with realistic AI buyers
            customized for your target persona, and master your{" "}
            <Badge text="cold" />, <Badge text="warm" variant="warm" />,{" "}
            <Badge text="discovery" variant="discovery" />, and{" "}
            <Badge text="post-sales" variant="post-sales" /> calls.
          </p>

          <Rating score={4.9} total={5} count={52} />

          <div>
            <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-teal-600 transition-colors mb-4">
              Try more interactive demos →
            </button>
            <p className="text-sm text-gray-500">
              Already tried the free demo on the right?
              <br />
              No credit card required!
            </p>
          </div>
        </div>
        <PersonaCard
          name="Alex Dupont"
          role="VP of Sales Operations"
          company="CustomerCenter"
          avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
          callType="Cold Call"
          style="Rude but Less Inquisitive"
          bookRate="10.1%"
        />
      </div>
    </section>
  );
}
