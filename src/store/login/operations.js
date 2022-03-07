const handleUserLogin = () => {
  return async () => {
    try {
      const response = await fetch("testData.json");
      const data = await response.json();
      return data
    } catch (err) {
      console.log(err)
    }
  };
};

export default handleUserLogin;
