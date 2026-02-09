export function InfoBanner() {
  return (
    <section className="py-12 bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-primary pl-6 py-2">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Aktuelle Informationen
          </h2>
          <h3 className="text-lg font-display font-semibold text-gray-800 mb-3">
            Neue Krankenkassen-Yogakurse &ndash; 1. Quartal 2026
          </h3>
          <p className="text-gray-700 mb-3">Die wöchentlichen Kurse beginnen wie folgt:</p>
          <ul className="space-y-1 text-gray-700 mb-4">
            <li>Montag, den 19.01.26 &ndash; 16.30 Uhr</li>
            <li>Montag, den 19.01.26 &ndash; 18.00 Uhr</li>
            <li>Dienstag, den 20.01.26 &ndash; 16.00 Uhr</li>
            <li>Dienstag, den 20.01.26 &ndash; 17.30 Uhr</li>
            <li>Mittwoch, den 21.01.26 &ndash; 17.00 Uhr</li>
          </ul>
          <p className="text-gray-700">
            Je 10 Termine &agrave; 75 Minuten, Kursgeb&uuml;hr 170&nbsp;Euro.
          </p>
          <p className="text-gray-700 mt-1">
            Alle Krankenkassen &uuml;bernehmen zwischen 75 und 170&nbsp;&euro;.
          </p>
        </div>
      </div>
    </section>
  );
}
