const button = document.querySelector('#button');
const titlesContainer = document.querySelector('#titlesContainer')

button.addEventListener('click' , (e) => {
    e.preventDefault(); 
    let response = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(result => {
        result.forEach(element => {
            const title = document.createElement('p')
            title.innerText = element.title;
            titlesContainer.appendChild(title)
        });
    })
    
})