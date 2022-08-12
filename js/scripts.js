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

    fetch(`http://localhost:3000/posts`)
        .then((res) => res.json())
        .then((posts) => {
            posts.forEach(e => {
                fetchPosts.push(e);
            });
        });

    fetch(`http://localhost:3000/users`)
        .then((res) => res.json())
        .then((users) => {
            users.forEach(e => {
                fetchUsers.push(e);
            });
        });

    fetch(`http://localhost:3000/comments`)
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
    for (let i = 38; i < 42; i++) {
        fetch('http://localhost:3000/posts')
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

                let subTitle = document.createElement('p');
                subTitle.className = 'subTitle post-subtitle';
                subTitle.textContent = posts[i].body;

                let parraph = document.createElement("p");
                parraph.className = "post-meta nameParraph"; // CHANGE THE USERNAME 
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

                let iconDelete = document.createElement("img");
                iconDelete.className = "icons";
                iconDelete.setAttribute("src", "assets/img/delete.png");


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
            });
    }
}

// Modal Post Function

function modalPost(i) {

    container.style.display = "none";

    let displayModalPost = document.createElement("div");
    displayModalPost.id = "modalPost";
    displayModalPost.className = "shadow p-3 mb-5 bg-body rounded";
    displayModalPost.style.border = "1px solid #ccc";
    displayModalPost.style.padding = "50px";
    displayModalPost.style.width = "70%";

    let buttonClose = document.createElement("button")
    buttonClose.className = "btnClose";
    buttonClose.innerHTML = "X";
    buttonClose.style.float = "right";
    buttonClose.onclick = () => closeModalPost();
    displayModalPost.appendChild(buttonClose);

    let titleModalPost = document.createElement("h2");
    titleModalPost.className = 'post-title';
    titleModalPost.innerHTML = "TITLE"; // Change title
    titleModalPost.style.marginTop = "10px";
    titleModalPost.style.marginLeft = "10px";
    titleModalPost.style.margiRight = "10px";
    displayModalPost.appendChild(titleModalPost);

    let bodyModalPost = document.createElement("p");
    bodyModalPost.className = 'subTitle post-subtitle';
    bodyModalPost.innerHTML = "quia et suscipit o" // Change SubsTitle
    bodyModalPost.style.fontSize = "1.125rem";
    bodyModalPost.style.fontStyle = "italic";
    bodyModalPost.style.marginTop = "10px";
    bodyModalPost.style.marginLeft = "10px";
    bodyModalPost.style.margiRight = "10px";
    bodyModalPost.style.color = "#6c757d";
    bodyModalPost.style.color = "2rem 0";
    displayModalPost.appendChild(bodyModalPost);

    let name = document.createElement('h5');
    name.className = 'subTitle post-subtitle';
    name.innerHTML = "Alvaro Alonso"; // Change RealName
    name.style.margin = "10px";
    displayModalPost.appendChild(name);

    let userName = document.createElement('p');
    userName.className = 'subTitle post-subtitle';
    userName.innerHTML = "alvaroalonsoDev"; // Change UserName
    userName.style.margin = "10px";
    displayModalPost.appendChild(userName);

    let userEmail = document.createElement('p');
    userEmail.className = 'subTitle post-subtitle';
    userEmail.innerHTML = "airuritac@gmail.com"; // Change email
    userEmail.style.margin = "10px";
    displayModalPost.appendChild(userEmail);

    let lineModalPost = document.createElement("hr")
    lineModalPost.className = 'hr-divider';
    lineModalPost.style.marginTop = "10px";
    lineModalPost.style.marginBottom = "10px";
    displayModalPost.appendChild(lineModalPost);

    let commentsTitle = document.createElement("h2");
    commentsTitle.className = 'post-title';
    commentsTitle.innerHTML = "Comments";
    commentsTitle.style.margin = "10px";
    displayModalPost.appendChild(commentsTitle);

    let buttonLoadComments = document.createElement("button");
    buttonLoadComments.id = "buttonLoadComments"
    buttonLoadComments.className = "btnLC";
    buttonLoadComments.innerHTML = "Load comments";
    buttonLoadComments.style.marginBottom = "10px";
    buttonLoadComments.onclick = () => openComments();
    displayModalPost.appendChild(buttonLoadComments);

    let commentSection = document.createElement("div");
    commentSection.id = "commentSection";
    commentSection.className = "comment-section";
    commentSection.style.display = "none";
    commentSection.style.padding = "10px";
    displayModalPost.appendChild(commentSection);

    let commentName = document.createElement("h4");
    commentName.id = "commentName";
    commentName.className = "comment-name";
    commentName.textContent = "Comment name";
    commentSection.appendChild(commentName);

    let commentBody = document.createElement("p");
    commentBody.id = "commentBody";
    commentBody.className = "comment-body";
    commentBody.textContent = "Comment body";
    commentSection.appendChild(commentBody);

    let commentEmail = document.createElement("p");
    commentEmail.id = "commentEmail";
    commentEmail.className = "comment-email";
    commentEmail.textContent = "Comment email";
    commentSection.appendChild(commentEmail);

    let closeCommentButton = document.createElement("button");
    closeCommentButton.id = "closeCommentButton";
    closeCommentButton.className = "btnLC";
    closeCommentButton.innerHTML = "Close comments";
    closeCommentButton.style.display = "none";
    closeCommentButton.style.marginBottom = "10px";
    closeCommentButton.onclick = () => closeComments();
    displayModalPost.appendChild(closeCommentButton);

    // displayModalPost.appendChild(lineModalPost);

    let buttonDelete = document.createElement("button")
    buttonDelete.className = "btnEdit";
    buttonDelete.innerHTML = "Delete";
    buttonDelete.style.float = "right";
    buttonDelete.style.marginBottom = "10px";
    displayModalPost.appendChild(buttonDelete);

    let buttonEdit = document.createElement("button")
    buttonEdit.className = "btnEdit";
    buttonEdit.innerHTML = "Edit";
    buttonEdit.style.marginRight = "10px";
    buttonEdit.style.marginBottom = "10px";
    buttonEdit.style.float = "right";
    displayModalPost.appendChild(buttonEdit);

    mainDisplay.appendChild(displayModalPost);

        // CONDITIONAL 

    for (let x = 0; fetchUsers.length; x++) {
        if (fetchPosts[i].userId === fetchUsers[x].id) {
            userName.textContent = fetchUsers[x].username;
            // change value to the email
        }
    }
}

function closeModalPost() {
    displayModalPost = document.getElementById("modalPost");
    mainDisplay.removeChild(displayModalPost);
    container.style.display = "block";
};

function openComments() {
    displayModalPost = document.getElementById("modalPost");
    commentSection = document.getElementById("commentSection");
    buttonLoadComments = document.getElementById("buttonLoadComments");
    closeCommentButton = document.getElementById("closeCommentButton");

    buttonLoadComments.style.display = "none";
    closeCommentButton.style.display = "block";
    commentSection.style.display = "block";
    commentSection.style.marginBottom = "20px";
};

function closeComments() {
    displayModalPost = document.getElementById("modalPost");
    commentSection = document.getElementById("commentSection");
    buttonLoadComments = document.getElementById("buttonLoadComments");
    closeCommentButton = document.getElementById("closeCommentButton");

    commentSection.style.display = "none";
    closeCommentButton.style.display = "none";
    buttonLoadComments.style.display = "block";
}
