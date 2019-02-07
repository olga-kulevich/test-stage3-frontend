import { dispatcher } from '../store';
import { getAdverts, deleteAdvert } from '../services/api/adverts';

export function performGetAdverts() {
    return dispatcher.dispatchPromise(getAdverts, 'GET_ADVERTS',
        state => state.Adverts.adverts.loading);
}

export function performDeleteAdvert(id) {
    return dispatcher.dispatchPromise(deleteAdvert, 'DELETE_ADVERT',
        state => state.Adverts.deletedAdvert.loading, [id] );
}

export function performAddAdvert(data) {
    const { id, title, category, price } = data;
    return dispatcher.dispatch('ADD_ADVERT', {id, title, category, price});
}