import { Component } from "react";





// 함수형 컴포넌트
/*
function Hello({ color, name, isSpecial }) {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
};
*/

// 클래스형 컴포넌트
class Hello extends Component {
    static defaultProps = { // Hello.defaultProps 대신 static defaultProps로 props의 기본값을 정의할 수 있다.
        name: '이름 없음'
    };
    render() { // 클래스형 컴포넌트에는 render() 메서드가 있어야한다.
        const { color, name, isSpecial } = this.props; // props를 조회할 땐 this.props를 쓴다.
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}





export default Hello;