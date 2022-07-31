import Hello2 from './Hello2';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (      
    <Wrapper>
      <Hello2 name='첫번째 자식 컴포넌트' color='hotpink' isSpecial={true}
      // true는 Javascript 값이기에 중괄호를 써준다.
      /> 
      <Hello2 name='두번째 자식 컴포넌트' color='#6B360F' />
      <Hello2 name='세번째 자식 컴포넌트' color='#6B360F' isSpecial
      // props의 이름만 설정하고 값을 생략한다면 이를 true로 간주한다.
      />
    </Wrapper>
  );
}

export default App;
