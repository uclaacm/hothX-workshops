# HOTHX Intro to Web APIs 
**Date:** February 5, 2023 

**Teacher:** Abigail Tran 

Welcome to the HOTHX Intro to Web APIs workshop * ੈ✩‧₊˚  

In this workshop, we will learn all about using Web APIs to integrate existing software systems (like Twitter, Venmo, Spotify, Google Maps) within our own project🧑‍💻💻📲 

## Resources
- [slides](https://docs.google.com/presentation/d/1iQU02GAt75Y2JhRN6iniuJFAt_tKBy1xE2whg-1DJs0/edit?usp=sharing)
- [workshop recording](https://drive.google.com/file/d/1lpIY8jj-EQFtm9-cWhawWKHvvBgjoBer/view?usp=share_link)

## Topics Covered
- [APIs]()
- [Servers and Clients]()
- [HTTP]()
- [Spotify Walkthrough]()

## What is an API?
- API stands for ==A==plication ==P==rogramming ==I==nterface. This may sound complicated, but they are essentially just a way for two computers- a client and 
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
