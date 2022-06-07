# supplyframe-challenge
How to run
1. npm install 
2. npm run build
3. npm run dev
will serve to localhost:3000



Small Bugs on the dev.hackday.io pages: 
1. This link is broken: https://github.com/SupplyFrame/had-api-example On this site https://dev.hackaday.io/doc/api/overview
2. Application Url and Callback Url are optional but if nothing is inputted, spacing is incorrect
![image](https://user-images.githubusercontent.com/39756756/172032586-638fe4cc-e58d-4788-983a-e730fcbe7294.png)
3. GET /projects/range part of the API is broken (500 internal server error): 

https://api.hackaday.io/v1/projects/range?ids=50,150&api_key=YOUR_API_KEY&page=2&sortby=updated

Features:
backwards compatability with babel,
hot reload
