import React from "react";
import HeroImg from "@/assets/images/Hero1.jpg";
import { FaPaintBrush, FaMusic } from "react-icons/fa";
import { GiBallerinaShoes } from "react-icons/gi";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 text-white bg-[#04081A] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image Section */}
        <div className="group perspective w-full max-w-sm mx-auto md:mx-0">
          <div className="rounded-2xl overflow-hidden border border-cyan-400 shadow-lg transform transition-transform duration-700 group-hover:scale-[1.03] group-hover:rotate-1">
            <img
              src={HeroImg}
              alt="Likitha Puttaswamy"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <br></br> I'm{" "}
            <span className="text-cyan-400 font-extrabold text-4xl animate-pulse">
              Likitha Puttaswamy
            </span>
          </h2>

          <p className="text-base text-gray-300 leading-relaxed text-justify">
            A multifaceted Data Enthusiast, Full-Stack Developer, and Analyst. I’m currently pursuing a Master’s in{" "}
            <strong className="text-white">Data Science for Politics and Policy Making</strong> at the{" "}
            <strong className="text-white">University of Strathclyde</strong>, Glasgow, UK. With a Bachelor’s in Information Science and a strong technical foundation, I bring a blend of engineering logic and real-world insight to every project.
          </p>

          <p className="text-base text-gray-300 leading-relaxed text-justify">
            My journey started as an{" "}
            <strong className="text-white">Associate Software Engineer at HCL Technologies</strong> (Client: Deutsche Bank),
            where I worked on modernizing financial systems through Java, Spring Boot, SQL, and microservices. I’ve handled system migrations, data validations, Agile collaboration, and contributed to improving production reliability.
          </p>

          <p className="text-base text-gray-300 leading-relaxed text-justify">
            My passion lies in solving complex problems with smart data-driven solutions. I approach challenges with the precision of a data analyst, the creativity of a developer, and the strategic lens of a policymaker. I’m continuously learning, growing, and contributing to meaningful, impactful work across domains.
          </p>

          {/* Interests Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white underline underline-offset-4 mb-4">
              My Interests:
            </h3>
            <div className="flex gap-8 flex-wrap">
              <div className="flex flex-col items-center group cursor-pointer">
                <FaPaintBrush className="text-pink-400 w-8 h-8 mb-1 group-hover:scale-110 transition duration-300" />
                <span className="text-sm text-gray-300 group-hover:font-semibold transition">Drawing</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <GiBallerinaShoes className="text-purple-400 w-8 h-8 mb-1 group-hover:scale-110 transition duration-300" />
                <span className="text-sm text-gray-300 group-hover:font-semibold transition">Dancing</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <FaMusic className="text-blue-400 w-8 h-8 mb-1 group-hover:scale-110 transition duration-300" />
                <span className="text-sm text-gray-300 group-hover:font-semibold transition">Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
