function Hello4({color, name}){
    // props 이름과 CSS style의 속성 이름이 같을 경우
    // props의 이름만 적어줘도 된다.
    return <div style={{color}}>{name}</div>
}

// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면
// defaultProps를 사용하면 된다.

Hello4.defaultProps = {
    color: 'green',
    name: '전달된 name prop이 없음!'
}

export default Hello4;