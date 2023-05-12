import { Injectable } from "@nestjs/common";

export interface IData {
  firstname: string;
  lastname: string;
  age: number;
}

@Injectable()
export class AppService {
  private readonly iData: IData[] = [
    {
      firstname: "Khalid",
      lastname: "Mujahid",
      age: 22,
    },
    {
      firstname: "Khalid",
      lastname: "Mujahid",
      age: 22,
    },
    {
      firstname: "Khalid",
      lastname: "Mujahid",
      age: 22,
    },
  ];

  getAllData(): IData[] {
    return this.iData;
  }
}
