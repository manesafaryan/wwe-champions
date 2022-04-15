import { colors } from "../../constants/colors.constant";

export default function setColorsValues(theme: "DARK" | "LIGHT") {
  const styles = document.documentElement.style;
  Object.entries(colors[theme]).map(([color, value]) => {
    styles.setProperty(color, value);
  });
}
