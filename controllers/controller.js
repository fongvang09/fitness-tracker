const request = window.indexedDB.open("toDoList", 1);

request.onupgradeneeded = ({ target }) => {
  const db = target.result;

  const objectStore = db.createObjectStore("toDoList");
  objectStore.createIndex("timestamp", "timestamp");
  objectStore.createIndex("icebox", "icebox");
  objectStore.createIndex("inprogress", "inprogress");
  objectStore.createIndex("complete", "complete");
};

request.onsuccess = event => {
  console.log(request.result);
};
