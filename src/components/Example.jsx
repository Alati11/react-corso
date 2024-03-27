
import { increment, decrement} from '../redux/counterSlice';
import { useSelector, useDispatch } from "react-redux";


function Example({ cities }) {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button 
                className="mr-3"
                aria-label="Increment Value"
                onClick={()=> dispatch(increment())} >
                    Incrementa +
            </button>
            <button 
                aria-label="Decrement Value"
                onClick={()=> dispatch(decrement())} >
                    Decrementa -
            </button>
        </div>

    );
}

export default Example;