// src/components/landing/TrustedBySection.tsx
export default function TrustedBySection() {
  const logos = [
    { name: "NVIDIA Inception", src: "/assets/nvidia-inception-logo.png" },
    { name: "AWS Startups", src: "/assets/aws-startups.png" },
    { name: "Scalepex", src: "/assets/scalepex.png" },
    { name: "My Worker AI", src: "/assets/myworker-ai.png" },
    { name: "Enspi IO", src: "/assets/enspy-io.png" },
    { name: "Taram IO", src: "/assets/taram-io.svg" },
    { name: "Preamble", src: "/assets/preamble.png " },
    { name: "IUCX", src: "/assets/iucx.svg" },
    { name: "Call Center Expo", src: "/assets/call-center-expo.png" },
    { name: "HR Tech", src: "/assets/hr-tech.jpg" },
    { name: "Snap", src: "/assets/snap.svg" },
    { name: "SAP", src: "/assets/sap.svg" },
  ];

  return (
    <section className="py-26 mx-4 bg-[#E3E0DC] rounded-xl relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-black uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
