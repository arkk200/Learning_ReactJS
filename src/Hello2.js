function Hello2(props){
    // props로 전달 받은 값을 이용하여 스타일도 정의 해줄 수 있다.
    return <div style={{color:props.color}}>{props.name}</div>
}

export default Hello2;