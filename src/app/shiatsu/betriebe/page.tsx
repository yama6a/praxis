import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shiatsu in Betrieben – Ganzheitliche Körpertherapie",
};

export default function ShiatsuBetriebePage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-8">
          Shiatsu in Betrieben
        </h1>

        <div className="bg-surface-light rounded-2xl border border-border p-6 mb-10">
          <h2 className="text-lg font-display font-bold text-gray-900 mb-3">
            Preise
          </h2>
          <div className="text-gray-700">
            <p>Massagestuhl (20 Min.): <span className="font-bold text-primary">25 €</span></p>
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

        {/* Photo gallery */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <Image
            src="/images/shiatsu_stuhl1.jpg"
            alt="Shiatsu auf dem Stuhl im Betrieb"
            width={640}
            height={480}
            className="rounded-xl w-full object-contain"
          />
          <Image
            src="/images/shiatsu_stuhl2.jpg"
            alt="Shiatsu-Stuhl"
            width={640}
            height={480}
            className="rounded-xl w-full object-contain"
          />
          <Image
            src="/images/shiatsu_stuhl3.jpg"
            alt="Shiatsu-Behandlung auf dem Stuhl"
            width={640}
            height={480}
            className="rounded-xl w-full object-contain"
          />
        </div>

        {/* Text content */}
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Immer mehr Betriebe gehen heute dazu über, die Gesundheit ihrer
            Angestellten zu fördern.
          </p>
          <p>
            Shiatsu auf dem Stuhl ist hervorragend dafür geeignet,
            krankmachenden Stress abzubauen und Verspannungen zu lösen. Es lässt
            sich problemlos in jeden Betriebsablauf integrieren &ndash; kein
            Umziehen, kein Ausziehen, einfach Platz nehmen und die wohltuende
            Akupressur genießen. Danach fühlt man sich erfrischt und entspannt.
          </p>
          <p>
            Der Shiatsu-Stuhl ist besonders bequem und wird mitgebracht. Gerne
            vereinbare ich mit Ihnen einen{" "}
            <a
              href="/kontakt"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Termin zum Kennenlernen
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
