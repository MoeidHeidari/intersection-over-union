/**
 * Author Moeid Heidari
 * Date 13 May 2022
 */
import { Test } from '@nestjs/testing';
import { IntersectionService } from '../../src/domain/services/intersection.service';
import { IntersectionController } from '../../src/application/controllers';
import { aFakeIntersection, intersectionWithoutGroundTruthBoundinBox } from '../factories';

describe('Intersector controller test', () => {
  let intersectionService: jest.Mocked<IntersectionService>;
  let intersectionController: IntersectionController;

  const intersectionServiceMock: Partial<IntersectionService> = {
    handlIOUReuest: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [IntersectionController],
      providers: [
        {
          provide: IntersectionController,
          useValue: intersectionController,
        },
        {
          provide: IntersectionService,
          useValue: intersectionServiceMock,
        },
      ],
    }).compile();

    intersectionService = module.get(IntersectionService);
    intersectionController = module.get<IntersectionController>(IntersectionController);
  });

  describe('Controller status', () => {
    it('Should be defined', () => {
      expect(intersectionController).toBeDefined();
    });
  });
  describe('intersection test', () => {
    it('should return valid IOU', async () => {
      const response = {
        type: 'Success',
        status: 200,
        message: 'OK',
        description: 'The request has succeeded',
        data: {
          iou: 0.851,
        },
      };
      jest.spyOn(intersectionService, 'handlIOUReuest').mockImplementation(() => Promise.resolve(response));
      const result = await intersectionController.intersection(aFakeIntersection);
      expect(result.status).toEqual(200);
    });
    it('should return Bad request HTTpReponse', async () => {
      const response = {
        type: 'Client Error',
        status: 400,
        message: 'Bad Request',
        description: 'The request could not be understood by the server due to malformed syntax',
        data: [
          {
            target: {
              predicted_bounding_box: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
              },
              ground_truth_bounding_box: {},
            },
            value: {},
            property: 'ground_truth_bounding_box',
            children: [
              {
                target: {},
                property: 'left',
                children: [],
                constraints: {
                  isDefined: 'left should not be null or undefined',
                  isNumber: 'left must be a number conforming to the specified constraints',
                  isNotEmpty: 'left should not be empty',
                },
              },
              {
                target: {},
                property: 'right',
                children: [],
                constraints: {
                  isDefined: 'right should not be null or undefined',
                  isNumber: 'right must be a number conforming to the specified constraints',
                  isNotEmpty: 'right should not be empty',
                },
              },
              {
                target: {},
                property: 'top',
                children: [],
                constraints: {
                  isDefined: 'top should not be null or undefined',
                  isNumber: 'top must be a number conforming to the specified constraints',
                  isNotEmpty: 'top should not be empty',
                },
              },
              {
                target: {},
                property: 'bottom',
                children: [],
                constraints: {
                  isDefined: 'bottom should not be null or undefined',
                  isNumber: 'bottom must be a number conforming to the specified constraints',
                  isNotEmpty: 'bottom should not be empty',
                },
              },
            ],
            constraints: {
              isNotEmptyObject: 'ground_truth_bounding_box must be a non-empty object',
            },
          },
        ],
      };
      jest.spyOn(intersectionService, 'handlIOUReuest').mockImplementation(() => Promise.resolve(response));
      const result = await intersectionController.intersection(intersectionWithoutGroundTruthBoundinBox);
      expect(result.status).toEqual(400);
    });
  });
});
