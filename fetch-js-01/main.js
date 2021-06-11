const linksContainer = document.getElementById('linksContainer')
const baseURL = 'https://jsonplaceholder.typicode.com/posts'
const button = document.createElement('button')
button.innerText = 'Назад'


function displayTitles(array) {
    array.forEach(element => {
        let url = `/${element.id}`
        const link = document.createElement('a')
        link.href = url
        link.innerText = element.title;
        linksContainer.appendChild(link)

        link.addEventListener('click', (e) => {
            e.preventDefault()
            let url = link.href
            articleLoading(url, linksContainer)
        })
    })
}

function articleLoading(url, container) {
    let objectId = url.substring(url.lastIndexOf("/")+1);

    let response = fetch(baseURL)
    .then(response => response.json())
    .then(result => {
      let currentObject = result.find(e => e.id == objectId)
      const content = `
          <h1>${currentObject.title}</h1>
          <p>${currentObject.body}</p>
          `
      container.innerHTML = content;
      container.prepend(button)
    })
}

document.addEventListener('DOMContentLoaded', function(){ 
    let response = fetch(baseURL)
    .then(response => response.json())
    .then(result => {

        displayTitles(result)

        button.addEventListener('click', () => {
            linksContainer.innerHTML = '';
            displayTitles(result)
        })
    })
  });

