import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            Benjamin Edon Hagelin.
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            {/*<Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>*/}
            <Link href="/projects" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="/about" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="/contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              WELCOME TO MY PORTFOLIO <br />
            </h1>
          </div>
          <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-fuchsia-500/50 pl-6">
            Developer With a Bachelor in Computer Science and a Masters in Game Development
          </p>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                CHECK OUT MY PROJECTS <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">LAUNCH?</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              Fork this template on GitHub and make it yours. Update the content, add your projects, and deploy to GitHub Pages in under 30 minutes.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://github.com/ladykerr/gfbs3-portfolio-demo" 
                className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300 clip-path-polygon"
              >
                FORK ON GITHUB
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com" label="GITHUB" />
                <SocialLink href="https://linkedin.com" label="LINKEDIN" />
                <SocialLink href="https://twitter.com" label="TWITTER" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Made with ❤️ by <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub for Beginners</a> and <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub Copilot</a></p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
