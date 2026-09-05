import { Button } from "../ui/button";
import { BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex gap-4 w-full p-4">
      <div className="flex flex-col gap-4 p-4 w-1/2 text-pretty">
        <div className="flex gap-2">
          <BadgeCheck />
          <span className="text-lg font-semibold">
            Enhanced DBS checked professionals
          </span>
        </div>

        <span className="text-5xl font-bold">
          Spotless Spaces, Trusted Hands: Milton Keynes’ Premier Cleaning
          Professionals
        </span>
        <span className="text-2xl">
          Experience the joy of a pristine home or office. Enhanced DBS-checked,
          reliable, and tailored to your schedule.
        </span>
        <div className="flex gap-4">
          <Button>Get a Free Quote</Button>
          <Button>Book your clean now</Button>
        </div>
      </div>
      <div className="bg-olive-600 flex-1">Form</div>
    </div>
  );
}
