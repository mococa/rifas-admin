export const getCookie = (key: string) => {
  const b = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
  return b ? b.pop() : '';
};

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    const { host } = window.location;
    document.cookie = `${name}='';expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/;domain=${
      String(host).startsWith('localhost') ? 'localhost' : host
    };secure=;`;
  });
};
