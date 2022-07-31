import Hello from './Hello'

function App() {
  return (
    <div>
      {/* 컴포넌트는 일종의 UI 조각이다.
      쉽게 재사용할 수 있으며
      여러개를 한 번에 변경하기에도 편리하다. */}
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
