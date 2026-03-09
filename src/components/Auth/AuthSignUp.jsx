import { useAuth } from "../../Context";
import { validateName, validateEmail, validatePassword, validateNumber } from "../../utils";
import { signupHandler } from "../../services";

// FIX: Removed module-level validation variables — they persist across
// re-renders and cause stale state bugs. Validation is now checked inline.

export const AuthSignup = () => {
  const { name, email, password, number, authDispatch, confirmPassword } = useAuth();

  const handlePhoneNumber = (event) => {
    if (validateNumber(event.target.value)) {
      authDispatch({ type: "PHONE_NUMBER", payload: event.target.value });
    }
  };

  const handleNameChange = (event) => {
    if (validateName(event.target.value)) {
      authDispatch({ type: "NAME", payload: event.target.value });
    }
  };

  const handleEmailChange = (event) => {
    if (validateEmail(event.target.value)) {
      authDispatch({ type: "EMAIL", payload: event.target.value });
    }
  };

  const handlePasswordChange = (event) => {
    if (validatePassword(event.target.value)) {
      authDispatch({ type: "PASSWORD_CHANGE", payload: event.target.value });
    }
  };

  const handleConfirmPasswordChange = (event) => {
    if (validatePassword(event.target.value)) {
      authDispatch({ type: "CONFIRM_PASSWORD", payload: event.target.value });
    }
  };

  const handleSubmitBtn = async (event) => {  // FIX: async in case signupHandler is async
    event.preventDefault();

    // FIX: Re-validate from context state at submit time (not stale module vars)
    const isValid =
      validateNumber(number) &&
      validateName(name) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validatePassword(confirmPassword) &&
      password === confirmPassword;   // FIX: also check passwords match

    if (isValid) {
      await signupHandler(name, number, email, password);

      // FIX: Only clear data and close modal on SUCCESS
      authDispatch({ type: "CLEAR_USER_DATA" });
      authDispatch({ type: "SHOW_AUTHMODAL" }); // FIX: was missing — modal never closed after signup
    }
  };

  return (
    <form onSubmit={handleSubmitBtn}>
      <div className="mb-3">
        {/* FIX: added htmlFor, id, name, and autoComplete on all inputs */}
        <label htmlFor="signup-mobile" className="form-label fw-semibold">
          Mobile Number <span className="text-danger">*</span>
        </label>
        <input
          id="signup-mobile"
          name="mobileNumber"
          defaultValue={number}
          type="tel"
          maxLength="10"
          className="form-control"
          placeholder="Enter Mobile Number"
          autoComplete="tel"
          required
          onChange={handlePhoneNumber}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signup-name" className="form-label fw-semibold">
          Name <span className="text-danger">*</span>
        </label>
        <input
          id="signup-name"
          name="name"
          defaultValue={name}
          type="text"
          className="form-control"
          placeholder="Enter name"
          autoComplete="name"
          required
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signup-email" className="form-label fw-semibold">
          Email <span className="text-danger">*</span>
        </label>
        <input
          id="signup-email"
          name="email"
          defaultValue={email}
          type="email"
          className="form-control"
          placeholder="Enter Email"
          autoComplete="email"
          required
          onChange={handleEmailChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signup-password" className="form-label fw-semibold">
          Password <span className="text-danger">*</span>
        </label>
        <input
          id="signup-password"
          name="password"
          defaultValue={password}
          type="password"
          className="form-control"
          placeholder="Enter Password"
          autoComplete="new-password"
          required
          onChange={handlePasswordChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="signup-confirm-password" className="form-label fw-semibold">
          Confirm Password <span className="text-danger">*</span>
        </label>
        <input
          id="signup-confirm-password"
          name="confirmPassword"
          defaultValue={confirmPassword}
          type="password"
          className="form-control"
          placeholder="Re-enter Password"
          autoComplete="new-password"
          required
          onChange={handleConfirmPasswordChange}
        />
      </div>

      <button type="submit" className="btn btn-danger w-100 text-white fw-semibold mb-3">
        Submit
      </button>
    </form>
  );
};