import "./App.css";
import { Route, Routes } from "react-router-dom";

import * as Layout from "./layout";
import * as Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout.Header />}>
          <Route index={true} element={<Pages.ShowCreators />} />
          <Route path="add" element={<Pages.AddCreator />} />
          <Route path="view/:creatorID" element={<Pages.ViewCreator />} />
          <Route path="edit/:creatorID" element={<Pages.EditCreator />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
