function Hello(props){
    // 컴포넌트에 전달된 props는 파라미터를 통해 조회 할 수 있다.
    // props는 객체 형태로 전달되며, 어떤 값을 조회하고 싶은 땐
    // props.값이름 형태로 쓰면 조회할 수 있다.
    // (객체 형태로 전달 받은 props의 이름은 꼭 props일 필요는 없다.)
    return <div>{props.name}</div>
}

export default Hello;