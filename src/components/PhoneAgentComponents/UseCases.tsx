import React, { useState } from "react";

const UseCasesData = [
  {
    title: "Receptionist",
    description:
      "Answer calls 24/7, greet callers, route them, and schedule follow-ups if staff are unavailable.",
  },
  {
    title: "Scheduling Appointments",
    description:
      "Instantly trigger calls, qualify leads, and schedule appointments into your CRM and calendar.",
  },
  {
    title: "Lead Qualification",
    description:
      "Screen calls by asking key questions and qualify leads in real-time.",
  },
  {
    title: "Outbound Campaign",
    description:
      "Reach out to existing customers with offers or upgrades to drive repeat business.",
  },
  {
    title: "Surveys",
    description:
      "Conduct post-call surveys to gather insights and customer sentiment.",
  },
  {
    title: "Debt Collection",
    description:
      "Send payment reminders and negotiate terms automatically and respectfully.",
  },
];

export default function UseCases() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <center>
            <h2
              className="text-3xl text-neutral-800 mb-4"
              style={{
                fontSize: "44px",
                justifyContent: "center",
                width: "55%",
              }}
            >
              Use Cases
            </h2>
          </center>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Automate inbound and outbound calls with AI voice agents that
            qualify prospects, book meetings, and support retention—seamlessly
            integrating with your workflows 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {UseCasesData.map((useCase, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <div className="bg-gray-200 h-32 w-full rounded-md flex items-center justify-center text-gray-500">
                <p>Image/Video Placeholder</p>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mt-4">
                {useCase.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: "5px",
              padding: "12px 24px",
              transition: "all 0.3s ease",
              ":hover": { background: "#333", transform: "scale(1.05)" },
            }}
          >
            Get Started
          </button>
        </div>

        {/* Green Background Section */}
        <div
          className="colored-background mx-[-100vw] px-[100vw] py-12"
          style={{ background: "#03371B", color: "white", marginTop: "48px" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <button
                style={{
                  background: "white",
                  borderRadius: "5px",
                  padding: "8px 16px",
                  color: "#03371B",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  ":hover": { background: "#e6e6e6", transform: "scale(1.05)" },
                }}
              >
                SIMPLE STEPS TO GET STARTED
              </button>
              <h1 className="text-3xl font-bold mt-4">
                How to work with Aditya
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="card p-6"
                style={{
                  border: "1px solid white",
                  borderRadius: "8px",
                  height: "100%",
                }}
              >
                <h2 className="text-2xl font-bold">01</h2>
                <div
                  className="ruler my-4"
                  style={{ height: "3px", width: "50%", background: "white" }}
                ></div>
                <h2 className="text-xl font-semibold mb-3">
                  Train Addy for Your Use Case
                </h2>
                <p className="text-sm mb-4">
                  Define Aditya key objectives, such as qualifying leads,
                  addressing customer questions, scheduling appointments, or
                  processing orders.
                </p>
                <img src="" alt="" style={{ width: "30px", height: "30px" }} />
              </div>

              <div
                className="card p-6"
                style={{
                  border: "1px solid white",
                  borderRadius: "8px",
                  height: "100%",
                }}
              >
                <h2 className="text-2xl font-bold">02</h2>
                <div
                  className="ruler my-4"
                  style={{ height: "3px", width: "50%", background: "white" }}
                ></div>
                <h2 className="text-xl font-semibold mb-3">
                  Seamlessly Integrate Addy
                </h2>
                <p className="text-sm mb-4">
                  Easily Connect Aditya to your CRM, calendar, and communication
                  platforms for smooth operation within your workflows.
                </p>
                <img src="" alt="" style={{ width: "30px", height: "30px" }} />
              </div>

              <div
                className="card p-6"
                style={{
                  border: "1px solid white",
                  borderRadius: "8px",
                  height: "100%",
                }}
              >
                <h2 className="text-2xl font-bold">03</h2>
                <div
                  className="ruler my-4"
                  style={{ height: "3px", width: "50%", background: "white" }}
                ></div>
                <h2 className="text-xl font-semibold mb-3">Test and Deploy</h2>
                <p className="text-sm mb-4">
                  Test Aditya extensively for edge cases, then deploy across
                  various channels with ease. Ensure seamless integration with
                  your existing systems.
                </p>
                <img src="" alt="" style={{ width: "30px", height: "30px" }} />
              </div>

              <div
                className="card p-6"
                style={{
                  border: "1px solid white",
                  borderRadius: "8px",
                  height: "100%",
                }}
              >
                <h2 className="text-2xl font-bold">04</h2>
                <div
                  className="ruler my-4"
                  style={{ height: "3px", width: "50%", background: "white" }}
                ></div>
                <h2 className="text-xl font-semibold mb-3">
                  Human + AI Performance
                </h2>
                <p className="text-sm mb-4">
                  Monitor success rates, response times, and sentiment in real
                  time, with AI routing complex calls to human agents as needed.
                </p>
                <img src="" alt="" style={{ width: "30px", height: "30px" }} />
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                style={{
                  color: "black",
                  background: "white",
                  borderRadius: "5px",
                  padding: "12px 24px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  ":hover": { background: "#e6e6e6", transform: "scale(1.05)" },
                }}
              >
                Build
              </button>
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="points2 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 grid grid-cols-1 gap-8">
                <div className="bullet">
                  <div className="flex items-start gap-4">
                    <svg
                      style={{ width: "24px", height: "24px", flexShrink: 0 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                        stroke="#03371B"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div>
                      <h5 className="text-lg font-semibold text-neutral-800 mb-2">
                        Real-Time Knowledge Updates
                      </h5>
                      <p className="text-sm text-neutral-600">
                        Directly link your knowledge base to your AI agents for
                        instant and effortless updates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bullet">
                  <div className="flex items-start gap-4">
                    <svg
                      style={{ width: "24px", height: "24px", flexShrink: 0 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                        stroke="#03371B"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div>
                      <h5 className="text-lg font-semibold text-neutral-800 mb-2">
                        Seamless Call Transfers
                      </h5>
                      <p className="text-sm text-neutral-600">
                        Set up warm transfers with ease, providing key handoff
                        details for seamless agent collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bullet">
                  <div className="flex items-start gap-4">
                    <svg
                      style={{ width: "24px", height: "24px", flexShrink: 0 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                        stroke="#03371B"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div>
                      <h5 className="text-lg font-semibold text-neutral-800 mb-2">
                        Hassle-Free Appointment Automation
                      </h5>
                      <p className="text-sm text-neutral-600">
                        Continuously monitor and optimize your agent with
                        pre-defined goals and guardrails and built-in quality
                        assurance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bullet">
                  <div className="flex items-start gap-4">
                    <svg
                      style={{ width: "24px", height: "24px", flexShrink: 0 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                        stroke="#03371B"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div>
                      <h5 className="text-lg font-semibold text-neutral-800 mb-2">
                        Intelligent Call Routing (IVR)
                      </h5>
                      <p className="text-sm text-neutral-600">
                        Efficiently manage IVR systems by pressing the
                        appropriate keys to connect with the right department.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">
                  <p className="text-gray-500">Image Placeholder</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                style={{
                  color: "black",
                  borderRadius: "5px",
                  background: "white",
                  padding: "12px 24px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  ":hover": { background: "#e6e6e6", transform: "scale(1.05)" },
                }}
              >
                Deploy
              </button>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="deployment py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-12">
              Effortlessly Deploy AI Calls
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div
                className="card p-6 bg-white rounded-xl shadow-sm"
                style={{ height: "350px", width: "60%" }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Brand Your Outbound Calls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Build trust in outbound campaigns by using branded caller
                      ID to represent your company.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card p-6 bg-white rounded-xl shadow-sm"
                style={{ height: "350px", width: "60%" }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      SIP Trunking Made Simple
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Seamlessly connect to any telephony system using SIP
                      trunking.
                    </p>
                  </div>
                  <img
                    src=""
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </div>

              <div
                className="card p-6 bg-white rounded-xl shadow-sm"
                style={{ height: "350px", width: "60%" }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Batch Calling
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Launch hundreds of calls without limits and track campaign
                      success in real time.
                    </p>
                  </div>
                  <img
                    src=""
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </div>

              <div
                className="card p-6 bg-white rounded-xl shadow-sm"
                style={{ height: "350px", width: "60%" }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Build Trust with Verified Numbers
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Avoid 'Spam Likely' flags and build confidence with your
                      customers.
                    </p>
                  </div>
                  <img
                    src=""
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}

        <div className="integrations py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <button
                  style={{
                    background: "black",
                    color: "white",
                    borderRadius: "5px",
                    padding: "12px 24px",
                    marginBottom: "24px",
                    transition: "all 0.3s ease",
                    ":hover": { background: "#333", transform: "scale(1.05)" },
                  }}
                >
                  Integrations
                </button>
                <h1 className="text-3xl font-bold mb-4">
                  Aditya integrates with your entire stack.
                </h1>
                <p className="text-sm text-neutral-600 max-w-2xl mb-12">
                  Streamline your entire call process, from converting inbound
                  prospects into meetings to qualifying leads and automating
                  customer care. Aditya integrates seamlessly into your existing
                  workflows for maximum efficiency.
                </p>
                <div className="text-left">
                  <button
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "5px",
                      padding: "12px 24px",
                      transition: "all 0.3s ease",
                      ":hover": {
                        background: "#333",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="picture-container bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="enterprise py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4">
              Enterprise-Grade Security and Trust
            </h1>
            <p className="text-sm text-neutral-600 max-w-2xl mx-auto mb-12">
              Buildnow AI is built with security, compliance, and trust at its
              foundation, ensuring AI systems are transparent and aligned with
              your values.
            </p>
            <div className="side-by-side grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
              </div>
              <div className="lists space-y-6">
                <div>
                  <button
                    className="text-lg font-semibold text-neutral-800 w-full text-left flex items-center justify-between"
                    onClick={() => toggleExpand(0)}
                  >
                    Supervision
                    <svg
                      className={`w-5 h-5 transform transition-transform ${expanded[0] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expanded[0] && (
                    <p className="text-sm text-neutral-600 mt-2">
                      Built-in guardrails keep AI on-topic, while real-time
                      monitoring provides visibility into every interaction.
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="text-lg font-semibold text-neutral-800 w-full text-left flex items-center justify-between"
                    onClick={() => toggleExpand(1)}
                  >
                    Secure Integration
                    <svg
                      className={`w-5 h-5 transform transition-transform ${expanded[1] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expanded[1] && (
                    <p className="text-sm text-neutral-600 mt-2">
                      AI must be adaptable, but security should never be
                      compromised. Built with SOC 2 compliance in mind, all
                      interactions with your systems of record are deterministic
                      and tightly controlled, ensuring adherence to your
                      policies and robust security protocols.
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="text-lg font-semibold text-neutral-800 w-full text-left flex items-center justify-between"
                    onClick={() => toggleExpand(2)}
                  >
                    Observability & Auditing
                    <svg
                      className={`w-5 h-5 transform transition-transform ${expanded[2] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expanded[2] && (
                    <p className="text-sm text-neutral-600 mt-2">
                      Comprehensive quality assurance workflows provide full
                      visibility into AI operations, ensuring your team can
                      trace, understand, and evaluate the reasoning behind every
                      AI decision and interaction.
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="text-lg font-semibold text-neutral-800 w-full text-left flex items-center justify-between"
                    onClick={() => toggleExpand(3)}
                  >
                    Data Governance
                    <svg
                      className={`w-5 h-5 transform transition-transform ${expanded[3] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expanded[3] && (
                    <p className="text-sm text-neutral-600 mt-2">
                      Your data is exclusively used for your organization’s AI
                      solutions. We never use your data to train external models
                      and follow industry-leading best practices to ensure its
                      security and integrity.
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="text-lg font-semibold text-neutral-800 w-full text-left flex items-center justify-between"
                    onClick={() => toggleExpand(4)}
                  >
                    Privacy - PII Redaction
                    <svg
                      className={`w-5 h-5 transform transition-transform ${expanded[4] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expanded[4] && (
                    <p className="text-sm text-neutral-600 mt-2">
                      Personally identifiable information (PII) is automatically
                      identified, encrypted, and masked, ensuring sensitive data
                      remains protected at every step.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div
          className="final py-16 mx-[-100vw] px-[100vw]"
          style={{ background: "#D3D3D3" }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">
              Hire our Digital Workers
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Transform your Contact Centers!
            </p>
            <button
              style={{
                background: "black",
                color: "white",
                borderRadius: "5px",
                padding: "12px 24px",
                transition: "all 0.3s ease",
                ":hover": { background: "#333", transform: "scale(1.05)" },
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
