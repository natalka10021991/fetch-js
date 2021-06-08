const linksContainer = document.querySelector('#linksContainer')
const baseURL = 'https://jsonplaceholder.typicode.com/posts'
const button = document.createElement('button')
button.innerText = 'Назад'


function displayTitles(array) {
    array.forEach(element => {
        let url = `/${element.id}`
        const link = document.createElement('a')
        link.id = 'link'
        link.href = url
        link.innerText = element.title;
        linksContainer.appendChild(link)

        link.addEventListener('click', (e) => {
            e.preventDefault()
            let url = link.href
            articleLoading(url, array, linksContainer)
        })

        
    })
}

function articleLoading(url, array, container) {
    let objectId = url.substring(url.lastIndexOf("/")+1);
    let currentObject = array.find(e => e.id == objectId)
    const content = `
        <h1>${currentObject.title}</h1>
        <p>${currentObject.body}</p>
        `
    container.innerHTML = content;
    container.prepend(button)
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

