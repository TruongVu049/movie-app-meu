import { IMAGE_SIZES } from "../constants";

export function getImageUrl(
  path: string,
  size: keyof typeof IMAGE_SIZES = "original"
): string {
  if (!path) {
    throw new Error("Image path is required.");
  }
  const selectedSize = IMAGE_SIZES[size];
  return `${"https://image.tmdb.org/t/p"}/${selectedSize}/${path}`;
}
