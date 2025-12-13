// app/env.ts
//import { createEnv } from "@t3-oss/env-nextjs";
/*import { z } from "zod";

export const env = createEnv({
  server: {
    // Make these optional so the build passes without them
    LASTFM_API_TOKEN: z.string().length(32).optional(),
    GITHUB_TOKEN: z.string().startsWith("ghp_").optional(),
    WAKATIME_API_KEY: z.string().min(1).optional(),
    SPOTIFY_CLIENT_ID: z.string().min(1).optional(),
    SPOTIFY_CLIENT_SECRET: z.string().min(1).optional(),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1).optional(),
    DISCORD_WEBHOOK_URL: z.string().min(30).optional(),
    
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    // Keep these if you plan to use analytics, or make optional too
    NEXT_PUBLIC_UMAMI_URL: z.string().url().optional(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
});
*/