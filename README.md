# Posts API

## Description

API for technical test at Hatchways, it manages posts data like its author, likes, popularity, read and tags. Works by passing tags as a query parameter (mandatory), sortBy (optional) and direction (optional).

Status: Finished  

## Tecnologies

<ul> 
    <li> NodeJS </li>
    <li> ExpressJS </li>
    <li> Axios </li>
</ul>

## Modules

<ul> 
    <li> https://api.hatchways.io/assessment/blog/posts route used as our data source (db)</li>
    <li> GET route that returns API status </li>
    <li> GET route that returns all posts depending on the parameters </li>
</ul>

## Instructions

In the project directory, you can run:

``` npm run dev ```

To test the server side / API: <br>
Use Postman, Thunder Client or any REST Client to test all endpoints. <br>

### Example

Test route [http://localhost:3000/api/posts?tags=tech](http://localhost:3000/api/posts?tags=tech) as a GET request to obtain all posts filtered by the "tech" tag.

<br>

The server will reload when you make changes.\
You may also see any lint errors on bad requests.