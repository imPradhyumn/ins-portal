export default async function FetchData(url) {
  let obj;
  const res = await fetch("http://localhost:3004/" + url);
  obj = await res.json();
  return obj;
}
