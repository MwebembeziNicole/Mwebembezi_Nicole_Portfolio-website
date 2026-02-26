import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#ed1838]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#ed1838]/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">
          Contact Me
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          I am currently available for full-time roles and freelance
          consultations in Data Science and Analysis.
        </p>

        {/* Contact row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Email */}
          <a
            href="mailto:nicolemwebembezi18@gmail.com"
            className="flex items-center gap-3 text-white hover:text-[#ed1838] transition-colors"
          >
            <span className="w-10 h-10 bg-[#ed1838] rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </span>
            <span className="text-lg font-medium">
              nicolemwebembezi18@gmail.com
            </span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Telphone */}
          <a
            href="tel:+256787533245"
            className="flex items-center gap-3 text-white hover:text-[#ed1838] transition-colors"
          >
            <span className="w-10 h-10 bg-[#ed1838] rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </span>
            <span className="text-lg font-medium">
              +256 787 533 245
            </span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Social links */}
          <div className="flex gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nicole-mwebembezi-22aa81291/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 bg-gray-800 text-white border border-white/10 rounded-full
                flex items-center justify-center
                hover:border-[#ed1838] hover:text-[#ed1838]
                transition-all
              "
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MwebembeziNicole"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 text-white bg-gray-800 border border-white/10 rounded-full
                flex items-center justify-center
                hover:border-[#ed1838] hover:text-[#ed1838]
                transition-all
              "
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}