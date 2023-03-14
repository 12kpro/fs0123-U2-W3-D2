const txtkey = "txt";
const counterKey = "counter";
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem?retiredLocale=it
//A string containing the value of the key. If the key does not exist, null is returned

const updateField = function (el, session = false) {
  let display = document.querySelector(el);
  let val = session ? sessionStorage.getItem(counterKey) || 0 : localStorage.getItem(txtkey) || "Local storage empty!";
  display.textContent = val;
};

document.addEventListener("DOMContentLoaded", () => {
  let counter = sessionStorage.getItem(counterKey) || 0;

  updateField("#display");
  updateField("#counterDisplay", true);

  let txt = document.querySelector("#text");

  document.querySelector("#save").addEventListener("click", (e) => {
    localStorage.setItem(txtkey, txt.value);
    updateField("#display");
    txt.value = "";
  });
  document.querySelector("#delete").addEventListener("click", (e) => {
    localStorage.removeItem(txtkey);
    updateField("#display");
  });

  setInterval(() => {
    counter++;
    sessionStorage.setItem(counterKey, counter);
    updateField("#counterDisplay", true);
  }, 1000);
});
