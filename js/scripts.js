//OnLoad

window.onload = loadPosts();
window.onload = storeAPI();

// Const

const
    containerPost   = document.getElementById("containerPost"),
    mainDisplay     = document.getElementById("main"),
    container       = document.getElementById("container"),

    fetchPosts      = [],
    fetchUsers      = [],
    fetchComments   = [];

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

function loadPosts() {
    for (let i = 0; i < 3; i++) { //crearlos todos y le metes display none, cuando pulse en all post display block...
        fetch('http://localhost:3000/posts')
            .then(info => info.json())
            .then(posts => {

                let line = document.createElement("hr")
                line.className = 'my-4';

                let sectionPost = document.createElement("section");
                sectionPost.id = i
                sectionPost.className = "displayPost";
                sectionPost.style.cursor = "pointer";
                sectionPost.onclick = () => modalPost(i);
                
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
    window.open('index.html#subheading', '_self');

    greyOut = document.getElementById("greyOut");
    masthead = document.getElementById("masthead");

    greyOut.style.opacity = "0.5";
    masthead.style.opacity = "0.5";

    let displayModalPost = document.createElement("div");
    displayModalPost.id = "modalPost";
    displayModalPost.className = "shadow p-3 mb-5 bg-body rounded grey";
    displayModalPost.style.border = "1px solid #ccc";
    displayModalPost.style.backgroundColor = "#ccc";
    displayModalPost.style.padding = "50px";
    displayModalPost.style.width = "100%";

    let buttonClose = document.createElement("button");
    buttonClose.id = "btnClose";
    buttonClose.className = "btnClose";
    buttonClose.innerHTML = "X";
    buttonClose.style.float = "right";
    buttonClose.onclick = () => closeModalPost();
    displayModalPost.appendChild(buttonClose);

    let titleModalPost = document.createElement("h2");
    titleModalPost.id = "titleModalPost";
    titleModalPost.className = 'post-title';
    titleModalPost.innerHTML = fetchPosts[i].title; // Change title DONE
    titleModalPost.style.marginTop = "10px";
    titleModalPost.style.marginLeft = "10px";
    titleModalPost.style.margiRight = "10px";
    displayModalPost.appendChild(titleModalPost);

    let bodyModalPost = document.createElement("p");
    bodyModalPost.id = "bodyModalPost";
    bodyModalPost.className = 'subTitle post-subtitle';
    bodyModalPost.innerHTML = fetchPosts[i].body; // Change SubsTitle DONE
    bodyModalPost.style.fontSize = "1.125rem";
    bodyModalPost.style.fontStyle = "italic";
    bodyModalPost.style.marginTop = "10px";
    bodyModalPost.style.marginLeft = "10px";
    bodyModalPost.style.margiRight = "10px";
    bodyModalPost.style.color = "#6c757d";
    bodyModalPost.style.color = "2rem 0";
    displayModalPost.appendChild(bodyModalPost);

    let divUserModal = document.createElement ("div")
    divUserModal.id = "divUserModal"
    displayModalPost.appendChild(divUserModal);

    let name = document.createElement('h5');
    name.className = 'subTitle post-subtitle';
    name.innerHTML = "User"; 
    name.style.margin = "10px";
    divUserModal.appendChild(name);

    let userName = document.createElement('p');
    userName.className = 'subTitle post-subtitle';
    userName.innerHTML = "alvaroalonsoDev"; // Change UserName DONE
    userName.style.margin = "10px";
    divUserModal.appendChild(userName);

    let userEmail = document.createElement('p');
    userEmail.className = 'subTitle post-subtitle';
    userEmail.innerHTML = "airuritac@gmail.com"; // Change email DONE
    userEmail.style.margin = "10px";
    divUserModal.appendChild(userEmail);

    let lineModalPost = document.createElement("hr")
    lineModalPost.className = 'hr-divider';
    lineModalPost.style.marginTop = "10px";
    lineModalPost.style.marginBottom = "10px";
    divUserModal.appendChild(lineModalPost);

    let divSeccionCED = document.createElement("div");
    divSeccionCED.id = "divSeccionCED";
    displayModalPost.appendChild(divSeccionCED);

    let commentsTitle = document.createElement("h2");
    commentsTitle.className = 'post-title';
    commentsTitle.innerHTML = "Comments";
    commentsTitle.style.margin = "10px";
    divSeccionCED.appendChild(commentsTitle);

    let buttonLoadComments = document.createElement("button");
    buttonLoadComments.id = "buttonLoadComments"
    buttonLoadComments.className = "btnLC";
    buttonLoadComments.innerHTML = "Load comments";
    buttonLoadComments.style.marginBottom = "10px";
    buttonLoadComments.onclick = () => openComments(i);
    divSeccionCED.appendChild(buttonLoadComments);

    let commentSection = document.createElement("div");
    commentSection.id = "commentSection";
    commentSection.className = "comment-section";
    commentSection.style.display = "none";
    commentSection.style.padding = "10px";
    divSeccionCED.appendChild(commentSection);


    let closeCommentButton = document.createElement("button");
    closeCommentButton.id = "closeCommentButton";
    closeCommentButton.className = "btnLC";
    closeCommentButton.innerHTML = "Close comments";
    closeCommentButton.style.display = "none";
    closeCommentButton.style.marginBottom = "10px";
    closeCommentButton.onclick = () => closeComments();
    divSeccionCED.appendChild(closeCommentButton);
    
    // displayModalPost.appendChild(lineModalPost);
    
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "btnEdit";
    buttonDelete.innerHTML = "Delete";
    buttonDelete.style.float = "right";
    buttonDelete.style.marginBottom = "10px";
    buttonDelete.onclick = () => deletePost (i);
    divSeccionCED.appendChild(buttonDelete);

    let buttonEdit = document.createElement("button")
    buttonEdit.className = "btnEdit";
    buttonEdit.innerHTML = "Edit";
    buttonEdit.style.marginRight = "10px";
    buttonEdit.style.marginBottom = "10px";
    buttonEdit.style.float = "right";
    buttonEdit.onclick = () => editPost();
    divSeccionCED.appendChild(buttonEdit);

    mainDisplay.appendChild(displayModalPost);

        // CONDITIONAL 

    

    for (let x = 0; x < fetchUsers.length; x++){
        if (fetchPosts[i].userId === fetchUsers[x].id) {
            userName.textContent = fetchUsers[x].username;
            userEmail.textContent = fetchUsers[x].email;
        }
    }
    
}

function closeModalPost() {
    displayModalPost = document.getElementById("modalPost");
    mainDisplay.removeChild(displayModalPost);
    container.style.display = "block";

    greyOut = document.getElementById("greyOut");
    masthead = document.getElementById("masthead")

    greyOut.style.opacity = "1";
    masthead.style.opacity = "1";
};

function openComments(i) {
    const
        commentSection = document.getElementById("commentSection"),
        buttonLoadComments = document.getElementById("buttonLoadComments"),
        closeCommentButton = document.getElementById("closeCommentButton");

    buttonLoadComments.style.display = "none";
    closeCommentButton.style.display = "block";
    commentSection.style.display = "block";
    commentSection.style.marginBottom = "20px";


    for (let z = 0; z < fetchComments.length; z++){

        if (fetchPosts[i].id === fetchComments[z].postId){
            let eachComment = document.createElement("div");
            eachComment.id = "eachComment";
            eachComment.className = "comment-section";
            eachComment.style.padding = "10px";
            commentSection.appendChild(eachComment);
            
            let commentName = document.createElement("h4");
            commentName.id = "commentName";
            commentName.className = "comment-name";
            commentName.textContent = fetchComments[z].name;
            eachComment.appendChild(commentName);
        
            let commentBody = document.createElement("p");
            commentBody.id = "commentBody";
            commentBody.className = "comment-body";
            commentBody.textContent = fetchComments[z].body;
            eachComment.appendChild(commentBody);
        
            let commentEmail = document.createElement("p");
            commentEmail.id = "commentEmail";
            commentEmail.className = "comment-email";
            commentEmail.textContent = "email: " + fetchComments[z].email;
            eachComment.appendChild(commentEmail);
            
        }
    }

};

function closeComments() {
    const 
        displayModalPost = document.getElementById("modalPost"),
        commentSection = document.getElementById("commentSection"),
        buttonLoadComments = document.getElementById("buttonLoadComments"),
        closeCommentButton = document.getElementById("closeCommentButton");

    commentSection.style.display = "none"; // Tiene el bug de crearse repetidas veces los comentarios, se soluciona con un condicional al crear los comentarios
    closeCommentButton.style.display = "none";
    buttonLoadComments.style.display = "block";
}

// function deletePost() {
//     displayModalPost = document.getElementById("modalPost");
//     mainDisplay.removeChild(displayModalPost);
//     container.style.display = "block";

//     greyOut = document.getElementById("greyOut");
//     masthead = document.getElementById("masthead")

//     greyOut.style.opacity = "1";
//     masthead.style.opacity = "1";

// }

function editPost() {
    const 
    titleModalPost = document.getElementById("titleModalPost"),
    bodyModalPost = document.getElementById("bodyModalPost"),
    modalPost = document.getElementById("modalPost"),
    btnClose = document.getElementById("btnClose"),
    divSeccionCED = document.getElementById("divSeccionCED"),
    divUserModal = document.getElementById("divUserModal");

    modalPost.removeChild(titleModalPost);
    modalPost.removeChild(bodyModalPost);
    modalPost.removeChild(btnClose);
    modalPost.removeChild(divSeccionCED);
    modalPost.removeChild(divUserModal);
    
    let divEditModal = document.createElement("div");
    divEditModal.className = "modal-body p-5 pt-0";
    modalPost.prepend(divEditModal)
    // modalPost.appendChild(divEditModal);

    let putTitleModal = document.createElement("div");
    putTitleModal.id = "putTitleModal";
    putTitleModal.className = "form-floating mb-3";
    putTitleModal.style.marginBottom = "30px"
    divEditModal.appendChild(putTitleModal);

    let inputTitleModal = document.createElement("input");
    inputTitleModal.id = "floatingInput"
    inputTitleModal.type = "text";
    inputTitleModal.className = "form-control rounded-3";
    putTitleModal.appendChild(inputTitleModal);

    let labelTitleModal = document.createElement("label");
    labelTitleModal.setAttribute( "for", "floatingInput");
    labelTitleModal.textContent = "New title";
    putTitleModal.appendChild(labelTitleModal);

    let putBodyModal = document.createElement("div");
    putBodyModal.id = "putBodyModal";
    putBodyModal.className = "form-floating mb-3";
    divEditModal.appendChild(putBodyModal);

    let inputBodyModal = document.createElement("input");
    inputBodyModal.id = "floatingBody"
    inputBodyModal.type = "text";
    inputBodyModal.className = "form-control rounded-3";
    putBodyModal.appendChild(inputBodyModal);

    let labelBodyModal = document.createElement("label");
    labelBodyModal.setAttribute( "for", "floatingBody");
    labelBodyModal.textContent = "New body";
    putBodyModal.appendChild(labelBodyModal);

    let divBtnSubmitModal = document.createElement("div");
    divEditModal.appendChild(divBtnSubmitModal);

    let BtnSubmitModal = document.createElement("button");
    BtnSubmitModal.className = "w-100 mb-2 btn btn-lg rounded-3 btn-primary";
    BtnSubmitModal.type = "submit";
    BtnSubmitModal.textContent = "Submit";
    BtnSubmitModal.onclick = () => editAxios(textContent.labelTitleModal, textContent.inputBodyModal);
    divBtnSubmitModal.appendChild(BtnSubmitModal);
}

function editAxios(x, y) {
    axios.put("", {
        title: x,
        body: y
    })
    .then(res => console.log(res))
    .catch((err) => console.log(err))
}