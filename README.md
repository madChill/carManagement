# Dockerizing A fullstack application nestjs app + reactjs + postgres database 

## Running the app using node server (the normal way)
```bash
# development
$ cd api && npm run start:dev
or
nest start
# Debug/watch
$ npm run start:debug
```
for dashboard
```bash
$ cd dashboard && npm run start
# Debug/watch
$ npm run test
```

## Running the app using docker-compose 
```bash
$ docker-compose build 
$ docker-compose up 
or
docker-compose up -d
```

after we can access dashboard on link: http://localhost:8000
and api: http://localhost:3000/

## Running the app testing
* for api backend 
```bash
$ cd api && yarn test
or
yarn test:watch
```

* for dashboard reactjs 

```bash
$ cd dashboard && yarn test
```