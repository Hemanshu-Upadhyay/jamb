import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductGridProps } from "../../types";

const ASPECT_RATIOS = {
  square: "1/1",
  landscape: "4/3",
  portrait: "3/4",
  custom: "16/9",
} as const;

const GRID_CONFIG = {
  square: {
    grid: "grid-cols-[repeat(auto-fit,minmax(180px,1fr))]",
    spacing: "gap-4",
    imageSize: "h-[180px]",
  },
  landscape: {
    grid: "grid-cols-[repeat(auto-fit,minmax(240px,1fr))]",
    spacing: "gap-6",
    imageSize: "h-[200px]",
  },
  portrait: {
    grid: "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]",
    spacing: "gap-8",
    imageSize: "h-[240px]",
  },
  custom: {
    grid: "grid-cols-[repeat(auto-fit,minmax(220px,1fr))]",
    spacing: "gap-6",
    imageSize: "h-[180px]",
  },
} as const;

export function ProductGrid({
  title,
  products,
  aspect = "landscape",
  imageFit = "contain",
  scrollable = false,
  className = "",
}: ProductGridProps) {
  const config = GRID_CONFIG[aspect];

  return (
    <section className={cn("bg-[#E3E3E3] py-8", className)}>
      <div className="container mx-auto max-w-[1900px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-center mb-8">{title}</h2>

        <div
          className={cn(
            scrollable
              ? "flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              : "grid",
            !scrollable && config.grid,
            !scrollable && config.spacing
          )}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "group flex flex-col transition-opacity cursor-pointer items-center justify-center",
                scrollable && "min-w-[240px] snap-center mr-6 last:mr-0"
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden bg-white",
                  !scrollable ? "aspect-[var(--aspect)]" : config.imageSize
                )}
                style={
                  {
                    "--aspect": ASPECT_RATIOS[product.aspect || aspect],
                  } as React.CSSProperties
                }
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    "object-contain p-4 transition-transform duration-300 group-hover:scale-105",
                    imageFit === "cover" && "object-cover p-0"
                  )}
                  loading="lazy"
                />
              </div>

              <div className="text-center mt-4 space-y-1 px-2">
                <h3 className="text-base font-semibold line-clamp-1">
                  {product.title}
                </h3>
                <p className="custom-text font-semibold line-clamp-2 text-sm">
                  {product.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
