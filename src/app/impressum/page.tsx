import type { Metadata } from "next";
import Image from "next/image";
import { MdPlace, MdPhone, MdEmail, MdBadge, MdGavel } from "react-icons/md";
import { ObfuscatedEmail } from "./ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Impressum",
  robots: "noindex",
};

export default function ImpressumPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Impressum
        </h1>

        {/* Identity + Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
            Verantwortlich gemäß § 5 TMG
          </h2>
          <div className="flex gap-6">
            <address className="not-italic text-gray-700 space-y-1 flex-1">
              <p className="text-lg font-display font-bold text-gray-900">
                Birgit Mähner
              </p>
              <p>Heilpraktikerin</p>
              <div className="flex items-start gap-2 pt-2">
                <MdPlace className="text-primary mt-0.5 shrink-0" />
                <span>
                  Knobelsdorffstr. 34, D-14059 Berlin-Charlottenburg
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-primary shrink-0" />
                <span>030 / 95 60 80 20</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-primary shrink-0" />
                <ObfuscatedEmail user="maehner.birgit" domain="gmail.com" />
              </div>
            </address>
            <Image
              src="/images/passfoto-sm.jpg"
              alt="Birgit Mähner"
              width={128}
              height={160}
              className="rounded-xl object-cover w-28 h-36 shrink-0 self-start"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-3">
            Inhaltlich verantwortlich gemäß § 55 (2) RStV: s.o.
          </p>
        </div>

        {/* Behörde + Verband side by side */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">
              Zuständige Aufsichtsbehörde
            </h2>
            <address className="not-italic text-gray-700 space-y-0.5">
              <p className="font-medium">
                Senatsverwaltung für Gesundheit und Soziales Berlin
              </p>
              <p>Fehrbelliner Platz 1</p>
              <p>10707 Berlin</p>
              <p>Tel. 030 / 90229-0</p>
            </address>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">
              Zuständiger Verband
            </h2>
            <address className="not-italic text-gray-700 space-y-0.5">
              <p className="font-medium">
                Fachverband Deutscher Heilpraktiker
              </p>
              <p>Landesverband Berlin-Brandenburg e.V.</p>
              <p>Mommsenstr. 45, 10629 Berlin</p>
              <p>Tel.: 030 / 323 30 50</p>
              <p>
                <ObfuscatedEmail user="buero" domain="fdhshsberlin.de" />
              </p>
              <p>
                <a
                  href="https://www.samuelhahnemannschule.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  www.samuelhahnemannschule.de
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Legal details */}
        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 space-y-4 text-gray-700">
          <div className="flex gap-3 items-start">
            <MdBadge className="text-primary text-xl mt-0.5 shrink-0" />
            <div>
              <h2 className="font-bold text-gray-900 mb-1">
                Erlaubnis zur Ausübung der Heilkunde
              </h2>
              <p>
                Die Erlaubnis zur Ausübung der Heilkunde ohne Bestallung wurde
                im Februar 1994 vom Gesundheitsamt Berlin-Schöneberg durch den
                Amtsarzt Dr. Otto erteilt.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          <div className="flex gap-3 items-start">
            <MdGavel className="text-primary text-xl mt-0.5 shrink-0" />
            <div>
              <h2 className="font-bold text-gray-900 mb-1">
                Berufsrechtliche Regelungen
              </h2>
              <p>
                Die Tätigkeit als Heilpraktikerin basiert auf dem
                Heilpraktikergesetz und der ersten Durchführungsverordnung zum
                Heilpraktikergesetz. Berufsständische Regelungen befinden sich
                in der Berufsordnung für Heilpraktiker und der Ethikerklärung
                des Fachverbandes Deutscher Heilpraktiker. Alle Regelungen
                können auf der Homepage des FDH eingesehen werden:{" "}
                <a
                  href="https://www.heilpraktiker.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  www.heilpraktiker.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
