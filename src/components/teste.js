import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash'


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { names: ['tiago', 'miguel', 'costa', 'rodrigues'] };
    this.renderNames = this.renderNames.bind(this);
  }

  removeName(name){
    const namesCopy = [...this.state.names];
    _.remove(namesCopy,(curName) => curName === name)

    this.setState({names:namesCopy})   
  }

  renderNames() {
    const namesCopy = [...this.state.names];
    const names = namesCopy.map((name) => (
                <div key={name}>
                    {name}
                    <button onClick={() => this.removeName(name)}>{name}</button>
                </div>
            ));

    return names;
  }

  render() {

    const cartItemAppearTransitionOptions = {
        transitionName:"teste",
        transitionAppear:true,
        transitionLeave:true,
        transitionAppearTimeout:1000,
        transitionLeaveTimeout:1000,
        transitionEnterTimeout:0,
    };

    return (
      <div>
          <ReactCSSTransitionGroup {...cartItemAppearTransitionOptions}>
                {this.renderNames()}
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Test;
