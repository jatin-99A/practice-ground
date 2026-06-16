import * as React from "react";

const UseState = () => {
    const [counter, setCounter] = React.useState<number>(0)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>plus</button>
            <button onClick={() => setCounter(counter - 1)}>minus</button>
        </div>
    )
}

export default UseState