import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';

// ReactDOM은 브라우저에 리액트 컴포넌트를 렌더링해준다.
// 여기서 id가 root인 DOM을 선택하고 있는데 이 DOM은
// public폴더 안에 index.html파일에 들어있다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);