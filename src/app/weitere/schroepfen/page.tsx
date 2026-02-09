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

        <div className="bg-surface-light rounded-2xl border border-border p-6 mb-10">
          <h2 className="text-lg font-display font-bold text-gray-900 mb-3">
            Preis
          </h2>
          <div className="text-gray-700">
            <p>Schröpfen (ca. 30 Min.): <span className="font-bold text-primary">40 €</span></p>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-border">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
            >
              Termin vereinbaren
            </Link>
          </div>
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
