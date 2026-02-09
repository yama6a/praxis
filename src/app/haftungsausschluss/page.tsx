import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haftungsausschluss & Datenschutz – Ganzheitliche Körpertherapie",
};

export default function HaftungsausschlussPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Haftungsausschluss & Datenschutz
        </h1>

        <div className="text-gray-700 leading-relaxed space-y-10">
          <section>
            <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
              Inhalte
            </h2>
            <p>
              Alle Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Korrektheit, Vollständigkeit oder Aktualität der
              Inhalte wird jedoch keine Gewähr übernommen. Für die eigenen
              Inhalte sind wir gemäß § 7 (1) TMG auf diesen Seiten
              verantwortlich. Nach §§ 8–10 TMG sind wir nicht verpflichtet,
              übermittelte oder gespeicherte Informationen Dritter zu
              überwachen. Alle gesetzlichen Verpflichtungen zur Löschung von
              rechtswidrigen Inhalten bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist erst ab dem Zeitpunkt der
              Kenntnisnahme des Seitenbetreibers einer konkreten
              Rechtsverletzung möglich. Bei Kenntnis von entsprechenden
              Rechtsverletzungen werden entsprechende Inhalte umgehend von uns
              entfernt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
              Links / Verweise
            </h2>
            <p>
              Dieser Internetauftritt enthält Links/Verweise zu externen
              Webseiten Dritter, auf deren Inhalte durch uns kein Einfluss
              genommen werden kann. Durch diesen Umstand kann seitens des
              Betreibers unseres Webauftrittes für die Inhalte extern verlinkter
              Seiten keine Gewähr oder Verantwortung übernommen werden. Für die
              Inhalte der verlinkten Seiten sind ausschließlich die jeweilige
              Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung durch uns auf mögliche
              Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem
              Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden derartige Links umgehend entfernt. Wir
              distanzieren uns ausdrücklich von Inhalten extern verlinkter Seiten
              und deren Betreibern.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch uns erstellten oder in Auftrag gegebenen Inhalte und
              Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Verbreitung, Modifikation, Veränderung und
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
              unserer ausdrücklichen schriftlichen Zustimmung. Kopien dieser
              Seite oder Teilen davon sind nur für den privaten Gebrauch
              gestattet. Der kommerzielle Gebrauch ist untersagt. Soweit die
              Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
              müssen die Urheberrechte Dritter beachtet werden. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie auf
              eine Urheberrechtsverletzung aufmerksam werden, bitten wir Sie um
              einen entsprechenden Hinweis. Bei Kenntnisnahme von
              Rechtsverletzungen werden derartige Inhalte umgehend entfernt.
            </p>
          </section>

          <section id="datenschutz">
            <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
              Datenschutz
            </h2>
            <p>
              Die Nutzung dieses Webauftrittes ist weitestgehend ohne die Angabe
              personenbezogener, privater Daten möglich. Soweit auf unseren
              Seiten entsprechende Daten erhoben werden (beispielsweise für die
              Kontaktaufnahme zum Webseitenbetreiber), erfolgt dies stets auf
              freiwilliger Basis. Diese Daten werden nicht an Dritte
              weitergegeben oder zur ungewollten Kontaktaufnahme durch uns
              verwendet.
            </p>
            <p className="mt-4">
              Ich weise darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>
            <p className="mt-4">
              Aus Sicherheitsgründen und zur Abwehr von Angriffen auf meine
              IT-Systeme werden IP-Adressen und Browserdaten aller
              Webseitenbesucher bis zu 6 Monaten aufbewahrt.
            </p>
            <p className="mt-4">
              Der Verwendung der im Rahmen der Impressumspflicht
              bereitgestellten Daten des Webseitenbetreibers oder dritter
              Personen wird ausdrücklich widersprochen. Im Falle einer
              unerwünschten Kontaktaufnahme oder Zusendung nicht angeforderten
              Informations- oder Werbematerials behalten wir uns rechtliche
              Schritte vor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
              Auskunftsrecht
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über die bezüglich
              Ihrer Person gespeicherten Daten, deren Herkunft und Empfänger
              sowie den Zweck der Speicherung. Auskunft über die gespeicherten
              Daten können Sie über mich erhalten.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
