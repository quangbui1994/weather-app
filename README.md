## How to run project

1. Run `yarn install`
2. Run `yarn start` to start the app

## Run Docker to test locally

TIP: You can change the tag of container to anything you want

1. Build Docker Container:

```bash
yarn docker:build
```

2. Run docker container:

```bash
yarn docker:run
```

If you want to inject the environment variables like on kubernetes

```bash
docker run -d -e KEY_VAR=SOMETHING -p 3000:3000 weather-app
```

## How to test project
1. Run unit tests at local:

```bash
yarn test
```

or

```bash
yarn test:dev
```

to run `jest` in watch mode.

## How to deploy project
1. Create a new branch for new feature

2. Merge to master branch

3. Push to remote git repo

4. CircleCI will automatically build and test then deploy to S3 

We could check it out at the link http://nickyy-weather-app.s3-website-ap-southeast-1.amazonaws.com/
