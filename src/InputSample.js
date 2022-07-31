import {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (event) => {
        setText(event.target.value);
    };

    const reset = () => {
        setText('');
    }
    return (
        <div>
            {/* Input의 값에 접근하려고 한다면 value를 state값으로 만들어주어야 한다.
            input 태그에 입력을 하게 된다면 먼저 onChange 이벤트가 onChange 화살표 함수를 실행하고
            이 때 받은 event에서 event.target.value로 text state를 설정한다. 그러고 난 후
            text state를 input 태그의 value로 설정한다. 이러면 외부에서 이 input의 value를 
            손 쉽게 수정할 수 있다.
            */}
            <input onChange={onChange} value={text} />
            <button onClick={reset} >초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;