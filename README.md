<p align="center">
  <img src='https://projectspacex.netlify.app/static/media/Logo.6f4942a5.svg' width='200' >
</p>

<h1 align="center">SpaceX Dash< 🚀/h1>

### About

It is a personal project inspired from [SpaceX Go!](https://github.com/jesusrp98/spacex-go)

It uses the data from the open-source r/SpaceX REST API, which can be found [here](https://github.com/r-spacex/SpaceX-API).

This Project was bootstrapped with [create-react-app](https://create-react-app.dev/docs/getting-started/).

<p align="center">
  <img src="https://user-images.githubusercontent.com/67645175/121082833-4cda6800-c7fc-11eb-806d-339a6e688ce9.png" width='256' hspace="4">
  <img src="https://user-images.githubusercontent.com/67645175/121083499-22d57580-c7fd-11eb-9cd7-dd9f6442c37b.png" width='256' hspace="4">
  <img src="https://user-images.githubusercontent.com/67645175/121083717-64662080-c7fd-11eb-9b67-0fbc95a9c3ad.png" width='256' hspace="4">
  <img src="https://user-images.githubusercontent.com/67645175/121083981-bc048c00-c7fd-11eb-93c3-8e8513c8e8f4.png" width='256' hspace="4">
  <img src="https://user-images.githubusercontent.com/67645175/121084128-e8200d00-c7fd-11eb-89d8-d5afa3096c32.png" width='256' hspace="4">
</p>

## Features

- **Launch tracking & details**: detailed list of past & upcoming launches.
- **Company details**: general company details & achievements.
- **Data can be retained in url**: able to filter with launches, and date, and can combine multiple filters. The current page with pagination and filters applied are retained via the URL.

## Run the app locally

```
$ git clone git@github.com:arpitnath/spacex.git


```

> env variable: `REACT_APP_SPACEX_BASE_API=https://api.spacexdata.com/v3/`

```
$ npm install
```

`$ npm start` - This will start the application and run on port 3000

## Folder Structure

```
src
└───index.tsx              # Application entry point
└───App.tsx                # Application routes
└───pages/                 # Views of the App
└───components/            # All the components live here
└───styles/scss            # StyleSheets
    └───components/        # component styles
    └───pages/             # pages styles
    └───_mixins.scss       # all mixins
    └───_variables.scss    # scss/sass variables
    └───styles.module.scss # common styles & all styles endpoint
    └───global.scss        # global styles
└───assets/                # images / logo
└───helpers
    └───History.ts         # history object
    └───Hooks.ts           # Custom Hooks
    └───icons.ts           # all icons used
    └───tableheadData.ts   # table head titles
    └───types.ts           # Types
    └───utils.ts           # Shared Logic

```

> There you go, run & edit the project. Enjoy 🚀

## Contributing

If you want to take the time to make this project better, please go ahead.
Then, you can open an new [issue](https://github.com/arpitnath/spacex/issues) and create a [PR](https://github.com/arpitnath/spacex/pulls)

> > Feel free to reach out to me @arpitnath if you have any questions or feedback or any suggestion for improvements!
