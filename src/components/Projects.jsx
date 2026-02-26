import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import dataImg from "../assets/images/data.jpg";
import ennesImg from "../assets/images/ENNES.jpeg";
import rhizoImg from "../assets/images/Rhizonecare.jpeg";
import ecoImg from "../assets/images/eco_classfier.jpeg";

const projects = [
  {
    title: "Social Media Sentiment Analysis",
    description:
      "Scalable big data pipeline for sentiment and trend analysis on social media using the Sentiment140 dataset, TF-IDF feature engineering, and linear classification models.",
    tags: ["Big Data", "NLP", "TF-IDF"],
    image: dataImg,
    link: "https://github.com/MwebembeziNicole/Social-Media-Sentiment-Analysis-.git",
  },
  {
    title: "ENNES (Education Network System)",
    description:
      "A digital school management and analytics system designed to support data-driven academic planning and institutional decision-making.",
    tags: ["Data Analysis", "Education", "Systems"],
    image: ennesImg,
    link: "https://ennes-primary-landin-bycw.bolt.host/",
  },
  {
    title: "Rhizonecare",
    description:
      "A data-driven healthcare platform leveraging real-time, zero-party data to improve access, trust, and community-centered healthcare delivery in Africa.",
    tags: ["HealthTech", "Data Platforms", "Analytics"],
    image: rhizoImg,
    link: "https://rhizonecare.com/",
  },
  {
    title: "Eco Classifier Smart Bin",
    description:
      "Real-time waste classification system built with a YOLO-based model, achieving strong precision and recall through transfer learning on a custom local dataset.",
    tags: ["Computer Vision", "YOLO", "AI"],
    image: ecoImg,
    link: "https://github.com/YAS-1/EcoClassifier.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between  md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
              Featured Projects
            </h2>
          </div>

          <a
            href="#contact"
            className="text-[#ed1838] font-semibold hover:underline flex items-center"
          >
            Let’s Work Together
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#ed1838] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-black/10 border border-white/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}