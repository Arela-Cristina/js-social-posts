const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//chiamiamo il container principale id container
let container = document.getElementById('container');

//Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

posts.forEach(containerElement => {
    container.innerHTML += `<div class="post">
                                <div class="post__header">
                                    <div class="post-meta">
                                        <div class="post-meta__icon">
                                            <img class="profile-pic" src="${containerElement.author.image}">
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">${containerElement.author.name}</div>
                                            <div class="post-meta__time">${containerElement.created}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post__text">${containerElement.content}
                                </div>
                                <div class="post__image">
                                    <img src="${containerElement.media}" alt="">
                                </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta">
                                            <a class="like-button  js-like-button"  data-postid="1">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter"> Piace a 
                                            <b id="like-counter-${containerElement.id}" class="js-likes-counter">${containerElement.likes}</b> persone
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    console.log('Sono il tuo consolelog', containerElement);
});





//chiamiamo il button
const likeButtons = document.querySelectorAll('a.like-button');
console.log('Sono il mi piace', likeButtons);

//creiamo un arrayId donde ci andremmo a salvare gli solamente gli ID che sono stati clickati, e questo evento lo aggiungeremo dopo con addEventListener.
let arrayId = [];

//creo il evento add event listener, ci aggiungo likeButton, e poi index, que fa in modo di avere un indice per ogni like Button ed associarlo ad ogni numero di like rispettivo.
likeButtons.forEach((likeButton, index) => {
    likeButton.addEventListener('click', function () {

        //salviamo il valore di index in una variabile id perche, rapresentara ID del notro array posts, ad ogni iterazione Id prendera i valori 0, 1, 2 , 3 , 4 , che correspondono ai valori di ogni id del nostro array posts , e poi  dobbiamo...
        let id = index + 1;

        //...richiamiammo gli ID del DOM e salviamo nuovamente il valore di index (que come sappiamo e index = id) in una variabile likes, per posteriormente utilizarla per aggiungere ed restare i likes ogni volta che si clicka sul mi piace che e 'likeButton 
        let likes = document.getElementById(`like-counter-${id}`);

        //Le condizioni, se mi piace(likeButton) contiene la classe 'like-button--liked' 
        if (likeButton.classList.contains('like-button--liked')) {
            //1. rimuovo la clase
            likeButton.classList.remove('like-button--liked');
            //2. ed resto di uno il numero di likes(perche ho tolto il click). likes.InnerHTML sarebbe il numero di likesnel DOM. 
            likes.innerHTML = parseInt(likes.innerHTML) - 1;
            //3. ed tolgo il elemento del arrayId, perche ormai,non appartiene piu li, visto che abbiamo tolto il click ed e diminuito di uno. La condizione per essere nel array e che sia stato clickato y sia aumentato di uno. Per questo utilizziamo filter, che filtra gli id che sono stati sclickati
            arrayId = arrayId.filter(item => item !== id);

        //Altrimenti 
        } else {
            //1. Se non e clickato il mi piace(likeButton) aggiungo la classe 'like-button--liked'
            likeButton.classList.add('like-button--liked');
             //2. ed incremento di uno il numero di likes(perche ho fatto  click). likes.InnerHTML sarebbe il numero di likes nel DOM. 
            likes.innerHTML = parseInt(likes.innerHTML) + 1;
            //... e poi dobbiamo creare un array con gli ID che sono stati clickati
            arrayId.push(id);
        }

        console.log(arrayId);
    });
});



