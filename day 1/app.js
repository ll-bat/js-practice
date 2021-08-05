

/**
 * # ამოცანა 1 
 * 
 * შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს ორ მასივს და დაგვიბრუნებს ამ მასივის საერთო წევრებს
 * მაგალითად: A = [1, 2, 3];  B = [2, 3, 4];   getCommonMembers(A, B) = [2, 3]
 * 
 */
function Task1(arrOne, arrTwo) {
    let tmpArray = [];
    arrOne.forEach(function (a) {
        if (arrTwo.includes(a)) {
            tmpArray.push(a);
        }
    })

    return tmpArray;
}
let a = [1, 2, 3];
let b = [2, 3, 4];
console.log(Task1(a, b));

/**
 * 
 * # ამოცანა 2 
 * 
 * დავუშვათ გვაქვს მასივი რომელიც გამოიყურება შემდეგნაირად: 
 * 
 * const obj = [
 *  {
 *    id: 1, 
 *    value: "raime",
 *    children: []
 *  },
 *  {
 *    id: 2, 
 *    value: "sxva ragac",
 *    children: [
 *       {
 *          id: 3,
 *          value: "kidev sxva ragac",
 *          children: []
 *       }
 *    ]
 *  }
 * ]
 *  
 * ანუ მასივის თითოეული წევრი არის ობიექტი რომელიც შედგება სამი property - სგან (id, value, childen)
 * children - ი შეიძლება იყოს ცარიელი, ან შეიცავდეს ზუსტად იგივე ტიპის ობიექტებს როგორიცაა მასივის ნებისმიერი წევრი 
 * 
 * ჩვენი მიზანია ამ დიდი obj ობიექტიდან ამოვკრიფოთ ყველა id - იები 
 * ანუ თუ ფუნქციას მივაწოდებდით მოცემულ obj - ს, ფუნქცია დააბრუნებდა [1, 2, 3] - ს
 * 
 * მინიშნება: 
 * - ამოცანა უნდა დაიწეროს რეკურსიულად 
 * - მასივის თითოეულ წევრს აქვს ხის სტრუქტურა
 */

 let tmpArray = [];
function Task2(arrOfObjects) {
    arrOfObjects.forEach(function (obj) {
        if (obj.id) {
            console.log(obj.id);
            tmpArray.push(obj.id);
        }
        if (obj.children instanceof Array) {
            Task2(obj.children);
        }
    })
    return tmpArray;
}

const obj = [
    {
        id: 1,
        value: "raime",
        children: []
    },
    {
        id: 2,
        value: "sxva ragac",
        children: [
            {
                id: 3,
                value: "kidev sxva ragac",
                children: []
            }
        ]
    }
]
console.log( Task2(obj));