import type { Metadata } from "next";
import Image from "next/image";
import {
  MdPlace,
  MdPhone,
  MdEmail,
  MdTrain,
  MdDirectionsBus,
  MdDirectionsCar,
  MdSend,
} from "react-icons/md";
import { ObfuscatedEmail } from "@/app/impressum/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt – Ganzheitliche Körpertherapie",
};

export default function KontaktPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Kontakt & Anfahrt
        </h1>

        {/* Address */}
        <div className="mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <MdPlace className="text-primary text-2xl shrink-0" />
              <h2 className="text-xl font-display font-bold text-gray-900">
                Adresse
              </h2>
            </div>
            <div className="flex gap-6">
              <div className="flex-1">
                <address className="not-italic text-gray-700 space-y-1 ml-9">
                  <p className="font-bold text-gray-900">Birgit Mähner</p>
                  <p>Heilpraktikerin und Yogalehrerin</p>
                  <p>Knobelsdorffstr. 34</p>
                  <p>14059 Berlin-Charlottenburg</p>
                </address>
                <div className="ml-9 mt-4 space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <MdPhone className="text-primary shrink-0" />
                    <span>030 / 95 60 80 20</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-primary shrink-0" />
                    <ObfuscatedEmail user="maehner.birgit" domain="gmail.com" />
                  </div>
                </div>
              </div>
              <Image
                src="/images/passfoto-sm.jpg"
                alt="Birgit Mähner"
                width={128}
                height={160}
                className="rounded-xl object-cover w-28 h-36 shrink-0 self-start"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <MdSend className="text-primary text-2xl shrink-0" />
              <h2 className="text-xl font-display font-bold text-gray-900">
                Nachricht senden
              </h2>
            </div>
            <form
              action="https://formsubmit.co/theyama6a@gmail.com"
              method="POST"
              className="space-y-3"
            >
              <input type="hidden" name="_subject" value="Neue Kontaktanfrage – Praxis Körpertherapie" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-lg border border-border px-3 py-2 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                required
                className="w-full rounded-lg border border-border px-3 py-2 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon (optional)"
                className="w-full rounded-lg border border-border px-3 py-2 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="text"
                name="_subject"
                placeholder="Betreff"
                className="w-full rounded-lg border border-border px-3 py-2 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                name="message"
                placeholder="Ihre Nachricht"
                required
                rows={4}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Durch die Nutzung dieses Kontaktformulars werden Ihre durch Sie
                mitgeteilten Daten, Ihre E-Mail Adresse sowie Ihre IP-Adresse
                an mich übermittelt und für weitere Kontaktaufnahmen
                gespeichert.
              </p>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>

        {/* Public transport */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <MdTrain className="text-primary text-2xl shrink-0" />
              <h2 className="text-xl font-display font-bold text-gray-900">
                U-Bahn & S-Bahn
              </h2>
            </div>
            <ul className="text-gray-700 space-y-1 ml-9">
              <li>U-Bhf Sophie-Charlotte-Platz (U2)</li>
              <li>S-Bhf Westend (S41, S42, S45, S46)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <MdDirectionsBus className="text-primary text-2xl shrink-0" />
              <h2 className="text-xl font-display font-bold text-gray-900">
                Bus
              </h2>
            </div>
            <ul className="text-gray-700 space-y-1 ml-9">
              <li>Zillestraße (Buslinie 309)</li>
              <li>Klausener Platz (Buslinien M45, 309)</li>
            </ul>
          </div>
        </div>

        {/* By car / bike / foot */}
        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <MdDirectionsCar className="text-primary text-2xl shrink-0" />
            <h2 className="text-xl font-display font-bold text-gray-900">
              Zu Fuß, mit dem Fahrrad oder Auto
            </h2>
          </div>
          <ul className="list-disc text-gray-700 space-y-2 ml-9">
            <li>
              Über die A100 Abfahrt Knobelsdorffstraße, Richtung Osten bis Ecke
              Danckelmannstraße.
            </li>
            <li>
              Über Otto-Suhr-Allee / Spandauer Damm am Klausener Platz
              Richtung Süden abbiegen in die Danckelmannstr. bis zur Ecke
              Knobelsdorffstr.
            </li>
            <li>
              Über die Bismarckstraße, an der Ecke Danckelmannstraße Richtung
              Norden abbiegen und bis zur Ecke Knobelsdorffstraße.
            </li>
            <li>
              Über die Bismarckstraße, an der Ecke Schlossstraße Richtung
              Norden abbiegen und an der zweiten Ecke links in die
              Knobelsdorffstraße einbiegen.
            </li>
          </ul>
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5775.177154475256!2d13.290201196988356!3d52.51239126600768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e9791fb0264d057!2sPraxis%20f%C3%BCr%20ganzheitliche%20K%C3%B6rpertherapie%20-%20Yoga%20%26%20Shiatsu%20in%20Charlottenburg!5e0!3m2!1sen!2sca!4v1595274900608!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="Google Maps – Praxis für ganzheitliche Körpertherapie"
          />
        </div>
      </div>
    </div>
  );
}
