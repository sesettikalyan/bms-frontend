import { getAccessToken } from "../config/common_methods";

export async function addHeader(requestObj, methodType) {
  const requestOptions = {
    method: methodType,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: getAccessToken(),
    },
    body: JSON.stringify(requestObj),
  };
  return requestOptions;
}

export async function addHeaderWithOutBody(methodType) {
  const requestOptions = {
    method: methodType,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: getAccessToken(),
    },
  };
  return requestOptions;
}
