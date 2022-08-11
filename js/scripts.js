//OnLoad

window.onload = fetiche();
window.onload = storeAPI();

// Const

const
    containerPost = document.getElementById("containerPost"),
    mainDisplay = document.getElementById("main"),
    container = document.getElementById("container"),
    fetchPosts = [],
    fetchUsers = [],
    fetchComments = [];


// STORE API

function storeAPI() {

    fetch(`http://localhost:3333/posts`)
        .then((res) => res.json())
        .then((posts) => {
            // titleModalPost.textContent = posts[i].title;
            // bodyModalPost.textContent = posts[i].body;

            posts.forEach(e => {
                fetchPosts.push(e);
            });
        });

    fetch(`http://localhost:3333/users`)
        .then((res) => res.json())
        .then((users) => {
            // userName.textContent = users[i].username;
            // userEmail.textContent = users[i].email;

            users.forEach(e => {
                fetchUsers.push(e);
            });
        });

    fetch(`http://localhost:3333/comments`)
        .then((res) => res.json())
        .then((comments) => {

            // When it done the "Comment step" add the correct value with the API

            comments.forEach(e => {
                fetchComments.push(e);
            });
        });
}

// NAV RESPONSIVE

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// API

function fetiche() {
    for (let i = 0; i < 3; i++) {
        fetch('http://localhost:3333/posts')
            .then(info => info.json())
            .then(posts => {

                let line = document.createElement("hr")
                line.className = 'my-4';

                let sectionPost = document.createElement("section")
                sectionPost.className = "displayPost";
                sectionPost.style.cursor = "pointer";
                sectionPost.onclick = () => modalPost(i); // Add the function to watch the "MODAL POST"

                let postTittle = document.createElement('h2');
                postTittle.className = 'post-title';
                postTittle.textContent = posts[i].title;

                let subTitle = document.createElement('h3');
                subTitle.className = 'subTitle post-subtitle';
                subTitle.textContent = posts[i].body;

                let parraph = document.createElement("p");
                parraph.className = "post-meta nameParraph";
                parraph.innerHTML = `Posted by
                <a id="namePost1" style= "text-decoration: none;" href="#!">Metalligirl</a>
                on September 24, 2022`;
                parraph.style.fontSize = "1.125rem";
                parraph.style.fontStyle = "italic";
                parraph.style.marginTop = "0";
                parraph.style.color = "#6c757d";
                parraph.style.color = "2rem 0";

                let spanIcon = document.createElement("span");

                let iconEdit = document.createElement("img");
                iconEdit.className = "icons";
                iconEdit.setAttribute("src", "assets/img/edit.png");
                // iconEdit.onclick = () => modalPost(i); // Edit de object content

                let iconDelete = document.createElement("img");
                iconDelete.className = "icons";
                iconDelete.setAttribute("src", "assets/img/delete.png");
                // iconDelete.onclick = () => modalPost(i); // Remove all the post


                if (i != 0) {
                    containerPost.appendChild(line);
                    containerPost.appendChild(sectionPost)
                    sectionPost.appendChild(postTittle);
                    sectionPost.appendChild(subTitle);
                    sectionPost.appendChild(parraph);
                    sectionPost.appendChild(spanIcon)
                    spanIcon.appendChild(iconEdit);
                    spanIcon.appendChild(iconDelete);

                } else {
                    containerPost.appendChild(sectionPost)
                    sectionPost.appendChild(postTittle);
                    sectionPost.appendChild(subTitle);
                    sectionPost.appendChild(parraph)
                    sectionPost.appendChild(spanIcon)
                    spanIcon.appendChild(iconEdit);
                    spanIcon.appendChild(iconDelete);
                }
            })
    }
}

// Modal Post Function

function modalPost(i) {

    container.style.display = "none";

    let displayModalPost = document.createElement("div");
    displayModalPost.className = "shadow-lg p-3 mb-5 bg-white rounded";
    displayModalPost.style.height = "700px";

    let titleModalPost = document.createElement("h2");
    titleModalPost.className = 'post-title';
    titleModalPost.textContent = fetchPosts[i].title; // Change title
    displayModalPost.appendChild(titleModalPost);

    let bodyModalPost = document.createElement("p");
    bodyModalPost.className = 'subTitle post-subtitle';
    bodyModalPost.textContent = fetchPosts[i].body; // Change SubsTitle
    bodyModalPost.style.fontSize = "1.125rem";
    bodyModalPost.style.fontStyle = "italic";
    bodyModalPost.style.marginTop = "0";
    bodyModalPost.style.color = "#6c757d";
    bodyModalPost.style.color = "2rem 0";
    displayModalPost.appendChild(bodyModalPost);

    let justUser = document.createElement('h5');
    justUser.className = 'subTitle post-subtitle';
    justUser.textContent = "User"; // Change RealName
    displayModalPost.appendChild(justUser);

    let userName = document.createElement('p');
    userName.className = 'subTitle post-subtitle';
    userName.textContent = "alvaroalonsoDev"; // Change UserName
    displayModalPost.appendChild(userName);

    let userEmail = document.createElement('p');
    userEmail.className = 'subTitle post-subtitle';
    userEmail.textContent = "airuritac@gmail.com"; // Change email
    displayModalPost.appendChild(userEmail);

    let lineModalPost = document.createElement("hr")
    lineModalPost.className = 'hr-divider';
    displayModalPost.appendChild(lineModalPost);

    let commentsTitle = document.createElement("h2");
    commentsTitle.className = 'post-title';
    commentsTitle.textContent = "Comments";
    displayModalPost.appendChild(commentsTitle);

    let buttonLoadComments = document.createElement("button")
    buttonLoadComments.className = "btnLC";
    buttonLoadComments.textContent = "Load comments";
    displayModalPost.appendChild(buttonLoadComments);

    displayModalPost.appendChild(lineModalPost);

    let buttonEdit = document.createElement("button")
    buttonEdit.className = "btnEdit";
    buttonEdit.textContent = "Edit";
    displayModalPost.appendChild(buttonEdit);

    let buttonDelete = document.createElement("button")
    buttonDelete.className = "btnEdit";
    buttonDelete.textContent = "Delete";
    displayModalPost.appendChild(buttonDelete);

    mainDisplay.appendChild(displayModalPost);

    // conectAPI();
}

    // ADDING RIGHT VALUE IN MODAL POST
function conectAPI(){
    for (let x = 0; x < 10; x++) {
        if (fetchPosts[x].userId = fetchUsers[x].id) {
            userName.textContent = fetchUsers[x].username;
            userEmail.textContent = fetchUsers[x].email;
        }

    }
}
