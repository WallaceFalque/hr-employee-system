function EmployeeRegister() {
  return (
    <div className="flex flex-row items-start gap-x-8">
      <div className="flex flex-col w-full max-w-xs">
        <input
          className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
          type="text"
          placeholder="Name"
        />

        <input
          className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
          type="text"
          placeholder="Last name"
        />
      </div>

      <div className="flex flex-col w-full max-w-xs">
        <input
          className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
          type="text"
          placeholder="Company"
        />

        <input
          className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
          type="text"
          placeholder="Position"
        />

        <input
          className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
          type="text"
          placeholder="Department"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold self-start">
          Registrar
        </button>
      </div>
    </div>
  );
}
export default EmployeeRegister;
