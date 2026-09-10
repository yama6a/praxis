"use client";

import { useState, useEffect } from "react";

// base64-encoded to prevent scraping from static HTML
const E = "bWFlaG5lci5iaXJnaXRAZ21haWwuY29t";

export function ObfuscatedEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Deliberate: the decode must happen client-side only, or the address is sitting in the
    // static/SSR HTML for any scraper to read.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail(atob(E));
  }, []);

  if (!email) return null;

  return <a href={`mailto:${email}`} className="hover:text-white">{email}</a>;
}
