const srk_images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqvJwOdjnhMZF2IpmhHbyZ7tlc0yux2oZ3A&usqp=CAU",
];

const siteImages = document.getElementsByTagName("img");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender, sendResponse);

  if (request.task === "clicked") {
    for (let i = 0; i < siteImages.length; i++) {
      const randImg = Math.floor(Math.random() * srk_images.length);
      siteImages[i].src = srk_images[randImg];
    }
  }

  const response = { status: "done" };
  sendResponse(response);
});
