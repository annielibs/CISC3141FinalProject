import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import NavMenu from "./components/partials/navMenu.js";
import HomePage from "./components/homePage.js";
import DiaryPage from "./components/diariesPage.js";
import EntriesPage from "./components/entriesPage.js";

function App() {
  return (
    <div className="App">
      <NavMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
        <Route exact path={"Diaries"} element={<DiaryPage />} />
        <Route exact path={"Entries"} element={<EntriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
