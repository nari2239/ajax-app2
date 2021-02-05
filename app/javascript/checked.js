function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {
      return null;
      // data-load属性がtrueならば(1回目の処理でdata-load属性はtrueが追加される)、この関数の処理は停止になる
    }
    post.setAttribute("data-load", "true");
    // data-load属性を追加
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", 'posts/${postId}', true);
      // openメソッド 第1引数はHTTPメソッドの指定, 第2引数はパスの指定, 第3引数は非同期通信をONにするかOFFにするかの指定
      XHR.responseType = "json";
      // レスポンスとして欲しい情報の形式を指定
      XHR.send();
      // リクエストを送信
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.post;
        // レスポンスされたJSONにアクセス。checkedアクションで、item(更新後の情報を入れた変数)をpostとして受け取ると指定したので、レスポンスの中にあるpostとすることで取得できる。
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
          // checkedカラム次第で、各投稿タグの属性にdata-checkをtrueにするかfalseにするかを処理する
        }
      };
    });
  });
}

setInterval(check, 1000);