import { dispatcher } from '../store';
import { getAdverts } from '../services/api/adverts';

export function performGetAdverts() {
    return dispatcher.dispatchPromise(getAdverts, 'GET_ADVERTS');
}

export function performDeleteAdvert(id) {
    return dispatcher.dispatch('DELETE_ADVERT', {id});
}

export function performAddAdvert(data) {
    const { id, title, category, price } = data;
    return dispatcher.dispatch('ADD_ADVERT', {id, title, category, price});
}