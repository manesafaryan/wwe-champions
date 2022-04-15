import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import loginSlice from "../../../store/login/loginSlice";
import userSlice from "../../../store/userSlice";
import setLocalStorage from "../../../util/helpers/setLocalStorage";

interface Response {
  status: string;
  name: "string";
  id: number;
  picture: { data: { url: string } };
}

export default function Facebook() {
  const dispatch = useDispatch();
  const responseFacebook = (response: Response) => {
    if (response.status !== "unknown") {
      const userData = {
        name: response.name,
        id: response.id,
        img: response.picture.data.url,
      };
      dispatch(userSlice.actions.successLogin(userData));
      dispatch(loginSlice.actions.login());
      setLocalStorage("currentUser", userData);
      setLocalStorage("isLogedin", true);
    } else {
      dispatch(userSlice.actions.failedLogin());
      dispatch(loginSlice.actions.logout());
    }
  };

  return (
    <FacebookLogin
      appId="664630021398305"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}
