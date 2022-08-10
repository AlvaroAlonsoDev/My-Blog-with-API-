

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
window.onload = feticheAll();

const
    containerPost = document.getElementById("containerPost");
    containerPostAll = document.getElementById("containerPostAll");



function fetiche() {
    for (let i = 0; i < 5; i++) {
        fetch('http://localhost:3000/posts')
            .then(data => data.json())
            .then(posts => {

                let line = document.createElement("hr")
                line.className = 'hr-divider';

                let sectionPost = document.createElement("section")
                sectionPost.className = "displayPost";
                sectionPost.onclick = () => modalPost(); // Add the function to watch the "MODAL POST"

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



                if (i != 0) {
                    containerPost.appendChild(line);
                    containerPost.appendChild(sectionPost)
                    sectionPost.appendChild(postTittle);
                    sectionPost.appendChild(subTitle);
                    sectionPost.appendChild(parraph)
                }else {
                    containerPost.appendChild(sectionPost)
                    sectionPost.appendChild(postTittle);
                    sectionPost.appendChild(subTitle);
                    sectionPost.appendChild(parraph)
                }
            })
    }
}

function feticheAll() {
    for (let a = 0; a < 500; a++) {
        fetch('http://localhost:3000/posts')
            .then(data => data.json())
            .then(posts => {

                let line = document.createElement("hr")
                line.className = 'hr-divider';

                let sectionPostAll = document.createElement("sectionAll")
                sectionPostAll.className = "displayPost";
                sectionPostAll.onclick = () => modalPostAll(); // Add the function to watch the "MODAL POST"

                let postTittle = document.createElement('h2');
                postTittle.className = 'post-title';
                postTittle.innerHTML = posts[a].title;

                let subTitle = document.createElement('h3');
                subTitle.className = 'subTitle post-subtitle';
                subTitle.innerHTML = posts[a].body;

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



                if (a != 0) {
                    containerPostAll.appendChild(line);
                    containerPostAll.appendChild(sectionPostAll)
                    sectionPostAll.appendChild(postTittle);
                    sectionPostAll.appendChild(subTitle);
                    sectionPostAll.appendChild(parraph)
                } else {
                    containerPostAll.appendChild(sectionPostAll)
                    sectionPostAll.appendChild(postTittle);
                    sectionPostAll.appendChild(subTitle);
                    sectionPostAll.appendChild(parraph)
                }
            })
    }
}