"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function InfoBanner() {
  return (
    <section className="py-12 bg-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-primary pl-6 py-2">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Aktuelle Informationen
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative shrink-0 h-48 sm:h-auto sm:w-1/4 sm:self-stretch cursor-zoom-in rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src="/images/yoga3.jpg"
                    alt="Yogakurs"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <DialogTitle className="sr-only">Yogakurs</DialogTitle>
                <DialogDescription className="sr-only">
                  Foto aus dem Yogakurs
                </DialogDescription>
                <Image
                  src="/images/yoga3.jpg"
                  alt="Yogakurs"
                  width={1600}
                  height={1067}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>

            <div className="flex-1">
              <h3 className="text-lg font-display font-semibold text-gray-800 mb-3">
                Neue Krankenkassen-Pr&auml;ventionskurse ab Sept. 2026
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-gray-700 font-medium mb-1">Kursbeginn jeweils:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Montag, 21. Sept., 16:30&ndash;17:45 &amp; 18:00&ndash;19:15</li>
                    <li>Dienstag, 22. Sept., 16:00&ndash;17:15 &amp; 17:30&ndash;18:45</li>
                    <li>Mittwoch, 23. Sept., 17:00&ndash;18:15</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li>Kursdauer: 10 Unterrichtstermine</li>
                    <li>Kosten: 170,&ndash;&nbsp;&euro;</li>
                    <li>Krankenkassen &uuml;bernehmen 75&ndash;170&nbsp;&euro;</li>
                  </ul>
                  <p className="text-gray-700">
                    Bei Interesse und f&uuml;r weitere Informationen,
                    <br />

                    <Link
                      href="/kontakt"
                      className="text-primary underline underline-offset-2 hover:text-primary/80"
                    >
                      kontaktieren Sie mich
                    </Link>
                    {" "}bitte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
