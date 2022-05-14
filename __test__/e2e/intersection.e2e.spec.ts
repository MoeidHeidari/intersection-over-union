import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/infrastructure/modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import supertest from 'supertest';
import {
  intersectionWithEmptyGroundTruthBoundinBox,
  intersectionWithEmptyPredictedBoundingBox,
  intersectionWithoutGroundTruthBoundinBox,
  intersectionWithoutPredictedBoundingBox,
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
describe('Intersection endpoints (e2e)', () => {
  let app: INestApplication;
  let request: ReturnType<typeof supertest>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    const config = new DocumentBuilder()
      .setTitle('intersection service')
      .setDescription('A service to calculte IUO based on provided bounding boxes')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    request = supertest(app.getHttpServer());
  });
  //=============================================================================================================================
  describe('check service liveness', () => {
    it('should receive status code 404', async () => {
      return await request.get('/').expect(404);
    });
  });

  describe('check intesection endpoints', () => {
    it('should receive status code 200', async () => {
      return await request
        .get('/api/v1/intersection')
        .expect(200)
        .expect('Welcome to Insection IOU calculation endpoint');
    });

    it('should return 400 bad request error', async () => {
      return await request.post('/api/v1/intersection/iou').send(intersectionWithoutGroundTruthBoundinBox).expect(400);
    });
    it('should return 400 bad request error', async () => {
      return await request.post('/api/v1/intersection/iou').send(intersectionWithoutGroundTruthBoundinBox).expect(400);
    });
    it('should return 400 bad request error', async () => {
      return await request.post('/api/v1/intersection/iou').send(intersectionWithoutPredictedBoundingBox).expect(400);
    });
    it('should return 400 bad request error', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(intersectionWithEmptyGroundTruthBoundinBox)
        .expect(400);
    });
    it('should return 400 bad request error', async () => {
      return await request.post('/api/v1/intersection/iou').send(intersectionWithEmptyPredictedBoundingBox).expect(400);
    });

    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_1)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0.118,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_2)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 1.0,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_3)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0.0,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_4)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0.064,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_5)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0.5,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_6)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_7)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0.333,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_8)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_9)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0.468,
          },
        });
    });
    it('should return 200 Success request', async () => {
      return await request
        .post('/api/v1/intersection/iou')
        .send(TEST_INTERSECTION_10)
        .expect(200)
        .expect({
          type: 'Success',
          status: 200,
          message: 'OK',
          description: 'The request has succeeded',
          data: {
            iou: 0,
          },
        });
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
