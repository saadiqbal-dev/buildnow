import { GitPullRequestArrow, Lock, Shield } from "lucide-react";

export default function DataGovernance() {
  return (
    <section className="py-24 mx-auto container px-4 bg-[#222222] text-white">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">Data governance and privacy</h2>
        <p className="text-center max-w-2xl">
          Protect your data and maintain compliance.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="border border-muted-foreground rounded-xl p-4 flex flex-col gap-6">
          <h3 className="text-2xl font-bold flex gap-2 items-center">
            <Lock />
            Your data is your own
          </h3>
          <p>
            Developers compose AI agents by mixing-and-matching skills - like
            workflow, triage, respond, and confirm - into complex workflows that
            agents can execute for a specific use case.
          </p>
        </div>
        <div className="border border-muted-foreground rounded-xl p-4 flex flex-col gap-6">
          <h3 className="text-2xl font-bold flex gap-2 items-center">
            <Shield /> Private data stays private
          </h3>
          <p>
            Agent OS detects and masks customers&aqpos; personal information
            (PII), like Social Security numbers and credit card details,
            ensuring their privacy. Real-time integrations with your
            company&aqpos;s systems of record ensure that sensitive data is only
            accessed on an as-needed basis, ensuring data integrity.
          </p>
        </div>
        <div className="border border-muted-foreground rounded-xl p-4 flex flex-col gap-6">
          <h3 className="text-2xl font-bold flex gap-2 items-center">
            <GitPullRequestArrow /> Train your agent &hypen; and nothing else
          </h3>
          <p>
            Your data will never be used to train models for use by anyone other
            than you for your AI agent. Your data will only ever be used to
            build your company&aqpos;s agent and to benefit you. Period.
          </p>
        </div>
      </div>
    </section>
  );
}
