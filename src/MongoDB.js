function addNew(obj) {
  console.log(obj);
  console.log(JSON.stringify(obj));
  fetch("https://mongo-api-4hyk.onrender.com/mycollection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function getFiveUrls() {
  let myData;

  fetch("https://example.com/data")
    .then((response) => response.json())
    .then((data) => {
      myData = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
export { addNew, getFiveUrls };
