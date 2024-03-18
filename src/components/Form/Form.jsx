import PropTypes from "prop-types";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleName = (getName) => {
    setName(getName);
  };
  const handleEmail = (getEmail) => {
    setEmail(getEmail);
  };
  const handlePassword = (getPassword) => {
    setPassword(getPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      setIsSubmit(true);
    }
  };
  const info = {
    name: name,
    email: email,
    password: password,
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            onChange={(event) => handleName(event.target.value)}
            type="text"
            className="grow"
            placeholder="Name"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            onChange={(event) => handleEmail(event.target.value)}
            type="text"
            className="grow"
            placeholder="Email"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            onChange={(event) => handlePassword(event.target.value)}
            type="password"
            required
            placeholder="Password"
            className="grow"
          />
        </label>
        <input
          className="mt-3"
          type="checkbox"
          onChange={(event) => setIsChecked(event.target.checked)}
        />{" "}
        Accept terms & conditions
        <div className="flex justify-center">
          <button className="btn btn-active btn-secondary mt-4">Sign Up</button>
        </div>
      </form>
      {isSubmit && (
        <div className="h-screen backdrop-blur-lg  left-[50%] translate-x-[-50%] top-0 flex justify-center items-center w-full fixed">
          <div className="border-2 border-[#ffffff] flex rounded-lg justify-center items-center h-[300px] w-[600px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl text-fuchsia-600 font-extrabold">
                Successfully Submitted! ✅😊
              </h2>
              <h2 className="text-[purple] mt-4 text-xl font-bold">
                Your Name:{" "}
                <span className={`${info.name ? "text-green-600" : ""}`}>
                  {info.name &&
                    `${info.name
                      .charAt(0)
                      .toLocaleUpperCase()}${info.name.slice(1)}`}{" "}
                </span>
              </h2>
              <h2 className="text-[purple] text-xl font-bold">
                Your Email:{" "}
                <span className={`${info.email ? "text-green-600" : ""}`}>
                  {info.email}
                </span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Form.propTypes = {
  Form: PropTypes.func,
};

export default Form;
