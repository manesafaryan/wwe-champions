export default function getLocalStorage(key: string) {
    let item = localStorage.getItem(key)
    if(item) {
        return JSON.parse(item)
    } 
}