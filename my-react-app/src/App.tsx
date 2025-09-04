import "./index.css";
import EmployeeRegister from "./components/EmployeeRegister";

function App() {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Employee Registration
        </h1>
        <EmployeeRegister />
      </div>
    </div>
  );
}

export default App;
