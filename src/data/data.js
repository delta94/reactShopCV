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
    image: 'https://www.runnersworld.com/sites/runnersworld.com/files/styles/listicle_slide_custom_user_phone_1x/public/beagle2.jpg?itok=lv5EvG-2',
    price: 100,
    tag: 'Skills',
    id: 1,
    relevance: 1,
    stock: 1000,
  },
  2: {
    title: 'Msc in Finance',
    description: 'Big money...not!',
    image: 'https://www.runnersworld.com/sites/runnersworld.com/files/styles/listicle_slide_custom_user_phone_1x/public/beagle2.jpg?itok=lv5EvG-2',
    price: 90,
    tag: 'Education',
    id: 2,
    relevance: 1,
    stock: 10,

  },
  3: {
    title: 'Doggy Style!',
    description: 'Doing it doggy style!',
    image: 'https://www.runnersworld.com/sites/runnersworld.com/files/styles/listicle_slide_custom_user_phone_1x/public/beagle2.jpg?itok=lv5EvG-2',
    price: 80,
    tag: 'FreeTime',
    id: 3,
    relevance: 2,
    stock: 10,
  },
  4: {
    title: '65',
    description: 'Manage reservations',
    image: 'https://www.runnersworld.com/sites/runnersworld.com/files/styles/listicle_slide_custom_user_phone_1x/public/beagle2.jpg?itok=lv5EvG-2',
    price: 70,
    tag: 'Projects',
    id: 4,
    relevance: 2,
    stock: 10,
  },
  5: {
    title: 'CGI',
    description: 'C#GI',
    image: 'https://www.runnersworld.com/sites/runnersworld.com/files/styles/listicle_slide_custom_user_phone_1x/public/beagle2.jpg?itok=lv5EvG-2',
    price: 1,
    tag: 'JobExperience',
    id: 5,
    relevance: 3,
    stock: 10,
  },
};

//not sure why I need this here but seems like state in items reducer is a reference to items object. When trying to revert to initial state they are bounded and cannot get startValue for stock
export const initialStock = _.mapValues(items, (item)=>item.stock)

export const cart = _.mapValues(items, () => 0);

export const numberOfTags = Object.keys(tags).length;

export const orderingType = { category: 'Category', priceAsc: 'Price Asc.', priceDesc: 'Price Desc.' };

export const startingOrdering = orderingType.category;
