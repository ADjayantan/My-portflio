import { motion } from 'motion/react';
import { User, Terminal, Cpu, Code } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: <Terminal className="w-6 h-6" />, title: "Backend Development" },
    { icon: <Cpu className="w-6 h-6" />, title: "Algorithm Optimization" },
    { icon: <Code className="w-6 h-6" />, title: "AI-Assisted Apps" },
    { icon: <User className="w-6 h-6" />, title: "Clean Code Practices" },
  ];

  return (
    <section id="about" className="py-24 bg-custom-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-custom-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-custom-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-custom-muted leading-relaxed mb-6">
              I am an aspiring software developer focused on <strong className="text-custom-primary">Java programming</strong>, <strong className="text-custom-primary">Data Structures & Algorithms</strong>, and application development. I enjoy solving logical problems and building systems that automate real-world tasks.
            </p>
            <p className="text-lg text-custom-muted leading-relaxed mb-8">
              Currently improving problem-solving ability through consistent coding practice while developing projects using modern tools and AI-assisted development platforms.
            </p>

            <div className="bg-custom-card/50 border border-custom-border rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-custom-text mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-custom-accent"></span>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-custom-text font-medium">B.E Computer Science Engineering</h4>
                  <p className="text-custom-primary text-sm">The VSB College of Engineering Technical Campus</p>
                  <p className="text-custom-muted text-sm">Sept 2024 - May 2028</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {interests.map((item, index) => (
              <div key={index} className="bg-custom-card border border-custom-border p-6 rounded-xl hover:border-custom-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-custom-bg rounded-lg flex items-center justify-center text-custom-primary mb-4 group-hover:bg-custom-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-custom-text font-medium">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
