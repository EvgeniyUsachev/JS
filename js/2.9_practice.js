




/* for (let i = 0; i < 1; i++) {
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
if(numberOfFilms != '' && numberOfFilms != null) {
    console.log('all good');
} else {
    i--;
} 
} */



for(let i = 0; i < 1; i++) {
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
        
    if(personalMovieDB.count < 10 && personalMovieDB.count != '' && personalMovieDB.count !=null ) {
        alert('Просмотрено довольно мало фильмов');
        for(let g = 0; g < 2; g++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
        if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
            personalMovieDB.movies [a] = b;  
        } else {
            g--;
        } 
        console.log(personalMovieDB);
        }
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count != '' && personalMovieDB.count !=null) {
        alert('Вы классический зритель');
        for(let g = 0; g < 2; g++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
        if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
            personalMovieDB.movies [a] = b;console.log(personalMovieDB);
            
        } else {
            g--;
        } 
        }
    } else if (personalMovieDB.count > 30 && personalMovieDB.count != '' && personalMovieDB.count !=null) {
        alert('Вы киноман');
        for(let g = 0; g < 2; g++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
        if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
            personalMovieDB.movies [a] = b;console.log(personalMovieDB);
        } else {
            g--;
        } 
        }
    }    else  {
        alert('Произошла ошибка');
        i--;
        console.log(personalMovieDB);
    }
 }






/* let i =0; 
while (i < 2) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            i++;
    if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies [a] = b;
}   else {
    i--;
    } 

}

console.log(personalMovieDB); */




/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами */

/* let i =0; 
while (i < 2) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            i++;
    if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies [a] = b;
}   else {
    i--;
    } 

}

console.log(personalMovieDB); */

/* let i =0;
do {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            i++;
    if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies [a] = b;
}   else {
    i--;
    } 
}
while (i < 2);

console.log(personalMovieDB); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let g = 0; g < 2; g++) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

    if(a != '' && b != '' && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies [a] = b;console.log(personalMovieDB);
    } else {
        g--;
    } 
    }