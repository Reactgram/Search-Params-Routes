import React from "react";

import UserList from "./Components/UserList";
import FilterUsers from "./Components/FilterUsers";

import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <Routes>
            {/* <Route path="/" element={<UserList />} />
            <Route path="user/:x" element={<UserList />} /> */}
            <Route path="/" element={<FilterUsers />} />
            {/* usesearchParams() => ? */}
            {/* {useparams() => varibale} */}
        </Routes>
    </div>
  );
}

export default App;