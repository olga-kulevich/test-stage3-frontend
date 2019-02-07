import Axios from 'axios';

export function getAdverts() {
   return Axios.get('http://localhost:3000/api/adverts').then(response => {
     console.log(11, response.data);
     const data = response.data.map(advert => {
       return {
         id: advert._id,
         category: advert.category,
         price: advert.price,
         title: advert.title,
       }
     });
     console.log(2, data);
     return { data };
  });
}

export function deleteAdvert(id) {
  return Axios.delete(`http://localhost:3000/api/adverts/${id}`);
}