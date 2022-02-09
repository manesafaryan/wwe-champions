export default function loginReducer(state = initialState, action) {
  if ((action.type = "login")) {
    return { IsLogedin: true };
  } else if ((action.type = "login")) {
    return { IsLogedin: false };
  }

  return state;
}
