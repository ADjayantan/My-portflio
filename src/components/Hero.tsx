import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-custom-bg pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-custom-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-custom-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between w-full">
        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-custom-card border border-custom-border text-custom-primary text-sm font-medium mb-6">
              Available for Opportunities
            </span>
            <h1 className="text-4xl md:text-6xl font-medium font-serif text-custom-text mb-6 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-primary to-custom-accent">Jayantan AD</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-custom-muted font-medium font-mono mb-8">
              Java Developer | Problem Solver | Backend Enthusiast
            </h2>
            <p className="text-lg text-custom-muted mb-10 max-w-2xl leading-relaxed">
              I build practical applications and AI-powered tools while strengthening my expertise in Data Structures, Algorithms, and backend development. My focus is on writing efficient, scalable, and maintainable code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-8 py-4 rounded-full bg-custom-primary hover:bg-indigo-600 text-white font-semibold transition-all shadow-lg shadow-custom-primary/25 flex items-center justify-center gap-2 cursor-pointer group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/Jayantan_AD_Resume.pdf"
                download="Jayantan_AD_Resume.pdf"
                className="px-8 py-4 rounded-full bg-custom-card hover:bg-custom-border text-custom-text font-semibold transition-all border border-custom-border flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-8 py-4 rounded-full bg-transparent hover:bg-custom-card/50 text-custom-muted font-semibold transition-all border border-custom-border flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Code Visual or Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block md:w-1/3 pl-10"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-custom-primary/20 to-custom-accent/20 rounded-2xl rotate-6 blur-lg"></div>
            <div className="absolute inset-0 bg-custom-card border border-custom-border rounded-2xl p-6 shadow-2xl overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-purple-400">class <span className="text-yellow-400">Developer</span> <span className="text-custom-muted">{'{'}</span></div>
                <div className="pl-4 text-cyan-400">name: <span className="text-custom-accent">"Jayantan AD"</span>;</div>
                <div className="pl-4 text-cyan-400">role: <span className="text-custom-accent">"Backend Developer"</span>;</div>
                <div className="pl-4 text-cyan-400">skills: <span className="text-custom-muted">['Java', 'SQL', 'DSA']</span>;</div>
                <div className="pl-4 text-purple-400">solveProblem<span className="text-custom-muted">() {'{'}</span></div>
                <div className="pl-8 text-custom-muted">// Efficient solutions</div>
                <div className="pl-8 text-blue-400">return <span className="text-custom-accent">true</span>;</div>
                <div className="pl-4 text-custom-muted">{'}'}</div>
                <div className="text-custom-muted">{'}'}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
