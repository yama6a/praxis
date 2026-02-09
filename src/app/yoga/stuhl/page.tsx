import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yoga auf dem Stuhl – Ganzheitliche Körpertherapie",
};

export default function YogaStuhlPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Yoga auf dem Stuhl
        </h1>

        <div className="bg-surface-light rounded-2xl border border-border p-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-lg font-display font-bold text-gray-900 mb-3">
                Kurszeiten
              </h2>
              <div className="space-y-1 text-gray-700">
                <p>Dienstags: 10:15 – 11:30</p>
                <p>Mittwochs: 9:00 – 10:15</p>
              </div>
            </div>
            <div className="sm:border-l sm:border-border sm:pl-6">
              <h2 className="text-lg font-display font-bold text-gray-900 mb-3">
                Preise
              </h2>
              <div className="space-y-1 text-gray-700">
                <p>Monatsbeitrag: <span className="font-bold text-primary">77 €</span></p>
                <p>Einzelne Stunde: <span className="font-bold text-primary">22 €</span></p>
                <p>Krankenkassenkurs (10 Termine): <span className="font-bold text-primary">170 €</span></p>
              </div>
            </div>
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
          <div className="float-left mr-4 sm:mr-6 mb-4 w-1/3 sm:w-1/5">
            <Image
              src="/images/stuhlyoga.jpg"
              alt="Yoga auf dem Stuhl – Illustration einer Übung"
              width={450}
              height={560}
              className="rounded-xl w-full object-contain"
            />
            <p className="text-xs text-muted-foreground text-center mt-2">
              &copy; Edeltraut Rohnfeld
            </p>
          </div>

          <p className="mb-8">
            Neben dem klassischen Hatha-Yoga im Stehen, Sitzen und Liegen wird
            außerdem in diesem Unterricht &bdquo;Yoga auf dem Stuhl&ldquo;
            angeboten. Dieser Kurs richtet sich vorwiegend an Menschen, die in
            ihrer Bewegungsfreiheit eingeschränkt sind und trotzdem etwas für
            ihre Gesundheit und ihr Wohlbefinden tun wollen. Auch für Menschen
            mit einer sitzenden Tätigkeit gibt es hier vielfältige Anregungen
            für Übungen am eigenen Arbeitsplatz.
          </p>

          <p>
            Spezielle Yoga-Übungen auf dem Stuhl sorgen für eine erhöhte
            Beweglichkeit und bessere Durchblutung aller Zellen. Das Gehirn wird
            vermehrt mit Sauerstoff versorgt und der gesamte Stoffwechsel
            angeregt. Nach einer Stunde fühlt man sich mit Energie aufgeladen
            und gleichermaßen entspannt. Auch die für sitzende Tätigkeiten
            typischen Nacken-, Schulter- und Rücken-Verspannungen können sich
            wieder lösen.
          </p>
        </div>
      </div>
    </div>
  );
}
