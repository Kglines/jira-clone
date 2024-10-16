import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "../schemas";

console.log('CLICKED POST IN SERVER');
const app = new Hono()
.post(
  "/login",
  zValidator("json", loginSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");
    console.log('FEATURES / AUTH / SERVER / ROUTE ==> ', { email, password });

    return c.json({ email, password });
  }
);

export default app;
