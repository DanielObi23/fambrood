import { Button } from "@/components/ui/button";
import { House } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full bg-white justify-between items-center">
      <div className="flex items-end gap-2 p-4">
        <House className="w-8 h-8 text-green-950" />
        <span className="font-bold text-xl uppercase tracking-tighter">
          Fambrood
        </span>
      </div>
      <div className="flex items-center gap-4 p-4">
        <ul className="capitalize flex gap-4 text-base font-semibold">
          <li>our services</li>
          <li>why choose us</li>
          <li>areas we serve</li>
        </ul>
        <Button className="">Get a Free Quote</Button>
      </div>
    </header>
  );
}
