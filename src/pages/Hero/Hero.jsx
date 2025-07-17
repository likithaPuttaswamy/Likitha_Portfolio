import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

const FloatingIcons = () => {
  const icons = [
    { icon: "fas fa-database", color: "text-cyan-400", x: "10%", y: "15%" },
    { icon: "fas fa-chart-line", color: "text-green-300", x: "80%", y: "20%" },
    { icon: "fas fa-brain", color: "text-pink-400", x: "35%", y: "75%" },
    { icon: "fas fa-eye", color: "text-yellow-400", x: "85%", y: "60%" },
    { icon: "fas fa-network-wired", color: "text-purple-300", x: "60%", y: "40%" },
    { icon: "fas fa-microchip", color: "text-orange-300", x: "25%", y: "30%" },
    { icon: "fas fa-server", color: "text-blue-400", x: "70%", y: "75%" },
  ];

  return (
    <>
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute text-3xl ${item.color} drop-shadow-2xl animate-float`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <i className={item.icon}></i>
        </div>
      ))}
    </>
  );
};

const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full opacity-10">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00f0ff33" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-[6px] h-[6px] rounded-full bg-cyan-400 blur-[2px] animate-ping"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ))}

    {Array.from({ length: 70 }).map((_, i) => (
      <div
        key={"white-dot-" + i}
        className="absolute rounded-full bg-white opacity-80 animate-blink"
        style={{
          width: `${3 + Math.random() * 3}px`,
          height: `${3 + Math.random() * 3}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.2 + Math.random()}s`,
          animationDuration: `${1 + Math.random()}s`,
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))",
        }}
      />
    ))}

    <FloatingIcons />
    <style>{`
      @keyframes blink {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 0; }
      }
      .animate-blink {
        animation: blink infinite;
        animation-timing-function: ease-in-out;
      }
    `}</style>
  </div>
);

export default function Hero() {
  const words = [
    "Data Analyst",
    "Data Engineer",
    "Data Scientist",
    "Software Engineer",
    "Policy Tech Enthusiast",
  ];

  const [code] = useState(`
// Likitha's Profile
const profile = {
  name: 'Likitha Puttaswamy',
  title: 'Data Science for Politics and Policy Making | Software Engineer',
  skills: [
    'Python', 'SQL', 'Java', 'Spring Boot',
    'Machine Learning', 'Tableau', 'Power BI', 'MongoDB'
  ],
  policyFocus: true,
  problemSolver: true,
  experience: 3,
  hireable: () => true
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <main className="bg-[#020617] text-white pt-[100px] min-h-[90vh] relative">
      <section className="hero flex items-center justify-center px-6 py-10">
        <GridBackground />

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft">
            <div className="inline-flex items-center gap-2 px-3 py-2 mb-6 rounded-full bg-gray-800/60 backdrop-blur border border-cyan-500/30">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
              <span className="text-sm text-cyan-200">Welcome to My Data World</span>
            </div>

            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4">
              <SparklesText text="Hello" /> I'm <br />
              <span className="gradient-text">Likitha Puttaswamy</span>
            </h3>

            <div className="inline-flex items-center gap-3 px-4 py-3 mb-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 backdrop-blur">
              <i className="fas fa-bolt text-blue-300 animate-pulse text-base"></i>
              <FlipWords className="text-lg text-blue-400 font-medium" words={words} />
            </div>

            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              Data-driven professional with experience in software engineering and public policy analysis. I build solutions that merge tech and governance to drive social impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-xl transition-all"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </a>

              <a
  href="/Likitha.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-cyan-500 text-white font-medium py-2 px-4 rounded hover:bg-cyan-600 transition"
>
  View Resume
</a>





            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-300 flex flex-col items-center z-10">
            <div className="text-cyan-400 text-lg leading-none">
              <i className="fas fa-chevron-down"></i>
              <br />
              <i className="fas fa-chevron-down"></i>
              <br />
              <i className="fas fa-chevron-down"></i>
            </div>
            <span className="mt-1 text-sm font-semibold text-white tracking-wide">
              Scroll to explore
            </span>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate__animated animate__fadeInRight">
            <div className="gradient-border">
              <div className="code-window bg-[#091121] p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400">
                    <i className="fas fa-code"></i> developer.js
                  </span>
                </div>
                <pre className="language-javascript text-sm">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioPage />
    </main>
  );
}
