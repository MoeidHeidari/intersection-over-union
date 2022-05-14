/**
 * Author Moeid Heidari
 * Date 13 May 2022
 */
import { IntersectionService } from '../../src/domain/services/intersection.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from '../../src/infrastructure/modules/common/common.module';
import { HttpResponseService, LoggerService } from '../../src/domain/services/common';
import {
  aFakeIntersection,
  intersectionWithEmptyGroundTruthBoundinBox,
  intersectionWithEmptyPredictedBoundingBox,
  intersectionWithoutGroundTruthBoundinBox,
  intersectionWithoutPredictedBoundingBox,
} from '../factories/intersection.factory';
import { IOURquestDTO } from '../../src/application/dtos';
import { HttpResponseException } from '../../src/domain/exceptions';
import {
  TEST_INTERSECTION_1,
  TEST_INTERSECTION_10,
  TEST_INTERSECTION_2,
  TEST_INTERSECTION_3,
  TEST_INTERSECTION_4,
  TEST_INTERSECTION_5,
  TEST_INTERSECTION_6,
  TEST_INTERSECTION_7,
  TEST_INTERSECTION_8,
  TEST_INTERSECTION_9,
} from '../factories';
import { validate } from '../../src/infrastructure/config';
describe('intersection service', () => {
  /**
   * Make an Instantiation from Intersection service.
   */
  let service: IntersectionService;
  const config = new ConfigService();
  const logger = new LoggerService(IntersectionService.name);
  const httpReponseService = new HttpResponseService();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: HttpResponseService,
          useValue: httpReponseService,
        },
        {
          provide: LoggerService,
          useValue: logger,
        },
        IntersectionService,
      ],
      imports: [
        CommonModule,
        ConfigModule.forRoot({
          validate,
          isGlobal: true,
          cache: false,
          expandVariables: true,
          load: [() => ({ IntersectionOptions: { number_of_decimal_places: '3' } })],
        }),
      ],
    }).compile();
    service = module.get<IntersectionService>(IntersectionService);
  });
  //======================================================================================================
  describe('service status', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
  //=======================================================================================================
  describe('service tests', () => {
    it('must return 0', async () => {
      const result = await service.handlIOUReuest(aFakeIntersection);
      expect(result.data.iou).toBeDefined();
    });
    it('intersection Without Predicted Bounding Box must get http bad request', () => {
      const result = service.handlIOUReuest(new IOURquestDTO(intersectionWithoutGroundTruthBoundinBox));
      expect(result).rejects.toThrowError(HttpResponseException);
    });
    it('must get http bad request', () => {
      const result = service.handlIOUReuest(new IOURquestDTO(intersectionWithoutPredictedBoundingBox));
      expect(result).rejects.toThrowError(HttpResponseException);
    });
    it('intersection With Empty Ground Truth Boundin Box must get http bad request', () => {
      const result = service.handlIOUReuest(new IOURquestDTO(intersectionWithEmptyGroundTruthBoundinBox));
      expect(result).rejects.toThrowError(HttpResponseException);
    });
    it('intersection With Empty Predicted Bounding Box must get http bad request', () => {
      const result = service.handlIOUReuest(new IOURquestDTO(intersectionWithEmptyPredictedBoundingBox));
      expect(result).rejects.toThrowError(HttpResponseException);
    });
  });
  //=======================================================================================================

  describe('iou calculation tests', () => {
    it('should return ' + TEST_INTERSECTION_1.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_1.ground_truth_bounding_box,
        TEST_INTERSECTION_1.predicted_bounding_box,
        TEST_INTERSECTION_1.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_1.expected);
    });
    it('should return ' + TEST_INTERSECTION_2.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_2.ground_truth_bounding_box,
        TEST_INTERSECTION_2.predicted_bounding_box,
        TEST_INTERSECTION_2.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_2.expected);
    });
    it('should return ' + TEST_INTERSECTION_3.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_3.ground_truth_bounding_box,
        TEST_INTERSECTION_3.predicted_bounding_box,
        TEST_INTERSECTION_3.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_3.expected);
    });
    it('should return ' + TEST_INTERSECTION_4.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_4.ground_truth_bounding_box,
        TEST_INTERSECTION_4.predicted_bounding_box,
        TEST_INTERSECTION_4.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_4.expected);
    });
    it('should return ' + TEST_INTERSECTION_5.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_5.ground_truth_bounding_box,
        TEST_INTERSECTION_5.predicted_bounding_box,
        TEST_INTERSECTION_5.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_5.expected);
    });
    it('should return ' + TEST_INTERSECTION_6.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_6.ground_truth_bounding_box,
        TEST_INTERSECTION_6.predicted_bounding_box,
        TEST_INTERSECTION_6.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_6.expected);
    });
    it('should return ' + TEST_INTERSECTION_7.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_7.ground_truth_bounding_box,
        TEST_INTERSECTION_7.predicted_bounding_box,
        TEST_INTERSECTION_7.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_7.expected);
    });
    it('should return ' + TEST_INTERSECTION_8.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_8.ground_truth_bounding_box,
        TEST_INTERSECTION_8.predicted_bounding_box,
        TEST_INTERSECTION_8.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_8.expected);
    });
    it('should return ' + TEST_INTERSECTION_9.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_9.ground_truth_bounding_box,
        TEST_INTERSECTION_9.predicted_bounding_box,
        TEST_INTERSECTION_9.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_9.expected);
    });
    it('should return ' + TEST_INTERSECTION_10.expected, async () => {
      const result = await service.calculateIOU(
        TEST_INTERSECTION_10.ground_truth_bounding_box,
        TEST_INTERSECTION_10.predicted_bounding_box,
        TEST_INTERSECTION_10.number_of_decimal_places
      );
      expect(result).toEqual(TEST_INTERSECTION_10.expected);
    });
  });
});
