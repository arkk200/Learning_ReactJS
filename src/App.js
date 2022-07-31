import Hello from './Hello';
import Hello2 from './Hello2';
import HelloIII from './Hello3'; // import로 받는 컴포넌트 명과 컴포넌트를 전달해주는 파일의 이름은 같을 필요가 없다.
import Hello4 from './Hello4';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  /* props
  props는 properties의 줄임말이다. 컴포넌트에 어떤 값을 전달해줘야 할 때, props 를 사용한다.
  작성하는 방법은 <컴포넌트 props이름="값" /> 형태로 작성한다.
  */
  return (
    <div>
      {/* Hello.js 파일에서 props를 쓰는 형태가 나와있음 */}
      <Hello name="lmj" />
      <Hello2 name='llmmjj' color='red'/>
      <HelloIII name='lllmmmjjj' color='blue' />
      <Hello4 />
      <Wrapper>
        <Hello2 name='첫번째 자식 컴포넌트' color='hotpink' />
        <Hello2 name='두번째 자식 컴포넌트' color='#6B360F' />
      </Wrapper>
    </div>
  );
}

export default App;
