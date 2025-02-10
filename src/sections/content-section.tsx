import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContentSectionProps } from "../../types";

export function ContentSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  imagePosition = "right",
  bgColor,
  textAlign = "center",
  imageSize = { width: 650, height: 650 },
}: ContentSectionProps & { imageSize?: { width: number; height: number } }) {
  return (
    <section
      className="py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: bgColor || "#F3F0ED" }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={`flex flex-col-reverse md:flex-row ${
            imagePosition === "left" ? "md:flex-row-reverse" : ""
          } items-center justify-between gap-12 md:gap-16`}
        >
          <div
            className={`w-full md:w-[45%] flex flex-col ${
              textAlign === "center"
                ? "items-center"
                : textAlign === "left"
                ? "items-start"
                : "items-end"
            }`}
          >
            <div
              className={`w-full text-center ${
                textAlign === "center"
                  ? "text-center"
                  : textAlign === "left"
                  ? "md:text-left"
                  : "text-right"
              } space-y-6`}
            >
              {subtitle && (
                <h2 className="text-lg md:text-xl font-medium text-gray-600">
                  {subtitle}
                </h2>
              )}
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div
              className={`mt-8 flex flex-col md:max-w-[70%] md:${
                textAlign === "center" ? "flex-col" : "flex-row"
              } gap-4 ${
                textAlign === "center"
                  ? "justify-center"
                  : textAlign === "left"
                  ? "justify-start"
                  : "justify-end"
              } w-full`}
            >
              {primaryCta && (
                <Button variant="outline" className="custom-button">
                  {primaryCta}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" className="custom-button">
                  {secondaryCta}
                </Button>
              )}
            </div>
          </div>

          <div className="w-full md:w-[45%]">
            <Image
              src={image}
              alt={imageAlt}
              width={imageSize.width}
              height={imageSize.height}
              className="w-full h-auto object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
