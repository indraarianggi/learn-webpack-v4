import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <p>Ollo, React here!</p>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
