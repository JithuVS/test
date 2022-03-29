import { Provider } from "react-redux";
import "./App.css";
import Axios from "./components/Axios/Axios";
import Counter from "./components/Counter/Counter";
import Post from "./components/Post/Post";
import { store } from "./components/Post/Store";
import Reducer from "./components/Reducer/Reducer";
import Dom from "./components/Dom/Dom";
import Misc from "./components/Misc/Misc";


function App() {
  return (
    <div className="App">
      <div className="Container">
        
      <div className="item">
          <h3 id='dom'>Dom/Props/Statee</h3>
          <Dom learn="Jest" />
        </div>
        <div className="item">
          <h3 data-test='counter'>Counter/Simulate</h3>
          <Counter />
        </div>
        <div className="item">
          <h3>Reducer</h3>
          <Reducer />
        </div>
        <div className="item">
          <h3>Redux</h3>
          <Provider store={store}>
            <Post />
          </Provider>
        </div>
        <div className="item">
          <h3>Async/Axios/Mock</h3>
          <Axios />
        </div>
        <div className="item">
          <h3>Misc</h3>
          <Misc/>
        </div>
      </div>
    </div>
  );
}

export default App;
