import React, { useRef, useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // useRef()를 사용하면 Ref 객체를 만든다.
    // 이 객체를 우리가 선택하고 싶은 DOM에 ref값으로 주어야한다.
    const nameInput = useRef();

    const {name, nickname} = inputs; // 비구조화 할당문을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; // target에서 name과 value를 가져옴
        // 객체를 업데이트할 때 inputs[name] = value가 아닌
        // 이런식으로 새 객체를 만들고 그 객체에 변화를 주어야 한다.
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        // Ref객체의 .current값은 우리가 선택하고자 했던 DOM을 가르킨다.
        nameInput.current.focus();
    };


    return (
        <div>
            {/* 여러개의 input의 상태를 관리한다 해도 하나의 state로 해결할 수 있다. */}
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;