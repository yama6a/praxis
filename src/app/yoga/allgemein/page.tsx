import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Yoga Allgemein",
  description:
    "Yoga-Kurse in kleinen Gruppen in Berlin Charlottenburg. Asanas, Pranayama und Meditation bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/yoga/allgemein/" },
};

export default function YogaAllgemeinPage() {
  return (
    <>
      <WebPageJsonLd
        name="Yoga Allgemein"
        url="/yoga/allgemein/"
        description="Yoga-Kurse in kleinen Gruppen in Berlin Charlottenburg. Asanas, Pranayama und Meditation bei Heilpraktikerin Birgit Mähner."
        mainEntityId="https://www.birgit-maehner.de/yoga/allgemein/#service"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", href: "/" },
          { name: "Yoga Allgemein", href: "/yoga/allgemein/" },
        ]}
      />
      <ServiceJsonLd
        name="Yoga-Kurse"
        description="Yoga-Kurse in kleinen Gruppen mit max. 8 Personen. Asanas, Pranayama, Meditation und Tiefenentspannung. Behutsamer Aufbau der Übungen, angepasst an individuelle Bedürfnisse und Fähigkeiten."
        url="/yoga/allgemein/"
        additionalType="https://de.wikipedia.org/wiki/Yoga"
        serviceType="Yoga"
      />
      <div className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-primary mb-10">
            Yoga Allgemein
          </h1>

        <div className="bg-surface-light rounded-2xl border border-border p-6 mb-10">
          <div>
            <h2 className="text-lg font-display font-bold text-gray-900 mb-3">
              Kurszeiten
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-700">
              <p>Montags: 16:30 – 17:45</p>
              <p>Montags: 18:00 – 19:15</p>
              <p>Dienstags: 16:00 – 17:15</p>
              <p>Dienstags: 17:30 – 18:45</p>
              <p>Mittwochs: 17:00 – 18:15</p>
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
          <Image
            src="/images/yoga1.jpg"
            alt="Yoga-Gruppe in Meditation"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-left sm:mr-6 mb-4"
          />
          <p className="mb-8">
            Der indische Weise Patanjali (ca. 400 n.Chr.) hat in seinen
            Schriften Yoga als Weg beschrieben, der aus acht Stufen besteht.
            Dabei spielen ethisch-moralische Grundsätze ebenso eine Rolle wie
            Körperübungen (Asanas), Atemübungen (Pranayama) und
            Konzentrationsübungen. Ziel aller Bemühungen ist die kosmische
            Glückseligkeit, der sogenannte Samadhi, der von dem Yogi Paramahansa
            Yogananda in seiner Autobiographie sehr anschaulich beschrieben
            wird.
          </p>

          <Image
            src="/images/yoga2.jpg"
            alt="Yoga-Übung im Stehen"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-right sm:ml-6 mb-4"
          />
          <p className="mb-8">
            Durch regelmäßiges Üben der Asanas und Atemtechniken entwickelt sich
            mit der Zeit ein wohliges, leichtes Körpergefühl; man fühlt sich
            erfrischt und voller Kraft. Verspannungen können sich auflösen und
            körperliche Beschwerden können gelindert werden beziehungsweise
            vollständig verschwinden.
          </p>

          <Image
            src="/images/yoga3.jpg"
            alt="Dehnübungen auf der Matte"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-left sm:mr-6 mb-4"
          />
          <p className="mb-8">
            Jedoch nicht nur für den Körper, der in der indischen Philosophie als
            Tempel der Seele betrachtet wird, sondern auch für das
            geistig-seelische Befinden hält Yoga eine Menge Werkzeuge bereit.
            Z.B. kann durch bestimmte Konzentrations- und Atemtechniken das
            Denken zur Ruhe kommen, so dass man den Alltag mit mehr Gelassenheit
            bewältigen kann.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Besonderheiten meiner Yoga-Kurse
          </h2>
          <p>
            Yoga wird in kleinen Gruppen mit max. acht Personen unterrichtet. Es
            werden Übungen miteinbezogen, die auf die persönlichen Bedürfnisse
            der Teilnehmer eingehen. Auch die individuellen Fähigkeiten und
            Möglichkeiten werden berücksichtigt. Die Asanas werden behutsam
            aufgebaut und die Schüler sanft auch an anspruchsvolle Übungen
            herangeführt. Es gibt nach allen Übungen Zeit zum Nachspüren; so
            entwickelt sich mit der Zeit ein gutes Körpergefühl. Jede Stunde
            beginnt mit einer kleinen Meditation, daran schließen sich
            wechselnde Asanas und Atemübungen an. Zum Ende jeder Stunde erfolgt
            eine intensive Entspannung des ganzen Körpers.
          </p>
        </div>

        <Image
          src="/images/yoga4.png"
          alt="Yoga-Gruppe in der Krieger-Stellung"
          width={960}
          height={640}
          className="rounded-xl object-cover w-full mt-10"
        />
        </div>
      </div>
    </>
  );
}
