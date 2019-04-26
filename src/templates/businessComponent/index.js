import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import Store from './store';

@observer
export default class businessComponent extends Component {

  name = 'businessComponent';

  constructor(props, context) {

    super(props, context);

    this.name = props.name || this.name;
    this.store = new Store({ name: this.name });
  }

  componentDidMount() {
    this.store.mount();
  }

  componentWillUnmount() {
    this.store.unMount();
  }

  render() {
    return (
      <div>
        businessComponent
      </div>
    )
  }

}
