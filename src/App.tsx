import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootStore } from './Store';
import { GetPost } from './reducers/actions/PostActions';

function App() {
  const dispatch = useDispatch();
  const postState = useSelector((state: RootStore ) => state.post)
  const handleSubmit = () => dispatch(GetPost());

  return (
    <div className="App">
      <button onClick={handleSubmit}>Get Posts</button>
    </div>
  );
}

export default App;
