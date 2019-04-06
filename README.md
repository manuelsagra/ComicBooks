# ComicBooks

This app is based on [React Native](https://facebook.github.io/react-native/) and uses [ComicVine API](https://comicvine.gamespot.com/api/) to display a list of the upcoming comic books. In the details screen of each issue you have two options: go to the issue's page on ComicVine, or share the comic via e-mail.

## Usage

You need a recent [node.js](https://nodejs.org/) installation to make it work. 

Clone or download the repository and install dependencies executing:

```shell
npm i
```

You also need to create a `api_key.js` file in the `src/config` directory with the following contents:

```
export const API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```

With the API Key you get on [ComicVine](https://comicvine.gamespot.com/api/) when you register an account there.

## Starting the app

After that, you have to start the development server with:

```shell
npm start
```

After [installing React Native](https://facebook.github.io/react-native/docs/getting-started) on your system, the app can be started with:

```shell
react-native run-ios
```

Or:

```shell
react-native run-android
```

## Installing the app in a actual device

The app can be installed in a phone or a tablet, and the instructions to make that possible depend on your OS and the type of device. You can refer to the [full instructions in the React Native documentation](https://facebook.github.io/react-native/docs/running-on-device).

![ComicBooks](screenshot.png?raw=true "ComicBooks")