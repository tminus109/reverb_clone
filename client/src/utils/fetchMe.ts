const token: string = "";
// get token from context!!!

async function fetchGet(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function fetchPost(url: string, body = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

export default { fetchGet, fetchPost };
