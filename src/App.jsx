import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Shield,
  Languages,
  LifeBuoy,
  Github,
  MessageSquare,
  Activity,
  Globe2,
} from "lucide-react";
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const FloatingOrb = ({ className = "" }) => (
  <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 0.7, scale: 1 }} transition={{ duration: 1.2 }} className={`pointer-events-none absolute rounded-full blur-2xl ${className}`} />
);
export default function App() {
  const links = {
    demo: "https://reliefmateai.streamlit.app/",
    github: "https://github.com/GohelR/ReliefMateAI",
    email: "mailto:ravigohel226020332021@gmail.com",
  };
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_100%,rgba(16,185,129,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_100%,rgba(168,85,247,0.16),transparent_70%)]" />
        <FloatingOrb className="w-[40vw] h-[40vw] left-[-10vw] top-[-10vw] bg-cyan-500/20" />
        <FloatingOrb className="w-[30vw] h-[30vw] right-[-10vw] bottom-[-10vw] bg-emerald-500/20" />
      </div>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-lg">ReliefMate <span className="text-cyan-400">AI</span></a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#problem" className="hover:text-cyan-300">Problem</a>
            <a href="#solution" className="hover:text-cyan-300">Solution</a>
            <a href="#features" className="hover:text-cyan-300">Features</a>
            <a href="#how" className="hover:text-cyan-300">How it works</a>
            <a href="#demo" className="hover:text-cyan-300">Demo</a>
          </nav>
          <div className="flex gap-2">
            <a href={links.github} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 transition inline-flex items-center gap-2 text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={links.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold inline-flex items-center gap-2 text-sm">
              Live Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>
      <section id="top" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeIn}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 text-xs border border-slate-700">
                <Activity className="w-3.5 h-3.5 text-emerald-300" /> Real‑time Relief Intelligence
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                AI‑Powered Disaster Relief, 
                <span className="block text-cyan-300">when every second counts.</span>
              </h1>
              <p className="mt-4 text-slate-300 max-w-xl">
                During floods, earthquakes and crises, ReliefMate AI delivers verified shelters, medical aid and helpline info in seconds — multilingual and accessible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
