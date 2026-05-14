import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, ExternalLink, ChevronDown, Code2, Cloud, Lock, Database, Terminal, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hero Section
  const HeroSection = () => (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                Ali Rebbouh
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-400"
              >
                Network & Telecommunication Engineering Student
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-slate-300 max-w-lg leading-relaxed"
            >
              Passionate about cloud computing, network architecture, and cybersecurity. Specialized in building secure, scalable infrastructure using Docker, AWS, and DevSecOps practices. Full-stack developer with expertise in CI/CD automation.
            </motion.p>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {['AWS', 'Docker', 'Linux', 'DevSecOps', 'Node.js', 'Flask'].map((tech, i) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Contact Me
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                download
                className="px-8 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-full flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative w-72 h-80 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-blue-400/20 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <Code2 size={120} className="mx-auto text-blue-400 mb-4 opacity-30" />
                  <p className="text-slate-400">Professional Photo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-blue-400" size={32} />
      </motion.div>
    </section>
  );

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-slate-800/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300"
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate third-year Network and Telecommunication Engineering student with a strong focus on cloud infrastructure, network security, and DevSecOps practices. My journey in tech has been driven by the desire to build secure, scalable systems that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              Currently, I'm deepening my expertise in containerization, cloud deployments, and security automation. I believe in the power of modern DevOps practices to streamline development and ensure robust security from the ground up.
            </p>
            <div className="space-y-3 pt-4">
              <p className="text-slate-400">
                <span className="font-semibold text-blue-400">📚 Education:</span> Studying Network & Telecommunication Engineering
              </p>
              <p className="text-slate-400">
                <span className="font-semibold text-blue-400">🎯 Focus Areas:</span> Cloud Architecture, Network Security, CI/CD Automation
              </p>
              <p className="text-slate-400">
                <span className="font-semibold text-blue-400">💡 Interests:</span> DevSecOps, Infrastructure as Code, Distributed Systems
              </p>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Cloud, title: 'Cloud', items: ['AWS EC2', 'AWS Services', 'Cloud Architecture'] },
              { icon: Database, title: 'Backend', items: ['Node.js', 'Flask', 'REST APIs'] },
              { icon: Lock, title: 'Security', items: ['DevSecOps', 'Network Security', 'Cryptography'] },
              { icon: Terminal, title: 'Tools', items: ['Docker', 'Linux', 'Git/GitHub'] },
              { icon: Code2, title: 'Frontend', items: ['React', 'HTML/CSS', 'JavaScript'] },
              { icon: Zap, title: 'Database', items: ['MySQL', 'PostgreSQL', 'NoSQL'] },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <skill.icon className="text-blue-400 mb-3" size={24} />
                <h4 className="text-white font-semibold mb-2">{skill.title}</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Skills Section with progress bars
  const SkillsSection = () => (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            { category: 'Cloud & Infrastructure', skills: [
              { name: 'AWS (EC2, S3, RDS)', level: 85 },
              { name: 'Docker & Containerization', level: 90 },
              { name: 'Linux Administration', level: 88 },
            ]},
            { category: 'Backend Development', skills: [
              { name: 'Node.js & Express', level: 85 },
              { name: 'Flask & Python', level: 82 },
              { name: 'REST APIs & Microservices', level: 87 },
            ]},
            { category: 'Frontend Development', skills: [
              { name: 'React & Modern JavaScript', level: 88 },
              { name: 'HTML5 & CSS3', level: 92 },
              { name: 'UI/UX Design', level: 80 },
            ]},
            { category: 'DevSecOps & Tools', skills: [
              { name: 'CI/CD Pipelines', level: 85 },
              { name: 'Git & GitHub', level: 90 },
              { name: 'Security & Network', level: 83 },
            ]},
          ].map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              {skillGroup.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Projects Section
  const ProjectCard = ({ title, description, image, tech, github, demo }) => (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
    >
      {/* Project image */}
      <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-full h-full"
        >
          <Code2 size={80} className="text-blue-400 opacity-20" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          {github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors duration-300"
            >
              <Github size={16} />
              Repository
            </motion.a>
          )}
          {demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-slate-800/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <ProjectCard
              title="Gestiona"
              description="Comprehensive internship management platform for tracking applications, interviews, and placements with real-time updates and analytics."
              tech={['Node.js', 'React', 'MySQL', 'AWS']}
              github="https://github.com/ALIfrom51"
              demo="#"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ProjectCard
              title="Blockchain Supply Chain"
              description="Blockchain-based solution for tracing product delivery and authenticity verification across the supply chain with immutable records."
              tech={['Blockchain', 'Solidity', 'Node.js', 'React']}
              github="https://github.com/ALIfrom51"
              demo="#"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ProjectCard
              title="n8n Automation"
              description="Customer feedback automation system using n8n for collecting, processing, and analyzing client reviews with containerized deployment."
              tech={['n8n', 'Docker', 'Node.js', 'MySQL']}
              github="https://github.com/ALIfrom51"
              demo="#"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  // GitHub Section
  const GitHubSection = () => (
    <section id="github" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          GitHub Contributions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Github size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">GitHub Profile</h3>
                <p className="text-slate-400">ALIfrom51</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Active open-source contributor with a focus on cloud infrastructure, security automation, and full-stack development projects.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ALIfrom51"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-semibold transition-all duration-300"
            >
              <Github size={20} />
              Visit Profile
            </motion.a>
          </motion.div>

          {/* Contribution Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Public Repos', value: '15+', icon: Github },
              { label: 'Contributions', value: '500+', icon: Zap },
              { label: 'Languages', value: '8+', icon: Code2 },
              { label: 'Followers', value: '50+', icon: Mail },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <stat.icon className="text-blue-400 mx-auto mb-3" size={28} />
                <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

  // LinkedIn Section
  const LinkedInSection = () => (
    <section id="linkedin" className="py-20 bg-slate-800/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Linkedin className="text-blue-400 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            I'm always open to interesting opportunities, collaborations, and networking. Let's connect on LinkedIn to discuss cloud infrastructure, security practices, and tech innovations.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/ali-rebbouh-0b0b79221/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg text-white font-semibold transition-all duration-300"
          >
            <Linkedin size={24} />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-400/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-400/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-400/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-colors duration-300 resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, title: 'Email', value: 'ali.rebbouh@example.com', link: 'mailto:ali.rebbouh@example.com' },
              { icon: Github, title: 'GitHub', value: 'github.com/ALIfrom51', link: 'https://github.com/ALIfrom51' },
              { icon: Linkedin, title: 'LinkedIn', value: 'ali-rebbouh', link: 'https://www.linkedin.com/in/ali-rebbouh-0b0b79221/' },
              { icon: MapPin, title: 'Location', value: 'Casablanca, Morocco', link: '#' },
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={contact.link}
                target={contact.link !== '#' ? '_blank' : '_self'}
                rel={contact.link !== '#' ? 'noopener noreferrer' : ''}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <contact.icon className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-semibold">{contact.title}</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Navigation Bar
  const Navbar = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-blue-400/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Code2 className="text-blue-400" size={28} />
            <span className="text-white font-bold text-lg">Ali Rebbouh</span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {['hero', 'about', 'skills', 'projects', 'github', 'linkedin', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ color: '#60a5fa' }}
                className="text-slate-300 font-medium capitalize hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 space-y-2 pb-4"
            >
              {['hero', 'about', 'skills', 'projects', 'github', 'linkedin', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-slate-300 font-medium capitalize hover:text-blue-400 hover:bg-slate-800/50 rounded transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-slate-900 border-t border-blue-400/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 text-center md:text-left">
            <p className="font-semibold text-white mb-2">Ali Rebbouh</p>
            <p>Network & Telecommunication Engineering Student</p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, color: '#60a5fa' }}
              href="https://github.com/ALIfrom51"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#0ea5e9' }}
              href="https://www.linkedin.com/in/ali-rebbouh-0b0b79221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#60a5fa' }}
              href="mailto:ali.rebbouh@example.com"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          <div className="text-slate-400 text-center md:text-right">
            <p>© 2024 Ali Rebbouh. All rights reserved.</p>
            <p className="text-sm">Built with React, Tailwind & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
        <LinkedInSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;