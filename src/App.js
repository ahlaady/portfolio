import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Database, TrendingUp, Shield, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
  {
    title: "Domain Adaptation for Code Summarization",
    description: "Fine-tuned transformer-based CodeT5 small models on TensorFlow and Pandas libraries, achieving 27.2% improvement in code summarization accuracy. Built scalable data pipeline processing 400+ repositories with automated AST parsing and quality validation.",
    tags: ["PyTorch", "Transformers", "NLP", "Research"],
    metrics: ["27.2% BLEU ↑", "400+ repos", "4K examples"],
    icon: Brain,
    gradient: "from-cyan-500 to-blue-600",
    period: "Sep 2025 - Dec 2025"
  },
  {
    title: "Survey Analysis & Open Coding Platform",
    description: "Full-stack Django application enabling researchers to code and categorize 200+ survey responses with intelligent tagging. Built REST API backend with CSV processing and interactive JavaScript frontend, reducing manual coding time by 60%.",
    tags: ["Django", "JavaScript", "REST API", "Full-stack"],
    metrics: ["60% time saved", "200+ responses", "5-member team"],
    icon: Database,
    gradient: "from-purple-500 to-pink-600",
    period: "Sep 2025 - Dec 2025"
  },
  {
    title: "LLM-Based Financial Data Analytics Platform (Multi-Agent GenAI)",
    description: "Multi-agent GenAI system retrieving and analyzing 100+ financial documents (SEC filings, market news) with autonomous agents extracting 20+ key metrics. Implemented RAG workflows achieving 85%+ sentiment consistency and 40% reduction in manual analysis time.",
    tags: ["LLMs", "GenAI", "CrewAI", "RAG", "Python"],
    metrics: ["100+ docs", "40% faster", "Multi-agent"],
    icon: Brain,
    gradient: "from-emerald-500 to-teal-600",
    period: "Aug 2025 - Present"
  },
  {
    title: "SLO-Aware Inference Scheduler",
    description: "Optimized AI inference scheduler achieving 1.7ms response time and >90% SLO compliance with hardware-aware GPU optimizations across DNN, LSTM, and Transformer models. Implemented 4 runtime security defenses reducing malicious load by 80%.",
    tags: ["PyTorch", "GPU", "Security", "Real-time"],
    metrics: ["1.7ms latency", ">90% SLO", "80% attack ↓"],
    icon: Zap,
    gradient: "from-orange-500 to-red-600",
    period: "Jan 2024 - May 2024"
  },
  {
    title: "Evaluating ML Algorithms for Static Code Vulnerability Detection",
    description: "Large-scale comparative analysis of ML models (SVM, Random Forest, CodeBERT + MLP) on DiverseVul dataset with 330K+ labeled C/C++ functions. Evaluated transformer-based vs traditional embeddings, achieving 80% accuracy with TF-IDF + SVM.",
    tags: ["Machine Learning", "CodeBERT", "Security", "NLP"],
    metrics: ["330K+ samples", "6 models", "80% accuracy"],
    icon: Shield,
    gradient: "from-purple-500 to-indigo-600",
    period: "Jan 2024 - May 2024"
  },
  // {
  //   title: "Enterprise Financial Platform at Oracle",
  //   description: "Developed and debugged enterprise applications for Oracle's Accounting Foundation Cloud Services, ensuring 99% system reliability. Built Python automation with Selenium, reducing regression testing time by 25% across financial platforms.",
  //   tags: ["Oracle PL/SQL", "Python", "Selenium", "Enterprise"],
  //   metrics: ["99% uptime", "25% faster tests", "Production"],
  //   icon: TrendingUp,
  //   gradient: "from-blue-500 to-cyan-600",
  //   period: "Jul 2022 - Jun 2024"
  // },
  {
    title: "Stock Market Prediction with LSTM",
    description: "Stacked LSTM neural network for stock price prediction using 5+ years of historical data. Reduced MSE by 15% through hyperparameter optimization, achieving 90% accuracy over 7-day prediction windows with financial data preprocessing pipelines.",
    tags: ["LSTM", "Time Series", "TensorFlow", "Finance"],
    metrics: ["15% MSE ↓", "90% accuracy", "5+ years data"],
    icon: TrendingUp,
    gradient: "from-pink-500 to-rose-600",
    period: "Jan 2022 - May 2022"
  },
  {
    title: "Emotion and Image Recognition using Deep Learning",
    description: "Real-time computer vision pipeline for facial emotion recognition using deep CNNs with sub-200ms inference latency. Leveraged Haar cascades and optimized feature extraction, achieving 95% face detection and 80% emotion classification accuracy.",
    tags: ["Computer Vision", "Deep Learning", "OpenCV", "CNN"],
    metrics: ["<200ms latency", "95% detection", "80% classification"],
    icon: Code2,
    gradient: "from-indigo-500 to-purple-600",
    period: "Jan 2022 - May 2022"
  }
  ];

  const skills = {
    "Languages": ["Python", "C++", "CUDA", "JavaScript", "SQL/PLSQL", "Java"],
    "ML & AI": ["PyTorch", "TensorFlow", "Transformers", "LLMs", "Scikit-learn", "Hugging Face", "LangChain"],
    "Web & Cloud": ["React", "Node.js", "Django", "AWS", "Oracle DB", "PostgreSQL", "REST APIs"],
    "Tools & Platforms": ["Git/GitHub", "Docker", "Jupyter", "Tableau", "Selenium", "NumPy", "Pandas", "Linux"]
  };

  const experience = [
    {
      title: "Application Developer",
      company: "Oracle Corporation",
      period: "Jul 2022 - Jun 2024",
      highlights: [
        "Developed enterprise applications ensuring 99% system reliability",
        "Optimized Oracle database performance for financial platforms",
        "Automated testing with Python/Selenium, reducing time by 25%",
        "Boosted system visibility by 35% through scalable solutions",
        "Developed and debugged enterprise applications using PL/SQL, ensuring 99% system reliability across financial platforms.",
        "Conducted end-to-end testing on Accounting Foundation Cloud Services (AFCS), incorporating multi-platform system design decisions for data validation, Oracle database optimization, ERP journal posting, and reconciliation workflows.",
        "Collaborated across teams to implement scalable solutions from stakeholder requirements, boosting visibility by 35%.",
        "Automated regression testing with Python and Selenium, reducing testing time by 25%."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "NewBie Soft Solutions",
      period: "May 2021 - Sep 2021",
      highlights: [
        "Built 10+ Tableau dashboards, reducing report time by 30%",
        "Created 5+ Python automation scripts for ETL tasks",
        "Developed predictive models for business insights"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-5xl w-full">
          <div className="space-y-8 animate-fadeIn">
            {/* Name with glitch effect on hover */}
            <div className="relative inline-block group cursor-default">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter relative z-10">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Ahlaad Yalavarthi
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </div>

            {/* Animated subtitle */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-2xl md:text-3xl text-cyan-400 font-light tracking-wide">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                <span className="font-mono">ML Engineer</span>
                <span className="text-zinc-600">×</span>
                <span className="font-mono">Software Developer</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-light">
                MS Computer Science @ <span className="text-cyan-400 font-medium">William & Mary</span><br /> 
                Transforming complex data into intelligent systems — from <span className="text-purple-400 font-medium">fine-tuning transformers</span> for code understanding to building <span className="text-emerald-400 font-medium">production pipelines at Oracle</span>. 
                Currently exploring <span className="text-pink-400 font-medium">domain adaptation/generalization</span>, 
                <span className="text-blue-400 font-medium"> multi-agent AI</span>, 
                <span className="text-orange-400 font-medium"> real-time ML deployment</span>, and <span className="text-yellow-400 font-medium">App Development</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a href="#projects" 
                 className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                View Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" 
                 className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              {[
                { Icon: Github, href: "https://github.com/ahlaady", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ahlaad-yalavarthi", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:ahlaady1@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <a key={label}
                   href={href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group p-3 border border-zinc-800 rounded-lg hover:border-cyan-400/50 hover:bg-zinc-900 transition-all duration-300"
                   aria-label={label}>
                  <Icon className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyan-400 font-mono text-lg">02.</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Featured Projects</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl">
              A selection of projects spanning ML research, GenAI applications, enterprise development, and real-time systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div key={idx}
                     className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                     style={{ animationDelay: `${idx * 100}ms` }}>
                  
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon & Period */}
                  <div className="mb-6 relative flex items-start justify-between">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${project.gradient} rounded-xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">{project.period}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-800 text-cyan-400 text-sm font-mono rounded-md border border-zinc-700">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-sm text-zinc-400 border border-zinc-800 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyan-400 font-mono text-lg">03.</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Experience</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="group relative bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-1">{exp.title}</h3>
                    <p className="text-xl text-zinc-300">{exp.company}</p>
                  </div>
                  <span className="text-zinc-500 font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-zinc-400 flex items-start gap-3">
                      <span className="text-cyan-400 mt-2">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <h3>Application Developer</h3>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Worked on Oracle's Accounting Foundation Cloud Services (AFCS), 
          a financial platform processing millions of transactions daily. 
          Learned how to build systems that can't afford to fail—where 99% 
          uptime isn't a goal, it's a baseline.
        </p>
        
        <div className="space-y-3 text-zinc-400">
          <div className="flex gap-3">
            <span className="text-cyan-400">→</span>
            <p>Developed and debugged enterprise applications using PL/SQL, 
            ensuring 99% system reliability across financial platforms serving 
            Fortune 500 clients.</p>
          </div>
          
          <div className="flex gap-3">
            <span className="text-cyan-400">→</span>
            <p>Built Python + Selenium automation framework that reduced 
            regression testing time by 25%, enabling faster release cycles 
            without sacrificing quality.</p>
          </div>
          
          <div className="flex gap-3">
            <span className="text-cyan-400">→</span>
            <p>Collaborated across 5+ teams to implement scalable solutions 
            from stakeholder requirements—learned the hard way that the best 
            technical solution isn't always the right business decision.</p>
          </div>
        </div>
  
        {/* Optional: What I learned section */}
        <div className="mt-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
          <p className="text-sm text-zinc-500 italic">
            Key takeaway: Enterprise software taught me to care deeply about 
            edge cases, backward compatibility, and building systems that don't 
            break at 2am. It's unglamorous work, but it's where you learn to 
            ship code that actually matters.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyan-400 font-mono text-lg">04.</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Tech Stack</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category}
                   className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                   style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-cyan-400 font-mono text-sm mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-zinc-300 flex items-center gap-2 group cursor-default">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-cyan-400 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-cyan-400 font-mono text-lg">05.</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Let's Build Something
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking opportunities in ML/AI Engineering, Software Development, and Research. 
            Open to full-time roles and internships for 2026, as well as research collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:ahlaady1@gmail.com"
               className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-medium rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-6 h-6" />
              Get In Touch
            </a>
            <a href="/resume.pdf"
               target="_blank"
               className="inline-flex items-center gap-3 px-10 py-5 border border-cyan-400/30 text-cyan-400 text-lg font-medium rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
              View Resume
            </a>
          </div>

          {/* Footer
          <div className="mt-32 pt-12 border-t border-zinc-800">
            <p className="text-zinc-500 font-mono text-sm">
              Built with React + Tailwind • Deployed on Vercel • 2024
            </p>
          </div> */}
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;600;700;800&display=swap');
        
        * {
          font-family: 'Sora', -apple-system, system-ui, sans-serif;
        }
        
        .font-mono {
          font-family: 'Space Mono', monospace;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
