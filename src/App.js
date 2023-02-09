// npm install react-router-dom

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Homepage</div>} />
        <Route
          path="/testing"
          element={
            <div>
              <h2>Testing</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
