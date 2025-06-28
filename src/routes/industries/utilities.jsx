import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/utilities")({
  component: RouteComponent,
});

function RouteComponent() {
  const fullText = "Healthcare";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, idx));
      idx++;
      if (idx > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleMouseOver = (e) => {
    e.target.style.background = '#E6ECE4';
    e.target.style.color = '#03371B';
  };

  const handleMouseOut = (e) => {
    e.target.style.background = '#fff';
    e.target.style.color = '#03371B';
  };

  return (
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <p style={{ fontSize: '16px', fontWeight: '600', color: '#1A2024', textTransform: 'uppercase', marginBottom: '16px' }}>Industry</p>
      <div className="main-head-continaer" style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1A2024', marginBottom: '16px' }}>Financial Services</h3>
        <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px' }}>
          Build stronger relationships and increase customer lifetime value with your trusted AI agent.
        </p>
      </div>
      <div className="video-container" style={{ marginBottom: '48px' }}>
        <center>
          <video
            src=""
            style={{ borderRadius: '10px', width: '100%', maxWidth: '800px', height: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          ></video>
        </center>
      </div>
      <div className="picture-section" style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '34px', fontWeight: '700', color: '#1A2024', marginBottom: '16px' }}>Deliver service your customers can bank on</h3>
        <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6', maxWidth: '600px' }}>
          Ensure customer trust with immediate, personalized, and secure interactions, when it matters most.
        </p>
        <div className="picture" style={{ margin: '24px 0' }}>
          <center>
            <img
              src=""
              alt=""
              style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', height: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </center>
        </div>
        <div className="points" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between' }}>
          <div style={{ flex: '1', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="bullet" style={{ flex: '1', minWidth: '250px', maxWidth: '100%' }}>
              <svg
                style={{ width: '24px', height: '24px', marginRight: '12px', verticalAlign: 'middle' }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-icon-body-l h-6 w-6 shrink-0"
              >
                <path
                  d="M7 11H3V20H7M7 11V20M7 11L11 3H11.6156C12.843 3 13.7808 4.09535 13.5917 5.3081L13.0161 9H18.0631C19.8811 9 21.2813 10.6041 21.0356 12.4053L20.3538 17.4053C20.1511 18.8918 18.8815 20 17.3813 20H7"
                  stroke="#03371B"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1A2024', margin: '8px 0' }}>Product recommendations</h5>
              <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                Provide personalized guidance to help customers choose the best products and services for their needs, increasing acquisition, cross-sell, and upsell rates.
              </p>
            </div>
            <div className="bullet" style={{ flex: '1', minWidth: '250px', maxWidth: '100%' }}>
              <svg
                style={{ width: '24px', height: '24px', marginRight: '12px', verticalAlign: 'middle' }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-icon-body-l h-6 w-6 shrink-0"
              >
                <path
                  d="M5 8.5H6M18 16.5H19M2 19.5V5.5H22V19.5H2ZM14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z"
                  stroke="#03371B"
                  strokeWidth="2"
                  strokeLinecap="square"
                ></path>
              </svg>
              <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1A2024', margin: '8px 0' }}>Payments and transactions support</h5>
              <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                Respond immediately to questions about account balances, fees, or transfers to boost customer trust and satisfaction.
              </p>
            </div>
            <div className="bullet" style={{ flex: '1', minWidth: '250px', maxWidth: '100%' }}>
              <svg
                style={{ width: '24px', height: '24px', marginRight: '12px', verticalAlign: 'middle' }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-icon-body-l h-6 w-6 shrink-0"
              >
                <path
                  d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                  stroke="#03371B"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1A2024', margin: '8px 0' }}>Account management</h5>
              <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                Help customers instantly with login issues, password resets, or cancellation requests, reducing wait times while also acting on opportunities for upsell or renewal.
              </p>
            </div>
          </div>
          <div style={{ flex: '1', maxWidth: '400px' }}>
            <img
              src=""
              alt="Bullet Image"
              style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', height: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>

        <div
          className="colored-background"
          style={{
            backgroundColor: '#03371B',
            color: 'white',
            padding: '40px 0',
            borderRadius: '0',
            margin: '48px 0',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>See Sierra in action</h3>
            <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: '1.6', marginBottom: '24px', maxWidth: '600px' }}>
              Watch the Sierra for Financial Services webinar to see real-world demos, hear from our agent development team, and learn more about Sierra's commitment to privacy, security, and compliance.
            </p>
            <button
              style={{ borderRadius: '8px', border: 'none', color: '#03371B', background: '#fff', padding: '12px 24px', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Watch Webinar
            </button>
          </div>
        </div>
        <div
          className="picture2"
          style={{
            backgroundColor: '#F5F5F0',
            padding: '40px 0',
            borderRadius: '0',
            marginBottom: '48px',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div className="content2" style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1A2024', marginBottom: '16px' }}>Deliver better customer experiences</h2>
              <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px' }}>
                Launch your AI agent on a flexible and secure platform built for personalized experiences at scale.
              </p>
            </div>
            <div className="image2" style={{ marginBottom: '24px' }}>
              <img
                src=""
                alt=""
                style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', height: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div className="points2" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between' }}>
              <div style={{ flex: '1', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="bullet" style={{ flex: '1', minWidth: '250px', maxWidth: '100%' }}>
                  <svg
                    style={{ width: '24px', height: '24px', marginRight: '12px', verticalAlign: 'middle' }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-icon-body-l h-6 w-6 shrink-0"
                  >
                    <path
                      d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                      stroke="#03371B"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1A2024', margin: '8px 0' }}>Solve issues with speed and discretion</h5>
                  <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                    Reassure customers with efficient and empathetic responses across all communication channels. Sierra agents integrate with your systems of record and knowledge bases to provide contextual and actionable support.
                  </p>
                </div>
                <div className="bullet" style={{ flex: '1', minWidth: '250px', maxWidth: '100%' }}>
                  <svg
                    style={{ width: '24px', height: '24px', marginRight: '12px', verticalAlign: 'middle' }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-icon-body-l h-6 w-6 shrink-0"
                  >
                    <path
                      d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                      stroke="#03371B"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1A2024', margin: '8px 0' }}>Scale support operations</h5>
                  <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                    Easily update your agent with new promotions or policies, manage spikes in demand, and ensure smooth handoffs to live agents when needed.
                  </p>
                </div>
                <div className="bullet" style={{ flex: '1', minWidth: '250px', maxWidth: '100%' }}>
                  <svg
                    style={{ width: '24px', height: '24px', marginRight: '12px', verticalAlign: 'middle' }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-icon-body-l h-6 w-6 shrink-0"
                  >
                    <path
                      d="M5.85697 19.0779C7.17056 17.1589 9.33203 15.9121 12 15.9121C14.668 15.9121 16.8294 17.1589 18.143 19.0779M5.85697 19.0779C7.49061 20.53 9.6423 21.4121 12 21.4121C14.3577 21.4121 16.5094 20.53 18.143 19.0779M5.85697 19.0779C3.95086 17.3835 2.75 14.913 2.75 12.1621C2.75 7.05348 6.89137 2.91211 12 2.91211C17.1086 2.91211 21.25 7.05348 21.25 12.1621C21.25 14.913 20.0491 17.3835 18.143 19.0779M15.25 10.1621C15.25 11.957 13.7949 13.4121 12 13.4121C10.2051 13.4121 8.75 11.957 8.75 10.1621C8.75 8.36718 10.2051 6.91211 12 6.91211C13.7949 6.91211 15.25 8.36718 15.25 10.1621Z"
                      stroke="#03371B"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1A2024', margin: '8px 0' }}>Build with a trusted partner</h5>
                  <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                    Continuously monitor and optimize your agent with pre-defined goals and guardrails and built-in quality assurance. Sierra ensures trust, security, and compliance, with encrypted and masked PII at all times.
                  </p>
                </div>
              </div>
              <div style={{ flex: '1', maxWidth: '400px' }}>
                <img
                  src=""
                  alt="Bullet Image"
                  style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', height: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
              </div>
            </div>
            <div className="cards" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column' }}>
              <div className="content">
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1A2024', marginBottom: '16px' }}>The results speak for themselves</h3>
                <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '600px' }}>
                  Industry leaders trust Sierra to build better customer experiences.
                </p>
                <button
                  style={{ borderRadius: '8px', border: 'none', color: '#03371B', background: '#fff', padding: '12px 24px', cursor: 'pointer', fontSize: '16px', fontWeight: '600', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  Our Customers
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '24px' }}>
                <div className="actual-card" style={{ flex: '1', minWidth: '250px', maxWidth: '360px', padding: '16px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                  <img
                    src=""
                    alt="Customer Logo"
                    style={{ width: '100%', maxWidth: '100px', borderRadius: '8px', marginBottom: '12px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                  <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                    How AG1 uses AI to empower customers with a daily health ritual.
                  </p>
                </div>
                <div className="actual-card" style={{ flex: '1', minWidth: '250px', maxWidth: '360px', padding: '16px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                  <img
                    src=""
                    alt="Customer Logo"
                    style={{ width: '100%', maxWidth: '100px', borderRadius: '8px', marginBottom: '12px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                  <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                    How AG1 uses AI to empower customers with a daily health ritual.
                  </p>
                </div>
                <div className="actual-card" style={{ flex: '1', minWidth: '250px', maxWidth: '360px', padding: '16px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                  <img
                    src=""
                    alt="Customer Logo"
                    style={{ width: '100%', maxWidth: '100px', borderRadius: '8px', marginBottom: '12px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                  <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6' }}>
                    How AG1 uses AI to empower customers with a daily health ritual.
                  </p>
                </div>
              </div>
            </div>
            <div className="final" style={{ marginTop: '48px', textAlign: 'center' }}>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#1A2024', marginBottom: '16px' }}>See what Sierra can do for you.</h1>
                <p style={{ color: '#6B6D76', fontWeight: '400', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  Learn how you can partner with Sierra to increase customer satisfaction and improve customer outcomes.
                </p>
                <button
                  style={{ borderRadius: '8px', border: 'none', color: '#03371B', background: '#fff', padding: '12px 24px', cursor: 'pointer', fontSize: '16px', fontWeight: '600', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}