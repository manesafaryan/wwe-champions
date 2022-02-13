import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { logout, login } from "../../../actions/loggedin";
import { successLogin, failedLogin } from "../../../actions/userLogn";

export default function Facebook() {
  const dispatch = useDispatch();
  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      dispatch(
        successLogin({
          name: response.name,
          id: response.id,
          img: response.picture.data.url,
        })
      );
      dispatch(login());
    } else {
      dispatch(failedLogin());
      dispatch(logout());
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
