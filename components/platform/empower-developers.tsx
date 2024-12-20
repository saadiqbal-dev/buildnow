import { GitPullRequestArrow, KeyboardMusic } from "lucide-react";

export default function EmpowerDevelopers() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">
          Empower developers to innovate, fast
        </h2>
        <p className="text-center max-w-2xl">
          Developers can use the Agent Software Developers Kit (Agent SDK) to
          develop and deploy agents.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-muted-foreground rounded-xl p-4 flex flex-col gap-6">
          <h3 className="text-2xl font-bold flex gap-2 items-center">
            <KeyboardMusic />
            Composable skills
          </h3>
          <p>
            Developers compose AI agents by mixing-and-matching skills - like
            workflow, triage, respond, and confirm - into complex workflows that
            agents can execute for a specific use case.
          </p>
        </div>
        <div className="border border-muted-foreground rounded-xl p-4 flex flex-col gap-6">
          <h3 className="text-2xl font-bold flex gap-2 items-center">
            <GitPullRequestArrow /> Declarative development
          </h3>
          <p>
            Developers can declaratively define agent functionality without
            being an expert in large language models or prompt engineering. You
            define the "what" while Agent OS figures out the “how.”
          </p>
        </div>
      </div>
    </section>
  );
}
