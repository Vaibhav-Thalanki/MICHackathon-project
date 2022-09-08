import { Controller, Get, Query } from "@nestjs/common";
import { DataInterface } from "types/data.interface";
import { AggregatorService } from "./aggregator.service";

@Controller()
export class AggregatorController {
  constructor(private readonly aggregatorService: AggregatorService) { }

  @Get('api/getdata')
  async getData(@Query() phone): Promise<DataInterface> {
    return await this.aggregatorService.getData(phone)
  }
}