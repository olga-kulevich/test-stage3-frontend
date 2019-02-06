import Axios from 'axios';

export function getAdverts() {
  return new Promise((resolve, reject) => {
    Axios.get('http://localhost:3000/api/adverts').then(response => {
      resolve(response.data.adverts.map(advert => { return {
        id: advert._id,
        category: advert.category,
        price: advert.price,
        title: advert.title,
      }}));
    });
  });
}
