export const getCookie = (key: string) => {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    const host = window.location.host;
    document.cookie =
      name +
      "=;" +
      "expires=Thu, 01-Jan-1970 00:00:01 GMT;" +
      "path=" +
      "/;" +
      "domain=" +
      (host.startsWith("localhost") ? "localhost" : host) +
      ";" +
      "secure=;";
  }
};
