export default async function (input: RequestInfo | URL, init?: RequestInit) {
  const res = await fetch(input, init);
  return await res.json();
}
