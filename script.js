let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// кнопка заново
document.getElementById('btnRetry').addEventListener('click', function () {
   minValue = 0;
   maxValue = 100;
   orderNumber = 0;
   location.reload ()
})

// кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
   if (gameRun){
      if (minValue === maxValue || minValue == answerNumber) {
         const phraseRandom = Math.round(Math.random() * 3);
         switch (phraseRandom) {
            case 0:
               answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
               break;
            case 1:
               answerPhrase = `Я сдаюсь..\n\u{1F92F}`
               break;
            case 2:
               answerPhrase = `Кругом обман\n\u{1F608}`
               break;
            case 3:
               answerPhrase = `Обманывать не хорошо!\n\u{1F640}`
               break;
         }

         answerField.innerText = answerPhrase;
        gameRun = false;
        } else {
         maxValue = answerNumber - 1;
         answerNumber  = Math.floor((minValue + maxValue) / 2);
         orderNumber++;
         orderNumberField.innerText = orderNumber;
         const phraseRandom = Math.round(Math.random() * 3);
         switch (phraseRandom) {
            case 0:
               answerPhrase = `Вы загадали число ${answerNumber }?`
               break;
            case 1:
               answerPhrase = `Да это легко! Ты загадал ${answerNumber }?`
               break;
            case 2:
               answerPhrase = `Наверное, это число ${answerNumber }?`
               break;
            case 3:
               answerPhrase = `Вангую, это число ${answerNumber }?`
               break;
         }
      answerField.innerText = answerPhrase;
        }
    }
})

// кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
   if (gameRun){
      if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
               case 0:
                  answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                  break;
               case 1:
                  answerPhrase = `Я сдаюсь..\n\u{1F92F}`
                  break;
               case 2:
                  answerPhrase = `Кругом обман\n\u{1F608}`
                  break;
               case 3:
                  answerPhrase = `Обманывать не хорошо!\n\u{1F640}`
                  break;
            }

           answerField.innerText = answerPhrase;
           gameRun = false;
       } else {
           minValue = answerNumber  + 1;
           answerNumber  = Math.floor((minValue + maxValue) / 2);
           orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
               case 0:
                  answerPhrase = `Вы загадали число ${answerNumber }?`
                  break;
               case 1:
                  answerPhrase = `Да это легко! Ты загадал ${answerNumber }?`
                  break;
               case 2:
                  answerPhrase = `Наверное, это число ${answerNumber }?`
                  break;
               case 3:
                  answerPhrase = `Вангую, это число ${answerNumber }?`
                  break;
            }
         answerField.innerText = answerPhrase;
       }
   }
})

//кнопка верно
document.getElementById('btnEqual').addEventListener('click', function () {
   if (gameRun) {
      const phraseRandom = Math.round(Math.random() * 3);
         switch (phraseRandom) {
            case 0:
               answerPhrase = `Я всегда угадываю\n\u{1F60E}`
               break;
            case 1:
               answerPhrase = `Чувствую, я всегда чувствую`
               break;
            case 2:
               answerPhrase = `Сыграем ещё?`
               break;
            case 3:
               answerPhrase = `Теперь моя очередь загадывать\n\u{1F64B}`
               break;
         }
      answerField.innerText = answerPhrase;
      gameRun = false;
   }
})

