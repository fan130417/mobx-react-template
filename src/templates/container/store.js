import { observable as o, computed as c, action as a } from 'mobx';
import RootStore from 'utils/store.js';

class Store extends RootStore {
    constructor(args) {
        super(args);
    }

    setHistory(history) {
        this.history = history;
    }

    @o canRemove = true;//离开时是否remove()

    mount() {

    }

    afterMethodOnEvent() {

    }

    unMount() {
        if (!this.canRemove) { //不remove该store，重新加载该页面时可以将之前的数据保留。index.js上的didMount方法和constructor有相应处理
            this.canRemove = true;
            return;
        }
        this.remove();//remove是继承RootStore上的方法
    }
}

export default Store;