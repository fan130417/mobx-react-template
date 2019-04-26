import utils from './utils';
import request from './request';
import url from './url';
import api from './api';
import constant from './constant';


//mobx数据管理模块，实现时间持久化
class Store {
    static stores = {};

    constructor(args) {
        if (Store.stores[args.name]) {
            throw new Error('component instance\'s name have been named, you should give another name to this instance');
        }

        Store.stores[args.name] = this;
        // this.stores = Store.stores;
        this.name = args.name;
        this.events = {};
        window.stores = Store.stores;
        //root Page 调用这一块，将模块挂载到window上，实现全局使用
        if (args.loadUtils) {
            window.utils = utils;
            window.url = url;
            window.request = request;
            window.api = api;
            window.constant = constant;
        }
    }

    on(event, fn) {
        this.events[event] = [];
        this.events[event].push(fn);
    }

    fire(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(fn => fn(data));
        }
    }

    removeEvent(event, fn) {
        if (this.events[event]) {
            let fnIndex = this.events[event].indexOf(fn);
            if (!!~fnIndex) {
                this.events[event].splice(fnIndex, 1);
            }
        }
    }

    remove() {
        this.events = {};
        delete Store.stores[this.name];
    }
}

export default Store;