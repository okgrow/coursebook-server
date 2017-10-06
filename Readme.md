# OK GROW! kwiz

> OK GROW! kwiz is a fork of Arunoda's amazing "coursebook" repositories. It consists of this repo: okgrow/coursebook-server and okgrow/coursebook-ui

This is the code powering the server for [OK GROW! kwiz](https://okgrow-coursebook-ui.now.sh/). The app was built in an effort to **keep users up to date with details around various frameworks like React and GraphQL**. The code for this app was made public to encourage users to **discuss answers and add questions**.


## Table of Contents

- [Install](#install)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
	- [Page views](#page-views)
- [Maintenance](#maintenance)
- [Contributing](#contributing)
- [License](#license)

## Install

```sh
git clone git@github.com:okgrow/coursebook-server.git
cd coursebook-server
yarn
```

## Configuration
Your now.json according to the details in google drive. Example

```javascript
{
  "name": "okgrow-coursebook-server",
  "env": {
    "NODE_ENV": "production",
    "BACKEND_URL": "https://okgrow-coursebook-server.now.sh"
    "ADMIN_TOKEN": ""
    "MONGO_URL": ""
    "SESSION_SECRET": ""
    "GITHUB_CLIENT_ID": ""
    "GITHUB_CLIENT_SECRET": ""
  },
  "alias": "okgrow-coursebook-server.now.sh"
}
```


## Development

To run locally:
```sh
npm run dev
```

## Deployment

To deploy new material run, depending on the chapter you want to publish:
```sh
npm run react
```
which runs
```
coursebook-publish https://okgrow-coursebook-server.now.sh admin scripts/react
```


To actually deploy to the server, run:
```sh
npm run deploy
```

## Maintenance

This package is a fork of [arunoda's coursebook-server](https://github.com/arunoda/coursebook-server) and we will try to keep up to date with that repo. The main difference between this repository and the original is the content of the quizes and this Readme!

[@okgrow](https://github.com/okgrow)

Feel free to ping if there are open issues or pull requests which are taking a while to be dealt with!

## Contributing

To add questions make a pull request and add your question following the pattern in the scripts folder.
