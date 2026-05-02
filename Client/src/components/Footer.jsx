import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-accent/20 py-8 text-center">

      {/* Brand */}
      <h3 className="font-headline text-lg font-bold text-primary mb-1">
        Hriday IAS
      </h3>

      {/* Tagline */}
      <p className="text-on-surface-variant text-sm mb-3">
        Guiding Aspirants Towards Success
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-accent mx-auto mb-3"></div>

      {/* Copyright */}
      <p className="text-xs text-on-surface-variant">
        © 2025 Hriday IAS. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;