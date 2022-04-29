import { APIHOST } from '../utils/env'
export const Ajax = {
  get(url) {
    console.log({url})
    return new Promise((reslove, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = 1000
      xhr.open("GET", APIHOST+url, true);
      console.log(APIHOST+url)
      xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            reslove(xhr.responseText);
          } else {
            reject(xhr);
          }
        }
      };
      xhr.send();
    });
  },

  post(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = 1000
      xhr.open("POST", APIHOST+url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr);
          }
        }
      };
      xhr.send(data);
    });
  },
};
