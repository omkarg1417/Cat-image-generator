let elem = document.querySelector(".generate-new-cat");

let fetchPics = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response =>  response.json() )
    .then(data => {
        document.querySelector(".cat-image-div").innerHTML = '';
        
        let getUrl = data[0].url;
        
        let catImgElem = document.createElement("img");
        catImgElem.setAttribute('src', `${getUrl}`)

        document.querySelector(".cat-image-div")
        .appendChild(catImgElem).classList.add("cat-image");

        // document.querySelector(".cat-image-div").classList.add("cat-image")
        
    }).catch((err) => { console.log(err) }); 
}

elem.addEventListener("click", fetchPics);