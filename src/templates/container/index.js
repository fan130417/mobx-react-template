import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import Store from './store';

@observer
export default class Container extends Component {

  name = 'Container';

  constructor(props, context) {

    super(props, context);

    this.name = props.name || this.name;
    if (Store.stores[this.name]) {
      this.isExist = true;
      this.store = Store.stores[this.name];
    } else {
      this.store = new Store({ name: this.name, history: props.history });
    }
    this.store.setHistory(props.history);
  }

  componentDidMount() {
    if (this.isExist) {
      !!this.store && this.store.afterMethodOnEvent();
    } else {
      !!this.store && this.store.mount();
    }
  }

  componentWillUnmount() {
    !!this.store && this.store.unMount();
  }

  render() {
    return (
      <div>
        This is Container
      </div>
    )
  }

}
