import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../Context";
import { loginHandler } from "../../services";

let isNumberValid, isPasswordValid;
export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();

  const handleNumberChnage = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("valid input");
      authDispatch({
        type: "PHONE_NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("invalid no");
    }
  };
  const handlePasswordChnage = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("valid input");
      authDispatch({
        type: "PASSWORD_CHANGE",
        payload: event.target.value,
      });
    } else {
      console.log("invalid confiorm password");
    }
  };
  const handleFormSubmit =  (e) => {
    e.preventDefault();
    if (isNumberValid && isPasswordValid) {
      const { accessToken, username1 } =  loginHandler(number, password);
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USERNAME_TOKEN",
        payload: username1,
      });
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTHMODAL",
    });
  };
  const handleTestCredentials = async () =>{
  const { accessToken, username1 } = await loginHandler(7777777777, "Test@123456" );
  authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USERNAME_TOKEN",
        payload: username1,
      });
       authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTHMODAL",
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      {/* Mobile Number */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Mobile Number <span className="text-danger">*</span>
        </label>
        <input
          defaultValue={number}
          onChange={handleNumberChnage}
          type="tel"
          maxLength="10"
          className="form-control"
          placeholder="Enter Mobile Number"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="form-label fw-semibold">
          Password <span className="text-danger">*</span>
        </label>
        <input
          defaultValue={password}
          onChange={handlePasswordChnage}
          type="password"
          className="form-control"
          placeholder="Enter Password"
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-danger w-100 text-white fw-semibold mb-3"
      >
        Verify
      </button>

      <button
      onClick={handleTestCredentials}
        type="button"
        className="btn btn-outline-danger w-100 fw-semibold"
      >
        Login with Test Credentials
      </button>
    </form>
  );
};
