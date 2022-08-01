import React, { useRef } from 'react';

import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  // useRef()를 사용할 때 인자를 넣어주면 .current의 기본값이 된다.
  const nextId = useRef(4);
  const onCreate = () => {
    // 배열에 항목 추가하는 로직
    // .current값을 수정할 때 .current에 직접적으로 수정하면 되고
    // 조회할 때도 .current를 조회하면 된다.
    nextId.current += 1;
  }

  return <UserList users={users} />;
}

export default App;