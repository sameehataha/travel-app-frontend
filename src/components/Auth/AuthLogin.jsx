import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../Context";
import { loginHandler } from "../../services";

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();

  // FIX: Use refs or state instead of module-level variables
  // to avoid stale validation state across renders
  let isNumberValid = validateNumber(number);
  let isPasswordValid = validatePassword(password);

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      authDispatch({
        type: "PHONE_NUMBER",
        payload: event.target.value,
      });
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      authDispatch({
        type: "PASSWORD_CHANGE",
        payload: event.target.value,
      });
    }
  };

  const handleFormSubmit = async (e) => {   // FIX: must be async
    e.preventDefault();
    if (isNumberValid && isPasswordValid) {
      // FIX: loginHandler must be awaited, otherwise accessToken is undefined
      const { accessToken, username1 } = await loginHandler(number, password);
      authDispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
      authDispatch({ type: "SET_USERNAME_TOKEN", payload: username1 });

      // FIX: only clear data and close modal on SUCCESS
      authDispatch({ type: "CLEAR_USER_DATA" });
      authDispatch({ type: "SHOW_AUTHMODAL" });
    }
  };

  const handleTestCredentials = async () => {
    const { accessToken, username1 } = await loginHandler(7777777777, "Test@123456");
    authDispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
    authDispatch({ type: "SET_USERNAME_TOKEN", payload: username1 });
    authDispatch({ type: "CLEAR_USER_DATA" });
    authDispatch({ type: "SHOW_AUTHMODAL" });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Mobile Number */}
      <div className="mb-3">
        {/* FIX: htmlFor links label to input for accessibility */}
        <label htmlFor="login-mobile" className="form-label fw-semibold">
          Mobile Number <span className="text-danger">*</span>
        </label>
        <input
          id="login-mobile"         // FIX: added id
          name="mobileNumber"       // FIX: added name
          defaultValue={number}
          onChange={handleNumberChange}
          type="tel"
          maxLength="10"
          className="form-control"
          placeholder="Enter Mobile Number"
          autoComplete="tel"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="login-password" className="form-label fw-semibold">
          Password <span className="text-danger">*</span>
        </label>
        <input
          id="login-password"       // FIX: added id
          name="password"           // FIX: added name
          defaultValue={password}
          onChange={handlePasswordChange}
          type="password"
          className="form-control"
          placeholder="Enter Password"
          autoComplete="current-password"
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