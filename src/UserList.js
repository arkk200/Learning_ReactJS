import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        // 마운트
        // 마운트 시 해야하는 작업들
        /* 
        1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
        2. 외부 API 요청 (REST API 등)
        3. 라이브러리 사용 (D3, Video.js등)
        4. setInterval 을 통한 반복 작업 혹은 setTimeout 을 통한 작업 예약
        */
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            // 언마운트
            // 언마운트 시 해야하는 작업들
            /*
            1. setInterval, setTimeout 을 사용하여 등록한 작업 clear하기 (clearInterval, clearTimeout)
            2. 라이브러리 인스턴스 제거
            */
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]); // useEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 넣어주어야 한다.
    // 만약 useEffect 안에서 사용하는 states나 props 를 deps 에 넣지 않으면 useEffect 에 등록한 함수가 실행 될 때 최신 states / props 를 가르키지 않게 된다.
    useEffect(() => {
        console.log(user);
    }) // deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출이 됩니다.
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;