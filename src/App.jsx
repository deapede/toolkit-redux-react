import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import { decrement, increment, incrementBy } from './store/slices/counter';
// import './App.css';

function App() {
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p>count is: {counter}</p>
            <div className="card">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementBy(2))}>
                    Increment By 2
                </button>
            </div>
        </div>
    );
}

export default App;
