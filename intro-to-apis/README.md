# HOTHX Intro to Web APIs 
**Date:** February 5, 2023 

**Teacher:** [Abigail Tran](https://github.com/abigailtrann) 

Welcome to the HOTHX Intro to Web APIs workshop * ੈ✩‧₊˚  

In this workshop, we will learn all about using Web APIs to integrate existing software systems (like Twitter, Venmo, Spotify, Google Maps) within our own project🧑‍💻💻📲 

## Resources
- [Slides](https://docs.google.com/presentation/d/1iQU02GAt75Y2JhRN6iniuJFAt_tKBy1xE2whg-1DJs0/edit?usp=sharing)
- [Workshop recording](https://drive.google.com/file/d/1lpIY8jj-EQFtm9-cWhawWKHvvBgjoBer/view?usp=share_link)

## Topics Covered
- [APIs](https://github.com/uclaacm/hothX-workshops/blob/main/intro-to-apis/README.md#what-is-an-api)
- [Servers and Clients](https://github.com/uclaacm/hothX-workshops/blob/main/intro-to-apis/README.md#what-even-is-a-server-or-a-client-and-how-do-they-interact)
- [HTTP](https://github.com/uclaacm/hothX-workshops/blob/main/intro-to-apis/README.md#http)
- [FullStack Example with Twitter API](https://github.com/uclaacm/hothX-workshops/blob/main/intro-to-apis/README.md#quick-little-fullstack-example-with-twitterbot-api)
- [Spotify Walkthrough]([https://github.com/uclaacm/hothX-workshops/blob/main/intro-to-apis/README.md#spotify-apis-walkthrough](https://github.com/uclaacm/hothX-workshops/blob/main/intro-to-apis/README.md#spotify-api-walkthrough))

## What is an API?
API stands for **A**plication **P**rogramming **I**nterface. This may sound complicated, but they really they just a way for two computers- a client and a server** to communicate. Some examples of APIs you may have encountered before are Venmo, Google Maps, and Twitterbots. Venmo payment is done through to ensure that the end application can only do what it needs to accomplish without being exposed to sensitive data or gaining access to unwelcome privileges. In this sense, APIs are kind of like a black box, or an object that produces useful information without revealing anything about its internal workings

**Web APIs** are APIs for the web. They contain multiple endpoints aka points of contact between client and server.

<img width="297" alt="Screen Shot 2023-02-27 at 1 54 24 PM" src="https://user-images.githubusercontent.com/108372342/221694583-47255408-8be3-4d2a-b3d4-c8d187217171.png">


## What is a Server? and a Client? And how do they Interact?
Servers are just like any regular old computer. The only difference is that they have the task of listening and responding to requests from other computers called **clients.** 

Here, let's use a restaurant analogy to better explain this: Clients are like the customers ordering. Just like how a customer can request a glass of water or an order of sushi, a client can request some function to be performed or data to be processed and returned. The request goes to the kitchen which acts as the **server** (not to be confused with waiter). Now how does this request go to the kitchen? The waiter communicates the request to the kitchen and also brings the food from the kitchen similar to an **API**, which acts as a middle man between a client and a server. 

The benefit: you can enjoy the yummy products of the restaurant's work without having to know how to make it yourself. This way, the restaurant can provide their services to anyone who knows how to speak the language. But while a customer may order in English or Mandarin, clients and servers use HTTP.

<img width="518" alt="Screen Shot 2023-02-27 at 1 20 49 PM" src="https://user-images.githubusercontent.com/108372342/221688245-145c19c6-f6fe-484a-9259-d43c457c8b26.png">


## HTTP 
HTTP stands for Hyper Text Transfer Protocol. It is the primary way we communicate over the World Wide Web (you may have seen http:// in urls). HTTP's fixed format makes it easier for servers to parse through a client's request.

<img width="396" alt="Screen Shot 2023-02-27 at 1 30 58 PM" src="https://user-images.githubusercontent.com/108372342/221690143-75668c2a-97a4-48d4-a65b-d1d4147b621b.png">




**Methods** are requests you can make through HTTP. The primary HTTP methods are **GET, POST, PUT, DELETE** I will be illustrating this methods using a TwitterBot API as an example. 

- **GET:** read data
    - get all Tweets
    - /feed

- **POST:** insert data
    - create a new Tweet
    - /feed/new

- **PUT:** update date or insert if a new id
    - edit a Tweet or like a Tweet
    - /feed/edit/:_id or /feed/like/:_id

- **DELETE:** delete data
    - delete a Tweet
    - /feed/delete/:_id
 
<img width="350" alt="Screen Shot 2023-02-27 at 1 31 35 PM" src="https://user-images.githubusercontent.com/108372342/221690258-5ba5fdd6-a980-4d84-a451-4e711981b848.png">

Some important components of an **HTTP Request** from a client to a server are:
- **Method:** what will your requests do (GET, POST, PUT, DELETE)
- **Endpoint + Host:** where will it be done
    -**Endpoint:** GET/ profile
    -**Host:** localhost:8080
    
After receiving a request, the server will perform the action and create a response to send back to client, this is the **HTTP Response Message** and this consists of a:
 - **Head:** meta-information about the message, contains HTTP Status Code
    - **HTTP Status Code: **
        - 1xx: the request was recieved and being processed
        - 2xx: the request was successfull
        - 3xx: redirection
        - 4xx: client error, request contains bad syntax or cannot be fulfilled
            - 404 page not found
        - 5xx: server error, server failed to fulfill valid request
  
<img width="520" alt="Screen Shot 2023-02-27 at 1 43 21 PM" src="https://user-images.githubusercontent.com/108372342/221692497-6b4773a0-3926-4903-b47b-19c2b9f6732c.png">

## Quick Little Fullstack Example with TwitterBot API

<img width="342" alt="Screen Shot 2023-02-27 at 2 01 06 PM" src="https://user-images.githubusercontent.com/108372342/221695766-f546cf14-c29f-461b-920f-fad7cd3f3e6f.png">

- **App.get** specifies the endpoint and is given to us thorugh library
- **/feed** is our endpoint
- Now we have to pass in an **asynchronous** function with two specific parameters, a request param and response param
    - **Asynchronous functions** are functions that allow our program to continue with execution without requiring completion first
    - Useful for functions that may take a while to complete including GET requests and other API calls
    - We can specify an asynchronous function using the aysnc keyword before a function declaration
    - Within Asynchronous functions we use the await keyword to indicate on operation that may take a while to complete. Our async function will wait for these operations to complete before continuing within the async function.
- In our case the Post.find() is the operation that may take a while to complete, since it may take a while to collect all of the Tweets

The bottom is an example of an HTTP request that we would send. **Get** is the method, **/feed** is the endpoint, **1.1** is the protocol, and **localhost:8080** is the host.

## Spotify API Walkthrough
We mostly use the GET method in Spotify API to get data and display it all pretty.  This is because the POST, PUT, DELETE methods would be used to modify data, such as creating, editing, or deleting playlists, which users can just do on the through the app anyway.

Some cool examples of Spotify APIs are [Receiptify](https://receiptify.herokuapp.com/), [Obscurify](https://obscurifymusic.com/login), [Instafest](https://www.instafest.app/), [Icebergify](https://icebergify.com/), and [Spotify Pie](https://huangdarren1106.github.io/), which was made by a fellow UCLA student last year! 

We cannot go into Spotify's code, but a lot of functions are in Spotify's public API. HWe can look at their API, see there is a method that corresponds to what we want, and use it without accessing all their data. We can only access stuff like a user’s artists, songs, etc, but not their payment info for example. Spotify does not want you to access their data: this is the whole point of an API. This is a win-win because this protects Spotify's data and also gives you a doorway into methods and how you want to interact with servers. 

Here is a [link to intructions on how to set up for a Spotify API.](https://developer.spotify.com/documentation/web-api/quick-start/) I also believe that the [Intro to Backend: Servers workshop]() may touch upon setting up a server.

Here is a [link to some Spotify functions may use to access a user's data, edit a user's playlist, edit a user's library, etc](https://github.com/JMPerez/spotify-web-api-js)

Below is my my code collecting a user's top 20 artists, including explanations! In this code, I use the Spotify API calls **getMe** and **getMyTopArtists**. I also deal with **tokens** which are prevalent in apps that require a user to log in. Tokens are proof of authentication. You get a token when a user logs in and you give the top to the server, Spotify, in exchange for data. This makes sense, because Spotify, cannot just give out anybody's data, they need the user to show that they agree by logging in. 

```class ProfilePage extends React.Component { //making a copmponent and this is what will be shown on the localhost
    constructor(props) {
        super(props);
        this.state = { //creating four states or variables called spotufy, authenticated, displayName, and topartists
            spotify: new SpotifyWebApi(), //what we need to connect with the api
            authenticated: false,
            displayName: "",
            topArtists: [],
        };
    }

    componentDidMount() {
        const token = getToken(); //getToken is an api call
        this.state.spotify.setAccessToken(token); // tokens are proof of authentiation,common in apps that you log in, you get a token when user logs in and you basically give it to server (spotify) and server gives data back 
        this.state.spotify.getMe().then( //.then is async,, ensures 21 and 22 go after getme() function fulfills promise
            (me) => this.setState({ displayName: me.display_name }), //expecting an argument called me,, setting display name state to whatever display name is in the me object
            (error) => console.log("Error loading profile data: ", error) //if there is an error that exists, print th eerror to the console so you can see what it is and debug
        );

        this.state.spotify 
            .getMyTopArtists({ // its an APi call and all API calls returns a promise, once we have our top artists, then it will run everything in .then
                limit: 20, //20 top artists
            })
            .then( //go here after getMyTopArtists resolves, promise is no longer promise bc it resolved and got our data
                (artistsData) => { //we expect getmytopartists to return artist data
                    let artists = []; //create empty array of artists, so that we can hold artists as we iterate the artists that are returned
                    artistsData.items.forEach((artist) =>{ //loops through every single item (every artist) in artistData.items
                        console.log(artist); //prints to the website
                        artists.push(artist.name) //add artist name to empty array artists we created in 31
                    }
                    ); //we are out of the loop but we are still in the .then function

                    this.setState({
                        topArtists: artists, //set top artists equal to artists
                        authenticated: true, //make user authenticated so we can render later
                    });
                },
                (error) => console.log("Error loading top artists: ", error) //if its an error then say error loading artists
            );
          
    }

    render() { //everything we show on website
        // If the user isn't fully authenticated, don't render anything yet
        // This shouldn't be the case for longer than a fraction of a second
        if (!this.state.authenticated) return null;

        // Log out by navigating back to the home page
        const logout = () => this.props.navigate("/");
        ```
