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
            const title = document.createElement('h2')
            title.textContent = element.body
            const subtitle = document.createElement('p')
            subtitle.textContent = element.title
            link.innerText = element.title;
            link.href = url
            linksContainer.appendChild(link)
            link.addEventListener('click', (e) => {
                e.preventDefault()
                history.pushState(null, null, url)
                console.log(linksContent)
                linksContent.textContent = element.title + element.body

            })
        });
    })
  });
