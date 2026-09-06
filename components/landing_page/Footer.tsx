import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  const locations = [
    "Bletchley",
    "Milton Keynes",
    "Buckingham",
    "Leighton Buzzard",
    "Newport Pagnell",
    "Woburn Sands",
  ];
  const explore = [
    { label: "Our Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Areas We Serve", href: "#areas" },
  ];
  const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="bg-olive-950 text-olive-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="space-y-3">
          <p className="text-lg font-bold tracking-tighter text-white uppercase">
            Fambrood
          </p>
          <p className="text-sm">
            The gold standard in residential and commercial cleaning across
            Buckinghamshire. Family values, professional results.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-white">Contact Us</p>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive-400" />
            42 Chester Close, Bletchley, Milton Keynes, MK3 5JY
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 shrink-0 text-olive-400" />
            +44 01908 XXX XXX
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 shrink-0 text-olive-400" />
            hello@fambrood.co.uk
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            {explore.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-white">Legal</p>
          <ul className="space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="areas"
        className="scroll-mt-16 border-t border-white/10 px-4 py-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-sm">
          Serving:{" "}
          {locations.map((location, index) => (
            <span key={location}>
              {location}
              {index < locations.length - 1 && (
                <span className="text-olive-400"> • </span>
              )}
            </span>
          ))}
        </p>
      </div>

      <div className="border-t border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 text-center text-xs text-olive-400 sm:flex-row sm:justify-between sm:text-left">
          <p>
            Fambrood Cleaning Services Limited is registered in England &
            Wales (Company No. 15719439).
          </p>
          <p>© {year} Fambrood Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
