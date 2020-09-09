import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Header from './components/Header'
import List from './components/List'
import ClearList from './components/ClearList'

import './App.css';
import logo1 from './react-3.svg'
import logo2 from './react-2.svg'

function App() {
  const [count, setCount] = useState(0);
  const [logo, setLogo] = useState(logo1)
  const [userList, setUserList] = useState([])
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const increase = () => {
    setCount(count => count + 1)
  }

  const decrease = () => {
    setCount(count => count -1)
  }

  const changeLogoHandler = () => {
    setLogo(logo2)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUserList(data))
  }, [])

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  const clearList = useCallback(() => {
    setSearch('');
    setText('');
  }, [])

  const filteredUsers = useMemo(() => userList.filter(user => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  }), [search, userList])

  return (
    <div className="App">
      <Header logo={logo}/>
      <div className="content">
        <button onClick={() => increase()}>Increase the number!</button>
        <button onClick={() => decrease()}>Decrease the number!</button>
        <h2>Count: {count}</h2>
        <button onClick={() => changeLogoHandler()}>Change logo!</button>
        <div>
          <div>
            <input type="text" value={text} onChange={handleText}></input>
            <button onClick={handleSearch}>Search!</button>
          </div>
          <List userList={filteredUsers}/>
        </div>
        <ClearList handleClear={clearList} />
      </div>
    </div>
  );
}

export default App;

// React.memo: Componentlerin gereksiz yere render edilmesi engellenir.
// useMemo: Bir fonksiyondan dönen değerler memoized edilir.
// useCallback: Bir fonksiyonu memoized etmek için kullanılır.
