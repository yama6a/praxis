import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schröpfen – Ganzheitliche Körpertherapie",
};

export default function SchroepfenPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Schröpfen
        </h1>

        <div className="text-center mb-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
          >
            Termin vereinbaren
          </Link>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed">
          <p>
            Das Schröpfen ist ein in verschiedenen Kulturen altbekanntes
            Verfahren zur Linderung von unterschiedlichen Beschwerden. Dabei
            werden Glaskugeln, in denen vorher ein Vakuum erzeugt wird, auf die
            betreffenden Stellen aufgesetzt. Durch den Unterdruck werden mehrere
            Effekte erzeugt, u.a. eine Anregung der Durchblutung in den
            geschröpften Bereichen. Gleichzeitig kommt es zu einer Reaktion in
            den zugehörigen Organen. Es werden so die Selbstheilungskräfte
            angeregt und die Beschwerden gelindert.
          </p>
        </div>
      </div>
    </div>
  );
}
