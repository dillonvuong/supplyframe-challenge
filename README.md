# supplyframe-challenge
![image](https://user-images.githubusercontent.com/39756756/173314511-aac3b74d-8578-4d98-b087-43140f939b3b.png)

## How to run
1. In root directory run ```npm install``` 
2. Change .env_sample to .env and also input a working [Hackaday.io](https://dev.hackaday.io/) API key
3. run ```npm run devStart```
4. Open browser to localhost:8080
 

## Challenges I faced
1. remove .env file completly from github after adding it to .gitignore followed [this](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/) guide. However, this only removed it from the commit's repository but it still did not remove it from the commit history. I ended up revoking the API key and making a new one.
2. Figure out how to hide the API key after serving all the javascript to the client in a single page app. Used webpack bundler to fix this. Followed [this](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) webpack tutorial. After [searching on stack](https://stackoverflow.com/questions/67555680/how-to-use-webpack-in-javascript-to-hide-api-key) about this issue and asking for help in a discord server. After looking into it I decided not to go down this route because webpack doesn't actually hide the API key (user can inspect source and find it in the bundle.js). All external API calls are handled by the server.
3. There are many different ways to structure the folder/files and different ways to build (webpack, parcel) or not at all (node app.js) in order to serve webpages. I had some troubles when resources I used have a different folder structure than what I'm developing in.
4. I was having fun developing but then I got limited by the API call limit "Hourly limit exceeded" but its been 3 hours :thinking:
5. Had more trouble with showing the tooltips than I expected. Eventually copied and pasted code from [W3schools](https://www.w3schools.com/howto/howto_css_tooltip.asp). Overflow hidden on user-name causes tooltip to not show (got stuck on this for awhile)


## New things tried:
1. [Webpack for SPA](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) implementation (but did not end up working since API key was not hidden in the client bundle.js)
2. New [undici server side fetch](https://github.com/nodejs/undici) (possible errors here!) that will be available in Node 18 that I learned of while watching [Fireship](https://www.youtube.com/watch?v=MBqS1kYzwTc&t=6s&ab_channel=Fireship) on YouTube.
3. [Gulp](https://gulpjs.com/) for sass compilation (discarded in favor of WatchSass Vscode plugin because it seemed like it wasn't doing what I wanted it to do and also adds an unnecessary dependancy). Eventually discarded for Bootstrap.
4. Followed [this tutorial](https://www.youtube.com/watch?v=_kqN4hl9bGc&t=5s&ab_channel=TheNetNinja) in order to create custom CSS library via sass and learned about partials in sass, breakpoints, grid, variables, functions, layouts, mixins and utilities. Later dropped this in favor of Bootstrap for the sake of convience and time. 
5. Followed [this tutorial](https://www.youtube.com/watch?v=gdn9B0LCiI4&ab_channel=PixelRocket) to install Bootstrap with NPM instead of CDN: When I've used bootstrap before I used the CDN method. Did not manage to get the NPM version running and CDN was enough for me. This is not as good because it does not allow you to strip extraneous CSS (with purge CSS) as well as modifying custom variables/components.
6. [Bootstrap Masonry](https://getbootstrap.com/docs/5.0/examples/masonry/) layout: Initially I was wondering how to design the cards because some images are longer than others. Thought of scaling it down like the Hackaday website so that they are all square but I figured a pinterest like layout would look nicer
7. [Changing the color of an SVG with a css filter](https://stackoverflow.com/a/53336754)
8. Asking for help in Discord and using [CodePen](https://codepen.io/dillonvuong/pen/gOvQGyV) for the first time to share my code with another, more senior dev! I didn't know how to get the code onto code pen at first but all you need to do is copy the HTML from devtools.


## Miscellaneous Questions
1. The Live Sass Viewer seems much more convienent than gulp however it generates an extra css.map file and also did not work with the sass:math module. Is gulp better because I was also having trouble setting that up. I thought the most useful thing about gulp is that it has the ability to purge unused css classes from main.css such that the generated file is potentially not thousands of lines long.
2. Would fetching all the projects then fetching their respective user be an N+1 query? I don't interact with a DB in my codebase but when I think about it... calling a fetch on the Hackaday API is really just one layer removed from that API returning me data. This is under the assumption that the Hackaday API is using a SQL database.
3. [Event Delegation](https://davidwalsh.name/event-delegate) to make it so that specific nodes didn't trigger the event. However it didn't work with my "user-information" div which was NOT unique and belonged to each. It was because the user-information div was too thin literally 1px so I couldnt hit the event with my mouse precision and I didnt know that it was that thin. Why is this?
4. I was not able to get projects with similar tags. It seems as if there is code there to determine a tag's id and I wonder if the external API doesn't have this functionality yet? Since I do not have the SQL database I couldn't use a join which is what I wanted to do at first. How would this have been done with only the external API? I was thinking of using the project search endpoint but it didn't seem to work as well. 


## Compromises/things to optimize
1. Dropped Bootstrap NPM and favored CDN because I couldn't wrap my head around the folder structure
2. Implement Cacheing ([1](https://www.geeksforgeeks.org/api-response-caching-using-apicache-middleware-in-node-js/), [2](https://www.npmjs.com/package/lru-cache)) for faster load speeds. [Browser cacheing API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) should be used too instead of the map in public/javascript/index.js.
3. The tooltip could be much better, it just shows the rank of the user for now. Also, the user's name does not have ellipses applied to it because ```overflow: hidden;``` made it so that the tooltip does not show. This is an open HTML/CSS nesting/class issue and I decided to lose the text truncation in favor of time.
4. Since I am using the CDN version of Bootstrap, no unused css stylings were purged.

## Project Objectives which were not finished
1. "Show 'recommended projects' and/or 'recommended users' by comparing the selected project's tags with the tags of other projects/users. I could not get related projects tags done so a placeholder of lorem ipsum text is given instead (just to show what the design would have looked like). 
2. "Implement your favorite test framework/tool to check your work as you go - the level of detail is up to you." 


## Nice to Haves
1. Sticky "Back to Top" anchored on the bottom right of page button which appears after scrolling down a little.
2. Search bar for getting projects with certain keywords 
3. "Filter by" functionality working
4. "Per page" functionality working
5. More complext pagination with 

## Cool Ideas
1. Make the bottom part of the card have a glassmorphic linux terminal styling
2. The cards which have the most "skulls" or hackers should have a black and green card styling to make it distinct.
3. CSS animated text in a banner which types out phrases on repeat with linux terminal style. [Example](https://www.youtube.com/watch?v=4J1WszR6PGk&ab_channel=KODAmoah)

## How I develop and learn
1. Search problem on stackoverflow and if it is not solved in 5 minutes, continue
2. Post question on Discord developer community with screenshots in hopes that someone can answer it while I am looking into Youtube tutorials
3. Youtube tutorials related directly to the feature/bugfix I am doing.
4. If all of the above does not work, post the question on stackoverflow 

## Example of how I solved certain problems
#### 1. Cards and Design of the Index page
I first tried to get inspiration for the card design by looking on Dribble, posting on Discord, and also asking my cousin, who is a UX/UI designer. Initially I was thinking of having a 3 column, centered design for the posts (kind of like instagram) as well as having the cards perfectly squared, as they are on the official Hackaday site. However, after looking more into it I believed that the masonry card layout would be best fit for a design like this (inspired initially by pinterest) because it would be easier to consume the content. The [Material Design](https://material.io/components/cards#card-collections) website also helped me style the card and recommends something similar for a collection. Then I was faced with the problem of how to get the cards to look like they do on [Dribble](dribble.com). I asked on Discord and a user pointed out that I had to change the max-width property of the container. I made the container fluid after reading the [documentation](https://getbootstrap.com/docs/5.0/layout/containers/) on Bootstrap. In the end, to make it what I wanted, I inspected the dribble site and found that they also use a fluid container but with 72 px of padding addded on each side. 
#### 2. Asking for help about code optimization, leading to me learning about Event Delegation
Initially I had the event listeners working by querying for all the divs with ".user-information", however, I wanted to know if this was the best way to go about this. The following images are from the [Reactiflux Discord Community](https://discord.gg/f7bm7w5YdF) (if you want to see [the thread we talked on](https://discord.com/channels/102860784329052160/984734163036950529) you will need to join the server on your Discord account).
![image](https://user-images.githubusercontent.com/39756756/173306410-40b60861-a109-41e0-99de-2da6a4dd968f.png)

I could not get the mouseover event to console.log() when "user-information" div. I thought the event delegation was incorrect but the actual reason was not due to delegation... Chris was helping me
![image](https://user-images.githubusercontent.com/39756756/173307033-1402f8fc-f933-4885-b986-07667faaf965.png)

While trying to figure out the reason, Chris also clarified specifications of my assignment: 
![image](https://user-images.githubusercontent.com/39756756/173307869-e6f2104b-20f1-45f7-a002-3d5e24029728.png)

The actual issue was because the div I was looking to attach an event listener on had "too little inner space"
![image](https://user-images.githubusercontent.com/39756756/173308105-0788789f-5b93-4c60-805a-470f12f2ac83.png)



