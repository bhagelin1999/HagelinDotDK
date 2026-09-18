import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-white hover:bg-cyan-400 transition-all duration-300"
        >
          Benjamin Edon Hagelin.
        </Link>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
          <Link href="/projects" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
          <Link href="/about" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
          <Link href="/contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}