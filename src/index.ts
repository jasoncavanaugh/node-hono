import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
    // hostname: process.env.RAILWAY_PUBLIC_DOMAIN,
  },
  (info) => {
    console.log(
      `Server is running on ${process.env.RAILWAY_PUBLIC_DOMAIN}:${info.port}`
    );
  }
);
