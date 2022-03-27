let imageArr = [
    "https://c4.wallpaperflare.com/wallpaper/649/1012/960/john-wick-movie-poster-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/123/991/646/avatar-blue-skin-james-cameron-s-movie-avatar-movie-poster-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/422/993/130/movies-king-kong-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/59/232/877/movies-terminator-arnold-schwarzenegger-movie-poster-wallpaper-preview.jpg",
    

]


let image = document.createElement("img")
let i = 1;
function displaySlide(){
    image.src = imageArr[0]
    document.getElementById("slideshow").innerHTML="";
    document.getElementById("slideshow").append(image)

    setInterval(function() {

     
        if(i===imageArr.length-1){
            i=0;
        }

        image.src = imageArr[i]
        document.getElementById("slideshow").innerHTML="";
        document.getElementById("slideshow").append(image)
        i++;
       
    
    },3000)

}
displaySlide()






var data = []
function moviesdata(imgurl, name, release, rate) {
    this.imgurl = imgurl;
    this.name = name;
    this.release = release;
    this.rate = rate;

}
var one = new moviesdata("https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp", "TRYING", "15-01-2021", "8.0/10")
var two = new moviesdata("https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp", "MYTHIC QUEST", "20-01-2021", "8.3/10")
var three = new moviesdata("https://is4-ssl.mzstatic.com/image/thumb/I6UAhe-RRHaTB3hCQdQXCQ/738x416.webp ", "TEDD LASSO", "20-01-2021", "7.1/10")
var four = new moviesdata("https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp", "MY QUEST", "20-01-2021", "7.2/10")
var five = new moviesdata("https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp ", "ACHAPULCO", "20-01-2021", "8.1/10")
var six = new moviesdata("https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp ", "DIKINTON", "20-01-2021", "7.5/10")
var seven = new moviesdata("https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp", "MR. CORNMEN", "20-01-2021", "6.5/10")
var eight = new moviesdata("https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp", "TRYING", "20-01-2021", "8.3/10")
var nine = new moviesdata("https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp", "MYTHIC QUEST", "20-01-2021", "8.5/10")
data.push(one, two, three, four, five, six, seven, eight, nine)
localStorage.setItem("movies", JSON.stringify(data))

data.map(function (elem) {

    let movie = document.createElement("div");
    movie.setAttribute("class", "movie")

    let img = document.createElement("img");
    img.src = elem.imgurl;
    img.setAttribute("class", "image");

    let datadiv = document.createElement("div");
    datadiv.setAttribute("class", "datadiv")
    let name = document.createElement("p");
    name.innerText = elem.name;

    let release = document.createElement("p");
    release.innerText = elem.release;

    let rate = document.createElement("p");
    rate.innerText = elem.rate;
    datadiv.append(img,name, release, rate);
    movie.append(datadiv);
    document.getElementById("movies").append(movie);
})



function shortIt(a,b){
  return a.rate = b.rate;
}


