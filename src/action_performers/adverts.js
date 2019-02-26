import { dispatcher } from '../store';
import { getAdverts, deleteAdvert, addAdvert, getAdvert, editAdvert } from '../services/api/adverts';

export function performGetAdverts() {
    return dispatcher.dispatchPromise(getAdverts, 'GET_ADVERTS',
        state => state.Adverts.adverts.loading);
}

export function performDeleteAdvert(id) {
    return dispatcher.dispatchPromise(deleteAdvert, 'DELETE_ADVERT',
        state => state.Adverts.deletedAdvert.loading, [id] );
}

export function performAddAdvert(data) {
    return dispatcher.dispatchPromise(addAdvert, 'ADD_ADVERT',
      state => state.Adverts.advert.loading, [data]);
}

export function performGetAdvert(id) {
    return dispatcher.dispatchPromise(getAdvert, 'GET_ADVERT',
      state => state.Adverts.advert.loading, [id] );
}

export function performEditAdvert(id, data) {
    return dispatcher.dispatchPromise(editAdvert, 'EDIT_ADVERT',
      state => state.Adverts.advert.loading, [id, data]);
}

export function performSortAdverts(field, direction) {
    return dispatcher.dispatchAction('CHANGE_ORDER_ADVERTS', [field, direction]);
}
