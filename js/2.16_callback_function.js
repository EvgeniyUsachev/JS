'use strict';

function learnJS (lang, callback) {
    console.log(`я учу ${lang}`); 
    callback();
}

function done() {
    console.log('im done');
}

learnJS('JavaScript', done); // сначала "я учу", поотом колбек и вторая функция аймдан.
