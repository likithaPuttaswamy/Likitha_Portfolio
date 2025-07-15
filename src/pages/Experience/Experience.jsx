import React from "react";
import { Cpu, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "HCL Technologies (Deutsche Bank)",
    period: "Dec 2020 – Oct 2023",
    description:
      "Worked on US cheque system migration to microservices using Java Spring Boot. Ensured 100% data integrity, contributed to Agile sprints, and reduced bugs by 15%.",
    tags: ["Java", "Spring Boot", "Agile", "Microservices"],
    icon: Briefcase,
    image: "/logos/hcl.jpg",
  },
  {
    title: "Warehouse Associate (Seasonal)",
    company: "Amazon, Glasgow, UK",
    period: "Nov 2024 – Jan 2025",
    description:
      "Handled peak-season order picking and packing. Maintained speed and accuracy under pressure during high-volume periods.",
    tags: ["Logistics", "Teamwork", "Operations"],
    icon: Cpu,
    image: "/logos/a.jpg",
  },
  {
    title: "Warehouse Operative (Part-time)",
    company: "GXO Logistics, Glasgow, UK",
    period: "Jan 2025 – Present",
    description:
      "Managed daily logistics operations while studying. Focused on parcel sorting, scanning, and preparation for dispatch.",
    tags: ["Logistics", "Part-time", "Dispatch"],
    icon: Cpu,
    image: "/logos/gxo.jpg",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative bg-[#0a0f1c] py-16 px-6 text-white min-h-screen overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 drop-shadow-lg animate-pulse">
          My Experience
        </h2>
        <p className="text-gray-400 text-lg font-bold animate-pulse">
          A snapshot of where I've grown and contributed professionally.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => {
          const isMiddle = index === 1;

          return (
            <div
              key={index}
              className={`relative rounded-3xl bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] border border-cyan-600/40 shadow-[0_15px_40px_-10px_rgba(34,211,238,0.4)] transform transition duration-300 ${
                isMiddle
                  ? "scale-110 shadow-[0_25px_60px_-15px_rgba(34,211,238,0.7)] z-20"
                  : "scale-95 hover:scale-105 hover:shadow-cyan-500/60"
              }`}
              style={{ perspective: 1000 }}
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top: Icon and logo */}
                <div className="flex items-center justify-between px-5 pt-5">
                  <exp.icon className="w-6 h-6 text-cyan-300" />
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="h-8 w-auto rounded-md object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-cyan-300 mb-1 drop-shadow-lg">
                    {exp.title}
                  </h3>
                  <div className="text-blue-200 text-sm font-semibold mb-1">{exp.company}</div>
                  <div className="text-xs text-blue-400 bg-blue-500/10 inline-block px-2 py-1 rounded-full mb-3">
                    {exp.period}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-white bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
