

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

window.onload = fetiche();

const
    containerPost = document.getElementById("containerPost"),
    mainDisplay = document.getElementById("main"),
    container = document.getElementById("container");



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
                postTittle.innerHTML = posts[i].title;

                let subTitle = document.createElement('h3');
                subTitle.className = 'subTitle post-subtitle';
                subTitle.innerHTML = posts[i].body;

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
                iconEdit.onclick = () => modalPost(i); // Edit de object content

                let iconDelete = document.createElement("img");
                iconDelete.className = "icons";
                iconDelete.setAttribute("src", "assets/img/delete.png");
                iconDelete.onclick = () => modalPost(i); // Remove all the post


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

    const fetchReq1 = fetch(`http://localhost:3333/posts`)
        .then((res) => res.json())
        .then((posts) => {
            titleModalPost.innerHTML = posts[i].title;
            bodyModalPost.innerHTML = posts[i].body;
        })


    const fetchReq2 = fetch(`http://localhost:3333/users`)
        .then((res) => res.json())
        .then((users) => {
            name.innerHTML = users[i].name;
            userName.innerHTML = users[i].username;
            userEmail.innerHTML = users[i].email;
        });

    const fetchReq3 = fetch(`http://localhost:3333/comments`)
        .then((res) => res.json())
        .then((comments) => {
            // When it done the "Comment step" add the correct value with the API
        });
    container.style.display = "none";

    let displayModalPost = document.createElement("div");
    displayModalPost.className = "shadow-lg p-3 mb-5 bg-white rounded";
    displayModalPost.style.height = "700px";

    let titleModalPost = document.createElement("h2");
    titleModalPost.className = 'post-title';
    titleModalPost.innerHTML = "TITLE"; // Change title
    displayModalPost.appendChild(titleModalPost);

    let bodyModalPost = document.createElement("p");
    bodyModalPost.className = 'subTitle post-subtitle';
    bodyModalPost.innerHTML = "quia et suscipit o" // Change SubsTitle
    bodyModalPost.style.fontSize = "1.125rem";
    bodyModalPost.style.fontStyle = "italic";
    bodyModalPost.style.marginTop = "0";
    bodyModalPost.style.color = "#6c757d";
    bodyModalPost.style.color = "2rem 0";
    displayModalPost.appendChild(bodyModalPost);

    let name = document.createElement('h5');
    name.className = 'subTitle post-subtitle';
    name.innerHTML = "Alvaro Alonso"; // Change RealName
    displayModalPost.appendChild(name);

    let userName = document.createElement('p');
    userName.className = 'subTitle post-subtitle';
    userName.innerHTML = "alvaroalonsoDev"; // Change UserName
    displayModalPost.appendChild(userName);

    let userEmail = document.createElement('p');
    userEmail.className = 'subTitle post-subtitle';
    userEmail.innerHTML = "airuritac@gmail.com"; // Change email
    displayModalPost.appendChild(userEmail);

    let lineModalPost = document.createElement("hr")
    lineModalPost.className = 'hr-divider';
    displayModalPost.appendChild(lineModalPost);

    let commentsTitle = document.createElement("h2");
    commentsTitle.className = 'post-title';
    commentsTitle.innerHTML = "Comments";
    displayModalPost.appendChild(commentsTitle);

    let buttonLoadComments = document.createElement("button")
    buttonLoadComments.className = "btnLC";
    buttonLoadComments.innerHTML = "Load comments";
    displayModalPost.appendChild(buttonLoadComments);

    displayModalPost.appendChild(lineModalPost);

    let buttonEdit = document.createElement("button")
    buttonEdit.className = "btnEdit";
    buttonEdit.innerHTML = "Edit";
    displayModalPost.appendChild(buttonEdit);

    let buttonDelete = document.createElement("button")
    buttonDelete.className = "btnEdit";
    buttonDelete.innerHTML = "Delete";
    displayModalPost.appendChild(buttonDelete);

    mainDisplay.appendChild(displayModalPost);






    // const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3]);
    // console.log(allData);
    // fetch('http://localhost:3333/posts'),
    //     fetch('http://localhost:3333/users'),
    //     fetch('http://localhost:3333/comments')
    //         .then(data => data.json())
    //         .then(posts => {
    //             console.log(posts);
    //         })
    //         .then()
}
