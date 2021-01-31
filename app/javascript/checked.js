function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
    });
  });
}

window.addEventListener("load", check);