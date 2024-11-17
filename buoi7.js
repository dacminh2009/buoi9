const articleContainer = document.querySelector(".container")
const searchInput = document.querySelector("#searchInput")
let articlesList = null;
fetch('https://671e106a1dfc429919812ca3.mockapi.io/api/article/articles', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then((articles) => {
    articlesList = articles;
    console.log(articlesList);
    renderFunction(articles);
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  })
  function searchFunction(){
    const searchValue = searchInput.value.toLowerCase();
    console.log(searchValue);
    const articlesFilter = articlesList.filter(function (article){
      return article.tittle.toLowerCase().includes(searchValue)
    })
    renderFunction(articlesFilter)
  }
  function renderFunction(articles){
    articleContainer.innerHTML = "";
    for (let i = 0; i < articles.length; i++){
      const articleElement = document.createElement("div");
      articleElement.innerHTML = `
      <p class="red">${articles[i].tittle}</p>
      <img class="mini" src="${articles[i].image}"/>`;
      articleContainer.appendChild(articleElement);
       }
  }