# supplyframe-challenge

## Challenges I faced
1. remove .env file completly from github after adding it to .gitignore followed [this](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/) guide. However, this only removed it from the commit's repository but it still did not remove it from the commit history. I ended up revoking the API key and making a new one.
2. Figure out how to hide the API key after serving all the javascript to the client in a single page app. Used webpack bundler to fix this. Followed [this](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) webpack tutorial. After [searching on stack](https://stackoverflow.com/questions/67555680/how-to-use-webpack-in-javascript-to-hide-api-key) about this issue and asking for help in a discord server. After looking into it I decided not to go down this route because webpack doesn't actually hide the API key (user can inspect source and find it in the bundle.js)

## New things tried:
1. Webpack for SPA implementation (but did not end up working since API key was not working)
2. New undici server side fetch (possible errors here!)
3. Gulp for sass compilation (discard in favor of WatchSass Vscode plugin because it seemed like it wasn't doing what I wanted it to do and also adds an unnecessary dependancy)

## Miscellaneous Questions
1. The Live Sass Viewer seems much more convienent than gulp however it generates an extra css.map file and also did not work with the sass:math module. Is gulp better because I was also having trouble setting that up.