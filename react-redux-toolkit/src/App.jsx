import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default App;
