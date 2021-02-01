function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", 'posts/${postId}', true);
      // openメソッド 第1引数はHTTPメソッドの指定, 第2引数はパスの指定, 第3引数は非同期通信をONにするかOFFにするかの指定
      XHR.responseType = "json";
      // レスポンスとして欲しい情報の形式を指定
      XHR.send();
      // リクエストを送信
    });
  });
}

window.addEventListener("load", check);