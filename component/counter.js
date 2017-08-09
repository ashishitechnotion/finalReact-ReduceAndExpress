import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/btnAction';

class Counter extends Component
  {
    render()
    {
         //const { increment, decrement, count } = this.props;
      return( 
      <div>
                Current counter value: {this.props.count}
                <div><button onClick={(e) => this.props.increment()}>Increment</button></div>
                <div><button onClick={(e) => this.props.decrement()}>Decrement</button></div>
            </div>)
    }
  };

function mapStateToProps(state) {
    return {
        count: state
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);