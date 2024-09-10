
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about,
    });

    
    alert("Form submitted successfully!");
  };

  
  const handleSubjectChange = (subject) => {
    setSubjects((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  };

 
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume(null);
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App bg-white rounded-xl shadow-lg p-5 w-80 sm:w-96 md:w-[500px] mx-auto mt-5 transition-transform text-center">
      <h1 className="text-xl text-green-700 mb-4">Submission form</h1>
      <fieldset className="border-none">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="firstname" className="text-left text-gray-700 font-bold">
            First Name*
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <label htmlFor="lastname" className="text-left text-gray-700 font-bold">
            Last Name*
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <label htmlFor="email" className="text-left text-gray-700 font-bold">
            Enter Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <label htmlFor="tel" className="text-left text-gray-700 font-bold">
            Contact*
          </label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <label className="text-left text-gray-700 font-bold">Gender*</label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="male" className="text-sm">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="female" className="text-sm">Female</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                id="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="other" className="text-sm">Other</label>
            </div>
          </div>

          <label htmlFor="lang" className="text-left text-gray-700 font-bold">
            Your best Subject
          </label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="lang"
                id="english"
                checked={subjects.english}
                onChange={() => handleSubjectChange("english")}
                className="mr-1"
              />
              <label htmlFor="english" className="text-sm">English</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="lang"
                id="maths"
                checked={subjects.maths}
                onChange={() => handleSubjectChange("maths")}
                className="mr-1"
              />
              <label htmlFor="maths" className="text-sm">Maths</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="lang"
                id="physics"
                checked={subjects.physics}
                onChange={() => handleSubjectChange("physics")}
                className="mr-1"
              />
              <label htmlFor="physics" className="text-sm">Physics</label>
            </div>
          </div>

          <label htmlFor="file" className="text-left text-gray-700 font-bold">
            Upload Resume*
          </label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <label htmlFor="url" className="text-left text-gray-700 font-bold">
            Enter URL*
          </label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <label className="text-left text-gray-700 font-bold">
            Select your choice
          </label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Select Option</option>
            <option value="maths">Maths</option>
            <option value="english">English</option>
            <option value="science">Science</option>
            <option value="science">HTML</option>
            <option value="science">CSS</option>
            <option value="science">java</option>
            <option value="science">C++</option>
            <option value="science">c</option>
          </select>

          <label htmlFor="about" className="text-left text-gray-700 font-bold">
            About Yourself
          </label>
          <textarea
            name="about"
            id="about"
            cols="20"
            rows="6"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About Yourself"
            className="resize-none w-full p-2 border border-gray-300 rounded-md text-sm"
          ></textarea>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-3 rounded-md w-32 hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-500 text-white p-3 rounded-md w-32 hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
