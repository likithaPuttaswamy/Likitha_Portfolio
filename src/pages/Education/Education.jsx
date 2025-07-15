import React, { useRef } from "react";
import { BookOpen, Calendar, Star, GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "MSc in Data Science for Politics & Policy Making",
    school: "University of Strathclyde, Glasgow, UK",
    year: "2024 – Present",
    marks: "Currently Pursuing",
    skills: ["Policy Analysis", "Data Science", "Python", "Statistics"],
    description:
      "Focusing on data-driven solutions in public policy through advanced analytics and computational models.",
  },
  {
    degree: "Bachelor of Engineering (B.E.)",
    school: "BMS College of Engineering, Bangalore, India",
    year: "2017 – 2020",
    marks: "CGPA: 7.71 / 10",
    skills: ["Information Science", "Java", "DBMS", "Web Development"],
    description:
      "Built a solid technical foundation in software development, databases, and system architecture.",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    school: "MEI Polytechnic, Bangalore, India",
    year: "2014 – 2017",
    marks: "Percentage: 78%",
    skills: ["Computer Networks", "C Programming", "Hardware", "Projects"],
    description:
      "Hands-on training in computing fundamentals and technical skills required for entry-level engineering roles.",
  },
];

const certifications = [
  {
    title: "Preparing for your Professional Data Engineer Journey",
    issuer: "Google Cloud",
    year: "Earned Jul 3, 2025",
    image: "/certi/certi.JPG",
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM-SkillsBuild",
    year: "Issued Mar 28, 2025",
    image: "/certi/certi1.jpg",
  },
];

const EducationSection = () => {
  const certRef = useRef(null);

  const scrollToCertifications = () => {
    certRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#04081A] text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A glimpse into the academic milestones shaping my technical and analytical growth.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0F172A]/80 to-[#1E293B]/70 border border-blue-500/10 rounded-xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-blue-500/20 relative"
            >
              {/* Graduation Cap Icon */}
              <div className="absolute top-4 left-4 bg-cyan-600 rounded-full p-1.5">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>

              {/* Header */}
              <div className="mb-4 flex items-center gap-3 pl-10">
                <BookOpen className="text-cyan-400 w-5 h-5" />
                <h3 className="text-lg font-bold">{edu.degree}</h3>
              </div>

              {/* Date & Marks */}
              <p className="text-sm text-gray-400 flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4" /> {edu.year}
              </p>
              <p className="text-sm text-yellow-300 flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" /> {edu.marks}
              </p>

              {/* School */}
              <p className="text-gray-400 text-sm mb-3">{edu.school}</p>

              {/* Description */}
              <p className="text-gray-300 text-xs italic mb-4 border-l-4 pl-3 border-blue-500/30">
                {edu.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-300 px-2 py-1 text-xs rounded-full border border-cyan-500/20 animate-pulse-slow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Certifications Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToCertifications}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition"
          >
            View Certifications
          </button>
        </div>

        {/* Certifications Section */}
        <div
          ref={certRef}
          className="mt-20 max-w-6xl mx-auto px-4"
          id="certifications"
        >
          <h2 className="text-3xl font-semibold text-white mb-8">
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-[#0a0f1c]/90 to-[#151c29]/90 border border-black rounded-xl p-4 flex flex-col items-center shadow-xl shadow-cyan-900/40
                  backdrop-blur-md hover:scale-105 hover:shadow-cyan-400/60 hover:border-cyan-400 transition-transform duration-300"
              >
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 10px 3px rgba(6,182,212,0.4), 0 0 40px 15px rgba(6,182,212,0.2)",
                  }}
                />
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="relative w-full h-48 object-contain rounded-md mb-4"
                />
                <h3 className="relative text-white font-semibold text-center mb-1 z-10">
                  {cert.title}
                </h3>
                <p className="relative text-gray-400 text-sm text-center z-10">
                  {cert.issuer} — {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Animated Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full z-0 pointer-events-none"></div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            box-shadow: 0 0 4px rgba(94, 234, 212, 0.15);
          }
          50% {
            box-shadow: 0 0 10px rgba(94, 234, 212, 0.3);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
