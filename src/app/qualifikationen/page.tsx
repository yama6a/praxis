import type { Metadata } from "next";
import Image from "next/image";
import {
  MdLocalPharmacy,
  MdSelfImprovement,
  MdSpa,
  MdHealthAndSafety,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Qualifikationen – Ganzheitliche Körpertherapie",
  robots: "noindex",
};

export default function QualifikationenPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Qualifikationen
        </h1>

        <div className="space-y-6">
          {/* Apothekerin + Heilpraktikerin side by side */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <MdLocalPharmacy className="text-primary text-2xl shrink-0" />
                <h2 className="text-xl font-display font-bold text-gray-900">
                  Apothekerin
                </h2>
              </div>
              <ul className="list-disc text-gray-700 space-y-1 ml-9">
                <li>Approbiert 1990</li>
                <li>Arbeit mit dem Schwerpunkt Naturheilkunde</li>
                <li>Homöopathie, Anthroposophie, Schüssler-Salze</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <MdHealthAndSafety className="text-primary text-2xl shrink-0" />
                <h2 className="text-xl font-display font-bold text-gray-900">
                  Heilpraktikerin
                </h2>
              </div>
              <ul className="list-disc text-gray-700 space-y-1 ml-9">
                <li>Ausgebildete Heilpraktikerin seit 1994</li>
                <li>Bach-Blüten-Therapie</li>
                <li>Fußreflexzonenmassage</li>
                <li>Schröpfen</li>
                <li>Moxibustion</li>
              </ul>
            </div>
          </div>

          {/* Yogalehrerin with photo */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <MdSelfImprovement className="text-primary text-2xl shrink-0" />
              <h2 className="text-xl font-display font-bold text-gray-900">
                Yogalehrerin
              </h2>
            </div>
            <div className="flex gap-6">
              <ul className="list-disc text-gray-700 space-y-1 ml-9 flex-1">
                <li>Für Erwachsene und Kinder seit 1994</li>
                <li>
                  Mehrjährige Ausbildung bei Asha Rekai nach Dr. Swami Gitananda
                  Giri
                </li>
                <li>
                  Unterricht in verschiedenen Stilen, z.B. nach Iyengar bei
                  Andreas Riester und Shivananda-Yoga
                </li>
                <li>
                  Weiterbildung zur Yogatherapeutin bei Dr. Günter Niessen
                </li>
              </ul>
              <Image
                src="/images/passfoto-sm.jpg"
                alt="Birgit Mähner"
                width={128}
                height={160}
                className="rounded-xl object-cover w-28 h-36 shrink-0 self-start"
              />
            </div>
          </div>

          {/* Shiatsu */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <MdSpa className="text-primary text-2xl shrink-0" />
              <h2 className="text-xl font-display font-bold text-gray-900">
                Shiatsu
              </h2>
            </div>
            <ul className="list-disc text-gray-700 space-y-1 ml-9">
              <li>Ausgebildete Shiatsu-Therapeutin seit 1997</li>
              <li>
                Shiatsu-Dozentin beim Verband für Physiotherapie und
                verschiedenen Schulen für Krankengymnastik
              </li>
              <li>
                Fortbildungen u.a. bei Rappenecker, Peter Itin und weiteren
                Lehrern
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
