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
/**
 * Intersection service
 */
@Injectable()
export class IntersectionService {
  /**
   * Options for envs
   */
  private options: any = this.configService.get<IntersectionOptions>(EnvObjects.INTERSECTION_OPTIONS);
  //===========================================================================================
  /**
   * Constructor of the intersection service class
   * @param httpResponseService Http response service
   * @param configService Config service
   * @param logger Logger service
   */
  constructor(
    private readonly httpResponseService: HttpResponseService,
    private readonly configService: ConfigService,
    private readonly logger: LoggerService
  ) { }
  //===========================================================================================
  /**
   * Handles the Intersection request
   * @param boudings Bounding boxes
   * @returns HTTPResponse
   */
  async handlIOUReuest(boudings: IOURquestDTO): Promise<HttpResponse> {
    try {
      await validateDTO(boudings, this.httpResponseService);

      const iou = await this.calculateIOU(
        boudings.ground_truth_bounding_box,
        boudings.predicted_bounding_box,
        this.options.number_of_decimal_places || 3
      );

      const result = new IOUResponseDTO({ iou: iou });
      await validateOutputDTO(result, this.logger);
      return this.httpResponseService.generate(HttpStatus.OK, result);
    } catch (error) {
      processHttpError(error, this.logger);
      throw new HttpResponseException(this.httpResponseService.generate(HttpStatus.INTERNAL_SERVER_ERROR));
    }
  }
  //===========================================================================================
  /**
   * Takes two bounding boxes and calculates the Intersection Over Union
   * @param ground_truth_bounding_box ground truth bounding box
   * @param Predicted_bounding_box predicted bounding box
   * @param number_of_decimal_places number of decimal places to calculate the Intersection Over Union
   * @returns number
   */
  async calculateIOU(
    ground_truth_bounding_box: BoundingBoxDTO,
    Predicted_bounding_box: BoundingBoxDTO,
    number_of_decimal_places: number
  ): Promise<number> {
    const area_1 = ground_truth_bounding_box.top * ground_truth_bounding_box.bottom;
    const area_2 = Predicted_bounding_box.top * Predicted_bounding_box.bottom;

    const inter_x1 = Math.max(ground_truth_bounding_box.left, Predicted_bounding_box.left);
    const inter_y1 = Math.max(ground_truth_bounding_box.right, Predicted_bounding_box.right);
    const inter_x2 = Math.min(
      ground_truth_bounding_box.left + ground_truth_bounding_box.top,
      Predicted_bounding_box.left + Predicted_bounding_box.top
    );
    const inter_y2 = Math.min(
      ground_truth_bounding_box.right + ground_truth_bounding_box.bottom,
      Predicted_bounding_box.right + Predicted_bounding_box.bottom
    );

    const inter_w = Math.max(0, inter_x2 - inter_x1);
    const inter_h = Math.max(0, inter_y2 - inter_y1);

    if (inter_w <= 0 || inter_h <= 0) return 0.0;
    const iou = (inter_w * inter_h) / (area_1 + area_2 - inter_w * inter_h);

    return Math.round(iou * Math.pow(10, number_of_decimal_places)) / Math.pow(10, number_of_decimal_places);
  }
}
