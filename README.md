# intersection-over-Union

## What is intersection?

The intersection-over-Union app is a service that takes the coordinates of the ground truth bounding box & predicted bounding box and returns the IoU value between 0 and 1 rounded to a {number_of_decimal_palces}.



## Prerequisites:

NPM 14.X

Docker

docker-compose

helm -for production

skaffold -for production

minikube (or any other kubernetes cluster) -for production

---

## Clone

```bash
git clone https://gitlab.com/Moeidtopcoder/intersection-over-union.git

cd intersection-over-union
```

---

## Hierarchy

```bash
├── k8s
│   └── templates
│       └── tests
├── scripts
├── src
│   ├── application
│   │   ├── controllers
│   │   └── dtos
│   ├── domain
│   │   ├── decorators
│   │   ├── entities
│   │   ├── enums
│   │   │   └── httpResponse
│   │   ├── exceptions
│   │   ├── guards
│   │   ├── helpers
│   │   ├── interceptors
│   │   ├── interfaces
│   │   ├── modules
│   │   │   └── common
│   │   ├── pipes
│   │   └── services
│   │       └── common
│   └── infrastructure
│       ├── config
│       └── modules
│           └── common
└── __test__
    ├── controllers
    ├── e2e
    ├── factories
    └── service
```



---

## Instllation

```bash
cd scripts
bash start.h {argument}
```

Arguments: 

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

---

### Run without script

```bash
npm install
npm start
```

---

### Run the tests

```bash
npm test
```

---

### linting

```bash
npm run lint
```

---

### generate documentation

```bash
npm run doc
```

running on 

http://localhost:7000

---



### Build docker image

```bash
docker build . -t {image-name}
```

----

### .env

```bash
NODE_ENV={production|development}
NODE_PORT={port-number}
DECIMAL_PLACES={decimal-places (default is 3)}
```

---

### Run in Browser

http://localhost:{port-number}/api/v1/intersection
![](/images/intersection.png)

----

### API documentation

http://localhost:{port-number}/api

![](/images/swagger.png)

---

### Health check

http://localhost:{port-number}/health

![](/images/liveness.png)

---

### Deploy to kubernetes
through Makefile
```bash
make
```
through config files
```bash
cd k8s/configFiles

  kubectl apply -f intersection-namespace.yaml,intersection-configmap.yaml,intersection-configmap.yaml,intersection-deployment.yaml,intersection-service.yaml
```

![](/images/kubernetes.png)

### Prometheus metrics

http://localhost:{port-number}/metrics

