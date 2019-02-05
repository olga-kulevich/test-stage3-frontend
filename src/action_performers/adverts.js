import { dispatcher } from '../store';

export function performDeleteAdvert(id) {
    return dispatcher.dispatch('DELETE_ADVERT', {id});
}
