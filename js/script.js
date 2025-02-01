// const validUrl = ["https://bothofyou.github.io/GdG-Prozesse/navbar.html", "https://bothofyou.github.io/GdG-Prozesse/project_1.html", "https://bothofyou.github.io/GdG-Prozesse/project_2.html", "https://bothofyou.github.io/GdG-Prozesse/project_3.html","https://bothofyou.github.io/GdG-Prozesse/project_4.html", "https://bothofyou.github.io/GdG-Prozesse/project_5.html"];

// if(!validUrl.includes(window.location.href)) {
//     location.replace("https://bothofyou.github.io/GdG-Prozesse/navbar.html");
// }



const loadPage = pageIndex => {
    const currenPageElement = document.querySelector('#currentPage');
    var redirectFile = `./main.html`;
    if(pageIndex > 0) {
        redirectFile = `./project_${pageIndex}.html`;
    }
    fetch(redirectFile)
    .then(res => {
        if(res.ok) {
            return res.text();
        }
    })
    .then(htmlFile => {
        currenPageElement.innerHTML = htmlFile;
    })
}

// function loadPage(pageIndex) {
   
//     switch(pageIndex) {
//         case 0:
//             currenPageElement.innerHTML("afterbegin", "./main.html");
//             break;
//         case 1:
//             currenPageElement.insertAdjacentHTML("afterbegin", "./project_1.html");
//             break;
//         case 2:
//             currenPageElement.insertAdjacentHTML("afterbegin", "./project_1.html");

//             break;
//         case 3:
//             break;
//         case 4:
//             break;
//         case 5:
//             break;
//         default:
//             currenPageElement.insertAdjacentHTML("afterbegin", "./main.html");
//     }
// }