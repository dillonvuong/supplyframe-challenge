# supplyframe-challenge

## How to Run:
1. npm install
2. npm build
3. npm run dev

Challenges I had to face along the way: 
1. remove .env file completly from github after adding it to .gitignore followed [this](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/) guide. However, this only removed it from the commit's repository but it still did not remove it from the commit history. I ended up deleting the API key and making a new one.

2. Figure out how to hide the API key after serving all the javascript to the client in a single page app. Used webpack bundler to fix this. Followed [this](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) webpack tutorial after [searching on stack](https://stackoverflow.com/questions/67555680/how-to-use-webpack-in-javascript-to-hide-api-key) about this issue and asking for help in a discord server.
