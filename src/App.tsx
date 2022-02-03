import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootStore } from './Store';
import { GetPost } from './reducers/actions/PostActions';

function App() {
  const dispatch = useDispatch();
  const postState = useSelector((state: RootStore ) => state.post)
 
  useEffect(() => {
    dispatch(GetPost());
  },[]) 

  return (
    <div className="App">
      <div className='card__container'>
        {postState.post instanceof Array && postState.post.map(posts => (
            <div className='card'>
              <div className='card__title'>
                <img src={`https://picsum.photos/200/200?random=${Math.floor(Math.random() * 40) + 1}`} />
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
              </div>
            </div>  
        ))}
      </div>
    </div>
  );
}

export default App;
