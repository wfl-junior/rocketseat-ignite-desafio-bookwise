import { z } from "zod";

export const githubUserValidationSchema = z.object({
  id: z.number(),
  name: z.string(),
  avatar_url: z.string().url().nullish(),
});
