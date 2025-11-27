import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const hostname = process.env.RAILWAY_PUBLIC_DOMAIN ?? "localhost";
serve(
  {
    fetch: app.fetch,
    port: 5173,
    // port: 8080,
    hostname,
  },
  (info) => {
    console.log(`Server is running on ${hostname}:${info.port}`);
  }
);
