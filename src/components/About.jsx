import { motion } from "framer-motion";
import {
  Calendar,
  Mail,
  MapPin,
  GraduationCap,
  Flag,
  Code,
  PieChart,
  BarChart3,
  Brain ,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-black"
        >
          About Me
        </motion.h2>

        <h3 className="text-xl font-semibold mb-4">
          I'm Nicole Mbabazi{" "}
          <span className="text-[#ec1839]">a Data Scientist</span>
        </h3>

        <p className="mb-4 text-gray-700">
          I am a dedicated and detail-oriented Data Scientist with a strong
          foundation in computer science and a passion for leveraging data to
          drive informed decision-making. I have hands-on experience in data
          analysis, machine learning, and statistical modeling, and I am
          proficient in programming languages such as Python.
        </p>

        <p className="text-gray-700 mb-16">
          In addition to my technical skills, I am a hardworking and strong
          collaborator, able to work effectively in team environments. I am
          committed to continuous learning and staying up-to-date with the
          latest advancements in data science and machine learning.
        </p>

        {/* Personal Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 shadow-sm p-4 rounded-lg">
          <Info icon={Calendar} label="Birthday" value="30th May 2002" />
          {/* <Info icon={Calendar} label="Age" value="23" /> */}
          <Info icon={Mail} label="Email" value="nicolembabazi@gmail.com" />
          <Info icon={GraduationCap} label="Degree" value="Computer Science" />
          <Info icon={MapPin} label="City" value="Kampala" />
          <Info icon={Flag} label="Nationality" value="Ugandan" />
        </div>

        {/* ===== SKILLS SECTION (REDESIGNED) ===== */}
        <section id="skills" className="py-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Competencies
            </h2>
            <p className="text-gray-600">
              Specialized technical skill set focused on data excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={Code}
              title="Python"
              description="Data analysis, automation, and machine learning using Pandas, NumPy, and Scikit-Learn."
            />
            <SkillCard
              icon={Brain}
              title="Machine Learning"
              description="Designing and implementing predictive models, clustering algorithms, and deep learning architectures."
            />
            <SkillCard
              icon={BarChart3}
              title="Data Analysis"
              description="Extracting, cleaning, and transforming data to uncover insights and support decision-making."
            />
            <SkillCard
              icon={PieChart}
              title="Structured Query Language (SQL)"
              description="Writing efficient SQL queries to extract, manipulate, and analyze data from relational databases."
            />
          </div>
        </section>
        {/* ===== END SKILLS ===== */}

        {/* Education */}
{/* Education */}
<div className="mt-24">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold mb-12"
  >
    Education
  </motion.h3>

  <div className="relative border-l border-[#ed1838]/40 pl-8 space-y-12">
    <EduCard
      year="2023 – 2026"
      title="Bachelor of Science in Computer Science"
      school="Uganda Christian University"
      description="Focused on software engineering, data structures, algorithms, databases, and artificial intelligence."
    />

    <EduCard
      year="2020 – 2022"
      title="U.A.C.E"
      school="Nabisunsa Girls School"
      description="Advanced level studies with strong emphasis on mathematics and sciences."
    />

    <EduCard
      year="2016 – 2019"
      title="U.C.E"
      school="Trinity College Nabbingo"
      description="Completed ordinary level education with excellent academic performance."
    />

    <EduCard
      year="2013 – 2015"
      title="Primary Education"
      school="Lohana Academy"
      description="Built a strong academic foundation and early interest in problem-solving."
    />
  </div>
</div>
      </div>
    </section>
  );
}

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <Icon className="text-[#ec1839]" />
    <p>
      <strong>{label}:</strong> {value}
    </p>
  </div>
);

const SkillCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="
      p-8 bg-gray-900 border-2 border-white/5 rounded-xl
      hover:border-[#ed1838]/50 hover:border-[#ed1838]  transition-colors group 
    "
  >
    <div className="w-12 h-12 bg-[#ed1838]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ed1838] transition-colors">
      <Icon className="text-[#ed1838] group-hover:text-white" size={24} />
    </div>

    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const EduCard = ({ year, title, school, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative bg-white p-6 rounded-xl border border-[#ed1838] shadow-lg "
  >
    {/* Timeline dot */}
    <span className="absolute -left-[41px] top-6 w-4 h-4 bg-[#ed1838] rounded-full" />

    <p className="text-sm text-[#ed1838] font-semibold mb-1">{year}</p>
    <h4 className="text-lg font-bold text-black">{title}</h4>
    <p className="text-gray-900">{school}</p>
    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
      {description}
    </p>
  </motion.div>
)
