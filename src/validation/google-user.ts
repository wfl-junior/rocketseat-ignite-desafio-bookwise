import { z } from "zod";

export const googleUserValidationSchema = z.object({
  sub: z.string(),
  name: z.string(),
  picture: z.string().url().nullish(),
});
