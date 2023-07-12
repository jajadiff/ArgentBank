import { Routes, Route } from "react-router-dom";
import IndexPage from "../Index";
import Sign from "../Sign";
import User from "../User";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default Router;
