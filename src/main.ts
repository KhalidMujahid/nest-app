import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as express from "express";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(express.static("public"));

  app.enableCors({ origin: "*" });

  app.setViewEngine("ejs");

  app.setBaseViewsDir("views");

  app.disable("x-powered-by");

  await app.listen(PORT);
}
bootstrap();
