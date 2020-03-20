// changing the textContent of the header.
    var title = 'Top 3 VSCode Extensions';
    var author = 'By: Chue Xiong';
    var date = new Date();

    var titleEl = document.getElementById('title');
    titleEl.textContent = title;
    var authorEl = document.getElementById('author');
    authorEl.textContent = author;
    var dateEl = document.getElementById('date');
    dateEl.textContent = date;
    var img = document.createElement('img');
    img.setAttribute("id", "selfPortrait");
    img.src = "images/selfPortrait1.jpg";
    var imgEl = document.getElementById('heroImage');
    imgEl.appendChild(img);

// array storing VSCode package data and objects.
var packages = [
    {
        name: 'HTML Snippets', 
        description: 'HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.', 
        author: 'Mohamed Abusaid', 
        downloads: 3201954,
        stars: '4.5 stars'
    },
    {
        name: 'CSS Peek', 
        description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.', 
        author: 'Pranay Prakash',
        downloads: 773321,
        stars: '3.5 stars'
    },
    {
        name: 'Rainbow Brackets', 
        description: 'Add some fun into your editor with 🌈 Rainbow Brackets! This extension provides rainbow colors for round brackets, square brackets, and curly brackets. Especially helpful for JavaScript programmers!',
        author: '2gua', 
        downloads: 446714, 
        stars: '4.5 stars'
    }
];

// constructor function for creating Package objects.
function Package(name, description, author, downloads, stars) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.downloads = downloads;
    this.stars = stars;
    this.formatDownloads = function() {
        return downloads.toLocaleString();
    }
}

// constructing each package object.
var package1 = new Package('HTML Snippets', 'HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.', 
'Mohamed Abusaid', 3201954, '4.5 / 5 stars');
var package2 = new Package('CSS Peek', 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.', 
'Pranay Prakash', 773321, '3.5 / 5 stars');
var package3 = new Package('Rainbow Brackets', 'Add some fun into your editor with 🌈 Rainbow Brackets! This extension provides rainbow colors for round brackets, square brackets, and curly brackets. Especially helpful for JavaScript programmers!',
'2gua', 446714, '4.5 / 5 stars');

// getting the DOM elements and setting their textContent to an object's property.
var p1NameEl = document.getElementById('p1Name');
p1NameEl.textContent = package1.name;
var p1DescEl = document.getElementById('p1Desc');
p1DescEl.textContent = package1.description;
var p1AuthorEl = document.getElementById('p1Author');
p1AuthorEl.textContent = package1.author;
var p1DownloadsEl = document.getElementById('p1Downloads');
p1DownloadsEl.textContent = package1.formatDownloads() + " Downloads";
var p1StarsEl = document.getElementById('p1Stars');
p1StarsEl.textContent = package1.stars;

var p2NameEl = document.getElementById('p2Name');
p2NameEl.textContent = package2.name;
var p2DescEl = document.getElementById('p2Desc');
p2DescEl.textContent = package2.description;
var p2AuthorEl = document.getElementById('p2Author');
p2AuthorEl.textContent = package2.author;
var p2DownloadsEl = document.getElementById('p2Downloads');
p2DownloadsEl.textContent = package2.formatDownloads()  + " Downloads";
var p2StarsEl = document.getElementById('p2Stars');
p2StarsEl.textContent = package2.stars;

var p3NameEl = document.getElementById('p3Name');
p3NameEl.textContent = package3.name;
var p3DescEl = document.getElementById('p3Desc');
p3DescEl.textContent = package3.description;
var p3AuthorEl = document.getElementById('p3Author');
p3AuthorEl.textContent = package3.author;
var p3DownloadsEl = document.getElementById('p3Downloads');
p3DownloadsEl.textContent = package3.formatDownloads()  + " Downloads";
var p3StarsEl = document.getElementById('p3Stars');
p3StarsEl.textContent = package3.stars;