import { envAppConfig } from "../env/app.env";
import { envPublicConfig } from "../env/public.env";

export const appConfig = Object.freeze({
  app: {
    name: envPublicConfig.APP_NAME,
    version: envPublicConfig.APP_VERSION,
    description: envPublicConfig.APP_DESCRIPTION,
    environment: envAppConfig.NODE_ENV,
    locale: "en",
    timezone: "UTC",
  },

  site: {
    url: envPublicConfig.SITE_URL,
    name: envPublicConfig.APP_NAME,
    title: envPublicConfig.SITE_TITLE,
    description: envPublicConfig.APP_DESCRIPTION,

    logoUrl: envPublicConfig.LOGO_URL,
    ogImageUrl: envPublicConfig.OG_IMAGE_URL,

    theme: envPublicConfig.ACTIVE_THEME,

    author: {
      name: envPublicConfig.AUTHOR_NAME,
      url: envPublicConfig.AUTHOR_URL,
    },
  },

  logging: {
    enabled: envAppConfig.NODE_ENV !== "production",
    stackTrace: envAppConfig.NODE_ENV !== "production",
  },

  headers: {
    requestId: "X-Request-Id",
    traceId: "X-Trace-Id",
    poweredBy: "X-Powered-By",
  },

  pagination: {
    defaultPage: 1,
    defaultLimit: 20,
    maxLimit: 100,
  },

  routes: {
    home: "/",
    about: "/about",

    policy: "/policy",
    privacy: "/privacy",

    robots: "/robots.txt",
    sitemap: "/sitemap.xml",
    favicon: "/favicon.ico",
  },

  keywords: [
    // Brand / Core
    "My Roleplay",
    "My Roleplay Life",
    "My Roleplay GTA",
    "My Roleplay RP",
    "Roleplayer",
    "Roleplay",
    "RP",

    // GTA 5 Roleplay — Primary
    "gta rp",
    "gta 5 rp",
    "gta 5 roleplay",
    "gta v rp",
    "gta v roleplay",
    "gta roleplay",
    "grand theft auto roleplay",
    "grand theft auto 5 roleplay",
    "grand theft auto v roleplay",
    "gta 5 online roleplay",
    "gta rp server",
    "gta 5 rp server",
    "gta v rp server",
    "gta roleplay server",

    // GTA RP Classifieds / Advertisements
    "gta rp classifieds",
    "gta 5 rp classifieds",
    "gta v rp classifieds",
    "gta roleplay classifieds",
    "gta rp ads",
    "gta 5 rp ads",
    "gta rp advertisement",
    "gta rp advertisements",
    "gta 5 rp advertisement",
    "gta 5 rp advertisements",
    "gta rp ad",
    "gta rp ad format",
    "gta rp advertisement format",
    "gta rp classified ads",
    "gta 5 rp classified ads",
    "gta rp classified advertisement",
    "gta rp ad maker",
    "gta rp advertisement maker",
    "gta 5 rp ad maker",
    "gta 5 rp advertisement maker",
    "gta rp ad generator",
    "gta 5 rp ad generator",
    "gta v rp ad generator",

    // LifeInvader — Primary Topic
    "lifeinvader",
    "life invader",
    "gta lifeinvader",
    "gta rp lifeinvader",
    "gta 5 lifeinvader",
    "gta v lifeinvader",
    "lifeinvader gta rp",
    "lifeinvader gta 5",
    "lifeinvader roleplay",
    "lifeinvader ads",
    "lifeinvader advertisement",
    "lifeinvader advertisements",
    "lifeinvader classifieds",
    "lifeinvader ad",
    "lifeinvader ad format",

    // LifeInvader Generator
    "lifeinvader ad generator",
    "lifeinvader advertisement generator",
    "lifeinvader ads generator",
    "life invader ad generator",
    "life invader advertisement generator",
    "gta rp lifeinvader ad generator",
    "gta 5 lifeinvader ad generator",
    "gta v lifeinvader ad generator",
    "lifeinvader ad maker",
    "lifeinvader advertisement maker",
    "lifeinvader ads maker",
    "gta rp lifeinvader ad maker",
    "gta 5 lifeinvader ad maker",

    // LifeInvader Car Ads
    "lifeinvader car ad",
    "lifeinvader car advertisement",
    "lifeinvader car ads",
    "lifeinvader car ad generator",
    "lifeinvader car advertisement generator",
    "lifeinvader car ad maker",
    "gta rp car ad generator",
    "gta 5 rp car ad generator",
    "gta rp car advertisement",
    "gta rp car advertisement generator",
    "gta 5 rp car ad maker",

    // LifeInvader House / Property Ads
    "lifeinvader house ad",
    "lifeinvader house advertisement",
    "lifeinvader house ads",
    "lifeinvader house ad generator",
    "lifeinvader house advertisement generator",
    "lifeinvader house ad maker",
    "gta rp house ad generator",
    "gta 5 rp house ad generator",
    "gta rp property ad generator",
    "gta rp property advertisement",
    "gta rp property ads",

    // LifeInvader Business Ads
    "lifeinvader business ad",
    "lifeinvader business advertisement",
    "lifeinvader business ads",
    "lifeinvader business ad generator",
    "lifeinvader business advertisement generator",
    "lifeinvader business ad maker",
    "gta rp business ad generator",
    "gta 5 rp business ad generator",
    "gta rp business advertisement",
    "gta rp business ad maker",

    // Clothing / Item Ads
    "lifeinvader clothing ad",
    "lifeinvader clothing advertisement",
    "lifeinvader clothing ad generator",
    "lifeinvader item ad",
    "lifeinvader item advertisement",
    "lifeinvader item ad generator",
    "gta rp item ad generator",
    "gta 5 rp item ad generator",
    "gta rp clothing ad generator",

    // GTA RP Marketplace / Buying & Selling
    "gta rp marketplace",
    "gta 5 rp marketplace",
    "gta rp buy and sell",
    "gta rp buying and selling",
    "gta rp items for sale",
    "gta rp cars for sale",
    "gta rp houses for sale",
    "gta rp businesses for sale",
    "gta rp property for sale",

    // GTA RP Guides / Information
    "gta rp guide",
    "gta 5 rp guide",
    "gta 5 roleplay guide",
    "gta rp beginner guide",
    "gta 5 rp beginner guide",
    "gta rp rules",
    "gta 5 rp rules",
    "gta rp terms",
    "gta rp terminology",
    "gta roleplay terms",

    // Grand RP
    "grand rp",
    "grand rp lifeinvader",
    "grand rp advertisement",
    "grand rp advertisement generator",
    "grand rp ad generator",
    "grand rp lifeinvader ad",
    "grand rp lifeinvader advertisement",
    "grand rp classifieds",
  ],
});

export type AppConfig = typeof appConfig;
