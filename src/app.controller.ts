import { Body, Controller, Get, Post, Render } from "@nestjs/common";
import { AppService, IData } from "./app.service";

interface CreateInterface {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index")
  getHello(): IData[] {
    const students: IData[] = this.appService.getAllData();
    return students;
  }

  @Post()
  createAccount(@Body() createIn: CreateInterface): string {
    console.log(createIn);
    return "Submitted";
  }
}
