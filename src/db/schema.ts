import { pgTable, text } from "drizzle-orm/pg-core";

export const posts = pgTable("post", {
  id: text()
    .primaryKey()
    .notNull()
    .$defaultFn(() => crypto.randomUUID()),
  name: text().notNull().default(""),
});
