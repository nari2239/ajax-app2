function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
  });
}

window.addEventListener("load", memo);