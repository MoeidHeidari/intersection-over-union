/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
 import { Controller, Post, Body, HttpStatus, HttpCode, Get, Param } from '@nestjs/common';
import { HttpResponse } from '../../domain/interfaces';
import { IOURquestDTO } from '../dtos';
@Controller('api/v1/intersection')
export class IntersectionController{
    constructor(){}

    @Post('iou')
    @HttpCode(HttpStatus.OK)
    async calculateIou(@Body() body:IOURquestDTO):Promise<any>{
        return body;
    }
}