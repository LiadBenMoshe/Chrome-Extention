export function websites() {
  let myData = [
    {
      id: 0, // Used in JSX as a key
      name: "Creola Katherine Johnson",
      likes: Math.floor(Math.random() * 1265),
    },
    {
      id: 1, // Used in JSX as a key
      name: "Mario José Molina-Pasquel Henríquez",
      likes: Math.floor(Math.random() * 30565),
    },
    {
      id: 2, // Used in JSX as a key
      name: "Mohammad Abdus Salam",
      likes: Math.floor(Math.random() * 4008),
    },
    {
      id: 3, // Used in JSX as a key
      name: "Percy Lavon Julian",
      likes: Math.floor(Math.random() * 12764),
    },
    {
      id: 4, // Used in JSX as a key
      name: "Subrahmanyan Chandrasekhar",
      likes: Math.floor(Math.random() * 67544),
    },
  ];
  return myData;
  // let myData;
  // try {
  //   const response = await fetch(
  //     "https://mongo-api-4hyk.onrender.com/myfivecollection"
  //   );
  //   const data = await response.json();
  //   // use the data here
  //   return data;
  // } catch (error) {
  //   console.error("Error:", error);
  // }

  // fetch("https://mongo-api-4hyk.onrender.com/myfivecollection")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     myData = data;
  //     console.log(data);
  //     return myData;
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
}
