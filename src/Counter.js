import {useState} from 'react';

function Counter() {
    // 처음에 state를 선언할 때 useState 괄호 안에 들어있는 값이 state의 초기값이 된다.
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1); // state를 변경할 때는 함수를 이용하여 state를 변경해야 한다.
        /*
        함수형 업데이트: 기존의 값을 기준으로 업데이트를 할 땐
        함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.
        함수형 업데이트는 주로 최적화 할 때 사용한다.
        setNumber(current => current + 1);
        */
    };
    const onDecrease = () => {
        setNumber(number - 1);
        /*
        setNumber(current => current - 1);
        */
    };
    return (
      <div>
        <h1>{number}</h1>
        {/* 리액트에서 엘리먼트에 이벤트를 설정해줄 때는 on이벤트이름={실행할함수이름} 형태로 적어준다. */}
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    );
  }
  
  export default Counter;