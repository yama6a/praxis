import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Fußreflexzonenmassage",
  description:
    "Fußreflexzonenmassage in Berlin Charlottenburg. Druckmassage zur Schmerzlinderung und Förderung des Wohlbefindens bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/weitere/fussreflexzonenmassage/" },
};

export default function FussreflexzonenmassagePage() {
  return (
    <>
      <WebPageJsonLd
        name="Fußreflexzonenmassage"
        url="/weitere/fussreflexzonenmassage/"
        description="Fußreflexzonenmassage in Berlin Charlottenburg. Druckmassage zur Schmerzlinderung und Förderung des Wohlbefindens bei Heilpraktikerin Birgit Mähner."
        mainEntityId="https://www.birgit-maehner.de/weitere/fussreflexzonenmassage/#service"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", href: "/" },
          { name: "Weitere Angebote", href: "/" },
          { name: "Fußreflexzonenmassage", href: "/weitere/fussreflexzonenmassage/" },
        ]}
      />
      <ServiceJsonLd
        name="Fußreflexzonenmassage"
        description="Druckmassage an den Füßen nach der Methode von Hanne Marquardt. Lindert Schmerzen und verbessert Beschwerden wie Migräne, Verdauungsprobleme und Schwindel. Fördert allgemeines Wohlbefinden und Entspannung."
        url="/weitere/fussreflexzonenmassage/"
        additionalType="https://de.wikipedia.org/wiki/Fu%C3%9Freflexzonenmassage"
        serviceType="Fußreflexzonenmassage"
      />
      <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Fußreflexzonenmassage
        </h1>

        <div className="text-center mb-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
          >
            Termin vereinbaren
          </Link>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Die Reflexzonenmassage ist eine Druckmassage, die schon bei alten
            Völkern wie z.B. bei einigen Indianerstämmen bekannt war und zur
            Schmerzlinderung erfolgreich eingesetzt wurde. Im 20. Jahrhundert
            entdeckte dann der HNO-Arzt Dr. Fitzgerald, dass durch Druckmassage
            in bestimmten Regionen an Händen und Füßen in den zugeordneten
            Organen die Schmerzen nachlassen oder sogar verschwinden.
          </p>

          <p>
            Hanne Marquardt hat in den 70er Jahren die Fußreflexzonentherapie
            hier bei uns in Europa bekannt gemacht und gilt als richtungsweisend
            in diesem Bereich. Dabei geht es nicht nur um Schmerzlinderung,
            sondern auch um Verbesserung von Beschwerden unterschiedlicher Art
            wie z.B. Migräne, Verdauungsprobleme, Schwindel etc.
          </p>

          <p>
            Aber nicht nur für die Gesundheit, sondern auch für das allgemeine
            Wohlbefinden kann die Fußreflexzonenmassage einen guten Beitrag
            leisten. Viele berichten, dass sie sich hinterher sehr entspannt und
            gelöst fühlten.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
