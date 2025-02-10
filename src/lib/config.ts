export const ASPECT_RATIOS = {
  square: "1/1",
  landscape: "4/3",
  portrait: "3/4",
  custom: "16/9",
} as const;

export const GRID_CONFIG = {
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
