/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { Controller, Post, Body, HttpStatus, HttpCode, Get, Param } from '@nestjs/common';
import { HttpResponse } from '../../domain/interfaces';
import { Public } from '../../domain/decorators';
import { IntersectionService } from '../../domain/services/intersection.service';
import { IOURquestDTO } from '../dtos';
@Controller('api/v1/intersection')
export class IntersectionController {
  constructor(private readonly interSectionService: IntersectionService) {}

  @Get()
  async() {
    return 'Welcome to Insection IOU calculation endpoint';
  }
  @Post('iou')
  @HttpCode(HttpStatus.OK)
  @Public()
  async intersection(@Body() body: any): Promise<HttpResponse> {
    const response: HttpResponse = await this.interSectionService.handlIOUReuest(new IOURquestDTO(body));
    return response;
  }
}
