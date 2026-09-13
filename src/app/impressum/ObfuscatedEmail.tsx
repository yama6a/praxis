'use client';

import { useEffect, useState } from 'react';

export function ObfuscatedEmail({ user, domain }: { user: string; domain: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deliberate: the address is only assembled client-side, or it's sitting in the static/SSR
    // HTML for any scraper to read.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="text-muted-foreground">[E-Mail wird geladen]</span>;
  }

  const email = `${user}@${domain}`;

  return (
    <a
      href={`mailto:${email}`}
      className="text-primary underline underline-offset-2 hover:text-primary/80"
    >
      {email}
    </a>
  );
}
