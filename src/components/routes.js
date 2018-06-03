import Places from './places';
import Place from './places/place/index.js';
import Experiences from './experiences';

export default [
  {
    path: '/',
    component: Places,
    exact: true,
  },
  {
    path: '/places',
    component: Places,
  },
  {
    path: '/places/:placeSlug?',
    component: Place,
  },
  {
    path: '/experiences',
    component: Experiences, 
  }
];