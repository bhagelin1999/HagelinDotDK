export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
      <p>
        Made with ❤️ by{" "}
        <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
          GitHub for Beginners
        </a>{" "}
        and{" "}
        <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
          GitHub Copilot
        </a>
      </p>
    </footer>
  );
}