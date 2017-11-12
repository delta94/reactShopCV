import _ from 'lodash';

export const tags = {
  Skills: { description: 'Skills', selected: false },
  Education: { description: 'Education', selected: false },
  FreeTime: { description: 'FreeTime', selected: false },
  Projects: { description: 'Projects', selected: false },
  JobExperience: { description: 'JobExperience', selected: false },
};


export const items = {
  1: {
    title: 'React',
    description: 'Reacting with react',
    image: 'http://media.todaybirthdays.com/2015/11/15/scarlett-johansson.jpg',
    price: 100,
    tag: 'Skills',
    id: 1,
    relevance: 1,
    stock: 10,
  },
  2: {
    title: 'Msc in Finance',
    description: 'Big money...not!',
    image: 'http://media.todaybirthdays.com/2015/11/15/scarlett-johansson.jpg',
    price: 90,
    tag: 'Education',
    id: 2,
    relevance: 1,
    stock: 10,

  },
  3: {
    title: 'Doggy Style!',
    description: 'Doing it doggy style!',
    image: 'http://media.todaybirthdays.com/2015/11/15/scarlett-johansson.jpg',
    price: 80,
    tag: 'FreeTime',
    id: 3,
    relevance: 2,
    stock: 10,
  },
  4: {
    title: '65',
    description: 'Manage them reservations like a bauss',
    image: 'http://media.todaybirthdays.com/2015/11/15/scarlett-johansson.jpg',
    price: 70,
    tag: 'Projects',
    id: 4,
    relevance: 2,
    stock: 10,
  },
  5: {
    title: 'CGI',
    description: 'C#GI',
    image: 'http://media.todaybirthdays.com/2015/11/15/scarlett-johansson.jpg',
    price: 1,
    tag: 'JobExperience',
    id: 5,
    relevance: 3,
    stock: 10,
  },
};

export const cart = _.mapValues(items, () => 0);

export const numberOfTags = Object.keys(tags).length;

export const orderingType = { category: 'Category', priceAsc: 'Price Asc.', priceDesc: 'Price Desc.' };

export const startingOrdering = orderingType.category;
