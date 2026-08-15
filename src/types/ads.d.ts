// Ad category identifiers — single source of truth for tabs, routes, and data lookups.
export type AdCategory = "car" | "house" | "clothing" | "items" | "business";

declare global {
  interface Window {
    _mNHandle?: {
      queue: Array<() => void>;
    };
    _mNDetails?: {
      loadTag: (crid: string, size: string, elementId: string) => void;
    };
    adsbygoogle?: unknown[];
  }
}

export type TransactionType = "Buying" | "Selling";

/** Raw shape of each JSON file under src/data — flat name lists only. */
export interface CarDataset {
  carNames: string[];
}

export interface HouseDataset {
  locationList: string[];
}

export interface ClothingDataset {
  clothingItems: string[];
}

export interface ItemsDataset {
  backpackSkins: string[];
}

export interface BusinessDataset {
  businessNames: string[];
  locationSuggestions: string[];
}

export type AdDataset =
  | CarDataset
  | HouseDataset
  | ClothingDataset
  | ItemsDataset
  | BusinessDataset;

/** Normalized shape every category resolves to on the client: just named lists. */
export interface NormalizedAdData {
  primary: string[];
  secondary?: string[];
}
