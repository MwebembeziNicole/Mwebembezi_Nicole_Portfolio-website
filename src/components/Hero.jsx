import { motion } from "framer-motion";
import heroImg from "../assets/images/nicole.png";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#ed1838]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#ed1838]/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-[#ed1838]/10 text-[#ed1838] text-xs font-bold tracking-widest rounded-full mb-6">
              Data Scientist and Software Engineer
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-black">
              Mwebembezi Nicole Mbabazi:{" "}
              <span className="text-[#ed1838]">Turning Data</span> into Insights.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Empowering organizations through predictive modeling, statistical
              analysis, and data-driven strategy to solve complex real-world
              challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  px-8 py-4 bg-[#ed1838] text-white font-bold rounded-xl
                  hover:shadow-[0_0_20px_rgba(237,24,56,0.4)]
                  transition-all transform hover:-translate-y-1
                "
              >
                View My Work
              </a>

              <a
                href="#about"
                className="
                  px-8 py-4 border border-[#ed1838] text-[#ed1838] font-bold rounded-xl
                  hover:shadow-md transition-all
                "
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative mx-auto max-w-sm md:max-w-md"
          >
            <img
              src={heroImg}
              alt="Nicole Mbabazi"
              className="w-fulll object-cover"
            />
          </motion.div>

        </div>
      </div>
    </header>
  );
}