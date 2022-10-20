// простая игра отгадай число с заранее загаданным числом(5)

const secretNum = 5;
let checkScore = 0;

function guessNum (num) {
    if (checkScore >= 5) {

        return alert('Игра окончена, обновите страницу');
    }
    if(num === secretNum) {

        alert('Вы угадали!');
        checkScore = 5;
    }

    else if (num > 5) {
        alert('Вы не угадали');
        alert('Даю подсказку, загаданное число меньше');
        checkScore++

    }
    else {
        alert('Вы не угадали');
        checkScore++
    }

}

