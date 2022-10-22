
// 함수형 컴포넌트
/*
import { useReducer } from 'react';

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'});
  };

  const onDecrease = () => {
    dispatch({type: 'DECREMENT'});
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
*/





import { Component } from "react";

// 클래스형 컴포넌트
class Counter extends Component {
  constructor(props) { // 1. 메서드 내에서 this를 사용하려면 constructor 메서드에서 bind 작업을 해주어야 한다.
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    // state를 선언할 때 constructor 메서드 내에 this.state로 선언해주면 된다.
    // 클래스 컴포넌트에서 state는 무조건 객체형태여야 한다.
    this.state = {
      counter: 0
    }
  }
  // 아니면 바깥에 state를 작성하면 된다.
  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1
    }
  };

  handleIncrease() { // 함수는 새로운 메서드를 만드는 식으로 작성한다.
    console.log('increase');
    console.log(this);
    // 상태를 업데이트 할 땐 this.setState를 쓴다.
    // 클래스형 컴포넌트도 마찬가지로 함수형 업데이트를 할 수 있다.
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  handleDecrease = () => { // 2. 또는 메서드를 화살표 함수 문법으로 작성한다. create-react-app으로 만든 프로젝트에서 많이 쓰이는 방식이다.
    console.log('decrease');
    console.log(this);
    this.setState({ // this.state 안에 다른 값이 있어도 바꾸고자 하는 값만 넣어줘도 영향을 끼치지 않는다.
      counter: this.state.counter - 1
    })
  }
  handleToggle = () => { // 클래스형 컴포넌트에서 객체형태의 state의 상태를 관리할 때도 불변성을 지켜야한다.
    this.setState({ // this.setState를 두 번 호출한다고 해도 두 번 실행되지는 않는다.
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe
      }
    });
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe
      }
    });

    // 하지만 함수형 업데이트로 바꿔주면 두 번 실행된다.
    this.setState(state => ({
      updateMe: {
        ...state.updateMe,
        toggleMe: !state.updateMe.toggleMe
      }
    }));
    this.setState(state => ({
      updateMe: {
        ...state.updateMe,
        toggleMe: !state.updateMe.toggleMe
      }
    }));
    // 이유는 setState는 상태를 바꾸는 함수가 아니라 상태를 바꿔달라고 요청해주는 함수이기에 성능적인 이유로 바로 업데이트가 되지 않고 비동기적으로 업데이트 되기 때문이다.


    // 상태가 바뀌고 어떤 작업을 수행하고 싶을 때 setState함수의 두번째 인자로 콜백함수를 넣어줄 수 있다.
    this.setState(state => ({
      updateMe: {
        ...state.updateMe,
        toggleMe: !state.updateMe.toggleMe
      }}),
      () => {
        console.log(this.state.updateMe.toggleMe);
      }
    )
  }


  render() {
    return (
      <div>
        <h1 // 조회할 땐 this.state로 조회하면 된다.
        >{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;