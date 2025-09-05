import { useState } from "react";

function EmployeeRegister() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    company: "",
    position: "",
    department: "",
    email: "",
    registration: "",
    salary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const click = () => {
    console.log(form);
  };

  return (
    <div className="fflex flex-row items-start gap-x-8 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-10">
      <label className="font-semibold text-gray-700 mb-1" htmlFor="name">
        First Name*
      </label>
      <input
        name="name"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="Name"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="lastName">
        Last Name*
      </label>
      <input
        name="lastName"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.lastName}
        onChange={handleChange}
        type="text"
        placeholder="Last name"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="email">
        Enter Email*
      </label>
      <input
        name="email"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="E-mail"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="gender">
        Gender*
      </label>
      <div className="p-2 flex flex-row justify-center gap-x-4 mb-2">
        <input type="radio" name="gender" />
        Male
        <input type="radio" name="gender" />
        Female
        <input type="radio" name="gender" />
        Other
      </div>
      <label
        className="font-semibold text-gray-700 mb-1 "
        htmlFor="registration"
      >
        Registration*
      </label>
      <input
        name="registration"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.registration}
        onChange={handleChange}
        type="text"
        placeholder="Registration"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="company">
        Company*
      </label>
      <input
        name="company"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.company}
        onChange={handleChange}
        type="text"
        placeholder="Company"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="position">
        Position*
      </label>
      <input
        name="position"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.position}
        onChange={handleChange}
        type="text"
        placeholder="Position"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="department">
        Department*
      </label>
      <input
        name="department"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.department}
        onChange={handleChange}
        type="text"
        placeholder="Department"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="salary">
        Salary*
      </label>
      <input
        name="salary"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={form.salary}
        onChange={handleChange}
        type="number"
        placeholder="Salary"
      />

      <label className="font-semibold text-gray-700 mb-1">
        Employment Type
      </label>
      <select
        id="employmentType"
        name="employmentType"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
      >
        <option value="fullTime">Full-time</option>
        <option value="partTime">Part-time</option>
        <option value="temporary">Temporary</option>
        <option value="contractor">Contractor</option>
        <option value="intern">Intern</option>
        <option value="volunteer">Volunteer</option>
        <option value="freelancer">Freelancer</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold self-start"
        onClick={click}
      >
        Register
      </button>
    </div>
  );
}
export default EmployeeRegister;
