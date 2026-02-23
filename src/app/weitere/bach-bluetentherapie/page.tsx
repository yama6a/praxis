import type { Metadata } from "next";
import Link from "next/link";
import { MdFormatQuote, MdLocalFlorist } from "react-icons/md";
import { BreadcrumbJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Bach-Blütentherapie",
  description:
    "Bach-Blütentherapie in Berlin Charlottenburg. 38 Blütenessenzen nach Dr. Edward Bach für seelisches Gleichgewicht bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/weitere/bach-bluetentherapie/" },
};

export default function BachBluetentherapiePage() {
  return (
    <>
      <WebPageJsonLd
        name="Bach-Blütentherapie"
        url="/weitere/bach-bluetentherapie/"
        description="Bach-Blütentherapie in Berlin Charlottenburg. 38 Blütenessenzen nach Dr. Edward Bach für seelisches Gleichgewicht bei Heilpraktikerin Birgit Mähner."
        mainEntityId="https://www.birgit-maehner.de/weitere/bach-bluetentherapie/#service"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", href: "/" },
          { name: "Weitere Angebote", href: "/" },
          { name: "Bach-Blütentherapie", href: "/weitere/bach-bluetentherapie/" },
        ]}
      />
      <ServiceJsonLd
        name="Bach-Blütentherapie"
        description="Naturheilkundliche Therapie mit 38 Blütenessenzen nach Dr. Edward Bach. Die Essenzen entsprechen archetypischen Gemütszuständen und geben einen Impuls zur positiven Veränderung für seelisches Gleichgewicht."
        url="/weitere/bach-bluetentherapie/"
        additionalType="https://de.wikipedia.org/wiki/Bachbl%C3%BCtentherapie"
        serviceType="Bach-Blütentherapie"
      />
      <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Bach-Blütentherapie
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
          {/* Quote */}
          <blockquote className="relative border-l-4 border-primary/30 pl-6 py-4 mb-10 bg-surface-light rounded-r-xl">
            <MdFormatQuote className="absolute -top-2 -left-1 text-4xl text-primary/20" />
            <p className="italic text-gray-600">
              &bdquo;Es ist vielleicht die größte Lektion des Lebens, Freiheit
              zu lernen. Freiheit von den äußeren Umständen, von der Umgebung,
              anderen Persönlichkeiten und vor allen Dingen von uns selbst, denn
              solange wir nicht frei sind, sind wir nicht in der Lage, uns ganz
              zu verschenken und unseren Mitmenschen zu dienen.&ldquo;
            </p>
            <footer className="mt-3 text-sm text-muted-foreground font-medium">
              &mdash; Dr. Edward Bach
            </footer>
          </blockquote>

          <div className="flex gap-4 items-start mb-6">
            <MdLocalFlorist className="text-primary text-2xl mt-1 shrink-0" />
            <p>
              Dem Arzt Dr. Edward Bach war sehr daran gelegen, eine
              naturheilkundliche Therapieform zu entwickeln, die den Menschen
              wieder mit den Bedürfnissen seiner Seele in Verbindung bringt. Er
              entwickelte 38 Blütenessenzen, die den archetypischen
              Gemütszuständen eines Menschen entsprechen, egal, in welcher Zeit
              und an welchem Ort er lebt und die einen Impuls zur positiven
              Veränderung geben.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
