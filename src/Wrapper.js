function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
        {/* 컴포넌트 태그사이에 넣을 값을 조회하고 싶을 땐 props.children을 조회하면 된다. */}
        {children}
    </div>
  )
}

export default Wrapper;