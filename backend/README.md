
Introduction
============
A sample program that uses the following technologies:
- [ ] nodejs
- [ ] typescript
- [ ] react

Has integration to the following
- [ ] openai
- [ ] foursquare

Installation
------------

- Clone the repository to your machine
- Install **Node 20**
- Install yarn
```
npm install -g yarn
```

Setting up and running the app
------------
- Install the node modules

```
yarn install
```
- Install the sdk node modules

```
cd sdks/apis/fsq-developers
yarn install
cd ../../..
```
- Install the client node modules

```
cd client
yarn install
```
- Update the baseUrl to the server url in client/src/app/config/settings.js when necessary
- Build the client app

```
yarn build
cd ..
```
- Setup enviroment variables by copying .env.sample to new file .env

```
cp .env.sample .env
```
- Adjust the values on the .env file
- Build the server app
```
yarn build
```

- Run the server app
```
yarn start
```

Running the server app in development mode
------------

```
yarn dev
```


Running the client app in development mode
------------
```
cd client
yarn start
```
