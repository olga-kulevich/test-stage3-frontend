/**
 * Application store dispatcher,
 * provide functionality for manage store data (models)
 */
class Dispatcher {
    /**
     * @constructor
     * @param {Object} store - Application store instance
     * that implements dispatch method
     */
    constructor(store = { dispatch: () => {} }) {
        this.store = store;
    }

    /**
     * Create pure redux/flux action
     *
     * @see https://github.com/acdlite/redux-actions
     * @see https://github.com/acdlite/flux-standard-action#actions
     *
     * @param {String} type - Action type
     * @param {*} [payload] - Some data or error details
     *
     * @returns {Object} New action object
     */
    createAction(type, payload) {
        return { type, payload };
    }

    /**
     * Dispatch pure action
     *
     * @param {String} type - Action type
     * @param {*} [payload] - Some data or error details
     *
     * @returns {*} Dispatch action
     */
    dispatch(type, payload) {
        const { store } = this;

        store.dispatch(this.createAction(type, payload));
    }
}

export default Dispatcher;
