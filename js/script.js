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