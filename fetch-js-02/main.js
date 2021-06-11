const main = document.getElementById("main");
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function getPosts() {
  return fetch(baseURL).then((response) => response.json());
}

function getPost(id) {
  return fetch(`${baseURL}/${id}`).then((response) => response.json());
}

function getComments(id) {
    return fetch(`${baseURL}/${id}/comments`).then((response) => response.json());
  }

function createLink(post) {
  const link = document.createElement("a");
  link.href = post.id;
  link.innerText = post.title;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    pagePost(post.id);
    commentsPost(post.id);

  });

  return link;
}

function pageIndex() {
  return getPosts().then((posts) => {
    main.innerHTML = "";

    posts.forEach((post) => {
      main.appendChild(createLink(post));
    });
  });
}

function commentsPost(id) {
    return getComments(id).then((comments) => {
        comments.forEach((comment) => {
            const commentContent = `
            <p>${comment.name}</p>
            <p>${comment.email}</p>
            <p>${comment.body}</p>
            `;
            const div = document.createElement('div');
            div.innerHTML = commentContent;
            div.classList.add('comment');
            main.appendChild(div);
            const complainButton = document.createElement("button");
            complainButton.innerHTML = 'Пожаловаться'
            main.appendChild(complainButton);
            complainButton.addEventListener('click', () => {
                displayAlert(comment);
            })

        })
    })
}

function displayAlert(comment) {
    alert(`жалоба отправлена на комментарий пользователя ${comment.name}`)
}

function pagePost(id) {
  return getPost(id).then((post) => {
    const content = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `;
    main.innerHTML = content;

    const button = document.createElement("button");
    button.innerText = "Назад";

    button.addEventListener("click", () => {
      pageIndex();
    });

    main.prepend(button);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  pageIndex();
});