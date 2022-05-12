/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
 import { Controller, Post, Body, HttpStatus, HttpCode, Get, Param } from '@nestjs/common';
import { HttpResponse } from '../../domain/interfaces';
import { IntersectionService } from '../../domain/services/intersection.service';
import { IOURquestDTO } from '../dtos';
@Controller('api/v1/intersection')
export class IntersectionController{
    constructor(private readonly interSectionService:IntersectionService){}

    @Post('iou')
    @HttpCode(HttpStatus.OK)
    async calculateIou(@Body() body:any):Promise<HttpResponse>{
        const response: HttpResponse = await this.interSectionService.calculateIOU(new IOURquestDTO(body));
        return response;
    }
}