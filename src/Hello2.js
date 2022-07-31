function Hello2({color, name, isSpecial}){
    // props로 전달 받은 값을 이용하여 스타일도 정의 해줄 수 있다.
    return <div style={{color:color}}>
        {isSpecial ? <b>*</b> : null} {/* 삼항연산을 이용하여 isSpecial이 true이면 애스터리스크를 붙이고 아니면 붙이지 않는다. */}
        {name}
        {/* &&은 앞에 식이 참일 경우 뒤에 식을 반환하거나 실행한다.
        비슷한 연산자로 || 는 앞에 식이 거짓일 경우 뒤에 식을 반환하거나 실행한다.*/}
        {isSpecial && <b>*</b> }
    </div>
}

export default Hello2;