import Axios from 'axios';

export function getAdverts() {
   return Axios.get('http://localhost:3000/api/adverts').then(response => {
     const data = response.data.map(advert => {
       return {
         id: advert._id,
         category: advert.category,
         price: advert.price,
         title: advert.title,
       }
     });
     return { data };
  });
}

export function deleteAdvert(id) {
  return Axios.delete(`http://localhost:3000/api/adverts/${id}`);
}

export function addAdvert(data) {
  return Axios.post(`http://localhost:3000/api/adverts/`, data).then(response => {
    return {data: {
      id: response.data.advert._id,
      category: response.data.advert.category,
      price: response.data.advert.price,
      title: response.data.advert.title,
    }};
  });
}

export function getAdvert(id) {
  return Axios.get(`http://localhost:3000/api/adverts/${id}`).then(response => {
    return {data: {
      id: response.data._id,
      category: response.data.category,
      price: response.data.price,
      title: response.data.title,
    }};
  });
}

export function editAdvert(id, data) {
  return Axios.put(`http://localhost:3000/api/adverts/${id}`, data).then(response => {
    return {data: {
        id: response.data.advert._id,
        category: response.data.advert.category,
        price: response.data.advert.price,
        title: response.data.advert.title,
      }};
  });
}