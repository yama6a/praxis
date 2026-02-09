import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fußreflexzonenmassage – Ganzheitliche Körpertherapie",
};

export default function FussreflexzonenmassagePage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Fußreflexzonenmassage
        </h1>

        <div className="bg-surface-light rounded-2xl border border-border p-6 mb-10">
          <h2 className="text-lg font-display font-bold text-gray-900 mb-3">
            Preis
          </h2>
          <div className="text-gray-700">
            <p>Fußreflexzonenmassage (30 Min.): <span className="font-bold text-primary">45 €</span></p>
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
  );
}
