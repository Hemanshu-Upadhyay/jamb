import Image from "next/image";
import Link from "next/link";

// Can be more versatile by accepting props as images and link making it fully dynamic and page builder friendly
const HeroSection = () => {
  return (
    <section className="w-full bg-[#F3F0ED] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            priority
            src="/assets/1.webp"
            alt="Luxury fireplace with ornate mirror and decorative items"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>

        <nav className="flex justify-center mt-8 md:mt-12">
          <div className="flex items-center">
            {["Fireplace", "Lighting", "Furniture", "Journal"].map(
              (item, index) => (
                <div key={item} className="flex items-center">
                  {index !== 0 && (
                    <span className="mx-2 text-gray-400 text-sm md:text-base">
                      |
                    </span>
                  )}
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm md:text-lg italic custom-text hover:text-gray-800 transition-colors duration-200 px-2 md:px-3"
                  >
                    {item}
                  </Link>
                </div>
              )
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
