export default function setColorsValues(colors) {
  const styles = document.documentElement.style;
  Object.entries(colors).map(([color, value]) => {
    styles.setProperty(color, value);
  });
}
