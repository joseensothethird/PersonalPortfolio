import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="xl:h-full py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="m-auto sm:w-[90%] md:w-[60%] ">
        <h1 className="text-md font-bold text-blue-500 uppercase">Projects</h1>
        <h2 className="text-2xl font-bold text-slate-900 mt-5">
          Each Project has a unique piece of development 🧩
        </h2>
        {/* First Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a className="" href="*" target="_blank" rel="noreferrer noopener">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/talkaroo.jpg"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">Talkaroo</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Self Project | Full Stack
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Empowering language learners through innovative education
              solutions to unlock global communication, cultural connection, and
              personal growth.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>P</strong>ostgres
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>E</strong>xpress.js
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>R</strong>eact
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>N</strong>ode.Js
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>O</strong>auth2
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>A</strong>I Chatbot
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>A</strong>PI
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://talkaroo-v-1.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 2nd Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="http://iconitrax.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/iconitrax.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">Iconitrax</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project | WordPress
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Role: Main WordPress Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Built using the Divi theme, this real estate website features
              listing plugins, Yoast SEO, and custom-coded styling. During this
              project, I also gained experience with GHL and funnel marketing.
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                WordPress
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                CMS
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Elementor/Divi
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Yoast
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                GHL
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Funneling
              </span>
            </div>
            <div className="flex gap-5 justify-center"></div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://www.iconitrax.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 3rd Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://finheads.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/finheads.jpg" // This is the correct path
                  alt="FinHeads project"
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">FinHeads</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project | WordPress
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Role: Help Payment Integration
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              FinHeads.io is a platform for technical trading, offering tools
              and insights to help traders analyze markets and make informed
              decisions.{" "}
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                WordPress
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Elementor
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Payment Integration
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://finheads.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 4th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse  items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl border-t border-l border-slate-600 "
                  src="/images/projects/sp.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              SaturnPay Exchange
            </h1>{" "}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              (They updated the design)
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project | Front-End
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Role: Main Frontend Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              A crypto-focused social platform where users share trading
              insights, favorite coins, and connect via timelines, stories, and
              messaging, building a vibrant crypto community.{" "}
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vue
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vuetify3
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vite.Js
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/JoseEnsoIII/SaturnPay"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://saturnpay.co/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 5th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10  gap-5 mt-10">
          <div className="">
            <a className="" href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-l "
                  src="/images/projects/pph.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">CI3-ERP</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Internship Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Creating a comprehensive Point of Sale (POS) system tailored for a
              rice dealership, streamlining inventory management, sales
              transactions, and financial tracking to optimize business
              operations.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Codeigniter3
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                PHP
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                SQL
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                AJAX
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                JQUERY
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                CRUD
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center"></div>
          </div>
        </div>

        {/* 6th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse  items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/bs.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">Bulls Signal</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project | Front-End
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Role: Main Frontend Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Explore crypto opportunities with our signal website, combining
              innovative design and advanced algorithms for real-time insights
              and expert analysis to help you make informed decisions.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600 ">
                Vuetify3
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vite.js
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Typescript
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/JoseEnsoIII/BullsSignals"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 7th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://www.figma.com/file/UcHOWo37hRVMW7zjsXvtGj/Untitled?type=design&mode=design&t=NeWG2puztmo7jwqG-0"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/111.PNG"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              UI/UX Design Portfolio
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              All my <strong>UI/UX</strong> designs are uploaded here,
              including:
            </motion.p>
            <ul className="text-center text-gray-500 list-disc list-inside">
              <li>Figma Files</li>
              <li>Live Demos</li>
              <li>
                Prototype <br />
                Iterations
              </li>
            </ul>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                FIGMA
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://www.figma.com/file/UcHOWo37hRVMW7zjsXvtGj/Untitled?type=design&mode=design&t=NeWG2puztmo7jwqG-0"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
            <div className="flex gap-5 items-center justify-center"></div>
          </div>
        </div>

        {/* 8th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://scic-worksheet.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/ws.jpg" // Use a leading slash
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">WorkSheet</h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Full-Stack Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Role: Main Full-stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Full-stack app with login, secret messages, friends, and 5
              mini-apps (to-do, photos, reviews, notes). Built with React,
              Supabase, and full test coverage. Users can only see their own
              data and friends' secrets.
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                NextJS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                SupaBase
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vercel
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                PostgreSQL
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                CRUD
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                API
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://scic-worksheet.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                WorkSheet Pt.1{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://worksheet-pt2.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                WorkSheet Pt.2{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://my-crypto-funds.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/mcf.jpg"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              My CryptoFunds
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Landing page for a crypto trading website, exchange platform, and
              live trading.
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                TailwindCSS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                API
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Trading View API
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://my-crypto-funds.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
            <div className="flex gap-5 items-center justify-center"></div>
          </div>
        </div>
        {/* 10th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://whale-livid.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/whale.png" // Use a leading slash
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              Whale Aggregator - Web3 Data Aggregation DApp
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Front-end Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Role: Assistant Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              A modern, user-friendly decentralized application (DApp) that
              aggregates comprehensive web3 data into a unified dashboard with
              elegant UI/UX. Built with responsive design principles, Whale
              Aggregator delivers blockchain insights across both desktop and
              mobile platforms while maintaining a sleek, intuitive interface.
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                NextJS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                SupaBase
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vercel
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                PostgreSQL
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                TypeScript
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                API
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://whale-livid.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="#"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/defi.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              DeFi Launchpad & Token Management Platform
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              A comprehensive decentralized finance platform built with modern
              web technologies, providing tools for token creation, staking,
              farming, and liquidity management in the blockchain ecosystem.
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                ReactJS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                TailwindCSS
              </span>
              
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                NodeJS
              </span>
            </div>
            <div className="flex gap-5 justify-center">
               <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                ViteJS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                ExpressJS
              </span>
            </div>
            
            <div className="flex gap-5 items-center justify-center"></div>
          </div>
        </div>
         <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="#"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/projects/automation.png" // Use a leading slash
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
Automation  </h1>
            
            
      <motion.p
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
  viewport={{ once: true }}
  className="text-left text-gray-500"
>
  <ul className="list-disc ml-5">
    <li>
      <strong>n8n Automations</strong>
      <ul className="list-disc ml-5 mt-1">
        <li>Multi-Account Gmail Consolidation to Primary Inbox</li>
        <li>Crypto Price Tracker with Gmail Alerts and Daily ATH Monitor</li>
      </ul>
    </li>
    <li className="mt-2">
      <strong>Zapier Zaps</strong>
      <ul className="list-disc ml-5 mt-1">
        <li>FB / YouTube Video Automated Post</li>
      </ul>
    </li>
  </ul>
</motion.p>





            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                GHL
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Zapier 
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Make
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                N8N
              </span>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};
