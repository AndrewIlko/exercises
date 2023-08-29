import { Routes, Route } from "react-router-dom";
import SamePage from "./components/pages/SamePage";
import FormPage from "./components/pages/FormPage";
import ExercisesPage from "./components/pages/ExercisesPage";
import RouterChecker from "./components/RouterChecker";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/same-page" element={<SamePage />} />
        <Route path="*" element={<RouterChecker />} />
      </Routes>
    </>
  );
};

export default App;
