import { useState, useEffect } from "react";

export default function useTheme(initalValue) {
    const [value, setValue] = useState(initalValue)

    useEffect(() => {
        if (value === "Light") {
          const styles = document.documentElement.style;
          styles.setProperty("--bcgColor3", "#E6ECF5");
          styles.setProperty("--borderColor2", "#C0CADB");
          styles.setProperty("--borderColor7", "#C0CADB");
          styles.setProperty("--bcgColor7", "#fff");
          styles.setProperty("--quartz", "#343961")
          styles.setProperty("--navItemColor", "#118968")
          styles.setProperty("--rhino", "#fff")
          styles.setProperty("--borderColor8", "#c0cadb")
          styles.setProperty("--bcgColor1", "#F3F7FC")
          styles.setProperty("--bcgColor5", "#fff")
          styles.setProperty("--textColor5", "#3d426e")
        }
      }, [value]);

      return [value, setValue]
}