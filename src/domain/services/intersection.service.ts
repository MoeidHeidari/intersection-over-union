/**
 * Author Moeid Heidari
 * Date 13 May 2022
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BoundingBoxDTO, IOUResponseDTO, IOURquestDTO } from '../../application/dtos';
import { EnvObjects, IntersectionOptions } from '../../infrastructure/config';
import { HttpResponseException } from '../exceptions';
import { processHttpError, validateDTO, validateOutputDTO } from '../helpers';
import { HttpResponse } from '../interfaces';
import { HttpResponseService, LoggerService } from './common';

@Injectable()
export class IntersectionService {
    private readonly logger: LoggerService = new LoggerService(IntersectionService.name);
    private readonly config: any = this.configService.get<IntersectionOptions>(EnvObjects.INTERSECTION_OPTIONS);
    //===========================================================================================
    constructor(private readonly httpResponseService: HttpResponseService, private configService: ConfigService) { }
    //===========================================================================================

    async calculateIOU(boudings:IOURquestDTO): Promise<HttpResponse> {
        var iou:number=0;
        try {
            
            await validateDTO(boudings, this.httpResponseService);
            
            /**
            @todo Write the IOU calculation here... 
            */
            

            const result=new IOUResponseDTO({iou:iou});
            await validateOutputDTO(result, this.logger);
            return  this.httpResponseService.generate(HttpStatus.OK, result);
        } catch (error) {
            processHttpError(error, this.logger);
            throw new HttpResponseException(
                this.httpResponseService.generate(HttpStatus.INTERNAL_SERVER_ERROR)
            );
        }



    }


}