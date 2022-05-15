

## Intersection Over Union Home task (Senior backend developer.



#### Candidate: S.Moeid Heidari

---

#### General description

Provided task is to make an HTTP REST API that can calculate the IOU between two provided Bounding boxes. Intersection over Union is an evaluation metric used to measure the accuracy of an object detector on a particular dataset. We often see this evaluation metric used in object detection challenges. It is is simply an evaluation metric. Any algorithm that provides predicted bounding boxes as output can be evaluated using IoU

<img title="" src="https://miro.medium.com/max/936/1*r0o3vX-x979Q84_lbJWS_g.jpeg" alt="" width="376" data-align="center">

IOU has two parameters :
    • ground-truth bounding boxes
    • predicted bounding boxes

Calculation of IOU is the area of intersection of two boxes divide by area of union of two boxes.

![](https://miro.medium.com/max/822/1*-yS1RREVZYbQLAyBEegcrQ.png)

In this implementation we assume the coordinates of the intersected rectangle as 

```typescript
const inter_x1;
const inter_y1;

const inter_x2;
const inter_y2;
```

to show the coordinates of the top,left.top, and bottom right after the intersection.

for the calculation we use the computer graphic convention of +X axis moving to the right and +Y axis moving to the top.

<img title="" src="https://miro.medium.com/max/370/1*sjUSZawTujR26QO2OjnmVg.png" alt="" width="179" data-align="center">

we then compare the top left corners of each of the boxes to calculate the top left corner of the intersection as shown below. It would give us the result of the top left corner of the intersection calculation.

```typescript
const inter_x1 = Math.max(ground_truth_bounding_box.left, Predicted_bounding_box.left);
const inter_y1 = Math.max(ground_truth_bounding_box.right, Predicted_bounding_box.right);
```

we do the same operation to calculate the bottom right corner of the calculation as shown below.

```typescript
const inter_x2 = Math.min(
      ground_truth_bounding_box.left + ground_truth_bounding_box.top,
      Predicted_bounding_box.left + Predicted_bounding_box.top
    );
    const inter_y2 = Math.min(
      ground_truth_bounding_box.right + ground_truth_bounding_box.bottom,
      Predicted_bounding_box.right + Predicted_bounding_box.bottom
    );
```

**Note**: in case of the overlap of two bounding boxes (with exact coordinates) the min or max operation of comparing a value with itself, is simply the value itself.

<img src="https://miro.medium.com/max/286/1*NBop1PgOPl9AuF5LuxtTgg.png" title="" alt="" data-align="center">

Now that we have the calculated coordinates of the intersection we will do another calculation to to find the area of the Intersection rectangle as shown below.

```typescript
const inter_w = Math.max(0, inter_x2 - inter_x1);
const inter_h = Math.max(0, inter_y2 - inter_y1);
const iou = (inter_w * inter_h) / (area_1 + area_2 - inter_w * inter_h);
```

## Pseudocode

<img src="https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-938bb3c9fc314bd3d11d92714a37a929_l3.svg" title="" alt="Rendered by QuickLaTeX.com" data-align="center">

---

#### Technical acceptance criteria

As described in the task description we have a bunch of MUST haves and SHOULD haves that we are going to describe the implementation of them in this source implementation acccordingly.



- [x] Provide a JSON HTTP API (Server) 
  
  The solution provides a RESTfull api on address ***http://localhost:{portnumber}/api/v1/intersection/ios***
  
  Method: Post
  
  Content: application/json
  
  Response: calculated IOU
  
  ```bash
  curl --location --request POST 'http://localhost:{port_number}/api/v1/intersection/iou' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "ground_truth_bounding_box": {
          "left": 5,
          "right": 1,
          "top": 4,
          "bottom": 5
      },
      "predicted_bounding_box": {
          "left": 5,
          "right": 5,
          "top": 5,
          "bottom": 5
      }
  }'
  ```

- [x] be runnable in a local development environment
  
  Application is runnable in local development environment by 
  
  ```bash
  npm install
  npm start
  ```

- [x] NOT require third-party infrastructure or services
  
  it does not require any third-party infrastructure but having **nodejs** installed on the machine.

- [x] allow clients to submit bounding box coordinates via an HTTP request. The following information will be sent by the clients
  
  API expects to take the bounding boxes information in a specific format
  
  - request body should have two json objects inside 
    
    - ground_truth_bounding_box
      
      - left
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
      
      - right
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
      
      - top
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
      
      - bottom
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
    
    - predicted_bounding_box
      
      - left
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
      
      - right
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
      
      - top
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
      
      - bottom
        
        - is a number
        
        - does not accept strings or other types
        
        - cannot be empty
    
    

- [x] return the IoU value between 0 and 1, rounded to 3 decimal places
  
  ```bash
  "data": {
          "iou": 0.098
      }
  ```

- [x] accept input values in a format determined suitable by the developer
  
  ```bash
  curl --location --request POST 'http://localhost:8085/api/v1/intersection/iou' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "ground_truth_bounding_box": {
          "left": 5,
          "right": true,
          "top": 4,
          "bottom": 5
      },
      "predicted_bounding_box": {
          "left": 5,
          "right": 5,
          "top": 5,
          "bottom": 5
      }
  }'
  
  "type": "Client Error",
      "status": 400,
      "message": "Bad Request",
      "description": "The request could not be understood by the server due to malformed syntax",
      "data": [
          {
              "target": {
                  "ground_truth_bounding_box": {
                      "left": 5,
                      "right": true,
                      "top": 4,
                      "bottom": 5
                  },
                  "predicted_bounding_box": {
                      "left": 5,
                      "right": 5,
                      "top": 5,
                      "bottom": 5
                  }
              },
              "value": {
                  "left": 5,
                  "right": true,
                  "top": 4,
                  "bottom": 5
              },
              "property": "ground_truth_bounding_box",
              "children": [
                  {
                      "target": {
                          "left": 5,
                          "right": true,
                          "top": 4,
                          "bottom": 5
                      },
                      "value": true,
                      "property": "right",
                      "children": [],
                      "constraints": {
                          "isNumber": "right must be a number conforming to the specified constraints"
                      }
                  }
              ]
          }
      ]
  }
  ```

- [x] use intuitive data structures and naming suitable for the purpose
  
  if you take a look at the code you can see that all the data would be handeled by appropriate Classes,DTOs, entities and enums with self described names.
  
  as an example lets take a look at the [iou-request.dto.ts](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/src/application/dtos/iou-request.dto.ts)
  
  ```typescript
  /**
   * Author Moeid Heidari
   * Date 12 May 2022
   */
  import { IsDefined, IsNotEmptyObject, ValidateNested } from 'class-validator';
  import { BoundingBoxDTO } from './bounding-box.dto';
  import { Type } from 'class-transformer';
  import { ApiProperty } from '@nestjs/swagger';
  /**
   * List of allowed properties in this DTO
   */
  const allowedProperties = ['ground_truth_bounding_box', 'predicted_bounding_box'];
  /**
   * IOU request DTO
   */
  export class IOURquestDTO {
    /**
     * Containes the coordinates of the ground truth bounding box
     */
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => BoundingBoxDTO)
    @ApiProperty({
      description: 'ground_truth_bounding_box',
    })
    ground_truth_bounding_box: BoundingBoxDTO;
  
    /**
     * Containes the coordinates of the predicted bounding box
     */
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => BoundingBoxDTO)
    @ApiProperty({
      description: 'predicted_bounding_box',
    })
    predicted_bounding_box: BoundingBoxDTO;
  
    /**
     * get user DTO constructor
     * @param properties DTO properties
     */
    constructor(properties: any = {}) {
      Object.keys(properties).forEach((key: string) => {
        if (allowedProperties.includes(key)) this[key as keyof this] = properties[key];
      });
      this.ground_truth_bounding_box = new BoundingBoxDTO(this.ground_truth_bounding_box);
      this.predicted_bounding_box = new BoundingBoxDTO(this.predicted_bounding_box);
    }
  }
  ```
  
  

- [x] return additional messages or HTTP codes other than 200 in case of unexpected input values (error handling)
  
  In the HTTP REST API response type,status,message, and description are provided. as an example take a look at this result of calling api witch occured a client error.
  
  ```bash
  "type": "Client Error",
      "status": 400,
      "message": "Bad Request",
      "description": "The request could not be understood by the server due to malformed syntax"
  ```

- [x] respect content negotiation as specified by the HTTP client
  
  as you can see from source code [intersection.controller.ts](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/src/application/controllers/intersection.controller.ts) api has content type "application/json" which is an appropriate content type for this api.
  
  ```typescript
  @Header('content-type', 'application/json')
    @Post('iou')
    @HttpCode(HttpStatus.OK)
    @Public()
    async intersection(@Body() body: any): Promise<HttpResponse> {
      const response: HttpResponse = await this.interSectionService.handlIOUReuest(new IOURquestDTO(body));
      return response;
    }
  ```

- [x] be containerized (e.g. using Docker)
  
  application is containerized as docker image. inside the root directory you can find the [Dockerfile](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/Dockerfile) and [docker-compose.yaml](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/docker-compose.yaml)

- [x] allow configuring runtime parameters (e.g. scalability options)
  
  project is associated with ENV values for the mode (development or production) with a NODE_PORT which specifies the node which the server should listen to.
  
  .env.production
  
  ```bash
  NODE_ENV=production
  NODE_PORT=8085
  ```
  
  .env.development
  
  ```bash
  NODE_ENV=development
  NODE_PORT=8085
  ```
  
  

- [x] allow configuring behavior (e.g. number of decimal places)
  
  configuring behavior is also available with an environment variable called DECIMAL_PLACES (by default 3) 
  
  .env
  
  ```bash
  DECIMAL_PLACES=3
  ```
  
  a validator is also available for the envirment variables accordingly to make sure that the ENVs have a well-formed data.
  
  [env.validation.ts](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/src/infrastructure/config/env.validation.ts)
  
  ```typescript
  /**
   * env vatiables
   */
  class EnvironmentVariables {
    /**
     * Decimal places of the calculated IOU
     */
    @IsNumber()
    @Max(10)
    @Min(1)
    @IsOptional()
    DECIMAL_PLACES = 3;
  }
  
  /**
   * validates the config
   * @param config congig
   * @returns validated config
   */
  export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToClass(EnvironmentVariables, config, { enableImplicitConversion: true });
    const errors = validateSync(validatedConfig, { skipMissingProperties: false });
  
    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
    return validatedConfig;
  }
  ```

- [x] unit tests MUST cover core functionality
  
  The project has ~30 unit tests that has the test cases for core functionality (service functions) and controllers. Below you can see some of the test cases for core functionality. For each test there is a factory that provides the test cases suitable for the test pass.
  
  [iou.factory.ts](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/__test__/factories/iou.factory.ts)
  
  ```typescript
  /**
   * Author Moeid Heidari
   * Date 13 May 2022
   */
  export const TEST_INTERSECTION_1 = {
    ground_truth_bounding_box: {
      left: 3,
      right: 3,
      top: 7,
      bottom: 7,
    },
    predicted_bounding_box: {
      left: 7,
      right: 7,
      top: 6,
      bottom: 6,
    },
    expected: 0.118,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_2 = {
    ground_truth_bounding_box: {
      left: 3,
      right: 4,
      top: 10,
      bottom: 10,
    },
    predicted_bounding_box: {
      left: 3,
      right: 4,
      top: 10,
      bottom: 10,
    },
    expected: 1.0,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_3 = {
    ground_truth_bounding_box: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 6,
    },
    predicted_bounding_box: {
      left: 10,
      right: 10,
      top: 5,
      bottom: 5,
    },
    expected: 0.0,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_4 = {
    ground_truth_bounding_box: {
      left: 2,
      right: 4,
      top: 5,
      bottom: 1,
    },
    predicted_bounding_box: {
      left: 4,
      right: 3,
      top: 9,
      bottom: 5,
    },
    expected: 0.064,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_5 = {
    ground_truth_bounding_box: {
      left: 2,
      right: 3,
      top: 3,
      bottom: 1,
    },
    predicted_bounding_box: {
      left: 2,
      right: 3,
      top: 3,
      bottom: 2,
    },
    expected: 0.5,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_6 = {
    ground_truth_bounding_box: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    predicted_bounding_box: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    expected: 0,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_7 = {
    ground_truth_bounding_box: {
      left: 1,
      right: 2,
      top: 2,
      bottom: 2,
    },
    predicted_bounding_box: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
    expected: 0.333,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_8 = {
    ground_truth_bounding_box: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 6,
    },
    predicted_bounding_box: {
      left: 10,
      right: 10,
      top: 5,
      bottom: 5,
    },
    expected: 0,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_9 = {
    ground_truth_bounding_box: {
      left: 300,
      right: 50,
      top: 0.5,
      bottom: 0.3455,
    },
    predicted_bounding_box: {
      left: 300,
      right: 50,
      top: 0.345,
      bottom: 0.23458,
    },
    expected: 0.468,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  export const TEST_INTERSECTION_10 = {
    ground_truth_bounding_box: {
      left: -234,
      right: -342,
      top: 6,
      bottom: 6,
    },
    predicted_bounding_box: {
      left: -234,
      right: 343,
      top: -5,
      bottom: 6,
    },
    expected: 0,
    number_of_decimal_places: 3,
  };
  //===========================================================================================================
  
  ```

- [x] end-to-end tests SHOULD cover functionality via API and other API-specific aspects (e.g. verify individual acceptance criteria)
  
  e-2-e test are also availbale for the project that tests the available apis (mai API, health check apis,... etc). Below you can see an example of such test.
  
  [intersection.e2e.spec.ts](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/__test__/e2e/intersection.e2e.spec.ts)
  
  ```typescript
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
  
  ```
  
  

- [x] Documentation on how to prepare and run the solution (requirements to the environment, build and launch instructions) MUST be
  provided
  
  A runb-book is also provided that describes the instructions to run and test the application on development and production environments (OS, Docker, Kubernetes cluster,...)
  
  [README.md](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/README.md)

- [x] API Documentation (either generated or manually written) MUST be provided
  
  An api documentation is also provided (Swagger) that described the APIS, schemas ,... etc.
  
  This documentation is accessible throught:
  
  http://localhost:{port_number}/api

- [x] be made accessible via a Git repository to (e.g. using invites)
  
  project is hosted on gitlab and two members are invited 
  
  - michael.juncker@enote.com
  
  - evgeny.mitichkin@enote.com

- [x] have a top-level README
  
  [README.md](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/README.md)

- [x] properly configure Git for temporary files / build artifacts
  
  inside the project you can find several .ignore files that prevents pushing uneccessari files to the repository
  
  - [.gitignore](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/.gitignore)
  
  - [.eslintignore](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/.eslintignore)
  
  - .[dockerignore](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/.dockerignore)
  
  - [.helmignore](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/k8s/.helmignore)

- [x] provide a Makefile (or similar implementation-language agnostic solution) that supports executing the following steps without
  any project-specific prerequisites:
  development environment initialization (if required)
  linting
  executing tests
  building the Docker image (if implemented)
  run the application
  run the application using the Docker image (optional)
  
  a [start.sh](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/scripts/start.sh) script is also provided that helps the developer to build and run the project regardless to any dependency.
  
  ```bash
  bash start.h -h
  
  -h, --help              Print this help and exit
  -build_docker           Build the docker image called "intersection:latest"
  -build_and_run_docker   Build the docker image and run on local machine
  -stop_docker            Stop running docker container named "intersection"
  -run_app                Run application with npm in usual way for development
  -run_test               Run npm test
  -run_lint               Run npm lint
  -generate_doc           Generate the code documentation
  -deploy_on_kubernetes   you need to have a kubernetes cluster already up and running on the machine.
  
  ```

- [x] apply industry best-practices at all levels including but not limited to:
  amount and variance of tests (positive, negative, code coverage)
  runtime efficiency of the implementation
  concurrency / scalability
  security of the runtime (assuming containerized, e.g. Kubernetes) as well as build chain (CI/CD pipeline)
  
  Project is also has a helm chart prepare with skaffold configuration that helps with Continues deployment on a kubernetes cluster (minikube, mubeadm, kind,... etc)
  
  [Makefile](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/Makefile)
  
  ```makefile
  .PHONY: skaffold-dev
  skaffold-dev:
  	skaffold dev --auto-build --auto-deploy --tail --cleanup
  
  .PHONY: skaffold-debug
  skaffold-debug:
  	skaffold debug --auto-build --auto-deploy --tail --cleanup
  
  .PHONY: encrypt-secrets
  encrypt-secrets:
  	helm secrets enc k8s/secrets.yaml
  
  ```
  
  skaffold.yaml
  
  ```yaml
  apiVersion: skaffold/v2beta13
  kind: Config
  build:
    local:
      useBuildkit: true
    artifacts:
    - image: registry.gitlab.com/moeidtopcoder/intersection-over-union
  deploy:
    helm:
      releases:
      - name: app
        chartPath: ./k8s
        wait: false
        useHelmSecrets: true
        valuesFiles:
        - ./k8s/values.yaml
        - ./k8s/secrets.yaml
        artifactOverrides:
          image: registry.gitlab.com/moeidtopcoder/intersection-over-union
        imageStrategy:
          helm: {}
  
  portForward:
   - resourceType: service
     resourceName: app
     port: 7800
     localPort: 7800
  
  ```
  
  To deploy the project continuesly inside a kubernetes cluster you just need to run following command
  
  ``` bash
  make
  ```
  
  

- [x] think about a production deployment of the provided solution and document remaining steps / ToDo’s to let the solution participate in a CI/
  CD pipeline
  
  Project is connected to a CI/CP pipeline (Gitlab CI) that wold run the pipeline (build, test, linting,...)
  
  on each commit . and it will build and push a docker image to Gitlab container registry upon a commit or merge to main branch.
  
  [.gitlab-ci.yaml](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/.gitlab-ci.yml)
  
  ```yaml
  image: node:latest
  
  services:
  cache:
    key:
      files:
        - package.json
    paths:
      - node_modules
  
  stages:
    - build
    - test
  sast:
    stage: test
  include:
  - template: Security/SAST.gitlab-ci.yml
  
  build:
    stage: build
    script:
      - npm install
      - npm run build --if-present
  
  test:
    stage: test
    script:
      - npm run format
      - npm run lint
      - npm test
      
  build image:
      image: docker:20.10.10
      services:
          - docker:20.10.10-dind
      rules:
          - if: $CI_COMMIT_BRANCH == "main" || ($CI_PIPELINE_SOURCE == 'merge_request_event' && ($CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "main" ))       
      script:
          - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
          - docker build -t $CI_REGISTRY_IMAGE .
          - docker push $CI_REGISTRY_IMAGE
  
  ```
  
  Building the docker image has two phases (development and production)
  
  [Dockerfile](https://gitlab.com/Moeidtopcoder/intersection-over-union/-/blob/main/Dockerfile)
  
  ```dockerfile
  FROM node:12.19.0-alpine3.9 AS development
  
  WORKDIR /usr/src/app
  
  COPY package*.json ./
  
  RUN npm install glob rimraf
  
  RUN npm install
  
  COPY . .
  
  RUN npm run build
  
  FROM node:12.19.0-alpine3.9 as production
  
  ARG NODE_ENV=production
  ENV NODE_ENV=${NODE_ENV}
  
  ARG NODE_PORT=8085
  ENV NODE_PORT=${NODE_PORT}
  
  ARG DECIMAL_PLACES=3
  ENV DECIMAL_PLACES=${DECIMAL_PLACES}
  
  WORKDIR /usr/src/app
  
  COPY package*.json ./
  
  RUN npm install
  
  COPY . .
  
  COPY --from=development /usr/src/app/dist ./dist
  
  CMD ["node", "dist/main"]
  
  ```
  source code is fully documented and accessible by generating the documentation with

```bash
npm run doc
```

and then

http://localhost:7000

as you can see project is 100% documented.

<img src="/images/full-documentation.png" title="" alt="" width="742">

# Hope you like it

Please don't hestitate should you have any question or suggestion about the project

moeidtopcoder2@gmail.com

# END



