import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Missing element with id "root"');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
