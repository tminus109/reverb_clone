const token: string = "";
// get token from context!!!

export async function fetchGet(url: string, signal: AbortSignal) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    signal,
  });
  return response.json();
}

export async function fetchPost(url: string, signal: AbortSignal, body: {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal,
  });
  return response.json();
}
