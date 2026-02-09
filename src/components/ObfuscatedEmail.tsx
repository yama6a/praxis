"use client";

import { useState, useEffect } from "react";

// base64-encoded to prevent scraping from static HTML
const E = "bWFlaG5lci5iaXJnaXRAZ21haWwuY29t";

export function ObfuscatedEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(atob(E));
  }, []);

  if (!email) return null;

  return <a href={`mailto:${email}`} className="hover:text-white">{email}</a>;
}
