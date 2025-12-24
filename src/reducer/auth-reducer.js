export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_AUTHMODAL":
      return {
        ...state,
        isAuthModalOpen: !state.isAuthModalOpen,
      };
    case "SET_TO_LOGIN":
      return {
        ...state,
        selectedTab: "login",
      };
    case "SET_TO_SIGNUP":
      return {
        ...state,
        selectedTab: "signup",
      };
    case "PHONE_NUMBER":
      return {
        ...state,
        number: payload,
      };
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "PASSWORD_CHANGE":
      return {
        ...state,
        password: payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: payload,
      };
    case "CLEAR_USER_DATA":
      return {
        ...state,
        name: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    case "SET_ACCESS_TOKEN":
        return{
            ...state,
            acessToken:payload
        }
    case "SET_USERNAME_TOKEN":
        return {
            ...state,
            username1:payload,
        }
    default:
      return state;
  }
};
