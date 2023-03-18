export function getImageUrl() {
  let random = Math.floor(Math.random() * 1265);
  return "https://fakeface.rest/thumb/view/" + random;
}
