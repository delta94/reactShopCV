import _ from 'lodash';


export const tags = {
  types: {
    Skills: { description: 'Skills', selected: false },
    Education: { description: 'Education', selected: false },
    Fun: { description: 'Fun', selected: false },
    Projects: { description: 'Projects', selected: false },
    Work: { description: 'Work', selected: false },
  },
  tagChange: false,
};

export const ratings = {
  rates:{
    1:false,
    2:false,
    3:false,
    4:false,
    5:false
  },
  isRatingChange:false
}


export const items = {
  1: {
    title: 'Academia de Código',
    description: 'An Intensive Java & Javascript Bootcamp. Learned about Fundamental object-oriented programming concepts using Java; automated tests, and version control systems; relational database theory; using reference server-side frameworks; implementing web services; web development with HTML e CSS; creating responsive designs using the Bootstrap framework\; fundamental JavaScript concepts; creating JavaScript web applications using reference JavaScript frameworks; server-side JavaScript and Hybrid mobile app development. Happiest time ever! :)',
    image: '/src/img/academia_codigo.png',
    price: 59.90,
    tag: 'Education',
    id: 1,
    stock: 1,
    rating:5,
  },
  2: {
    title: 'Msc. in Finance',
    description: 'I hold a masters in Finance degree from ISCTE-IUL. I’ve learned about cool financial stuff like Swaps, Bonds, Commodities… and had to do some programming in VBA!',
    image: '/src/img/iscte.png',
    price: 45.00,
    tag: 'Education',
    id: 2,
    stock: 10,
    rating:3,    

  },
  3: {
    title: 'Bsc. in Management',
    description: 'I have a bachelor\'s degree in Management from ISCTE-IUL. I’ve studied about Accounting, Marketing, Logistics, Corporate Strategy, Corporate Finance and a bunch of other stuff. Cool fact: My bachelor’s final project was the creation of a themed hotel!',
    image: '/src/img/iscte.png',
    price: 29.99,
    tag: 'Education',
    id: 3,
    stock: 4,
    rating:4,
  },
  4: {
    title: 'Table Tennis',
    description: 'I’ve playing it since I was 8 years old and I’ve never stopped. Absolutely love it!',
    image: '/src/img/tiago_tt.jpg',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Rr51iZZmS8?rel=0?ecver=1" frameBorder="0" gesture="media" allowFullScreen></iframe>',
    price: 30.00,
    tag: 'Fun',
    id: 4,
    stock: 10,
    rating:4,
  },
  5: {
    title: 'BPI',
    description: 'I’ve worked at BPI Investment Banking in Lisbon as a part of the asset selection team. My goal was to create spreadsheet models to help portfolio managers make educated investment decisions. Got to deepen my Excel knowledge.',
    image: '/src/img/bpi.png',
    price: 28.89,
    tag: 'Work',
    id: 5,
    stock: 2,
    rating:3,
  },
  6: {
    title: 'Santander',
    description: 'My first real job! I was an assistant in the Structured Retails Products team at Santander Global Banking in Lisbon. I’ve helped creating financials products like deposits that were then sold to Santander’s customers. Got to learn about Excel, but also learnt a lot about dealing with customers.',
    image: '/src/img/santander.png',
    price: 12.99,
    tag: 'Work',
    id: 6,
    stock: 9,
    rating:4,
  },
  7: {
    title: 'Uniplaces',
    description: 'After banking I decided I wanted to try something different. Therefore I joined Uniplaces as a Marketing Analyst. This was really cool for me because I got to learn about Google Adwords, Google Analytics and got to work on a daily basis with SQL and XML feeds.',
    image: '/src/img/uniplaces.png',
    price: 46.90,
    tag: 'Work',
    id: 7,
    stock: 7,
    rating:4,
  },
  8: {
    title: 'CGI',
    description: 'CGI was my first job in the development industry. I got to work with C#, using the .NET framework and other Microsoft technologies like SQL Server. Also worked with other things like Bootstrap and JQuery. I’ve implemented the hour report system and the feedback management system CGI Portugal is currently using.',
    image: '/src/img/cgi.png',
    price: 55.99,
    tag: 'Work',
    id: 8,
    stock: 2,
    rating:4,
  },
  9: {
    title: 'Bootstrap',
    description: 'I’ve used it in almost all my personal and professional projects. Nowadays I’ve been focusing on trying to make my projects as responsive as possible! For a little flavour of what I’m saying try resizing the shopping cart page!',
    image: '/src/img/bootstrap.png',
    price: 34.90,
    tag: 'Skills',
    id: 9,
    stock: 8,
    rating:4,
  },
  10: {
    title: 'Node.Js',
    description: 'I got really into Node.js due because I wanted to learn more about asynchronous programming and I’ve sticked to because it is an amazing framework! Check one of my projects called 65. It uses Node.JS from top to bottom!',
    image: '/src/img/node.png',
    price: 67.89,
    tag: 'Skills',
    id: 10,
    stock: 3,
    rating:5,
    link:'/item/25'
  },
  11: {
    title: 'React',
    description: 'JQuery is cool but after some time you get tired of seeing $(\'Stuff\') all over the place and doing stuff like “onClick hide that” and so on... So I decided to see what React was all about. And it’s pretty cool! I did a couple of online courses to learn about React and Redux, but also other things like managing forms and displaying modals in React. Heads up: this project is entirely made with React+Redux!',
    image: '/src/img/react.png',
    price: 79.99,
    tag: 'Skills',
    id: 11,
    stock: 7,
    rating:5,
  },
  12: {
    title: 'Java',
    description: 'Java was the selected language of choice when I started learning how to code. I did all things imaginable with it. Inheritance, iterators, interfaces, buffers, streams, threading, frameworks like Hibernate and Spring... I’ve actually built several games and a chat server with it. Take Spotify Playlist Sorter! It’s a project 100% made with Java.',
    image: '/src/img/java.png',
    price: 13.00,
    tag: 'Skills',
    id: 12,
    stock: 6,
    rating:4,
    link:'/item/26'
    
  },
  13: {
    title: 'C#',
    description: 'C# was the programming language I used at CGI. It’s usage is not that different from Java since both are objected oriented but has some cool features. Enjoyed it!',
    image: '/src/img/c.png',
    price: 67.89,
    tag: 'Skills',
    id: 13,
    stock: 9,
    rating:4,
  },
  14: {
    title: 'Mongo DB',
    description: 'I got curious about MongoDB because I heard everyone talking about “NoSQL”. So I investigated it. And it turns out I liked it! It’s cool dealing with JSON and not have to deal with a lot of mappings. I’ve used it in my personal project  called 65. Check it out!',
    image: '/src/img/mongo.png',
    price: 88.00,
    tag: 'Skills',
    id: 14,
    stock: 3,
    rating:3,
    link:'/item/25'
  },
  15: {
    title: 'SQL',
    description: 'INSERT INTO (DB_Languages_I_Know) VALUES (‘SQL’). The good old SQL. There’s no escaping it. But it’s not that bad. I’ve used it at Uniplaces, CGI and Academia de Código.',
    image: '/src/img/sql.png',
    price: 36.99,
    tag: 'Skills',
    id: 15,
    stock: 6,
    rating:3,
  },
  16: {
    title: 'Spring',
    description: 'Spring as one of the technologies I’ve learned at Academia De Código alongside with Maven as well. All of the more complex projects we did there were reliant on Spring MVC.',
    image: '/src/img/spring.png',
    price: 23.00,
    tag: 'Skills',
    id: 16,
    stock: 8,
    rating:3,
  },
  17: {
    title: 'CSS',
    description: 'If it is good, it was to look good as well! I’m no expert in CSS but I try to keep things as inviting to the eye as possible. I did the styling of this application from scratch for example.',
    image: '/src/img/css.png',
    price: 45.90,
    tag: 'Skills',
    id: 17,
    stock: 2,
    rating:4,
  },
  18: {
    title: 'Hibernate',
    description: 'One of ORM’s I’ve used with Java at Academia de Código. At CGI with the .NET framework I’ve used the Entity Framework to do object mapping.',
    image: '/src/img/hibernate.png',
    price: 70.99,
    tag: 'Skills',
    id: 18,
    stock: 7,
    rating:3,
  },
  19: {
    title: 'Git',
    description: 'My VCS of choice! I’ve used other stuff like TFS but GIT is better. I use it everyday in my personal projects and I’ve used at Academia de Código as well.',
    image: '/src/img/git.png',
    price: 69.99,
    tag: 'Skills',
    id: 19,
    stock: 4,
    rating:4,
  },
  20: {
    title: 'Html',
    description: 'One of those things you can\'t escape from. I\'ve used it in all my personal and professional projects.',
    image: '/src/img/html.png',
    price: 7.99,
    tag: 'Skills',
    id: 20,
    stock: 10,
    rating:4,
  },
  21: {
    title: 'Excel',
    description: 'If you ever did any serious work in Finance you know Excel is one of the tools you must be confortable using. Although Excel is not a programming language, there’s a lot of logic going on there. VLOOKUP is like a foreign key relation, FIND(substr,string) is like String.IndexOf(), IF() is like, well, an IF statement… There are certainly some points of contact.',
    image: '/src/img/excel.png',
    price: 59.85,
    tag: 'Skills',
    id: 21,
    stock: 6,
    rating:3,
  },
  22: {
    title: 'Webpack',
    description: 'At first I used to look at it in complete despair. But then it started to make some sense. Although the syntax is not very welcoming, it’s a very cool tool for bundling and testing. I\'m using it in every new project I’m doing and I’ve used it in 65 and ReactiumVitae.',
    image: '/src/img/webpack.png',
    price: 77.90,
    tag: 'Skills',
    id: 22,
    stock: 2,
    rating:3,
  },
  23: {
    title: 'ES6',
    description: 'Array.Map( ), Array.Reduce( ), Object.keys( ), {...state}, class Dog extends Animal, promise.then( )...I got it covered!',
    image: '/src/img/es6.png',
    price: 35.00,
    tag: 'Skills',
    id: 23,
    stock: 9,
    rating:4,
  },
  24: {
    title: 'ReactiumVitae',
    description: 'I originally got the idea that a online shop could be a good starting point for a CV when I was shopping online and looking for a job at the same time. When I got my hands on React and wanted to make a project to consolidate my knowledge I chose to do it. And you’re currently looking at it! The technologies used were React and Redux.',
    image: '/src/img/shoppingBag.png',
    price: 99.99,
    tag: 'Projects',
    id: 24,
    stock: 1,
    rating:5,
  },
  25: {
    title: '65',
    description: 'So my parents have a house to rent. Every year come summer time, my father creates a new Excel spreadsheet and registers everything there. There’s no easy way to access records of past customers, prices or reservations from one year to another. “This has to end”, I said. And so 65 has born. 65 is a project about managing holiday rentals. The technologies used were Node.JS, Mongo DB and some notable frameworks like Passport.JS, Axios, Mongoose, Webpack, Express, Pug and Promisify.',
    image: '/src/img/65.png',
    price: 99.99,
    tag: 'Projects',
    id: 25,
    stock: 1,
    rating:5,
    externalLink:'https://flat65.herokuapp.com'
  },
  26: {
    title: 'Spotify Playlist Sorter',
    description: 'I’m a huge music fan. And I use Spotify. One thing that bothers me about Spotify is that it doesn’t give me a way of separating my music by genre automatically. So I did that myself. What this Java application does is go through all recent songs added to my library, determine the genre of a song, and place it in its correct playlist. On top of that I added a feature to randomly select 15 songs from each genre playlist and save them offline, so that I can take on my music anywhere without the need of having internet access.',
    image: '/src/img/spotify.png',
    price: 99.99,
    tag: 'Projects',
    id: 26,
    stock: 1,
    rating:5,
    externalLink:'https://github.com/tmcrs123/spotifyPlaylistSorter'
  },
  27: {
    title: 'Dogs',
    description: '“Who’s a good girl? Who’s a good girl? Mel is a good girl!”',
    image: '/src/img/dogs.png',
    price: 49.90,
    tag: 'Fun',
    id: 27,
    stock: 1,
    rating:4,
  }
};

// not sure why I need this here but seems like state in items reducer is a reference to items object. When trying to revert to initial state they are bounded and cannot get startValue for stock
export const initialStock = _.mapValues(items, item => item.stock);

export const cart = _.mapValues(items, () => 0);

export const numberOfTags = Object.keys(tags.types).length;

export const orderingType = { category: 'Category', priceAsc: 'Price Asc.', priceDesc: 'Price Desc.', rating: 'Rating' };

export const startingOrdering = orderingType.category;

export const itemsPerPage = 9;
export const itemsPerRow = 3;

export const totalItems = Object.keys(items).length;
