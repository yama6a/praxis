import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yoga-Therapie – Ganzheitliche Körpertherapie",
};

export default function YogaTherapiePage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Yoga-Therapie
        </h1>

        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Yoga-Therapie ist ein individueller, ganzheitlicher Ansatz, bei dem
            Yoga-Übungen gezielt auf Ihre persönlichen Bedürfnisse und
            Beschwerden abgestimmt werden. Im Unterschied zum Gruppenunterricht
            steht hier die therapeutische Wirkung im Vordergrund.
          </p>

          <p>
            Auf Grundlage eines ausführlichen Gesprächs wird ein persönliches
            Übungsprogramm zusammengestellt, das Körperübungen (Asanas),
            Atemtechniken (Pranayama) und Entspannungsmethoden umfassen kann.
            Dieses Programm wird regelmäßig an Ihre Fortschritte und
            Veränderungen angepasst.
          </p>

          <p>
            Yoga-Therapie kann unterstützend wirken bei Rückenschmerzen,
            Verspannungen, stressbedingten Beschwerden, Schlafproblemen und
            vielen weiteren körperlichen sowie seelischen Belastungen. Ziel ist
            es, die Selbstheilungskräfte des Körpers zu aktivieren und ein
            nachhaltiges Wohlbefinden zu fördern.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
          >
            Termin vereinbaren
          </Link>
        </div>
      </div>
    </div>
  );
}
