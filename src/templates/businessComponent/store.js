import { observable as o, computed as c, action as a } from 'mobx';
import RootStore from 'utils/store.js';

class Store extends RootStore {
    constructor(args) {
        super(args);
    }

    mount() {

    }

}

export default Store;