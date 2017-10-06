# OK GROW! kwiz

> OK GROW! kwiz is a fork of Arunoda's amazing "coursebook" repositories. It consists of this repo: okgrow/coursebook-server and okgrow/coursebook-ui

This is the code powering [OK GROW! kwiz](https://okgrow-coursebook-ui.now.sh/). The app was built in an effort to **keep users up to date with details around various frameworks like React and GraphQL**. The code for this app was made public to encourage users to **discuss answers and add questions**.


## Table of Contents

- [Install](#install)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
	- [Page views](#page-views)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```sh
git clone git@github.com:okgrow/coursebook-server.git
cd coursebook-server
yarn
```

## Configuration
Set these in a `.env` folder inside the `coursebook-server` directory

```sh
ADMIN_TOKEN=YOUR_ADMIN_TOKEN
MONGO_URL=YOUR_MONGO_URL
SESSION_SECRET=YOUR_SECRET
@learnnextjs-gh-client-id=YOUR_GITHUB_CLIENT_ID
@learnnextjs-gh-client-secret=YOUR_GITHUB_CLIENT_SECRET
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


Add various platforms by adding each tool's configuration to the settings object passed to OKGAnalytics:

```js
import OKGAnalytics, { analytics } from '@okgrow/auto-analytics';

const settings = {
  // Add your analytics tracking ids here (remove this line before running)
  "Google Analytics" : {"trackingId": "Your tracking ID"},
  "Amplitude"        : {"apiKey": "..."},
  "Chartbeat"        : {"uid": "..."},
  "comScore"         : {"c2": "..."},
  "HubSpot"          : {"portalId": "..."},
  "Intercom"         : {"appId": "..."},
  "Keen IO"          : {"projectId": "...", "writeKey": "..."},
  "KISSmetrics"      : {"apiKey": "..."},
  "Mixpanel"         : {"token":  "...", "people": true},
  "Quantcast"        : {"pCode": "..."},
  "Segment.io"       : {"apiKey": "..."}
};

OKGAnalytics(settings);
```

The service names and API key-names provided above are specific to each platform. Make sure to use the correct service name and key shown for the platform you're adding.

There are other options which not documented here. To find them search for your specific integration [in this file](https://github.com/okgrow/analytics.js/blob/master/analytics.js) and look at the options and their defaults that are set with `.option(...)`.

If you use a different service for tracking events or page views and you think it's popular enough that we should add it then please open an issue on the repo and we'll see how many supporters we get. Each additional integration adds a small amount to the file size so we want to support only the most common ones to economize the download size of this package.

### Page views

Compatible with any router, this package will log page views automatically. Each page is logged with the follow parameters:

 * `path`: path part of the URL
 * `title`: the page's title
 * `url`: hostname + path
 * `search`: the URL's query string, if provided. blank otherwise
 * `referrer`: hostname + old path, if coming from a previous route

To disable automatic page view tracking add ```autorun: false``` to your settings object when configuring then manually log a page view by calling `analytics.page('page name')`:

### Event tracking

Track any event by simply calling the `analytics.track()` function:

```js
analytics.track("Bought Ticket", {
  eventName: "Wine Tasting",
  couponValue: 50,
});
```

Check Segment.io's [analytics.js track documentation](https://segment.com/docs/libraries/analytics.js/#track) for a full description of `track()` and all the other functions available in this package.

### Debugging

When adding your platforms and setting events to track you may want to keep debug on locally. This will log all the analytics package's activity to the console.

To turn on debugging, in the console:

`> analytics.debug()`

Turn debugging off, in the console:

`> analytics.debug(false)`

### Example React Router Application

This package includes an `examples` directory containing a simple (Meteor) application using react-router. This is just an example with a common router and doesn't imply this plugin only works with this router or only with Meteor. This application can be run from its directory with:

`meteor --settings settings.json --production`.

## Maintainers

This is an open source package. We hope to deal with contributions in a timely manner, but that's not always the case. The main maintainers are:

[@okgrow](https://github.com/okgrow)

Feel free to ping if there are open issues or pull requests which are taking a while to be dealt with!

## Contributing

Issues and Pull Requests are always welcome.

Please read our [contribution guidelines](https://github.com/okgrow/guides/blob/master/open-source/contributing.md).

If you are interested in becoming a maintainer, get in touch with us by sending an email or opening an issue. You should already have code merged into the project. Active contributors are encouraged to get in touch.

Please note that all interactions in @okgrow's repos should follow our [Code of Conduct](https://github.com/okgrow/guides/blob/master/open-source/CODE_OF_CONDUCT.md).

## License

Released under the [MIT license](https://github.com/okgrow/analytics/blob/master/License.md) © 2017 OK GROW!.
