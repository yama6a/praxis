import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import Link from "next/link";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-footer-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-secondary">
              Praxis Ganzheitliche Körpertherapie
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Ihr Ort für Ruhe, Kraft und ganzheitliche Gesundheit im Herzen von
              Berlin Charlottenburg.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start">
                <MdPlace className="h-4 w-4 mr-2 mt-1 shrink-0" />
                <span>
                  Knobelsdorffstr. 34
                  <br />
                  14059 Berlin Charlottenburg
                </span>
              </li>
              <li className="flex items-center">
                <MdPhone className="h-4 w-4 mr-2 shrink-0" />
                <span>030 / 95 60 80 20</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="h-4 w-4 mr-2 shrink-0" />
                <ObfuscatedEmail />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/kontakt" className="hover:text-white">
                  Kontakt & Anfahrt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/qualifikationen" className="hover:text-white">
                  Qualifikationen
                </Link>
              </li>
              <li>
                <Link href="/haftungsausschluss" className="hover:text-white">
                  Haftungsausschluss
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Praxis Ganzheitliche Körpertherapie. Alle
          Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
