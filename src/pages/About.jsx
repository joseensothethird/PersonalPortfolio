import { motion } from "framer-motion";
import { useState } from "react";
import { Code, FileCode, Link, Zap, Smartphone } from "lucide-react";

export const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const imageVariant = {
    offScreen: {
      y: 300,
      opacity: 0,
    },
    onScreen: {
      y: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const textVariant = {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className="bg-white py-20 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="m-auto sm:w-[90%] md:w-[60%] grid xl:grid-cols-2 gap-10"
      >
        <motion.div
          variants={imageVariant}
          className="flex justify-center items-center"
        >
          <div className="relative z-50">
            <img
              className="w-full h-full rounded-xl h-full z-50"
              src="/images/personal/bcp.jpg"
              alt=""
            />
            <div className="rounded-full bg-blue-400 absolute w-[60px] h-[60px] top-0 z-0"></div>
            <div className="rounded-full bg-emerald-400 absolute w-[60px] h-[60px] top-0 right-0 z-0"></div>
            <div className="rounded-full bg-red-400 absolute w-[60px] h-[60px] bottom-0 right-0 z-0"></div>
            <div className="rounded-full bg-indigo-400 absolute w-[60px] h-[60px] bottom-0 left-0 z-0"></div>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant}
          className="flex flex-col gap-5 sm:text-center xl:text-justify"
        >
          <h1 className="text-blue-400 font-bold">ABOUT ME 😉</h1>
          <h2 className="text-2xl text-slate-900 font-bold sm:text-center md:text-start">
            A dedicated Remote Web Developer based in Valenzuela, Philippines 📍
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="sm:text-center xl:text-start text-gray-800 tracking-wide text-[16px] sm:mt-0 leading-6"
          >
            <strong>Hi, I’m Jose C. Enso III</strong> — a Full-Stack Web
            Developer and Computer Engineer with hands-on experience building
            scalable web apps, automation workflows, and conversion-focused
            platforms. I specialize in{" "}
            <strong>React.js, Vue.js, Next.js, Node.js, WordPress,</strong> and{" "}
            <strong>Shopify</strong>, delivering fast, secure, and maintainable
            solutions with polished UI/UX and solid backend architecture.
            <br />
            <br />
            <strong>Frontend:</strong> React.js, Vue.js, Next.js, Tailwind,
            Vuetify
            <br />
            <strong>Backend:</strong> Node.js, Express, NestJS, PHP
            (CodeIgniter, Laravel)
            <br />
            <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Supabase
            <br />
            <strong>Automation & Integrations:</strong> Zapier, n8n, GoHighLevel
            (GHL), Webhooks, APIs
            <br />
            <strong>CMS & eCommerce:</strong> WordPress (Divi, Elementor),
            Shopify, Funnels & SEO
            <br />
            <strong>Currently exploring:</strong> Cybersecurity & Game
            Development (Roblox)
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
