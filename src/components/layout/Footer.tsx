import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 border-t border-white/10 text-center text-sm text-[var(--muted)] bg-[var(--card)]">
      © {new Date().getFullYear()} MV Digital Work Marketing Agency. All rights reserved.
    </footer>
  );
};

export default Footer;
