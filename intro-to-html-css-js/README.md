# intro-to-html-css-js

# HTML
HTML (Hypertext Markup Language) is the standard language used to create and design websites. It provides a way to structure content and add text, images, videos, links, and other multimedia elements to web pages, and is a crucial foundation for web development.

## Getting Started
In order to write HTML code, you will need a text editor and a web browser. Any text editor or web browser you are comfortable with will do!

## Creating a HTML Page
To create an HTML page, you need to follow a few basic steps:

1. Create a new folder.
2. Open that folder in your text editor and create a new file with an `.html` extension (e.g., `index.html`).
3. Add the basic structure of an HTML page, which includes the `<!DOCTYPE html>` declaration and the `<html>`, `<head>`, and `<body>` tags.
4. Add the content to your page using tags such as `<h1>` for headings, `<p>` for paragraphs, `<img>` for images, and `<a>` for links.
5. Save your file and open it in a web browser to view the page.

## Using Tags
Tags in HTML are used to mark up different types of content on a web page, such as headings, paragraphs, lists, images, links, and so on. Tags are enclosed in angle brackets (`<` and `>`). Here are some common HTML tags you might need for your project:

### Header
`<h1>Anya Forger</h1>`
`<h3>Welcome to Anya's page!!</h3>`

A header tag is used to define a heading or a section title in a page. It is represented by `<h1>`, `<h2>`, up to `<h6>` tags, with `<h1>` being the largest and most important heading and `<h6>` being the smallest.

### Paragraph
`<p>I'm Anya! I'm 6, and this is where you can read everything about me. 𓁹‿𓁹</p>`

Simply put, a paragraph tag define a block of text or a paragraph. It is represented by the `<p>` tag.

### Image
`<img src="https://static.tvtropes.org/pmwiki/pub/images/anya_happy.png" alt="anya_happy", height="200px"/>`

An image tag is used to define an image. The `src` attribute specifies URL of the image file. The `alt` attribute provides a descriptive text of the image. 

The `<img>` tag can also include other attributes, such as width and height, to specify the size of the image.

- Note that the `<img>` tag is a self-closing tag, which means that you don't need to add another closing tag like `</img>`!

### Link
`<a href="https://www.youtube.com/watch?v=zAO_Rqkm1CA">Self-Defense</a>`

A link tag defines a hyperlink and is represented by `<a>`. The `href` attribute provides the URL of the target page. When the user clicks on the link, their browser will navigate to that page.

### List
A list tag is a tag used to create lists of items. There are two main types of lists in HTML: ordered lists (`<ol>`) and unordered (`<ul>`) lists. Every item in the list is represented by the `<li>` tag.

#### unordered list
```
<ul>
    <li>Telepathy</li>
    <li>Self-Defense</li>
    <li>Tennis</li>
</ul>
```
#### ordered list
```
<ol>
    <li>Peanuts</li>
    <li>Bondman</li>
    <li>Odekeke (family outing)</li>
</ol>
```

### Button
`<button type="button">Click to pat my dog Bond</button>`

A button tag is used to create buttons on a web page. It is represented by the `<button>` tag.
- For now, nothing will happen when the user clicks the button. To make the button interactive, we need to use more than just HTML. One way to achieve this is by executing a JavaScript function when the button is clicked using the 'onClick' attribute. We will cover this in more detail in the JavaScript section of this workshop.

# CSS
CSS (Cascading Style Sheets) is a language used to style and format web pages. With CSS, we can control the font, color, size, and spacing of text, as well as the layout and positioning of elements on a web page. 

## Linking CSS to HTML
In order to apply CSS styles to your HTML elements, you need to link your CSS file to your HTML file by following these steps:

1. In your text editor, create a new file with an `.css` extension (e.g., `style.css`).
2. Add a link element to the head section of your HTML file.
```
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
3. Your CSS file is linked to your HTML file. Now it's time to add some CSS styles!

## Adding Styles
Let's take a look at a typical CSS rule:

```
h1 {
    color: pink;
}
```

The rule above can break down into several parts: 
- `h1` is the selector, which means that this rule targets all `<h1>` elements.
- `color` is the property. It specifies which aspect of the targeted elements you want to modify.
- `pink` is the value of the property. 

### Common Properties in CSS
- `font-family`: set the font style of the text
- `font-size`: set the font size of the text
- `font-weight`: set the font weight of the text
- `color`: set the color of text
- `background-color`: set the background color
- `text-align`: determine whether the text is aligned to the left, right, center, or justified (aligned on both the left and right)
- `border`: create a border around an element
- `border-color`: set the color of the border
- `border-radius`: create rounded corners by setting the radius of each corner of the border

## Classes and IDs
Besides tags, we can also use classes and IDs in CSS to target HTML elements. What's great about classes and IDs is that they allow you to apply style to some specific elements, without affecting other elements on the page.

### Classes
Here is the code you might write to create a CSS class and apply it to an HTML element:
```
<!-- IN YOUR CSS FILE -->
.list {
    text-align: center;
}
```
```
<!-- IN YOUR HTML FILE -->
<h3 class="list">Skills</h3>
```

Here, `.list` is the name of the class, and all CSS styles that go in the curly brackets are applied to every HTML element with `class="list"`.

### IDs
Similarly, here is how to apply styles to an element with an ID:
```
<!-- IN YOUR CSS FILE -->
#peanuts {
    font-size: 30px;
}
```
```
<!-- IN YOUR HTML FILE -->
<li id="peanuts">Peanuts</li>
```

Here, `#peanuts` is the name of the ID, and the CSS styles in the curly brackets are applied to the HTML element with `id="peanuts"`.

- The difference between class and ID is that while a class can be applied multiple times, an ID is supposed to be unique on a page. That is to say, you should assign an ID to only one HTML element.

# JavaScript
JavaScript is a programming language used to create interactive and dynamic web pages.

## Running JavaScript Code
1. In the same folder as your HTML and CSS files, create a new file with an `.js` extension (e.g., `script.js`).
2. Add a script element to the head section of your HTML file.
```
<head>
    <script src="script.js"></script>
</head>
```
3. Now you can write your JavaScript functions in the `.js` file!

## Writing Functions
We want to implement a feature on our website so that everytime the user clicks the "Click to pat my dog Bond" button, the string woof will be printed out on our website.

In order to add this interactive feature, we need the following function:
```
<!-- IN YOUR JS FILE -->
var text = "";
function myFunction() {
  text += "Woof ";
  document.getElementById("text").innerHTML = text;
}
```
```
<!-- IN YOUR HTML FILE -->
<button type="button" onclick="myFunction()">Click to pat my dog Bond</button>
```

### Breakdown

```
var text = "";
```
This creates a variable called text and assigns an empty string to it. We will use this variable to store the text that will be displayed on the web page.

```
function myFunction() {
  text += "Woof ";
  document.getElementById("text").innerHTML = text;
}
```
This defines a function called `myFunction()`. The function adds the string "Woof " to the text variable, and then updates the HTML element with the id of "text" with the current value of text.

- `document` is an object that represents the web page as a whole. 
- `getElementById()` is a method of the document object that is used to select a specific HTML element based on its id attribute. In our case, it selects the element with id="text". 
- `.innerHTML` allows us to get the content of the selected element and set it to the current value of the text variable.

```
<button type="button" onclick="myFunction()">Click to pat my dog Bond</button>
```
This creates a button in the HTML file that, when clicked, calls the `myFunction()` function. 

**That's all for this workshop! Good luck on your HOTH projects :DD**