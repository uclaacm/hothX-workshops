# :sparkles: HOTH X - Intro to Servers :sparkles:

**Date**: March 5, 2022

**Location**: Virtual

**Teacher**: [Andy Lewis](https://github.com/datowq)

**Resources**:

- [Slides](https://docs.google.com/presentation/d/1RRLdpQPd8cEvC-9tqNKD9qUO08CcmGYJo30rTwJiQkU/edit?usp=sharing)
- [Workshop Recording](https://www.youtube.com/watch?v=dQw4w9WgXcQ) EDIT LINK

## Overview :white_check_mark:

- [Introduction](#introduction-triangular_flag_on_post)
- [Hardware and Software Servers](#hardware-and-software-servers-computer)
- [Clients vs. Servers](#clients-vs-servers-nerd_face)
- [Client and Server Communication (HTTP)](#client-and-server-communication-http-email)
    - [HTTP Requests](#http-requests)
    - [HTTP Responses](#http-responses)
- [JSON](#json-page_facing_up)
- [DEMO](#demo-file_folder)
    - [Setting Up the Server Environment](#setting-up-the-server-environment)
    - [Server Creation](#server-creation)
        - [Expanding the API - User Database Setup](#expanding-the-api---user-database-setup)
        - [Expanding the API - User Creation](#expanding-the-api---user-creation)
        - [Testing Routes/Endpoints with Postman](#testing-routesendpoints-with-postman)
        - [Expanding the API - User Deletion](#expanding-the-api---user-creation)

NOTE: 
Before getting into the workshop, I recommend that you have a basic understanding of JavaScript, which was covered in the Intro to HTML/CSS/JS workshop.
Anyways, let's get started!


## Introduction :triangular_flag_on_post:
So, what exactly is a server?
Maybe you have some web or mobile development experience or maybe you don't, but in some form or fashion, you've probably interacted with some sort of server. Whether that's been playing an online video game like Minecraft, watching YouTube, or simply eating at a sit-down restaurant, some sort of server was present. While one of these things is not in the same category, the general concept of a server stays the same.

**A server is simply something that takes a request and provides some sort of response based on that request.**

Calling something a "server" really is just semantics for describing the role, purpose, or behavior of what said thing does.

## Hardware and Software Servers :computer:
In our case, a server can take a hardware or software form depending on the context.

**In the context of hardware, a server is just a computer that runs server software.** 

These computers can take on more robust configurations, but at their core, they are just a more powerful version of your laptop. 
In fact, your laptop or desktop can even function as a server, which is what we will be using during the development of our demo.
If you are interested in the hardware, there are videos all over the internet of people taking them apart and showing exactly what they are, such as [this one](https://www.youtube.com/watch?v=DS1FcT93Qy8&vl=en) by LTT.

**In the context of software, a server is just a program.**

What makes the program a server program is that it will supply you with some response or data when a client makes a request to the "server" program.
This software server will most likely include an API and interact with other resources like a database, but at its core, it is just some code.

## Clients vs. Servers :nerd_face:
(oh, the irony)

So now, what is a client?

**A client is a program or device that makes a request to a server for a specific resource or service.**

Suppose you wanted to watch [this](https://youtu.be/FKluZLl5hFA) video.
In this case, the software client that you would be using is most likely a web browser like Google Chrome, which leverages HTML, CSS, and JavaScript to bring you the UI/UX.

After clicking the YouTube video, your client would make a request to the Youtube server asking for a webpage associated with the URL.

The Youtube server would then send back a response that includes the resources necessary to render the webpage in the browser.

Your browser would then render the YouTube webpage with the video, and any additional requests to the YouTube server, like pausing the video, would function similarly.

What was just described is very much a simplification of how an interaction with the YouTube servers would work.
In reality, there would be many more requests and responses to provide the entire UI/UX of the YouTube webpage.
However, this is what a client and server interaction looks like from a software perspective.
In our case, we will simply host our server program on the same computer that we host the client program on.

As for some terminology, the **client** program is usually referred to as **a part of the front end**, and the **server** program is usually referred to as **a part of the backend**. 

Just as an aside, the backend also encompasses other things like a database and API.

## Client and Server Communication (HTTP) :email:

Now that we understand what clients and servers are, we need to know how they communicate.
There are many data transfer protocols like SMTP for emails and FTP for high-speed file transfers, and in our case, the Hypertext Transfer Protocol or HTTP serves for data exchange on the Web.
It works as a client-server protocol, which means that the client (usually a web browser) initiates requests to the web server as an HTTP request, which then sends back an HTTP response.
An API (Application Programming Interface) is the software program and part of the server that facilitates these requests and responses between a client and a server.
During the demo, we will write a software server, including its API.

So, what do these requests and responses look like?

### HTTP Requests
An HTTP request consists of three parts: a request line, a header, and an optional body.
```HTTP
POST /api/authors HTTP/1.1
Host: test.com
Content-Type: application/json
Cache-Control: no-cache
{
     "Username": "Aki",
     "Age": 21
}
```
The request line takes the following form:
`HTTP-METHOD URI/ENDPOINT HTTP-PROTOCOL`
`POST /api/authors HTTP/1.1`

There are several HTTP methods- some of the most common ones being GET, POST, PUT, and DELETE.
Each one has a different function and describes what the request will do.
- `GET` is used to retrieve data.
- `POST` is used to send something to the server.
- `PUT` is generally used to update something on the server, but has some ambiguity with POST.
- `DELETE` is used to delete something on the server.

The next part of the request line is the endpoint, which is also known as the URI (Uniform Resource Identifier).
It is the path to the place where you want to perform a request on the server.
URIs are similar to URLs (Uniform Resource Locator), but again, this is just semantics and URIs and URLs are often used interchangeably in the context of endpoints.
If you are curious:

* A URI is a string of characters that identifies something on the Internet. A URI can be used to identify any kind of Internet resource, including webpages, files, images, databases, etc.
    * URIs:
        - mailto:hoshino.nonomi@example.com (identifies an email address)
        - tel:+1-202-456-1111 (identifies a phone number)
        - urn:isbn:9780811204811 (identifies a book using its ISBN)

* A URL, on the other hand, is a specific type of URI that includes the network location of a resource and the protocol to be used to access it. A URL provides the specific location of a resource on the Internet and the protocol to be used to access it.
    * URLs:
        - https://www.hoshino.com/index.html (represents the address of a webpage)
        - ftp://ftp.valgrind.com/data/file.txt (represents the location of a file on an FTP server)
        - https://api.bluearch.com/users/12345 (represents an API endpoint for accessing user data with a specific ID)

TL;DR all URLs are URIs, but not all URIs are URLs.
Endpoints are also just a type of URI. 

In the last part of the request line, the HTTP protocol just specifies which HTTP version the request is using.

Next up, we have the header of the request.
Each request will have several headers which act as metadata to provide the server with more information about the request.
```HTTP
:authority: http.cat
:method: GET
:path: /101
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
```

And finally, the request body.
This is just the content that we want to provide to the server.
This can be the username and password of a user or the answers to some sort of server.
It is optional, as some HTTP methods generally won’t use the body, such as when we just want to GET information.

### HTTP Responses
An HTTP response is similar to a request and contains three parts: a status line, header, and body.
```HTTP
HTTP/1.1 200 OK
Date: Thu, 03 Jan 2019 23:26:07 GMT
Server: gws
Accept-Ranges: bytes
Content-Length: 68894
Content-Type: text/html; charset=UTF-8

<!doctype html><html …
```

The status line takes the following form:
`HTTP-PROTOCOL STATUS_CODE`
The `HTTP-PROTOCOL`, again, is the version of HTTP used.
The status code can be numerous different codes, which tell the client if the request was successful, if there was an error, or if there is some action that needs to be taken.
The three-digit codes follow the format:
- `2xx`: successful
- `4xx`: unsuccessful + client-side error
- `5xx`: unsuccessful + server-side error

(As an aside, here is a [wonderful website](https://http.cat/) that'll let you know what different response codes mean.)

The header and body are similar to the request, however, the header tells the client about the server and the body is the requested data we want to use or the webpage that we want to have displayed.

HTTP Response Header Example:
```HTTP
Access-Control-Allow-Origin: *
cache-control: no-cache
Content-Security-Policy: script-src 'self'; object-src 'self'
Content-Type: text/javascript
Cross-Origin-Resource-Policy: cross-origin
Last-Modified: Thu, 16 Feb 2023 21:16:54 GMT
```

Body Example (JSON):
```JSON
{
  "short_name": "http.cat",
  "name": "HTTP Cat",
  "icons": [
    {
      "src": "icon64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "icon192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/?utm_source=a2hs",
  "display": "standalone",
  "theme_color": "#d0383e",
  "background_color": "#ffffff"
}
```

## JSON :page_facing_up:

When we are writing the API to handle these requests and responses on our server, we will mostly care about the body of these requests and responses. 

The body can be many things like an image or webpage, but we usually handle data using **JSON (JavaScript object notation)**, which **acts as a standardized way to structure data.**

While there are other alternatives to JSON like YAML, we are using Node.js for our server environment, and thus want our data to integrate well with JavaScript.

```JSON
{"cats": {
  "id": "1",
  "value": "cool cat",
  "popup": {
    "pet": [
      {"value": "head", "onclick": "PetHead()"},
      {"value": "belly", "onclick": "PetBelly()"},
      {"value": "back", "onclick": "PetBack()"}
    ]
  }
}}
```

## DEMO :file_folder:
### Setting Up the Server Environment

In this demo, we will be creating an Express server!
Express is a popular framework used to build web servers along with Node.js.
As a framework, it handles requests, responses, and routing traffic to different parts of an application, which otherwise would require a lot (and I mean a LOT) of tedious code using only Node.js.

We will create a simple Express server that listens on a specified port, handles GET, POST, and DELETE requests, and responds with some basic data. 

What you will need to follow along with the demo:
- [VSCode](https://code.visualstudio.com/Download) (or a text editor of your choice)
- [Node.js](https://nodejs.org/en/download/) (LTS)
- [Postman](https://www.postman.com/downloads/) (can be used in browser)

NOTE: After installing Node, open the terminal and type:
```
node --version
```
You should see a version number:
```
v18.13.0
```
Feel free to look at some tooling documentation:
- [VSCode](https://code.visualstudio.com/docs/setup/setup-overview)
- [Postman](https://learning.postman.com/docs/getting-started/introduction/)

The source code is also in this repository, so please reference it!

To get started, create a new directory/folder.
On Unix-based systems:
```shell
mkdir server-test
cd server-test
```

Now, initialize a new Node.js project with `npm init` and follow the prompts.
You can just hit enter (leave them blank) on all of them if you wish.

To install Express, run `npm install express`.
After it finishes installing, create a new file named `server.js` and open it in your text editor.
On Unix-based systems with VSCode, you can use:
```shell
touch server.js
code .
```

Now, we can write our server program using Express!

### Server Creation

First, let's require the Express module and create an Express app with:
```js
// Import express module
const express = require('express');
// Create an express application
const app = express();
```

Now, define a route (also known as an endpoint) that responds to GET requests on the root URL ('/') that serves a webpage with an HTML response.
```js
// Define a route that serves a web page
app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});
```

To get our server to take requests, we will set the server to listen for requests on port 3000.
The port does not matter, as long as it is open and not being used by another process.
```js
// Start the server listening on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

In your terminal, run `node server.js` in the directory of your server.
It should say "Server listening on port 3000" if the server was started correctly.
Now, if you browse to the URL `http://localhost:3000/`, you should see "Hello, world!" on the web page.

Success!
You have just set up a basic web server using Express!

### Expanding the API - User Database Setup
To make our server more robust, we can add more routes that do different things.
These routes are the API of our server and allow us to make varying HTTP requests to get responses from our server.
For the sake of demonstration, I will run through creating a simulated database and using a GET, POST, and DELETE request to fetch and manipulate data.
APIs are covered more in-depth in the API workshop.

First off, let's create a simple simulated database of users using an array of key-value pairs:
```js
// Simulated database of users
let users = [
  { id: 1, name: 'Arisu' },
  { id: 2, name: 'Ako' },
  { id: 3, name: 'Hina' },
];
```

Since our requests will most likely deal with JSON, let's add some middleware that parses JSON request bodies.
```js
// Add some middleware to parse JSON request bodies
app.use(express.json());
```

This function will parse the request body if it contains JSON and store it as an object in the `req.body` property of the request object.

For our first HTTP request, we will get the list of users from the server.
```js
// GET request handler for /api/users
// Request to get all of the users in our simulated database
app.get('/api/users', (req, res) => {
  res.json({ users });
});
```

Notice, we use app.get for our GET request, which is located at the `/api/users` endpoint.
The server will then send the database of users as a response with `res.json({ users })`.

Note: The `{ users }` JS syntax is used to send our users array as a single key-value pair, where `"users"` is the key, and the value of users (our database array) is the value.
Also, note that whenever you make changes to the `server.js` file and save it, you must restart the server by running `node server.js` again for the changes to take effect.

Now, when we browse to `http://localhost:3000/api/users`, we should see our simulated database!
```js
{"users":[{"id":1,"name":"Arisu"},{"id":2,"name":"Ako"},{"id":3,"name":"Hina"}]}
```

### Expanding the API - User Creation
To demonstrate more HTTP requests, we will write two more endpoints: one to create a new user, and one to delete a user.

To create a new user, we will need a POST request, as we are adding something to our database.
Let's use the endpoint `/api/users`, as we will be manipulating the simulated database that we `GET` at the same endpoint.
The difference this time is that the HTTP method differs, and the request body will need to supply a user to create.
Because we cannot supply
```js
// POST request handler for /api/users
// Request to create a new user
app.post('/api/users', (req, res) => {
  // Extract the name of the new user from the request body
  const name = req.body.name;

  // Set the new user's ID
  const newId = users.length + 1;

  // Insert new user with their ID into the simulated database
  users.push({ id: newId, name: name });
  
  // Log successful user creation
  console.log(`Created user ${name} with ID ${newId}`);

  // Sends a status code indicating successful creation
  // along with a JSON response containing the ID and user
  res.status(201).json({ id: newId, name });
});
```
Note: The HTTP response status code `201` is used to indicate successful creation.

### Testing Routes/Endpoints with Postman
As our POST request requires a request body to create a user, we won't be able to test it with just our browser URL.
A useful tool for testing APIs and their HTTP requests/responses is [Postman](https://www.postman.com/)!
After either setting up the Postman desktop application or setting up Postman to work in the browser, we will want to go to our workspace.

![browse to workspace](./postman-reference-photos/browse%20to%20workspace.png)

Next, we will want to create a new HTTP request with `New -> HTTP Request`.

![new button](./postman-reference-photos/new%20button.png)

![make new HTTP request](./postman-reference-photos/create%20new%20http%20request.png)

To create and test our POST request, select `POST` as the HTTP method and enter the POST endpoint's URL `http://localhost:3000/api/users`.
Browse to the `Body` tab under the URL input box, and change the body type from `raw` to `JSON`.
To create our user, we will need to supply a JSON body that looks like so:
```JSON
{
    "name": "username of choice"
}
```
After that, we can hit send and Postman should output the body of the HTTP response and its status code at the bottom!

![making the POST request](./postman-reference-photos/make%20the%20post%20request.png)

We can also make our GET request using Postman like so:

![making the GET requests](./postman-reference-photos/get%20request.png)

This allows us to see the JSON body of the HTTP response in a more organized format.
It is highly suggested to tinker with Postman and get used to testing HTTP requests!
It is a very useful tool for development!
Now, on to deleting users:

### Expanding the API - User Deletion
Our delete user endpoint will act very similarly, however, our endpoint will utilize a parameter.
Parameters are like variables that vary based on the URL route.
Along with this, we also check if the user id specified to delete a user is valid and throw a `404` status code and error if it is not.
The rest is just javascript to delete the user from our simulated database array!
```js
/ DELETE request handler for /api/users/:id
// Request to delete a specified user
app.delete('/api/users/:id', (req, res) => {
  // Extract the id from the parameter in the route URL
  const id = req.params.id;

  // Locate the user to delete in the database
  const index = id - 1;

  // Send an error code along with an error message if the ID is invalid
  if (index == -1 || index >= users.length) {
    res.status(404).json({ error: `User with ID ${id} not found` });
  } else {

    // Delete the user from the simulated database
    users.splice(index, 1);

    // Output a status code and log message indicating successful deletion
    console.log(`Deleted user with ID ${id}`);
    res.sendStatus(204);
  }
});
```

Feel free to test this DELETE request using Postman!
This can also be done by just using the URL in the browser.

Anyways...
That is it for our server and its API!
You have successfully created an Express server and API using Node.js!
If you've made it this far, have a cookie: :cookie:

###### :sparkles: HAPPY HACKING!!!! :sparkles:
If you are still having trouble, please check out some of the other [workshops](https://github.com/uclaacm/hothX-workshops) created by the ACM Hack team!
GLHF :>
