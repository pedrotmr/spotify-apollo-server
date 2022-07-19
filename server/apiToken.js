import fetch from "node-fetch";
import "dotenv/config";

const base64Encode = (s) => Buffer.from(s).toString("base64");

export const fetchToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${base64Encode(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        )}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    const data = await response.json();
    const token = data.access_token;
    console.log('token', token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

let token = "";
export const getResponse = async (url, token) => {
  try {
    return await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const _fetch = async (url) => {
  try {
    let resp = {};
    if (token) {
      resp = await getResponse(url, token);
    }
    if (!token || resp.token === 401) {
      token = await fetchToken();
      resp = await getResponse(url, token);
    }
    resp = await resp.json();
    return resp;
  } catch (error) {
    console.error(error);
  }
};
