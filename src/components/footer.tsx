import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { footerData } from "../../mockData/data";
import { FooterSectionProps } from "../../types";

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
  className = "",
}) => (
  <div className={`border-t border-[#9C9C9D] pt-8 ${className}`}>
    <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
    <ul className="space-y-2 text-md custom-text">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href || "#"} className="hover:text-gray-700">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Newsletter = () => (
  <div className="space-y-4 mt-4">
    <h3 className="text-md font-medium custom-text">Newsletter</h3>
    <div className="flex">
      <div className="relative flex w-full gap-1">
        <Input
          type="email"
          placeholder="Search"
          className="h-12 flex-grow rounded-none border border-[#FFFFFF] bg-white pr-24 text-sm focus-visible:ring-0"
        />
        <button className="h-12 border border-gray-200 bg-white px-6 text-md uppercase custom-text transition-colors hover:bg-gray-50">
          Subscribe
        </button>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox
        id="privacy"
        className="mb-[3.5px] rounded-full border-gray-600 data-[state=checked]:bg-gray-900"
      />
      <label htmlFor="privacy" className="text-md custom-text">
        I agree to our{" "}
        <Link href="/privacy-policy" className="underline hover:text-gray-700">
          Privacy Policy
        </Link>
      </label>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className=" flex gap-10 mt-4">
    <div className="space-y-1 text-md custom-text">
      <p>Tel: +44 (0) 207 730 2122</p>
      <p>95-97 Pimlico Rd</p>
      <p>London SW1W 8PH</p>
    </div>
    <a
      href="mailto:hello@jamb.co.uk"
      className="hover:text-gray-700 custom-text"
    >
      hello@jamb.co.uk
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#E3E3E3] ">
      <div className="container px-4 py-16 md:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <ContactInfo />
          <div />
          <Newsletter />
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-8">
            <FooterSection {...footerData.reproductionChimneypieces} />
            <FooterSection {...footerData.antiqueChimneypieces} />
            <div className="border-t border-[#9C9C9D] pt-8">
              <h3 className="text-md font-semibold text-gray-900">
                <Link href="#" className="hover:text-gray-700">
                  Sell an Antique Chimneypiece
                </Link>
              </h3>
            </div>
          </div>

          <div>
            <FooterSection {...footerData.reproductionLighting} />
          </div>

          <div className="space-y-8">
            <FooterSection {...footerData.reproductionFurniture} />
            <FooterSection {...footerData.antiqueFurniture} />
          </div>

          <div>
            <FooterSection {...footerData.journal} />
          </div>

          <div>
            <FooterSection {...footerData.about} />
          </div>
        </div>
      </div>
    </footer>
  );
}
