import React from "react";
import ReactDOM from 'react-dom';

import App from './App.jsx';

process.env.CI = false

ReactDOM.render(<App/>, document.querySelector("#root"));