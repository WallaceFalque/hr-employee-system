import "./index.css";
import EmployeeRegister from "./components/EmployeeRegister";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600">
      <div className="w-1/3 p-6 bg-white rounded shadow-md">
        <EmployeeRegister />
      </div>
    </div>
  );
}

export default App;
