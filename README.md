#  CARS API - NODE JS AND TYPESCRIPT

## REQUIREMENTS:
This app use the following dependencies:

- Node JS: "^14.17.6"
- body-parser: "^1.19.0"
- express: "^4.17.1"

## SET UP
On project's root folder, pls execute the next command to get working the api on Docker container
```
docker-compose up --build -d
```

## ENDPOINTS

This project has th following endpoints:
- http://127.0.0.1:3000/api/v1/byplate/:plateNo
Sending a Get http request to this url where **plateNo** is the plate number of the car, you can get his ID on the response.

- http://127.0.0.1:3000/api/v1/byid/:carId
Sending a Get http request to this url where **carId** is the ID number of the car, you can get his plate number on the response.

