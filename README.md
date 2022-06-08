# supplyframe-challenge

## Challenges I faced
1. remove .env file completly from github after adding it to .gitignore followed [this](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/) guide. However, this only removed it from the commit's repository but it still did not remove it from the commit history. I ended up revoking the API key and making a new one.
2. Figure out how to hide the API key after serving all the javascript to the client in a single page app. Used webpack bundler to fix this. Followed [this](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) webpack tutorial. After [searching on stack](https://stackoverflow.com/questions/67555680/how-to-use-webpack-in-javascript-to-hide-api-key) about this issue and asking for help in a discord server. After looking into it I decided not to go down this route because webpack doesn't actually hide the API key (user can inspect source and find it in the bundle.js). All external API calls are handled by the server.
3. There are many different ways to structure the folder/files and different ways to build (webpack, parcel) or not at all (node app.js) in order to serve webpages. I had some troubles when resources I used have a different folder structure than what I'm developing in.

## New things tried:
1. Webpack for SPA implementation (but did not end up working since API key was not hidden in the client bundle.js)
2. New undici server side fetch (possible errors here!)
3. Gulp for sass compilation (discard in favor of WatchSass Vscode plugin because it seemed like it wasn't doing what I wanted it to do and also adds an unnecessary dependancy).
4. Followed [this tutorial](https://www.youtube.com/watch?v=_kqN4hl9bGc&t=5s&ab_channel=TheNetNinja) in order to create custom CSS library via sass and learned about partials in sass, breakpoints, grid, variables, functions, layouts, mixins and utilities. Later dropped this in favor of Bootstrap for the sake of convience and time. 
5. Followed [this tutorial](https://www.youtube.com/watch?v=gdn9B0LCiI4&ab_channel=PixelRocket) to install Bootstrap with NPM instead of CDN: When I've used bootstrap before I used the CDN method. This is not as good because it does not allow you to strip and extraneous CSS (with purge CSS) as well as modifying custom variables/components.

## Miscellaneous Questions
1. The Live Sass Viewer seems much more convienent than gulp however it generates an extra css.map file and also did not work with the sass:math module. Is gulp better because I was also having trouble setting that up. I thought the most useful thing about gulp is that it has the ability to purge unused css classes from main.css such that the generated file is potentially not thousands of lines long.

## Compromises/things to optimize
1. Dropped Bootstrap NPM and favored CDN because I couldn't wrap my head around the folder structure