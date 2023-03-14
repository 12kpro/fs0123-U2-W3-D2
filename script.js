const txtkey = "txt";
const counterKey = "counter";
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem?retiredLocale=it
//A string containing the value of the key. If the key does not exist, null is returned

const updateField = function (el, counter = false) {
  let display = document.querySelector(el);
  let val = counter ? sessionStorage.getItem(counterKey) || 0 : localStorage.getItem(txtkey) || "Local storage empty!";
  display.textContent = counter ? toTimeString(val) : val;
};

const toTimeString = function (seconds) {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
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
