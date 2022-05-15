/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Get,
  Header,
  RequestMapping,
  RequestMethod,
  CacheInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { HttpResponse } from '../../domain/interfaces';
import { Public } from '../../domain/decorators';
import { IntersectionService } from '../../domain/services/intersection.service';
import { IOUResponseDTO, IOURquestDTO } from '../dtos';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
/**
 * Intersection controller
 */
@Controller('api/v1/intersection')
@UseInterceptors(CacheInterceptor)
export class IntersectionController {
  /**
   * Intersection controller class constructor
   * @param interSectionService Intersection service
   */
  constructor(private readonly interSectionService: IntersectionService) {}

  //===========================================================================================================================
  /**
   * Entrypoint of the IUO API
   * @returns Text
   */
  @ApiOperation({ summary: 'Entry point for Intersection API' })
  @ApiResponse({
    status: 200,
    description: 'Returns back the calculated IUO(Intersection Over Union)',
    type: String,
  })
  @Get()
  @Public()
  async() {
    return 'Welcome to Insection IOU calculation endpoint';
  }
  //===========================================================================================================================
  /**
   * Takes two bounding boxes and calculates the Intersection Over Unionn of them.
   * @param body Bounding boxes of the intersection
   * @returns HTTPReponse
   */
  @ApiOperation({ summary: 'Calaculates the intersection of two bounding boxes' })
  @ApiResponse({
    status: 200,
    description: 'Returns back the calculated IUO(Intersection Over Union)',
    type: IOUResponseDTO,
  })
  @ApiBody({ type: [IOURquestDTO] })
  @Header('content-type', 'application/json')
  @Post('iou')
  @HttpCode(HttpStatus.OK)
  @Public()
  async intersection(@Body() body: any): Promise<HttpResponse> {
    const response: HttpResponse = await this.interSectionService.handlIOUReuest(new IOURquestDTO(body));
    return response;
  }
}
