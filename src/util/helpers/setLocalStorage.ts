export default function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
