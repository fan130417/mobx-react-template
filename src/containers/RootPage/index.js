import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from "react-router";
import Store from './store';
import classnames from 'classnames';

@withRouter
@observer
export default class RootPage extends Component {

  name = 'RootPage';

  constructor(props, context) {

    super(props, context);

    this.name = props.name || this.name;
    this.store = new Store({ name: this.name, loadUtils: true });
    this.store.setHistory(props.history);
    this.state = {
      loadChildren: false,
    }
  }

  componentDidMount() {
    this.store.mount();
    this.setState({ loadChildren: true });
  }

  componentWillUnmount() {
    this.store.unMount();
  }

  render() {
    // const {children} =this.props;

    return (
      <div>
        This is RootPage All Store Here
        <img src={require('images/logo.png')} alt=""/>
        {this.state.loadChildren && this.props.children}
      </div>
    )
  }

}
