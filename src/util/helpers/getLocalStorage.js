export default function getLocalStorage(key) {
    let item = localStorage.getItem(key)
    if(item) {
        return item
    } 
}