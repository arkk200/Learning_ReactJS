import { useCallback, useMemo, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  // useRef()를 사용할 때 인자를 넣어주면 .current의 기본값이 된다.
  const nextId = useRef(4);
  const onCreate = () => {
    // 배열에 항목 추가하는 로직
    // .current값을 수정할 때 .current에 직접적으로 수정하면 되고
    // 조회할 때도 .current를 조회하면 된다.
    const user = {
      id: nextId.current,
      username,
      email
    };
    // state의 불변성을 지키면서 배열에 새 항목을 추가하는 방법에는 2가지가 있다.
    // 1. 스프레드 연산자
    setUsers([...users, user]);
    // 2. concat 함수 사용: 기존의 배열은 수정하지 않고 원소를 추가함
    // 이렇게 배열의 새 항목을 추가할 땐 스프레드 연산자 또는 concat 내장함수를 쓰면 된다.
    // setUsers(users.concat(user));
    // Inputs 초기화
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  const onRemove = useCallback(
    id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }, [users]) // 함수 내에서 사용하는 props가 있다면 꼭 deps 배열 안에 포함시켜야 한다.
  /*
   useMemo의 첫번째 파라미터에는 어떻게 연산할지
   정의하는 함수를 넣고 두번째 파라미터에는 deps 배열을 넣어준다.
   이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고,
   만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.
  */
  const count = useMemo(() => countActiveUsers(users), [users]);
  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;