import loginSlice from "./loginSlice";

const handleUserLogin = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("testData.json");
      const data = await response.json();

      console.log(data, "data");
    } catch (err) {
      console.log(err, "eeeeeeee");
    }
  };
};

export default handleUserLogin;
