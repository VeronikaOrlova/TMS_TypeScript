//С ниже приведенным объектом решить следующие задачи:

// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1
function arrToString(object){
    return Object.keys(object).join(', ')
}

console.log(arrToString(subjects));

//2

function numberOfStudents(object){
    let students = 0;
    let teachers = 0;

    Object.values(object).forEach(el => {
        students += el.students
        teachers += el.teachers
    })

    return {students, teachers};
};

console.log(numberOfStudents(subjects));

//3

function getAverageStudents(object){
    return Object.values(object).reduce((sum, el) => {
        return sum + el.students/Object.values(object).length
    }, 0)
};

console.log(getAverageStudents(subjects));

//4

function getArray(object){
    let array = Object.keys(object);
    array = array.map(el => el = {subject: el});
    return array;
}

console.log(getArray(subjects));

//5

function arraySort(object){
    return Object.keys(object).sort((a,b) => object[b].teachers - object[a].teachers)
}

console.log(arraySort(subjects));



// Есть массив из нескольких массивов с числами
// Написать функцию, которая будет возвращать сумму всех чисел во всех массивах
// Пример сумма [[1,2], [3,2], [5, 6, 2], [4]] должна вернуть 25

const matrix = [[1,2], [3,2], [5, 6, 2], [4]]

function sumOfArray(array){
    return array.flat().reduce((a, b) => {
        return a + b
    })
}

console.log(sumOfArray(matrix));


