import type { InferModel } from "drizzle-orm";
import {
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  githubId: integer("github_id").unique(),
  googleId: varchar("google_id", { length: 50 }).unique(),
  name: varchar("name", { length: 256 }).notNull(),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type User = InferModel<typeof users>;
