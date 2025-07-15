import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Cloud } from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-[1.015] transition-all duration-300 shadow-lg shadow-indigo-100/10 hover:shadow-indigo-200/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 animate-shimmer" />
    <CardContent className="p-5 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl bg-white/10 ${color} shadow-sm animate-pulse-slow`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-medium border border-white/20 hover:scale-105 hover:bg-white/30 transition-all duration-300"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const colors = [
      "rgba(94, 234, 212, ALPHA)",   // turquoise
      "rgba(191, 90, 242, ALPHA)",   // purple
      "rgba(255, 104, 180, ALPHA)",  // pink
      "rgba(255, 199, 76, ALPHA)",   // gold
      "rgba(127, 219, 255, ALPHA)",  // light blue
    ];

    const particlesCount = 150;
    const particles = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.7,
        alpha: Math.random() * 0.5 + 0.3,
        alphaChange: 0.004 + Math.random() * 0.007,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        color: colors[i % colors.length], // cycle colors
      });
    }

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaChange;

        if (p.alpha <= 0.2 || p.alpha >= 1) p.alphaChange = -p.alphaChange;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const color = p.color.replace("ALPHA", p.alpha.toFixed(2));

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & ML",
      color: "text-purple-300",
      skills: [
        { name: "Python" },
        { name: "R" },
        { name: "SQL (Advanced)" },
        { name: "PHP" },
        { name: "HTML" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "Spring Boot" },
        { name: "Regression" },
        { name: "Classification" },
        { name: "Clustering" },
        { name: "Model Evaluation" },
        { name: "Hyperparameter Tuning" },
      ],
    },
    {
      icon: Paintbrush,
      title: "Visualization & Analysis",
      color: "text-pink-300",
      skills: [
        { name: "Power BI" },
        { name: "MS Excel" },
        { name: "Excel Charts" },
        { name: "Jupyter Notebook" },
        { name: "Google Colab" },
        { name: "Matplotlib" },
        { name: "Plotly" },
        { name: "Tableau" },
        { name: "Pandas" },
        { name: "NumPy" },
      ],
    },
    {
      icon: Cloud,
      title: "Databases & Tools",
      color: "text-yellow-300",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "GitHub" },
        { name: "Jira" },
        { name: "Azure" },
      ],
    },
  ];

  return (
    <main className="relative min-h-[90vh] overflow-hidden bg-[#04081A] text-white pt-10">
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
          background: "linear-gradient(180deg, #04081A 0%, #442b05 100%)",
          display: "block",
        }}
      />

      <section className="relative z-10 max-w-screen-lg mx-auto px-4 py-6">
        <div className="mb-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 text-transparent bg-clip-text tracking-tight drop-shadow">
            My Skillset
          </h2>
          <p className="animate-fade-in mt-3 max-w-xl mx-auto text-base text-purple-200 leading-relaxed">
            Here are some of the programming languages and technologies I'm learning and trying to become an expert at!
          </p>
        </div>

        <div className="mb-3 flex justify-center">
          <IconCloudDemo />
        </div>

        <div className="animate-bounce mb-6 flex justify-center">
          <div className="text-center text-cyan-300 text-sm">
            <div className="flex flex-col items-center">
              <svg
                className="mb-1 w-4 h-4 text-cyan-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              Scroll to explore
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <SkillCard
              key={idx}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out both;
        }
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
