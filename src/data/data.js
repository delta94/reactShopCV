import _ from 'lodash';

export const tags = {
  Skills: { description: 'Skills', selected: false },
  Education: { description: 'Education', selected: false },
  Fun: { description: 'Fun', selected: false },
  Projects: { description: 'Projects', selected: false },
  Work: { description: 'Work', selected: false },
};


export const items = {
  1: {
    title: 'React',
    description: 'Reacting with react',
    image: 'https://avatars2.githubusercontent.com/u/9441414?s=280&v=4',
    price: 100,
    tag: 'Skills',
    id: 1,
    relevance: 1,
    stock: 1000,
  },
  2: {
    title: 'Msc in Finance',
    description: 'Big money...not!',
    image: 'http://www.audiologysolutionsnetwork.org/uploads/assets/1229/product/Audigy3.png?1403035146',
    price: 90,
    tag: 'Education',
    id: 2,
    relevance: 1,
    stock: 10,

  },
  3: {
    title: 'Doggy Style!',
    description: 'Doing it doggy style!',
    image: 'http://whai-fm.sagacom.com/wp-content/blogs.dir/96/files/2013/04/WP-Dog-200x200.jpg',
    price: 80,
    tag: 'Fun',
    id: 3,
    relevance: 2,
    stock: 10,
  },
  4: {
    title: '65',
    description: 'Manage reservations',
    image: 'http://www.thesuperweekend.co.uk/images/54ee883eb77f1.png',
    price: 70,
    tag: 'Projects',
    id: 4,
    relevance: 2,
    stock: 10,
  },
  5: {
    title: 'CGI',
    description: 'C#GI',
    image: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAJrAAAAJGYzNzc5NmIxLTkzODQtNDY3Yi1iZmIzLTkzZjIzZmE2YjZhNw.png',
    price: 1,
    tag: 'Work',
    id: 5,
    relevance: 3,
    stock: 3,
  },
  6: {
    title: 'Table Tennis',
    description: 'TT',
    image: 'https://www.directtrophies.com.au/image/cache/data/category%20thumbnails/ping-pong-200x200.png',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Rr51iZZmS8?rel=0?ecver=1" frameBorder="0" gesture="media" allowFullScreen></iframe>',
    price: 3,
    tag: 'Fun',
    id: 6,
    relevance: 3,
    stock: 10,
  },
};

//not sure why I need this here but seems like state in items reducer is a reference to items object. When trying to revert to initial state they are bounded and cannot get startValue for stock
export const initialStock = _.mapValues(items, (item)=>item.stock)

export const cart = _.mapValues(items, () => 2);

export const numberOfTags = Object.keys(tags).length;

export const orderingType = { category: 'Category', priceAsc: 'Price Asc.', priceDesc: 'Price Desc.' };

export const startingOrdering = orderingType.category;
