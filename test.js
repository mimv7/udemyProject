

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),



for(let  i=0; i<2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
    if (a != null && b!= null && a != '' && b!='' && a.length <50){
        personalMovieDB.movies[a] = b;
    }else{
    console.log('error');
    i--;
    }
}
if (personalMovieDB.count < 10){
    console.log('Просмотренно довольно мало фильмов')
}else if( 10 <= personalMovieDB.count < 30){
    console.log('Вы классический зритель')
}else if(personalMovieDB.count >=30){
    console.log('Вы киноман')
}else{
    console.log('ошибка')
}

console.log(personalMovieDB);