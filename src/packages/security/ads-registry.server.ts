import "server-only";
import { createHash } from "node:crypto";
import businessData from "@/data/business.json";
import carsData from "@/data/cars.json";
import clothingsData from "@/data/clothings.json";
import houseData from "@/data/house.json";
import itemsData from "@/data/items.json";
import type {
  BusinessDataset,
  CarDataset,
  ClothingDataset,
  HouseDataset,
  ItemsDataset,
  NormalizedAdData,
} from "@/types/ads";

const normalize = (): Record<string, NormalizedAdData> => {
  const cars = carsData as CarDataset;
  const house = houseData as HouseDataset;
  const clothings = clothingsData as ClothingDataset;
  const items = itemsData as ItemsDataset;
  const business = businessData as BusinessDataset;

  return {
    car: { primary: cars.carNames },
    house: { primary: house.locationList },
    clothing: { primary: clothings.clothingItems },
    items: { primary: items.itemsList },
    business: {
      primary: business.businessNames,
      secondary: business.locationSuggestions,
    },
  };
};

const registry = normalize();

export const AD_CATEGORIES = Object.keys(registry) as Array<
  keyof typeof registry
>;

export const getAdDataset = (category: string): NormalizedAdData | null => {
  return registry[category as keyof typeof registry] ?? null;
};

/** Stable content hash per category, used as a cheap revalidation token. */
export const getDatasetVersion = (category: string): string | null => {
  const dataset = getAdDataset(category);
  if (!dataset) return null;
  return createHash("sha1")
    .update(JSON.stringify(dataset))
    .digest("hex")
    .slice(0, 16);
};
