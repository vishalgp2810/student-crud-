import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const Root = () => {
    return <App />;
};

// Render the Root element into the DOM
ReactDOM.render(<Provider store={store}>

    <React.StrictMode>

        <Root />

    </React.StrictMode>

</Provider>, document.getElementById("root"));
