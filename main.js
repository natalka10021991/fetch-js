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

        const link = document.querySelectorAll('#link')

        link.forEach( link => {

            link.addEventListener('click', (e) => {
                e.preventDefault()
                let url = link.href
                articleLoading(url, result, linksContainer)
            })
        })

        button.addEventListener('click', () => {
            linksContainer.innerHTML = '';
            displayTitles(result)
        })

            // link.addEventListener('click', (e) => {

            //     e.preventDefault()
            //     let objectId = url.substring(url.lastIndexOf("/")+1);
            //     let currentObject = result.find(e => e.id == objectId)
            //     const content = `
            //         <h1>${currentObject.title}</h1>
            //         <p>${currentObject.body}</p>
            //         `

            //     linksContainer.innerHTML = content;
            //     const button = document.createElement('button')
            //     button.innerText = 'Назад'
            //     linksContainer.prepend(button)

            //     button.addEventListener('click', () => {

            //       linksContainer.innerHTML = '';

            //       result.forEach((element) => {
            //         const link2 = document.createElement('a')
            //         link2.href = url
            //         console.log(link2.href)
            //         link2.innerText = element.title;
            //         linksContainer.appendChild(link2)
            //       })
            //     })
            // })
    })
  });

