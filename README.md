# supplyframe-challenge


Challenges I had to face along the way: 
1. remove .env file completly from github after adding it to .gitignore followed [this](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/) guide. However, this only removed it from the commit's repository but it still did not remove it from the commit history. I ended up deleting the API key and making a new one.

2. Figure out how to hide the API key after serving all the javascript to the client in a single page app. Used webpack bundler to fix this. Followed [this](https://www.youtube.com/watch?v=IZGNcSuwBZs&ab_channel=TraversyMedia) webpack tutorial. After [searching on stack](https://stackoverflow.com/questions/67555680/how-to-use-webpack-in-javascript-to-hide-api-key) about this issue and asking for help in a discord server.


### Small Bugs on the dev.hackday.io pages: 
1. This link is broken: https://github.com/SupplyFrame/had-api-example On this site https://dev.hackaday.io/doc/api/overview
2. Application Url and Callback Url are optional but if nothing is inputted, spacing is incorrect
![image](https://user-images.githubusercontent.com/39756756/172032586-638fe4cc-e58d-4788-983a-e730fcbe7294.png)
3. GET /projects/range part of the API is broken (500 internal server error): 

https://api.hackaday.io/v1/projects/range?ids=50,150&api_key=YOUR_API_KEY&page=2&sortby=updated
4. It is possible to create a new application without a name on the HACKADAY api portal. This application's "Edit | Delete" buttons cannot be clicked. Only named applications have these buttons clickable.
