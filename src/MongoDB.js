function addNew(obj) {
  fetch("https://mongo-api-4hyk.onrender.com/mycollection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => console.log("Upload was successful", data))
    .catch((error) => console.error(error));
}

export { addNew };
