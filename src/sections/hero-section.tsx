"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#F3F0ED] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            priority
            src="/assets/1.webp"
            alt="Luxury fireplace with ornate mirror and decorative items"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
          className="flex justify-center mt-8 md:mt-12"
        >
          <motion.div className="flex items-center">
            {["Fireplace", "Lighting", "Furniture", "Journal"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  {index !== 0 && (
                    <span className="mx-2 text-gray-400 text-sm md:text-base">
                      |
                    </span>
                  )}
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm md:text-lg italic font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 px-2 md:px-4"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.nav>
      </div>
    </section>
  );
};

export default HeroSection;
