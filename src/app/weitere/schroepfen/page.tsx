import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Schröpfen",
  description:
    "Schröpftherapie in Berlin Charlottenburg. Traditionelles Schröpfen zur Durchblutungsanregung und Linderung von Beschwerden bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/weitere/schroepfen/" },
};

export default function SchroepfenPage() {
  return (
    <>
      <WebPageJsonLd
        name="Schröpfen"
        url="/weitere/schroepfen/"
        description="Schröpftherapie in Berlin Charlottenburg. Traditionelles Schröpfen zur Durchblutungsanregung und Linderung von Beschwerden bei Heilpraktikerin Birgit Mähner."
        mainEntityId="https://www.birgit-maehner.de/weitere/schroepfen/#service"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", href: "/" },
          { name: "Weitere Angebote", href: "/" },
          { name: "Schröpfen", href: "/weitere/schroepfen/" },
        ]}
      />
      <ServiceJsonLd
        name="Schröpftherapie"
        description="Traditionelles Schröpfen mit Glaskugeln unter Vakuum. Regt die Durchblutung an, löst Reaktionen in zugehörigen Organen aus und aktiviert die Selbstheilungskräfte zur Linderung unterschiedlicher Beschwerden."
        url="/weitere/schroepfen/"
        additionalType="https://de.wikipedia.org/wiki/Schr%C3%B6pfen"
        serviceType="Schröpfen"
      />
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
    </>
  );
}
