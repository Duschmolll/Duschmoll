
//Creating the article link.

const target = document.getElementsByClassName('main');

for (let k = (pageList.length - 1); k >= 0; k--) {

    const sectionOfArticle = document.createElement('section');
    sectionOfArticle.id = ('article');
    const headerOfArticle = document.createElement('h2');
    headerOfArticle.innerHTML = pageList[k].name;
    const dateOfArticle = document.createElement('h5');
    dateOfArticle.innerHTML = pageList[k].date;
    const pageOfArticle = document.createElement('a');
    pageOfArticle.href = pageList[k].href;
    const imgOfArticle = document.createElement('img');
    imgOfArticle.src = pageList[k].img;
    imgOfArticle.alt = pageList[k].alt;
    imgOfArticle.style = pageList[k].style;
    imgOfArticle.classList.add('image');

    target[0].appendChild(sectionOfArticle);
    sectionOfArticle.appendChild(headerOfArticle);
    sectionOfArticle.appendChild(dateOfArticle);
    sectionOfArticle.appendChild(pageOfArticle);
    pageOfArticle.appendChild(imgOfArticle);

}
