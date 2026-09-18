export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
      <p>
        Contact me:{" "}
        <a href="https://www.linkedin.com/in/benjamin-edon-hagelin-0a6b48194/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
          LinkedIn
        </a>{" "}
        or{" "}
        <a href="mailto:b_hagelin@msn.com" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
          Write an Email
        </a>
      </p>
    </footer>
  );
}