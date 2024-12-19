import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import meetingRoutes from "./router/meeting.routes";

class servers {
  public app: Application;
  protected limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    max: 500, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

  constructor() {
    this.app = express();
    dotenv.config();
    this.plugins();
    this.routes();
  }

  protected plugins() {
    const origin =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://medquest-inventory.vercel.app";

    this.app.use(express.json());
    this.app.use(
      cors<Request>({
        credentials: true,
        origin: origin,
      })
    );
  }

  protected routes() {
    this.app.get("/", (req: Request, res: Response): Response => {
      return res.send("api is ready to use");
    });

    this.app.use("/meeting", meetingRoutes);
  }
}

const app = new servers().app;
const port = (process.env.PORT as number | undefined) || 5000;
app.listen(port, "0.0.0.0", (): void =>
  console.log("server listening on port 5000")
);
