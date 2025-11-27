import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "./env.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
    hostname: env.RAILWAY_PUBLIC_DOMAIN,
  },
  (info) => {
    console.log(`Server is running on ${env.RAILWAY_PUBLIC_DOMAIN}:${info.port}`);
  }
);
