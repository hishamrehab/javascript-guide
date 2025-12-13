const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");
      
    if(movies.length === 0) {
        movieList.classList.remove("visible");
        return;
    } else {
        movieList.classList.add("visible");
    }
    movieList.innerHTML = "";

   const fiteredMovies = !filter
  ? movies 
  :  movies.filter(movie => movie.info.title.includes(filter));
     

    fiteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    
    // if("info" in movie) {
    //    movieEl.textContent = movie.info.title;
    // }

    const { info , ... otherProps } = movie;
    // const { title: movieTitle } = info;

     let { getFormattedTitle } = movie;
    //   getFormattedTitle = getFormattedTitle.bind(movie);
     let text = getFormattedTitle.apply(movie , [  ])  + ' - ' ;
    //  let text = getFormattedTitle.call(movie)  + ' - ' ;
    for (const key in info) {
        if(key !== 'title' && key !== '_title') {
            text += `${key}: ${info[key]}`
        } 
    }

    movieEl.textContent = text;
    movieList.append(movieEl);
    }); 
}


   const addMovieHandler = () => {
   const title = document.getElementById("title").value;
   const extraValue = document.getElementById("extra-value").value;
   const extraName = document.getElementById("extra-name").value;


    if(extraName.trim() === "" ||
       extraValue.trim() === ""
    ) {
    return;
    }
    

    const newMovie = {
     info: {
         set title(val) {
       if(val.trim() === "") {
         this._title = "DEFAULT";
         return;
       }
       this._title = val;
       },
       get title() {
          return this._title; 
       },
        [extraName] : extraValue,
    },
     id: Math.random().toString(),
     getFormattedTitle() {
        return this.info.title.toUpperCase();
    }
   };
 
   newMovie.info.title = title;
   console.log(newMovie.info.title);

    movies.push(newMovie);
        renderMovies();
    };



    const searchMovieHandler = () => {
        console.log(this);
        const filterTerm = document.getElementById("filter-title").value;
        renderMovies(filterTerm);
    }


    addMovieBtn.addEventListener("click" , addMovieHandler);
    searchBtn.addEventListener("click" , searchMovieHandler);
