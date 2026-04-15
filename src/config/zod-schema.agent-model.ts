import { z } from "zod";

export const AgentModelSchema = z.union([
  z.string(),
  z
    .object({
      primary: z.string().optional(),
      fallbacks: z.array(z.string()).optional(),
      primaryRetries: z.number().int().min(0).max(5).optional(),
    })
    .strict(),
]);
