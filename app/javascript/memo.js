function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    // new FormData(フォームの要素);でフォームに入力された値を取得することができる
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      // レスポンスされたJSONにアクセス。createアクションで、item(更新後の情報を入れた変数)をpostとして受け取ると指定したので、レスポンスの中にあるpostとすることで取得できる。
      const list = document.getElementById("list");
    }
  });
}

window.addEventListener("load", memo);