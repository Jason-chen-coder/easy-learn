import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DatePicker } from 'antd';
import { Button, Toast } from 'antd-mobile'

import 'antd-mobile/es/global'
const graphqlBaseUrl = import.meta.env.VITE_GRAPHQL_BASE_URL;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button
        color='primary'
        onClick={() => {
          console.log('按钮被点击了');
          Toast.show('点击成功');
        }}
      >
        点击我
      </Button>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <DatePicker />
      graphqlBaseUrl: {graphqlBaseUrl}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
