/* eslint-disable no-undef */
export function getAjaxRequest(): Promise<JasmineAjaxRequest> {
  return new Promise(function (resolve) {
    setTimeout(() => {
      return resolve(jasmine.Ajax.requests.mostRecent());
    }, 0);
  });
}
