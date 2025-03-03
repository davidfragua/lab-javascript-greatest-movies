console.log("probando");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let cloneMoviesArray = structuredClone(moviesArray);
  let directors = cloneMoviesArray.map((eachMovie) => {
    return eachMovie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray === 0) {
        return 0
    }
    
  let filteredMovies = moviesArray.filter((eachMovie) => {
    if (
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
    ) {
      return true
    } else {
      return false;
    }
  });
  return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    
  let scoreTotal = moviesArray.reduce((acc, eachElement) => {
    if (eachElement.score === undefined ){
        return acc;
    } else {
    return acc + eachElement.score;
    }
  }, 0);
//  haciendo un console.log salen 4 valores pero no logro averiguar por qué
  
  let average = scoreTotal / moviesArray.length
  return Number(average.toFixed(2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === undefined){
        return 0;
    } 
    let dramasTotales = moviesArray.map = ((eachMovie) =>{
        if (eachMovie.genre.includes("Drama")){
            return true
        }
       return dramasTotales
    })
    let scoreDramas = dramasTotales.reduce((acc, eachElement) =>{
        if (eachElement.score === undefined){
            return acc;
        } else {
            return acc + eachElement.score
        }
    },0);
    return scoreDramas / dramasTotales.length
    // console.log(scoreDramas / dramasTotales.length)

} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let cloneMoviesArray = structuredClone(moviesArray);

    let OrderedMovies = cloneMoviesArray.sort( (a,b) =>{
        if (a.year > b.year){
            return 1;
        } else if (a.year < b.year){
            return -1;
        } else {
            cloneMoviesArray.sort ((c,d) =>{
                if (c.title > d.title){
                    return 1;
                } else if (c.year < d.year){
                    return -1;
                } else {
                    return 0;
                }
            })
        }
    })
    
    return OrderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneMoviesArray = structuredClone(moviesArray);
    console.log(cloneMoviesArray)

    let OrderedTitles = cloneMoviesArray.sort( (a,b) =>{
        if (a.title > b.title){
            return 1;
        } else if (a.title < b.title){
            return -1;
        } else {
            return 0;
        }
    })
    return OrderedTitles.slice(0, 20)
    

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
