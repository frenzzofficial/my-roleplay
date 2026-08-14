import { z } from "zod";

const adsEnvSchema = z.object({
  NEXT_PUBLIC_MEDIANET_CID: z.string().trim().default(""),

  NEXT_PUBLIC_MEDIANET_LEFT_CRID: z.string().trim().default(""),

  NEXT_PUBLIC_MEDIANET_RIGHT_CRID: z.string().trim().default(""),

  NEXT_PUBLIC_GOOGLE_ADS_CLIENT: z.string().trim().default(""),
});

const parsedAdsEnv = adsEnvSchema.safeParse(process.env);

if (!parsedAdsEnv.success) {
  console.error("❌ Invalid Media.Net environment variables:");

  for (const issue of parsedAdsEnv.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  }

  throw new Error("Media.Net environment validation failed");
}

export const envAdsConfig = Object.freeze({
  MEDIANET_CID: parsedAdsEnv.data.NEXT_PUBLIC_MEDIANET_CID || undefined,
  MEDIANET_LEFT_CRID:
    parsedAdsEnv.data.NEXT_PUBLIC_MEDIANET_LEFT_CRID || undefined,
  MEDIANET_RIGHT_CRID:
    parsedAdsEnv.data.NEXT_PUBLIC_MEDIANET_RIGHT_CRID || undefined,

  GOOGLE_ADS_CLIENT:
    parsedAdsEnv.data.NEXT_PUBLIC_GOOGLE_ADS_CLIENT || undefined,
});

export type EnvAdsConfig = typeof envAdsConfig;
