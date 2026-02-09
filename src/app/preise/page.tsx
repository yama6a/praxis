import type { Metadata } from "next";
import Image from "next/image";
import {
  MdSelfImprovement,
  MdSpa,
  MdCardGiftcard,
  MdLocalFlorist,
} from "react-icons/md";
import type { IconType } from "react-icons";

export const metadata: Metadata = {
  title: "Preise – Ganzheitliche Körpertherapie",
};

type PriceEntry = {
  label: string;
  detail?: string;
  price: string;
};

function PriceCard({
  icon: Icon,
  title,
  entries,
  note,
  children,
}: {
  icon: IconType;
  title: string;
  entries: PriceEntry[];
  note?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border p-6 sm:p-8">
      <div className="flex items-center mb-6">
        <span className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-primary mr-3">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-display font-bold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.label}
            className="flex items-baseline justify-between gap-4"
          >
            <div className="min-w-0">
              <span className="text-gray-900 font-medium">{entry.label}</span>
              {entry.detail && (
                <span className="block text-sm text-muted-foreground">
                  {entry.detail}
                </span>
              )}
            </div>
            <span className="text-primary font-bold text-lg whitespace-nowrap">
              {entry.price}
            </span>
          </div>
        ))}
      </div>

      {note && (
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {note}
        </p>
      )}

      {children}
    </div>
  );
}

export default function PreisePage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-2">
          Preise
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Übersicht der Preise für alle Angebote meiner Praxis.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Yoga */}
          <PriceCard
            icon={MdSelfImprovement}
            title="Yoga"
            entries={[
              { label: "Monatsbeitrag", price: "77 €" },
              { label: "Einzelne Stunde", price: "22 €" },
              {
                label: "Krankenkassenkurs",
                detail: "10 Termine",
                price: "170 €",
              },
            ]}
            note="Alle Krankenkassen übernehmen zwischen 75 und 170 €."
          />

          {/* Shiatsu */}
          <PriceCard
            icon={MdSpa}
            title="Shiatsu"
            entries={[
              {
                label: "Behandlung",
                detail: "60 Minuten",
                price: "85 €",
              },
              {
                label: "Massagestuhl",
                detail: "20 Minuten – auch in Betrieben",
                price: "25 €",
              },
            ]}
            note="Private Versicherungen übernehmen die Kosten meist anteilig."
          />

          {/* Weitere Angebote */}
          <PriceCard
            icon={MdLocalFlorist}
            title="Weitere Angebote"
            entries={[
              {
                label: "Bach-Blüten-Beratung",
                detail: "30 Minuten",
                price: "35 €",
              },
              {
                label: "Fußreflexzonenmassage",
                detail: "30 Minuten",
                price: "45 €",
              },
              {
                label: "Schröpfen",
                detail: "ca. 30 Minuten",
                price: "40 €",
              },
            ]}
          />
        </div>

        {/* Geschenk-Gutschein – full width with image */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-border overflow-hidden sm:flex">
          <div className="sm:w-2/5 relative">
            <Image
              src="/images/gutschein.jpg"
              alt="Handgemachter Shiatsu Geschenk-Gutschein"
              width={640}
              height={480}
              className="w-full h-56 sm:h-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 sm:w-3/5">
            <div className="flex items-center mb-6">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-primary mr-3">
                <MdCardGiftcard className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-display font-bold text-gray-900">
                Geschenk-Gutschein
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Schenken Sie Ihren Freunden und Bekannten eine entspannende
              Shiatsu-Anwendung!
            </p>

            <div className="flex items-baseline justify-between gap-4 mb-4">
              <div>
                <span className="text-gray-900 font-medium">
                  Shiatsu-Anwendung
                </span>
                <span className="block text-sm text-muted-foreground">
                  60 Minuten
                </span>
              </div>
              <span className="text-primary font-bold text-lg whitespace-nowrap">
                85 €
              </span>
            </div>

            <div className="border-t border-border pt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>
                Die Anwendung beinhaltet ein kurzes Vor- und Nachgespräch.
              </p>
              <p>
                Bitte melden Sie sich bei Interesse über eine der{" "}
                <a
                  href="/kontakt"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Kontaktmöglichkeiten
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
