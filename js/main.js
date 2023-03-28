const postCardContainer = document.createElement('div');
postCardContainer.classList.add('card-container');
document.body.appendChild(postCardContainer);
postCardContainer.style.display = 'none';
const postButton = document.getElementById('postButton');
postButton.addEventListener('click', ()=> {
    postButton.style.display = 'none';
    postCardContainer.style.display = 'flex'
    getPosts('https://jsonplaceholder.typicode.com/posts')

})
async function getPosts(url) {
    const response = await fetch(url);
    const postList = await response.json();
    postList.forEach(post => {
        makePost(post);
    })
}

function makePost(post) {
    const postCard = document.createElement('div');
    postCard.id = post.id;
    postCard.classList.add('postCard');
    postCardContainer.appendChild(postCard);

    const postTitle = document.createElement('h2');
    postTitle.innerHTML = post.title;
    postTitle.classList.add('postTitle');
    postCard.appendChild(postTitle);

    const postText = document.createElement('p');
    postText.innerHTML = post.body;
    postText.classList.add('postText');
    postCard.appendChild(postText);

}


