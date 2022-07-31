// ES6에 새로 나온 비구조화 할당 (구조 분해)를 이용하여 코드를 좀 더 간결하게 만들 수 있다.
function Hello3({color, name}){
    // props로 전달 받은 값을 이용하여 스타일도 정의 해줄 수 있다.
    return <div style={{color:color}}>{name}</div>
}

export default Hello3;