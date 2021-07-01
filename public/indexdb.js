const request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = ({target}) => {
const db = target.results;
const objectStore = db.createObjectStore("budget");
objectStore.createIndex("timestamp", "timestamp");
};

request.onsuccess = event => {
    console.log(request.result);
};