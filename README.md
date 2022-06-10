# supplyframe-challenge

## Challenges I faced
1. remove .env file completly from github after adding it to .gitignore followed [this](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/) guide. However, this only removed it from the commit's repository but it still did not remove it from the commit history. I ended up revoking the API key and making a new one.
2. Figure out how to hide the API key after serving all the javascript to the client in a single page app. Used webpack bundler to fix this. Followed [this](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) webpack tutorial. After [searching on stack](https://stackoverflow.com/questions/67555680/how-to-use-webpack-in-javascript-to-hide-api-key) about this issue and asking for help in a discord server. After looking into it I decided not to go down this route because webpack doesn't actually hide the API key (user can inspect source and find it in the bundle.js). All external API calls are handled by the server.
3. There are many different ways to structure the folder/files and different ways to build (webpack, parcel) or not at all (node app.js) in order to serve webpages. I had some troubles when resources I used have a different folder structure than what I'm developing in.
4. I was having fun developing but then I got limited by the API call limit :( "Hourly limit exceeded" but its been 3 hours :thinking:

## New things tried:
1. Webpack for SPA implementation (but did not end up working since API key was not hidden in the client bundle.js)
2. New undici server side fetch (possible errors here!)
3. Gulp for sass compilation (discard in favor of WatchSass Vscode plugin because it seemed like it wasn't doing what I wanted it to do and also adds an unnecessary dependancy).
4. Followed [this tutorial](https://www.youtube.com/watch?v=_kqN4hl9bGc&t=5s&ab_channel=TheNetNinja) in order to create custom CSS library via sass and learned about partials in sass, breakpoints, grid, variables, functions, layouts, mixins and utilities. Later dropped this in favor of Bootstrap for the sake of convience and time. 
5. Followed [this tutorial](https://www.youtube.com/watch?v=gdn9B0LCiI4&ab_channel=PixelRocket) to install Bootstrap with NPM instead of CDN: When I've used bootstrap before I used the CDN method. This is not as good because it does not allow you to strip extraneous CSS (with purge CSS) as well as modifying custom variables/components.
6. [Bootstrap Masonry](https://getbootstrap.com/docs/5.0/examples/masonry/) layout: Initially I was wondering how to design the cards because some images are longer than others. Thought of scaling it down like the Hackaday website so that they are all square but I figured a pinterest like layout would look nicer :)
7. Using a [color palette](https://colorhunt.co/palette/f0f5f9c9d6df52616b1e2022)! 

## Miscellaneous Questions
1. The Live Sass Viewer seems much more convienent than gulp however it generates an extra css.map file and also did not work with the sass:math module. Is gulp better because I was also having trouble setting that up. I thought the most useful thing about gulp is that it has the ability to purge unused css classes from main.css such that the generated file is potentially not thousands of lines long.
2. Would fetching all the projects then fetching their respective user be an N+1 query? I don't interact with a DB in my codebase but when I think about it... calling a fetch on the Hackaday API is really just one layer removed from that API returning me data. This is under the assumption that the Hackaday API is using a SQL database.


## Nice to Haves
1. Sticky "Back to Top" anchored on the bottom right of page button which appears after scrolling down a little.
2. Search bar for getting projects with certain keywords (elastic search functionality?)
3. "Filter by" functionality working
4. "Per page" functionality working

## Cool Ideas
1. Make the bottom part of the card have a glassmorphic linux terminal styling.
2. The cards which have the most "skulls" or hackers should have a black and green card styling to make it distinct.

## Compromises/things to optimize
1. Dropped Bootstrap NPM and favored CDN because I couldn't wrap my head around the folder structure

## How I develop and learn
1. Discord. Discord is my number one resource (right after stack, of course).
2. Youtube tutorials related directly to a starter app I am doing.

## Example of how I solved certain problems
1. How to display cards (fill in later with images from this [link](https://discord.com/channels/102860784329052160/105765765117935616/984148225298694184) forward ). I first tried to get inspiration for the card design by looking on Dribble, posting on Discord, and also asking my cousin, who is a UX/UI designer. Initially I was thinking of having a 3 column, centered design for the posts (kind of like instagram) as well as having the cards perfectly squared, as they are on the official Hackaday site. However, after looking more into it I believed that the masonry card layout would be best fit for a design like this (inspired initially by pinterest). The [Material Design](https://material.io/components/cards#card-collections) website also helped me style the card and recommends something similar for a collection. Then I was faced with the problem of how to get the cards to look like they do on [Dribble](dribble.com). I asked on Discord an a user pointed out that I had to change the max-width property of the container. I made the container fluid after reading the [documentation](https://getbootstrap.com/docs/5.0/layout/containers/) on Bootstrap. In the end, to make it what I wanted, I inspected the dribble site and found that they also use a fluid container but with 72 px of padding addded on each side. 