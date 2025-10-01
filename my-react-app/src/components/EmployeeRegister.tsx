import { useState } from "react";

function EmployeeRegister() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");
  const [salary, setSalary] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [Gender, setGender] = useState("");

  function click() {
    alert(name);
    alert(lastName);
    alert(email);
    alert(Gender);
    alert(registration);
    alert(company);
    alert(position);
    alert(department);
    alert(salary);
    alert(employmentType);
  }

  return (
    <div className="fflex flex-row items-start gap-x-8 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-10">
      <label className="font-semibold text-gray-700 mb-1" htmlFor="name">
        First Name*
      </label>
      <input
        name="name"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="lastName">
        Last Name*
      </label>
      <input
        name="lastName"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Last name"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="email">
        Enter Email*
      </label>
      <input
        name="email"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="gender">
        Gender*
      </label>
      <div className="p-2 flex flex-row justify-center gap-x-4 mb-2">
        <input
          type="radio"
          name="gender"
          value={"male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <input
          type="radio"
          name="gender"
          value={"Other"}
          onChange={(e) => setGender(e.target.value)}
        />
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
        value={registration}
        onChange={(e) => setRegistration(e.target.value)}
        type="text"
        placeholder="Registration"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="company">
        Company*
      </label>
      <input
        name="company"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
        placeholder="Company"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="position">
        Position*
      </label>
      <input
        name="position"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        type="text"
        placeholder="Position"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="department">
        Department*
      </label>
      <input
        name="department"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        type="text"
        placeholder="Department"
      />
      <label className="font-semibold text-gray-700 mb-1" htmlFor="salary">
        Salary*
      </label>
      <input
        name="salary"
        className="border-2 border-gray-300 rounded p-2 w-full mb-4 text-gray-700 bg-white"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
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
        onChange={(e) => setEmploymentType(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="FullTime">Full-time</option>
        <option value="PartTime">Part-time</option>
        <option value="Temporary">Temporary</option>
        <option value="Contractor">Contractor</option>
        <option value="Intern">Intern</option>
        <option value="Volunteer">Volunteer</option>
        <option value="Freelancer">Freelancer</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold self-start"
        onClick={click}
      >
        Register
      </button>
      <div>
        <h1 className="mt-12 center text-3xl font-bold text-blue-700 text-center mb-8">
          registered workers
        </h1>
      </div>
    </div>
  );
}
export default EmployeeRegister;
