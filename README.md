#  CARS API - NODE JS AND TYPESCRIPT

## REQUIREMENTS:
This app use the following dependencies:

- Node JS: "^14.17.6"
- body-parser: "^1.19.0"
- express: "^4.17.1"

## SET UP

Fisrt you have to clone the project with:
```
git clone https://github.com/d-antonio-romeroa/hai-node-ts-api.git
```

Then, on project's root folder, pls execute the next command to get working the api on Docker container. Pls be noted that you need to have installed [Docker](https://www.docker.com/products/docker-desktop) and must be active.
```
docker-compose up --build -d
```

If you're not using Docker, project's the following commands must be executed on the terminal from project's root path (The first one builds the project frmo Typescript to JS, then the project with JS is executed.

```
npm run build

npm run start
```

## ENDPOINTS

This project has th following endpoints:
- http://127.0.0.1:3000/api/v1/byplate/:plateNo

Sending a Get http request to this url where **plateNo** is the plate number of the car, you can get his ID on the response.

- http://127.0.0.1:3000/api/v1/byid/:carId

Sending a Get http request to this url where **carId** is the ID number of the car, you can get his plate number on the response.

## TESTING

This project can be tested with attached Postman collections on this [link](https://github.com/d-antonio-romeroa/hai-node-ts-api/blob/main/tests/NODE%20TS%20APIS.postman_collection.json).

These tests doesn't require a body to be sent on the request, just needs a Get request call to both url's above.
