let mas = []


for(let i = 0; i < Infinity; i++){
    let act = prompt('Введите действие, которое хотите сделать.');
    let name = prompt('Введите имя.')
    if(act == 'add'){
        mas.push(name);
        console.log('Вы добавили ' + name);
    }else if(act == 'del'){
        for(let a = 0; a <= mas.length; a++){
            if(mas[a] == name){
                mas.splice(a, 1)
            }
        }
        
        console.log('Вы удалили ' + name);
    }else if(act == 'stop'){
        console.log('Вы остановили ввод данных');
        break;
    }
    
}

console.log(mas);



// map() - переводит буквы в нужный формат
// push() - добавляет элемент в конец массива
// splice(1, 3) - удаляет элемент под индексом
// pop() - удаляет элемент с конца массива
// unshift() - добфвляет элемент в начале массива
// shift() - удаляет элемент в начале массива
// slice() - копирует массив и изменяет его
// reverse() - переворачивает массив
// split() - делает из строки массив
// loin() - делает из массива строку
// forEach() - перебирающий метод
// filter() - фильтрует элементы массива