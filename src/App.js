import Hello from './Hello'
import './App.css'

function App() {
  const name = "lmj";
  /* JSX에서 CSS style을 정의하는 방법은 HTML에서 정의하는 것과는 다르다
  인라인 스타일은 객체 형태로 작성해야 하며, background-color, font-size 처럼
  '-'로 구분된 이름들은 backgroundColor, fontSize 처럼 camelCase 형태로 네이밍 해주어야 한다. */
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위는 픽셀
    padding: '1rem'
  }
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      {/* JSX 기본 규칙
      1. JSX에서 태그는 꼭 닫혀 있어야 한다.
      <div> 만 쓰고 닫는 태그 </div>를 안쓰면 오류가 발생하며 
      단일 태그 같은 경우도 <input>, <br>이 아닌 <input /> <br /> 식으로
      꼭 닫아주어야 한다.
      만약 div 태그로 감싸는게 별로 좋지 않은 상황에선
      리액트의 Fragment를 사용하면 된다.
      Fragment는 <></> 식으로 쓰며 브라우저 상에서 별도의 엘리먼트로 나타나지 않는다.
      */}
      {/* 2. JSX에서 값 사용하기 */}
      {name} {/* JSX에서 값을 사용하기 위해선 중괄호로 묶어주어야한다. 중괄호 안에는 어떤 JS코드든 쓸 수가 있기 때문이다. */}
      <div style={style}>
        {name}
      </div>

      {/* 3. JSX에서 class는 className이라고 쓴다. 이미 Javascript에 class 라는 키워드가 있기 때문이다. */}
      <div className='gray-box'>
        {name}
      </div>
      {/* 4. 지금도 보고 있겠지만 JSX에서 주석은 중괄호 안에 전체 주석을 넣는 형태로 작성한다. */ }
      {/* 주석은 화면에 보이지 않는다. */}
      /* 중괄호로 감싸지 않으면 화면에 보인다. */ {/* 경고도 뜸 */}

      {/* 5. 또한 열리는 태그 안에서는 한 줄 주석처리가 가능하다. */}
      <div
      // 한 줄 주석 1
      >
        <input 
        // 한 줄 주석 2
        />
      </div>

    </div>
  );
}

export default App;
