import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.svg" alt="PrecisionCraft" className="h-8 w-auto mb-4 brightness-0 invert opacity-80" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional laser engraving and industrial marking services. Precision craftsmanship since 2012.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faLinkedin} className="size-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/custom-engraving" className="hover:text-white transition-colors">Custom Engraving</Link></li>
              <li><Link href="/services/industrial-marking" className="hover:text-white transition-colors">Industrial Marking</Link></li>
              <li><Link href="/services/awards-trophies" className="hover:text-white transition-colors">Awards & Trophies</Link></li>
              <li><Link href="/services/signage" className="hover:text-white transition-colors">Business Signage</Link></li>
              <li><Link href="/services/personalization" className="hover:text-white transition-colors">Gift Personalization</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4 mt-0.5 text-secondary" />
                <span>1420 Industrial Blvd, Suite 300<br/>Denver, CO 80204</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-4 text-secondary" />
                <span>(303) 555-0187</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-4 text-secondary" />
                <span>info@precisioncraft.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} PrecisionCraft Laser Engraving. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
