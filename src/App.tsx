import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootStore } from './Store';
import { GetPost } from './reducers/actions/PostActions';

function App() {
  const dispatch = useDispatch();
  const postState = useSelector((state: RootStore ) => state.post)

  const [query, setQuery] = useState("")
 
  useEffect(() => {
    dispatch(GetPost());
  },[])
  
  return (
    <div className="App">
      <input className="search" placeholder="Search Posts" onChange={event => setQuery(event.target.value)} />
      <div className="card__container">
        {
          postState.post instanceof Array && postState.post.filter(post => {
            if (query === '') {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post) => (
            <div className="card">
              <div className="card__title">
                <img src={`https://picsum.photos/200/200?random=${Math.floor(Math.random() * 20) + 1}`} />
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
