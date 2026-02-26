import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  // Detect scroll direction (works on mobile too)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 80) {
      setHidden(true); // scrolling down
      setOpen(false);
    } else {
      setHidden(false); // scrolling up
    }
  });

  const links = ["Home", "About", "Skills", "Projects"];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50 user-select-none"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <a className="text-2xl font-bold text-[#ffff]" href={`#home`}>M<span className="text-[#ed1838]">N</span>M</a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#ed1838] transition"
              >
                {link}
              </a>
            </li>
          ))}

          {/* Contact Me button */}
          <li>
            <a
              href="#contact"
              className="bg-[#ed1838] px-5 py-2 rounded-lg text-white font-semibold hover:bg-[#c0122c] transition"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-gray-900 px-6 pb-6 pt-2 space-y-4 overflow-hidden text-white"
          >
            {links.map((link, i) => (
              <motion.li
                key={link}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-sm"
                >
                  {link}
                </a>
              </motion.li>
            ))}

            {/* Contact Me (mobile) */}
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-[#ed1838] py-3 rounded-lg font-semibold"
              >
                Contact Me
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}