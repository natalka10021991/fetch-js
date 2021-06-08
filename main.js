const button = document.querySelector('#button');
const linksContainer = document.querySelector('#linksContainer')

document.addEventListener('DOMContentLoaded', function(){ 
    let response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(result => {
        result.forEach((element) => {
            const link = document.createElement('a')
            link.href = '#'
            const content = `
              <h1>${element.title}</h1>
              <p>${element.body}</p>
              `
            link.innerText = element.title;
            linksContainer.appendChild(link)
            link.addEventListener('click', (e) => {
                e.preventDefault()
                // history.pushState(null, null, url)
                linksContainer.innerHTML = content;
                const button = document.createElement('button')
                button.innerText = 'Назад'
                linksContainer.prepend(button)
                button.addEventListener('click', () => {
                  linksContainer.innerHTML = '';
                  result.forEach((element) => {
                    const link2 = document.createElement('a')
                    link2.href = '#'
                    link2.innerText = element.title;
                    linksContainer.appendChild(link2)
                  })
                })
            })
        });
    })
  });

