import { AuthLogin, AuthSignup } from "../index";
import { useAuth } from "../../Context";
import { X } from "lucide-react";
import "./AuthModal.css";
export const AuthModal = () => {
  const { authDispatch, selectedTab } = useAuth();

  const handleLoginClick = () => authDispatch({ type: "SET_TO_LOGIN" });
  const handleSignupClick = () => authDispatch({ type: "SET_TO_SIGNUP" });
  const handleModalClose = () => authDispatch({ type: "SHOW_AUTHMODAL" });

  return (
    <div
      className="position-fixed top-0 end-0 w-100 h-70 d-flex justify-content-end mt-5"
      style={{ zIndex: 1050 }}
      onClick={handleModalClose}
    >
      <div
        className="bg-white h-70 shadow d-flex flex-column auth-modal-container"
        style={{
          width: "360px",
          marginTop: "40px", 
          height: "calc(100% - 80px)",
          boxShadow: "0 10px 30px rgba(13, 13, 13, 0.3)", 
          marginRight: "10px"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Tabs */}
        <div className="d-flex align-items-stretch border-bottom">
          <button
            className={`btn flex-fill rounded-0 fw-semibold ${
              selectedTab === "login" ? "btn-danger text-white" : "btn-danger"
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>

          <button
            className={`btn flex-fill rounded-0 fw-semibold ${
              selectedTab === "signup" ? "btn-danger text-white" : "btn-danger"
            }`}
            onClick={handleSignupClick}
          >
            Sign up
          </button>

          <button
            className="btn btn-light rounded-0 d-flex align-items-center justify-content-center px-3 btn-close-modal"
            onClick={handleModalClose}
            style={{ fontSize: "24px" }}
          >
            <X />
          </button>
        </div>

        {/* Dynamic Body Content */}
        <div className="p-4 overflow-auto">
          {selectedTab === "login" ? <AuthLogin /> : <AuthSignup />}
        </div>
      </div>
    </div>
  );
};
