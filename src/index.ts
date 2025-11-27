import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "./env.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const hostname = env.RAILWAY_PUBLIC_DOMAIN ?? "localhost";

serve(
  {
    fetch: app.fetch,
    port: env.PORT ?? 8080,
    hostname,
  },
  (info) => {
    console.log(`Server is running on ${hostname}:${info.port}`);
  }
);
