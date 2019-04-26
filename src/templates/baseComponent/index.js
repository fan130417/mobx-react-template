import React, { Component } from 'react';
// import { observer } from 'mobx-react';
import classnames from 'classnames';
import './index.less';

//@observer   //如果需要将该组件设置为mobx的可观察对象，可取消该注释
export default class baseComponent extends Component {

  constructor(props, context) {
    super(props, context);
    //如果需要运用到stores 可直接stores.Frame
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        baseComponent
      </div>
    )
  }

}
