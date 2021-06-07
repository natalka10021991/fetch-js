const button = document.querySelector('#button');
const linksContainer = document.querySelector('#linksContainer')
const linksContent = document.querySelector('#linksContent')

document.addEventListener('DOMContentLoaded', function(){ 
    let response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(result => {
        result.forEach((element, index) => {
            const link = document.createElement('a')
            const url = `/${index}`
            const content = `
            <h1>${element.title}</h1>
            <p>${element.body}</p>
            `
            link.innerText = element.title;
            link.href = url
            linksContainer.appendChild(link)
            link.addEventListener('click', (e) => {
                e.preventDefault()
                history.pushState(null, null, url)
                linksContent.innerHTML = content;
            })
        });
    })
  });
