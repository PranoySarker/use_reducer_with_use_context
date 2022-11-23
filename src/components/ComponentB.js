import React, { useContext } from 'react';
import { counterContext } from '../App';

const ComponentB = () => {
    const countContext = useContext(counterContext);
    return (
        <div>
            <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</ button>
            <button type="button" onClick={() => countContext.countDispatch('decrement')}>Decrement</ button>
        </div>
    );
};

export default ComponentB;