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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-primary pl-6 py-2">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Aktuelle Informationen
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="shrink-0 cursor-zoom-in rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow sm:w-1/3">
                  <Image
                    src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerOmVm2d5PsUaGD6s3OcWj3Vs0OQ8sMe2FAfFeXoJ2YrRPyBKqzoJfd2sgVrAFjFqWotlEq6odxaKE2P1NwynxVV9pQhXnXIoDLc6-ZgpTexgMM2bTuifAIAE9HDq_Pk2NrS7EvHA=s4000"
                    alt="Kloster Lehnin – Wochenend-Retreat"
                    width={300}
                    height={200}
                    className="w-full object-cover"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <DialogTitle className="sr-only">
                  Kloster Lehnin – Wochenend-Retreat
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Foto vom Kloster Lehnin
                </DialogDescription>
                <Image
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerOmVm2d5PsUaGD6s3OcWj3Vs0OQ8sMe2FAfFeXoJ2YrRPyBKqzoJfd2sgVrAFjFqWotlEq6odxaKE2P1NwynxVV9pQhXnXIoDLc6-ZgpTexgMM2bTuifAIAE9HDq_Pk2NrS7EvHA=s4000"
                  alt="Kloster Lehnin – Wochenend-Retreat"
                  width={1600}
                  height={1067}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>

            <div className="flex-1">
              <h3 className="text-lg font-display font-semibold text-gray-800 mb-3">
                Wochenend-Retreat
              </h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>29.&ndash;31. Mai 2026</li>
                <li>
                  Im{" "}
                  <a
                    href="https://maps.app.goo.gl/LjvdVCpRFVaNX7ed7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    Kloster Lehnin
                  </a>
                </li>
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
    </section>
  );
}
