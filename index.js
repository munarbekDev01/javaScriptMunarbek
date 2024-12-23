// Вам дана функция checkTask, принимающая массив arr с числами. Используя метод reduce(), вычтите числа в массиве начиная с начала и выведите в консоль результат.
// Например:
// checkTask( [175, 50, 25])
// Вывод:
// 100

// Дана функция checkTask(arr) которая принимает массив c числами. При помощи метода reduce необходимо вернуть новый массив без дубликатов.

// Пример: Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]. Результат: [18, 21, 1, 51, 5, 7, 10]
// let arr = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// function checkTask(ban) {

//     return ban.reduce((acc, el) => {
//         if (acc.includes(el)) {
//            null
//         } else {
//             acc.push(el);
//         }
//         return acc;
//     }, [])

//   }

//   console.log(checkTask(arr));

// }

// console.log(checkTask(arr));

// return ban.reduce((acc, curr) => {

//     if (!acc.includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);

// Задание 3
// Напишите функцию checkTask(arr), принимающая в аргументы массив с числами.
// Функция должна найти самое часто повторяющееся число и вывести в консоль это число.
// Например, для массива:
// [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]
// Вывод будет:
// 5
// function checkTask(arr) {
//     const countMap = {};  // Объект для хранения количества повторений каждого числа

//     // Подсчитываем количество повторений каждого числа
//     for (const num of arr) {
//         if (countMap[num]) {
//             countMap[num] += 1;
//         } else {
//             countMap[num] = 1;
//         }
//     }

//     // Переменные для хранения наиболее часто встречающегося числа и его количества
//     let mostFrequentNum = null;
//     let maxCount = 0;

// Ищем число с максимальным количеством повторений
//     for (const num in countMap) {
//         if (countMap[num] > maxCount) {
//             maxCount = countMap[num];
//             mostFrequentNum = num;
//         }
//     }

//     console.log(mostFrequentNum);
// }

// Пример использования
// checkTask([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]);  // Выведет 5

// function task1 (arr) {
//     return arr.reduce((acc, el) => {
//         if (!acc.includes(el)) {
//             acc.push(el)
//         }
//         return acc;
//     }, [])
// }

// console.log(task1(arr2));

// 1. Сортировка строк по количеству гласных
// Напишите функцию, которая принимает массив строк и сортирует его по количеству гласных в каждой строке.

// let randomStrings = [
//   "apple",
//   "orange",
//   "banana",
//   "kiwi",
//   "strawberry",
//   "blueberry",
//   "pineapple",
//   "grapefruit",
//   "watermelon",
//   "peach",
//   "cherry",
//   "mango",
//   "coconut",
//   "papaya",
//   "fig",
//   "lychee",
//   "pomegranate",
//   "raspberry",
//   "blackberry",
//   "apricot",
// ];

// let verbs = ["a", "e", "i", "o", "u"];

// function task1 (arr, arr2) {
//     return arr.sort((a,b) => {
//         const counter = (str) => [...str.toLowerCase()].reduce((acc, el) => acc + (arr2.includes(el) ? 1 : 0), 0)
//         return counter(a) - counter(b)
//     })
// }

// console.log(task1(randomStrings, verbs));

// function task1(arr, arr2) {
//     return arr.map((el) => {
//         let count = 0;
//         for (let char of el) {
//             if (arr2.includes(char.toLowerCase())) {
//                 count++;
//             }
//         }
//         return {
//             string: el,
//             vowels: count,
//         };
//     }).sort((a, b) => b.vowels - a.vowels)
// }

// function task1  (arr, arr2) {
//     return arr.sort((a, b) => {
//         const counter = (str) => [...str.toLowerCase()].reduce((acc, el) => acc + (arr2.includes(el) ? 1 : 0) , 0)
//         return counter(b) - counter(a)
//     })
// }

// console.log(task1(randomStrings, verbs));

// 2. Анализ строки
// Дана строка, содержащая разные символы. Напишите программу, которая подсчитывает количество букв, цифр и специальных символов.

// const inputString = "1ыдвлат11Hello123!@#World456";

// function task2(arr) {
//   let numbers = 0;
//   let special = 0;
//   let alfavits = 0;

//   for (let char of arr) {
//     if (/[a-zA-z]/.test(char)) {
//       alfavits++;
//     } else if (/[0-9]/.test(char)) {
//       numbers++;
//     } else if (/[а-яА-я]/.test(char)) {
//       alfavits++;
//     } else {
//       special++;
//     }
//   }
//   return {
//     alfavits,
//     numbers,
//     special,
//   };
// }
// console.log(task2(inputString));

// function task2(str) {
//  let alfavit = 0
//  let number = 0
//  let specialChar = 0

//  for (const char of str) {
//     if(/[a-zA-z]/.test(char)) {
//         alfavit++
//     } else if (/[0-9]/.test(char)) {
//         number++
//     } else if (/[а-яА-я]/.test(char)) {
//         alfavit++
//     } else {
//         specialChar++
//     }
//  }

//  return {
//      alfavit,
//      number,
//      specialChar
//  }

// }

// console.log(task2(inputString));

// 3. Рекурсивное обращение массива
// Реализуйте функцию для переворота массива с использованием рекурсии.

// function reverseArray(arr, start = 0, end = arr.length - 1) {

// function task3(arr) {
//     if(arr.length <= 1) {
//         return arr
//     }

//     return [arr[arr.length - 1]].concat(task3(arr.slice(0, arr.length- 1)))
// }

// console.log(task3(array));

// function reverseArray(arr) {
//   // Базовый случай: если массив пустой или состоит из одного элемента, он уже перевёрнут
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Рекурсивный случай:
//   // Берём последний элемент и соединяем его с перевёрнутой оставшейся частью массива
//   return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, arr.length - 1)));
// }

// // Пример использования:
// const array = [1, 2, 3, 4, 5];
// const reversed = reverseArray(array);
// console.log(reversed); // [5, 4, 3, 2, 1]

// for (let i = 0; i =< 10; i++) {
//     console.log(i);
// }

// let i = 0
// while (i < 100) {
//     console.log(i++);
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// for (const val of obj) {
//     console.log(val);
// }

// 4. Поиск пропущенного числа
// В массиве чисел от 1 до N отсутствует одно число. Найдите его за O(n).

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function task4(params) {
//   let uniqNum = params[params.length - 1]
//   for (let i = 1; i <= uniqNum; i++) {
//     if (!params.includes(i)) {
//       return i;
//     }
//   }
// }
// console.log(task4(numbers));

// 5. Уникальные значения в матрице
// Напишите функцию, которая возвращает все уникальные значения двумерного массива.

// function task5(matrix) {
//   return matrix.reduce((acc, el) => {
//     el.forEach((item) => {
//       if (!acc.includes(item)) {
//         acc.push(item)
//       }
//     })
//     return acc
//   })
// }
// const matrix = [
//   [1, 2, 3,1],
//   [4, 2, 5,1],
//   [6, 3, 1,1],
// ];

// console.log(task5(matrix));

// let array2 = [1,2,3,4,5,5,3,7,1,6,5,6,9,9,8]

// function task5(arr) {
//     return arr.reduce((acc, el) => {
//       if (!acc.includes(el)) {
//         acc.push(el);
//       }
//       return acc;
//     }, [])

// }

// console.log(task5(array2));

// 6. Функция вычисления факториала
// Реализуйте функцию, которая вычисляет факториал числа, используя итерацию и рекурсию. Сравните производительность.

// function task6(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * task6(num - 1);

// }
// console.log(task6(number));

// 7. Числа Фибоначчи
// Напишите функцию, которая возвращает N-е число Фибоначчи. Решите с использованием рекурсии и мемоизации.

// function task7(n, memo = {}) {

//   // if (n in memo) return memo[n];

//   if (n === 0) {return 0}
//   if (n === 1) {return 1}

//   return (memo[n] = task7(n - 1, memo) + task7(n - 2, memo));
// }

// console.log(task7(30));

// console.log(task7(10));
// console.log(task7(20));
// 8. Сбалансированные скобки
// Проверьте, являются ли скобки в строке сбалансированными ({}, [], ()).

// function isBalancedBrackets(str) {
//   const stack = [];
//   const brackets = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   for (const char of str) {
//     if (Object.values(brackets).includes(char)) {
//       // Если это открывающая скобка, добавляем её в стек
//       stack.push(char);
//     } else if (Object.keys(brackets).includes(char)) {
//       // Если это закрывающая скобка
//       if (stack.pop() !== brackets[char]) {
//         return false; // Скобки не сбалансированы
//       }
//     }
//   }

//   // Если стек пуст, скобки сбалансированы
//   return stack.length === 0;
// }

// // Примеры:
// console.log(isBalancedBrackets("{}")); // true
// console.log(isBalancedBrackets("{[()]}")); // true
// console.log(isBalancedBrackets("({[)]}")); // false
// console.log(isBalancedBrackets("({})"));   // true
// console.log(isBalancedBrackets("{[}"));    // false

// 9. Перемешивание массива
// Создайте функцию, которая случайным образом перемешивает элементы массива.

// function shuffleArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     // Генерируем случайный индекс от 0 до i
//     const randomIndex = Math.floor(Math.random() * (i + 1));

//     // Меняем элементы местами
//     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//   }
//   return arr;
// }

// // Пример использования:
// const array = [1, 2, 3, 4, 5];
// console.log(shuffleArray(array)); // Пример: [3, 5, 1, 4, 2]

// 10. Игра "Жизнь"
// Реализуйте следующий шаг "игры жизни" Джона Конвея для двумерного массива.

// function nextGeneration(board) {
//   const rows = board.length;
//   const cols = board[0].length;

//   // Функция для подсчета живых соседей
//   function countLiveNeighbors(x, y) {
//     let liveNeighbors = 0;
//     const directions = [
//       [-1, 0], [1, 0], [0, -1], [0, 1], // вертикальные и горизонтальные
//       [-1, -1], [-1, 1], [1, -1], [1, 1] // диагонали
//     ];

//     directions.forEach(([dx, dy]) => {
//       const newX = x + dx;
//       const newY = y + dy;
//       if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && board[newX][newY] === 1) {
//         liveNeighbors++;
//       }
//     });

//     return liveNeighbors;
//   }

//   // Новый массив для следующего поколения
//   const newBoard = Array.from({ length: rows }, () => Array(cols).fill(0));

//   // Обрабатываем каждую клетку
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const liveNeighbors = countLiveNeighbors(i, j);

//       if (board[i][j] === 1) {
//         // Если клетка живая и у нее 2 или 3 соседа — она остается живой
//         if (liveNeighbors === 2 || liveNeighbors === 3) {
//           newBoard[i][j] = 1;
//         }
//       } else {
//         // Если клетка мертвая и у нее 3 соседа — она становится живой
//         if (liveNeighbors === 3) {
//           newBoard[i][j] = 1;
//         }
//       }
//     }
//   }

//   return newBoard;
// }

// // Пример использования:
// const board = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1]
// ];

// console.log(nextGeneration(board));
// Пример результата:
// [
//   [0, 0, 0],
//   [1, 1, 1],
//   [0, 1, 1]
// ]

// 11. Алгоритм "Поиск слов"
// Дан массив букв и набор слов. Найдите все слова, которые можно составить из массива букв.

// function canFormWord(word, letterCounts) {
//   const wordCounts = {};
//   for (const letter of word) {
//     wordCounts[letter] = (wordCounts[letter] || 0) + 1;
//   }

//   for (const letter in wordCounts) {
//     if (wordCounts[letter] > (letterCounts[letter] || 0)) {
//       return false; // Если букв недостаточно, слово не можем составить
//     }
//   }

//   return true; // Если все буквы есть в достаточном количестве
// }

// function findWordsFromLetters(letters, words) {
//   // Считаем количество каждой буквы в массиве letters
//   const letterCounts = {};
//   for (const letter of letters) {
//     letterCounts[letter] = (letterCounts[letter] || 0) + 1;
//   }

//   // Фильтруем все слова, которые можно составить
//   return words.filter(word => canFormWord(word, letterCounts));
// }

// // Пример использования:
// const letters = ['a', 'b', 'c', 'a', 'd', 'e'];
// const words = ['ab', 'abc', 'aed', 'bad', 'be', 'cafe', 'dab'];

// console.log(findWordsFromLetters(letters, words));
// Пример результата: ['ab', 'abc', 'aed', 'bad', 'be', 'dab']

// 12. Подсчет подстрок
// Напишите функцию, которая подсчитывает, сколько раз подстрока встречается в строке.

// function countSubstrings(str, substring) {
//   let count = 0;
//   let position = 0;

//   // Ищем подстроку в строке
//   while ((position = str.indexOf(substring, position)) !== -1) {
//     count++;
//     position += substring.length; // Сдвигаем позицию, чтобы искать дальше
//   }

//   return count;
// }

// // Пример использования:
// const str = 'ababcabcabcab';
// const substring = 'abc';

// console.log(countSubstrings(str, substring)); // Пример результата: 4

// 13. Палиндром
// Проверьте, является ли заданная строка или число палиндромом.

// function isPalindrome(input) {
//   // Преобразуем вход в строку, чтобы можно было работать с ним
//   const str = input.toString();

//   // Сравниваем строку с ее перевернутой версией
//   return str === str.split('').reverse().join('');
// }

// // Пример использования:
// console.log(isPalindrome('racecar')); // true
// console.log(isPalindrome(12321));    // true
// console.log(isPalindrome('hello'));  // false
// console.log(isPalindrome(12345));   // false

// 14. Распаковка строки
// Дана строка вида 3[a]2[bc]. Преобразуйте её в aaabcbc.

// function decodeString(s) {
//   const stack = [];
//   let currentNum = 0;
//   let currentStr = '';

//   for (let char of s) {
//     if (char === '[') {
//       // Сохраняем текущую строку и число
//       stack.push({ currentStr, currentNum });
//       // Сброс текущей строки и числа
//       currentStr = '';
//       currentNum = 0;
//     } else if (char === ']') {
//       // Когда встречаем закрывающую скобку, восстанавливаем строку
//       const { currentStr: prevStr, currentNum: num } = stack.pop();
//       currentStr = prevStr + currentStr.repeat(num);
//     } else if (/\d/.test(char)) {
//       // Читаем число
//       currentNum = currentNum * 10 + parseInt(char);
//     } else {
//       // Добавляем символ в текущую строку
//       currentStr += char;
//     }
//   }

//   return currentStr;
// }

// // Пример использования:
// console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
// console.log(decodeString('3[a2[c]]'));  // "accaccacc"
// console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdccdef"

// 15. Перевод числа в двоичную систему
// Напишите функцию, которая принимает число и возвращает его представление в двоичной системе.

// function toBinary(num) {
//   let binary = '';
//   while (num > 0) {
//     binary = (num % 2) + binary;  // Сохраняем остаток (0 или 1)
//     num = Math.floor(num / 2);    // Делим число на 2
//   }
//   return binary || '0';  // Если число было 0, возвращаем '0'
// }

// // Пример использования:
// console.log(toBinary(5));  // "101"
// console.log(toBinary(10)); // "1010"
// console.log(toBinary(255)); // "11111111"

// 16. Максимальная сумма подмассива
// Реализуйте алгоритм Кадане для поиска максимальной суммы непрерывного подмассива.

// function maxSubArray(nums) {
//   let max_current = nums[0];  // Максимальная сумма подмассива, заканчивающегося на текущем элементе
//   let max_global = nums[0];   // Глобальная максимальная сумма

//   for (let i = 1; i < nums.length; i++) {
//     // Сравниваем сумму текущего элемента с текущей максимальной суммой
//     max_current = Math.max(nums[i], max_current + nums[i]);

//     // Обновляем глобальную максимальную сумму
//     max_global = Math.max(max_global, max_current);
//   }

//   return max_global;
// }

// // Пример использования:
// console.log(maxSubArray([1, -2, 3, 4, -1, 2, 1, -5, 4]));  // 9 (Сумма подмассива [3, 4, -1, 2, 1])
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6 (Сумма подмассива [4, -1, 2, 1])
// console.log(maxSubArray([-1, -2, -3, -4]));  // -1 (Максимальная сумма для отрицательных чисел)

// 17. Числа Армстронга
// Напишите программу, которая проверяет, является ли число числом Армстронга.

// function isArmstrong(num) {
//   // Преобразуем число в строку, чтобы получить его цифры
//   const numStr = num.toString();
//   const numDigits = numStr.length;

//   // Суммируем степени цифр
//   const sum = numStr.split('').reduce((acc, digit) => {
//     return acc + Math.pow(Number(digit), numDigits);
//   }, 0);

//   // Проверяем, совпадает ли сумма с числом
//   return sum === num;
// }

// Пример использования:
// console.log(isArmstrong(153));  // true
// console.log(isArmstrong(9474)); // true
// console.log(isArmstrong(123));  // false
// console.log(isArmstrong(370));  // true
// console.log(isArmstrong(371));  // true

// 18. Игра "Угадай число"
// Реализуйте игру, где компьютер загадывает число от 1 до 100, а пользователь должен его угадать. Программа должна давать подсказки "больше" или "меньше".

// function guessNumberGame() {
//   const secretNumber = Math.floor(Math.random() * 100) + 1;  // Генерируем случайное число от 1 до 100
//   let attempts = 0;
//   let guess;

//   console.log("Я загадал число от 1 до 100. Попробуй угадать!");

//   while (true) {
//     guess = prompt("Введите ваше предположение:");

//     // Проверяем, является ли введенное значение числом
//     if (isNaN(guess)) {
//       console.log("Пожалуйста, введите число.");
//       continue;
//     }

//     guess = Number(guess);  // Преобразуем строку в число
//     attempts++;  // Увеличиваем количество попыток

//     if (guess < secretNumber) {
//       console.log("Мое число больше.");
//     } else if (guess > secretNumber) {
//       console.log("Мое число меньше.");
//     } else {
//       console.log(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток.`);
//       break;  // Завершаем игру
//     }
//   }
// }

// Запускаем игру
// guessNumberGame();

// 19. Реализация стека
// Напишите реализацию стека на основе массива с методами push, pop, peek, isEmpty.

// class Stack {
//   constructor() {
//     this.items = [];  // Массив для хранения элементов стека
//   }

//   // Метод добавления элемента в стек
//   push(item) {
//     this.items.push(item);
//   }

//   // Метод удаления и возврата верхнего элемента стека
//   pop() {
//     if (this.isEmpty()) {
//       console.log("Стек пуст.");
//       return undefined;
//     }
//     return this.items.pop();
//   }

//   // Метод получения верхнего элемента без удаления
//   peek() {
//     if (this.isEmpty()) {
//       console.log("Стек пуст.");
//       return undefined;
//     }
//     return this.items[this.items.length - 1];
//   }

//   // Метод проверки, пуст ли стек
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Метод для получения размера стека
//   size() {
//     return this.items.length;
//   }

//   // Метод для очистки стека
//   clear() {
//     this.items = [];
//   }
// }

// // Пример использования стека:
// const stack = new Stack();

// // Добавляем элементы
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek());  // 30
// console.log(stack.size());  // 3

// // Убираем верхний элемент
// console.log(stack.pop());   // 30
// console.log(stack.peek());  // 20

// // Проверяем, пуст ли стек
// console.log(stack.isEmpty()); // false

// // Очищаем стек
// stack.clear();
// console.log(stack.isEmpty()); // true

// 20. Разделение массива
// Дан массив целых чисел. Разделите его на два подмассива так, чтобы сумма элементов в каждом была максимально близка.

// function splitArray(arr) {
//   const totalSum = arr.reduce((acc, val) => acc + val, 0);  // Сумма всех элементов массива
//   const target = Math.floor(totalSum / 2);  // Идеальная цель для каждой из частей (половина суммы)

// Динамическое программирование для поиска максимальной суммы, которая не превышает target
//   const dp = Array(target + 1).fill(false);
//   dp[0] = true;  // Сумма 0 всегда возможна (пустой подмассив)

//   // Заполняем таблицу dp
//   for (const num of arr) {
//     for (let i = target; i >= num; i--) {
//       dp[i] = dp[i] || dp[i - num];
//     }
//   }

//   // Ищем наибольшую возможную сумму, которая не больше target
//   let closestSum = 0;
//   for (let i = target; i >= 0; i--) {
//     if (dp[i]) {
//       closestSum = i;
//       break;
//     }
//   }

//   // Разделяем массив на два подмассива
//   const firstSubset = [];
//   const secondSubset = [];
//   let remainingSum = closestSum;

//   // Восстанавливаем первый подмассив
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (remainingSum >= arr[i] && dp[remainingSum - arr[i]]) {
//       firstSubset.push(arr[i]);
//       remainingSum -= arr[i];
//     } else {
//       secondSubset.push(arr[i]);
//     }
//   }

//   return [firstSubset, secondSubset];
// }

// // Пример использования:
// const arr = [1, 2, 3, 9];
// const [subset1, subset2] = splitArray(arr);

// console.log("Первый подмассив:", subset1);  // Например: [1, 9]
// console.log("Второй подмассив:", subset2);  // Например: [2, 3]
// 351. Проверить, все ли значения объекта являются числами////////////////////////////////////////////////
// let obj = {a: 2343, b: 56, c: 234}
// console.log(Object.values(obj).every((el)=> typeof el === 'number'));

// 352. Посчитать количество пробелов в строке.////////////////////////////////////////////////////////////
// let str = 'hello kyaz hello'
// console.log(str.split(' ').length -1);

// 353. Вывести каждый третий элемент массива./////////////////////////////////////////////////////////////
// let arr = [1,2,3,4,5,6,7,8,9]
// for (let i = 2; i <= arr.length; i += 3) {
//     console.log(arr[i]);
// }

// 354. Вывести все числа от 10 до 1 в обратном порядке.///////////////////////////////////////////////////
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 355. Проверить, все ли значения массива являются строками.//////////////////////////////////////////////
// let obj = {a: '2343', b: '23', c: '234'}
// console.log(Object.values(obj).every((el)=> typeof el === 'string'));

// 356. Выведите столбец чисел от 1 до 50./////////////////////////////////////////////////////////////////
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// 357. Создайте переменную с пустым массивом, заполните массив 10-ю элементами////////////////////////////
// X с помощью цикла.
// let arr = []
// for (let i = 1; i <= 10; i++) {
//     arr.push('X')
// }
// console.log(arr);

// 360. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.//////////////////////////////////
// for (let i = 2; i <= 100; i  += 2) {
//   console.log(i);
// }
// 361. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.//////////////////////////////
// let num = [];
// for (let i = 1; i < 100; i++) {
//   num.push(i);
// }
// console.log(num.reduce((acc, el) => acc + el));
// 362. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму/////////////////////
// элементов этого массива. Запишите ее в переменную result.
// const array = [2, 4, 5, 6, 8];
// const result = [];
// for (i of array) {
//   result.push(i);
// }
// console.log(result.reduce((acc, el) => acc + el));
// 363. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите ///////////////////
//на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// const array = [1, 3, 4, 6, 12, 3, 5];
// for (i of array) {
//   if (i > 3 && i < 10) {
//     console.log(i);
//   }
// }
// 364. Вам дан массив с числами. Числа могут быть положительными и отрицательными.////////////////////////
// Найдите сумму положительных элементов массива.
// const array = [-12, 12, -10, 12];
// console.log(
//   array.reduce((acc, el) => {
//     for (i of array) {
//       if (!i < 0) {
//         acc + el
//       }
//     }
//     return acc;
//   }, 0)
// );

// 365. Вам дан массив с числами [5, 1,  3, 7, 6, 15, 3, 20]. С помощью цикла for и/////////////////////////
// оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть -
// выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const array = [5, 1, 3, 7, 6, 15, 4, 3, 20];
// const res = [];
// for (i of array) {
//   if (i === 4) {
//     res.push("есть!");
//   }
// }
// console.log(res.join());

// 366. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только //////////////////////
//те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000];
// let res = arr.filter((el) => {
//   let str = String(el)[0];
//   return str === "1" || str === "2" || str === "5";
// });
// console.log(res);
// 367. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for //////////////////////
// создайте строку '-1-2-3-4-5-6-7-8-9-'.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = "-" + arr[i];
// }

// console.log(arr.join("") + "-"); // '-1-2-3-4-5-6-7-8-9-'

// 368. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не//////////////////////
// станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
//для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let num = 0;

// while (n >= 50) {
//   n /= 2;
//   num++;
// }

// console.log(`Результат: ${n}`);
// console.log(`Количество итераций: ${num}`);

// 369. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его////////////////////
// элементов (сумма элементов, делить на количество).

// const arrs = [1, 2, 3, 7, 6, 9];
// const sum = arrs.reduce((acc, num) => acc + num, 0);
// const average = sum / arrs.length;
// console.log(`Среднее арифметическое: ${average}`);

// 370. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов//////////////////
// элементов этого массива.

// const arrt = [1, 2, 3, 4, 5];
// const res = [];
// for (i of arrt) {
//   res.push(i ** 2);
// }

// console.log(res);

// 371. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла //////////////////
//выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// const arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// const res = [];
// for (i of arr) {
//   if (i > 0 && i < 10) {
//     res.push(i);
//   }
// }
// console.log(res);

// 372. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами////////////////////
// от 1 до 10 с помощью цикла.
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(arr);
// 373. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000./////////////////////////////////////
// let sum = 0;

// for (let i = 1; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }

// console.log("Сумма:", sum);

// 374. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].///////////
//Создайте цикл, который выводит нечетные числа, которые больше 10.
// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for(i of arr) {
//   if (i >10) {
//     if (i / 2 !== Math.round(i / 2)) {
//       console.log(i);
//     }
//   }
// }
// 375. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр./////////////////////
// let str = "jzvzszrzpz";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (i % 2 !== 0) {
//     result += str[i].toUpperCase(); // Вторая буква — в верхний регистр
//   } else {
//     result += str[i]; // Оставить как есть
//   }
// }

// console.log(result);

// 376. Подсчет количества пробелов в строке: let str = "Это строка с пробелами";//////////////////////////

// 377. Дан массив с объектами: ///////////////////////////////////////////////////////////////////////////
// [
// {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
// {mark: 'Audi', year: 1996, price: 2500, sale: 0},
// {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
// {mark: 'BMW', year: 2015, price: 18000, sale: 0},
// {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ];
// Задача: на все автомобили, которые старше 2007 года, поставить скидку 20%
//(используйте свойство 'sale').

// 378. Создайте функцию checkTask(arr), которая принимает массив строк и возвращает///////////////////////
// новый массив, содержащий только первые и последние буквы каждой строки.
// Пример: ['hi', 'goodbye', 'smile'] --> ['hi', 'ge', 'se'].

// 379. Добавить длину слов, разделенных пробелом, в конце каждого слова и ////////////////////////////////
//вернуть новый массив.
// Пример: "apple ban" --> ["apple 5", "ban 3"].

// 380. Вывод чисел в диапазоне от 1 до 100 с шагом 2./////////////////////////////////////////////////////

// 381. Вывод таблицы умножения для числа 5.///////////////////////////////////////////////////////////////

// 382. Копирование массива: const originalArray = [1, 2, 3];//////////////////////////////////////////////

// 383. Объединение массивов: /////////////////////////////////////////////////////////////////////////////
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// 384. Добавление элементов в массив: ////////////////////////////////////////////////////////////////////
// const originalArray = [1, 2, 3]; // Ожидаемый результат: [1, 2, 3, 4, 5]

// 385. Копирование объекта:///////////////////////////////////////////////////////////////////////////////
// const originalObject = { name: "John", age: 30 };

// 386. Добавление свойств к объекту://////////////////////////////////////////////////////////////////////
// const originalObject = { name: "John" }; // Ожидаемый результат:
// { name: "John", age: 30 }

// 387. Вывести длину первого слова: //////////////////////////////////////////////////////////////////////
// let str = 'Nevis ITDB TECH';

// 388. Извлечь слово 'УЖАСНО' из строки://////////////////////////////////////////////////////////////////
// let str = 'Максимально УЖАСНО';

// 389. Вывести слово 'максимально' в верхнем регистре:////////////////////////////////////////////////////
// let str = 'максимально УЖАСНО';

// 390. Используя метод slice, вывести 'мально Ужасно':////////////////////////////////////////////////////
// let str = 'Максимально Ужасно';

// 391. Получить букву 'У' через метод charAt//////////////////////////////////////////////////////////////
// let str = 'Максимально Ужасно';

// 392. Соединить строки методом concat:///////////////////////////////////////////////////////////////////
// let str1 = 'Максимально';
// let str2 = 'Ужасно';

// 393. Проверить, встречается ли буква 'а' более одного раза://///////////////////////////////////////////
// let str = "Максимально Ужасно";

// 394. Преобразовать первую букву строки в верхний регистр:///////////////////////////////////////////////
// let str = 'макСИМАЛЬНО ужаСНО';

// 395. Найти индекс первого вхождения буквы 'а////////////////////////////////////////////////////////////
// let str = 'Максимально Ужасно';

// 396. Найти индекс последнего вхождения буквы 'о':///////////////////////////////////////////////////////
// let str = 'Максимально Ужасно';

// 397. Вырезать слово 'bbb' тремя способами (substr, substring, slice):///////////////////////////////////
// let str = 'aaa bbb ccc';

// 398. Определить буквенное значение оценки на основе среднего балла./////////////////////////////////////
// Условия:
// 90 <= оценка <= 100 --> "A",
// 80 <= оценка < 90 --> "B",
// 70 <= оценка < 80 --> "C",
// 60 <= оценка < 70 --> "D",
// 0 <= оценка < 60 --> "F".

// 399. Отсортировать строки в лексикографическом порядке://///////////////////////////////////////////////
// let fruits = ["banana", "apple", "cherry", "date"];

// 400. Найти элемент массива по индексу 2:////////////////////////////////////////////////////////////////
// let numbers = [10, 20, 30, 40, 50];

// 401. Найти первый элемент больше 25 в массиве://////////////////////////////////////////////////////////
// let numbers = [10, 20, 30, 40, 50];

// 402. Разделить строку по запятой в массив://////////////////////////////////////////////////////////////
// let items = "apple, banana, cherry, date";
// 403. Извлечь числа из строки, разделенной запятыми://///////////////////////////////////////////////////
// Пример: "10,20,30" --> [10, 20, 30].
// const str = "10, 20 ,30";
// function str2(str) {
//   let res = str.split(",");
//   return res.map((el) => +el);
// }
// console.log(str2(str));

// 404. Форматировать время в "часы:минуты:секунды":///////////////////////////////////////////////////////
// Вход: часы, минуты, секунды.
// 405. Объединить номера телефонов в строку через запятую:////////////////////////////////////////////////
// let phoneNumbers = [123456789, 987654321];
// let phoneNumbers = [123456789, 987654321];
// console.log(phoneNumbers.join(", "));
// 406. Создать строку из массива строк, где первая буква каждого//////////////////////////////////////////
// элемента заглавная:
// Пример: ['apple', 'banana'] --> "Apple Banana".
// const arr = ['apple', 'banana']
// console.log(arr.map((el) => {
// return el[0].toUpperCase() + el.slice(1) }));
// 407. Объединить элементы массива через разделитель с reduce/////////////////////////////////////////////
// let items = ["apple", "banana", "cherry"];
// console.log(items.reduce((acc ,el) => acc + ", " + el));
// 408. Сумма чисел массива:///////////////////////////////////////////////////////////////////////////////
// let arr = [5, 15, 315, 2, 13, 20, 9];
// console.log(arr.reduce((acc, el) => acc + el));
// 409. Сумма четных чисел массива:////////////////////////////////////////////////////////////////////////
// let arr = [5, 12, 314, 2, 13, 20, 9];
// console.log(arr.reduce((acc, el) => {
// return el / 2 === Math.round(el / 2) ? acc + el : acc }));
// 410. Сумма чисел больше 10://///////////////////////////////////////////////////////////////////////////
// let arr = [5, 15, 315, 2, 13, 20, 9];
// console.log(arr.reduce((acc, el) => {
// return el > 10 ? acc + el : acc }));
// 411. Разность чисел больше 10:
// let arr = [3, 13, 54, 15, 335, 39];
// console.log(arr.reduce((acc,el) => el > 10 ? acc - el : acc));
// 412. Длина строки из массива строк:
// let arr = ['Аскар', 'Баяман', 'Калмамат'];
// for(i of arr) {
// console.log(i.length)}
// 413. Переместить все нули в конец массива, сохраняя порядок ////////////////////////////////////////////
//остальных элементов:
// let arr = [2, 0, 4, 3, 0, 0, 65, 6, 5, 3];
// console.log(arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0)));
// 414. Преобразовать число в перевернутый массив цифр:////////////////////////////////////////////////////
// Пример: 35231 --> [1, 3, 2, 5, 3].

// 415. Найти самое длинное слово в строке:
// cons t str = "I am a Megalodon oceans feeling like a pond";
// console.log(
//   str.split(" ").reduce((acc, el) => {
//     return acc.length < el.length ? el : acc;
//   })
// );

// №1
// Напишите стрелочную функцию convertStr, которая принимает строку вида 'var_text_hello'.
// Сделайте из него текст 'varTextHello'.
// Например:
// console.log(convertStr('hello_world')
// Вывод:
// // 'helloWorld'
// const convertStr = (str) => {return str.split("_").map((el, idx) => (idx !== 0 ? el[0].toUpperCase() + el.slice(1) : el)).join("")}
// console.log(convertStr("var_text_hello"));
// №2
// Напишите стрелочную функцию findFirstNotRepeatedChar,
// чтобы найти первый неповторяющийся символ.
// Например:
// console.log(findFirstNotRepeatedChar('фывфавыапрс'));
// Вывод:
// п

// const findFirstNotRepeatedChar = (str) => {
//   for (i of str) {
//     if (str.indexOf(i) === str.lastIndexOf(i)) {
//       return "найден : " + i;
//     }
//   }
//   return " ничего не найдено";
// };
// console.log(findFirstNotRepeatedChar("фывфавыап"));

// №3
// Напишите функцию checkTask(nums), которая будет возвращать массив, в котором для каждого из
// чисел исходного массива nums указано количество чисел меньше данного числа.
// К примеру, для массива [8,1,2,2,3], функция должна возвратить:
// [4,0,1,1,3]
// const arr = [8, 1, 2, 2, 3, 1];
// console.log(arr.map((el) => arr.filter((item) => el > item).length));

// Строки:
// Преобразование строки "helloWorld" в "hello_world": "helloWorld"
// const toSnakeCase = (str) => str.split(/(?=[A-Z])/).join("_").toLowerCase()
// console.log(toSnakeCase("helloWorld"));

// Переворот слов в строке: "Привет мир как дела"
// const str = "Привет мир как дела"
// console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
// Проверка на палиндром: "радар"
// const str = "радар"

// if (str.split("").reverse().join("") === str) {
//     console.log("да это палиндром слово ");
// } else {
//     console.log("нет это не палиндром слово");
// }

// Преобразование первой буквы каждого слова в заглавную: "я люблю программировать"
// const str = "я люблю программировать"
// console.log(str.split(" ").map((el) => el[0].toUpperCase() + el.slice(1)).join(" "));
// Удаление гласных из строки: "программирование это круто"

// Массивы:
// Найдите второй по величине элемент: [10, 5, 8, 20, 15]
// const arr = [20, 10, 5, 8, 20, 17, 15];
// const max = Math.max(...arr);
// const secondMax = Math.max(...arr.filter((el) => el !== max));
// console.log(secondMax);

// Удалите дубликаты: [1, 2, 3, 2, 4, 5, 1, 6]
// const arr = [1, 2, 3, 2, 4, 5, 1, 6];
// console.log(
//   arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }
//     return acc;
//   }, [])
// );
// // Отсортируйте массив строк по длине: ["apple", "kiwi", "banana", "cherry"]
// const arr = ["apple", "kiwi", "banana", "cherry"]
// console.log(arr.sort((a, b) =>b.length - a.length ));

// Сложите четные числа: [4, 7, 2, 9, 8, 5, 10]
// const arr = [4, 7, 2, 9, 8, 5, 10]
// console.log(arr.reduce((acc, el) => {
//     return Math.round( el / 2) === el / 2 ? acc + el : acc
// }));

// Подсчитайте уникальные элементы: [2, 2, 3, 4, 5, 6, 6, 7]
// const arr = [2, 2, 3, 4, 5, 6, 6, 7];
// const res = new Set(arr)
// console.log([...res].length);

// Числа:
// // Проверка на простое число: 17
// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return "Найден делитель, число не простое"
//       }
//     }
//     return " Делителей не найдено, число простое"
//   }

//   console.log(isPrime(822222222222222324234234234234324237));  // true

// Найдите сумму цифр числа: 5823

// НОД двух чисел: 36 и 60
// function gcd(a, b) {
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }

//   console.log(gcd(24, 36));  // 12

// Проверка на палиндром числа: 12321
// const  num = 12321
// console.log(String(num).split("").reverse().join("") === String(num));
// Перевод числа в двоичную систему: 42
// function huyo(num) {
//   if (num < 0) return "0";
//   let binary = [];
//   while (num > 0) {
//     binary.push(num % 2);
//     num = Math.floor(num / 2);
//   }
//   return binary.reverse().join("");
// }
// console.log(huyo(42));

// Объекты:
// Найдите ключ с максимальным значением: { a: 10, b: 25, c: 15, d: 30 }
// const obj = { a: 10, b: 25, c: 15, d: 30 };

// function objf(params) {
//   let maxKey = null;
//   let maxValue = null;

//   for (const key in params) {
//     if (params[key] > maxValue) {
//       maxValue = params[key];
//       maxKey =`${key} : ` + params[key]
//     }
//   }

//   return maxKey;
// }

// console.log(objf(obj));

// // Переверните ключи и значения: { name: "Alex", age: 25, country: "USA" }

// const obj = { name: "Alex", age: 25, country: "USA" }

// function reversing(params) {
//   const reversed = {};
//   for (let key in params) {
//     if (params.hasOwnProperty(key)) {
//       reversed[params[key]] = key;
//     }
//   }
//   return reversed;
// }

// function reversing(params) {
//   const reversed = {};
//   for (let key in params) {
//     reversed[params[key]] = key;
//   }
//   return reversed;
// }

// console.log(reversing(obj));

// Сравните два объекта: { a: 1, b: 2 } и { b: 2, a: 1 }
// const obj1 = { a: 2, b: 2 };
// const obj2 = { b: 2, a: 2 };
// function soming(params1, params2) {
//   if (Object.keys(params1).length !== Object.keys(params2).length) {
//     return false;
//   }

//   for (let key in params1) {
//     if (params1[key] !== params2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(soming(obj1, obj2));

// Сгруппируйте элементы по свойству:
// javascript
// Копировать код
// const arrWithObj = [
//   { name: "Alex", group: "A" },
//   { name: "Ben", group: "B" },
//   { name: "Chris", group: "A" },
//   { name: "David", group: "C" },
// ];

// function grouping(params) {
//   return params.sort((a, b) => a.group.localeCompare(b.group))
// }

// console.log(grouping(arrWithObj));

// const arrWithObj = [
//   { name: "Alex", group: "A" },
//   { name: "Ben", group: "B" },
//   { name: "Chris", group: "A" },
//   { name: "David", group: "C" },
//   { name: "David", group: "D" },
// ];

// function grouping(params) {
//   return params.reduce((acc, el) => {
//     if (!acc[el.group]) {
//       acc[el.group] = [];
//     }
//     acc[el.group].push(el);
//     return acc;
//   }, []);
// }

// console.log(grouping(arrWithObj));

// Основы JavaScript:
// Напишите функцию, которая возвращает сумму всех элементов массива.
// const arr = [1,2,3,4,5,6,7,8,9,10]
// function func(params) {
//     return params.reduce((acc, el) => acc + el)
// }
// console.log(func(arr));
// Создайте функцию, которая возвращает произведение всех чисел в массиве.
// const arr = [1,2,3]
// function func(params) {
//     return params.reduce((acc, el) => acc * el)
// }
// console.log(func(arr));
// Реализуйте функцию, которая проверяет, является ли строка пустой.
// const str = "";
// function func(params) {
//   if (params === "") return true;
//   if (params !== "") return false;
// }
// console.log(func(str));
// Напишите функцию, которая проверяет, является ли строка палиндромом.
// const str = "rar"
// function func(params) {
//     return params.split("").reverse().join("") === params
// }
// console.log(func(str));
// Реализуйте функцию, которая находит наибольшее число в массиве.
// const arr = [12,23,12,34,45,56,67,78,89,90]
// function func(params) {
//     return params.reduce((acc, el) => acc > el ? acc : el)
// }
// console.log(func(arr));
// Создайте функцию, которая подсчитывает количество гласных в строке.
// const str = "munarbek is the better"
// const arr = ["a" ,"e", "i", "o", "u"]
// function func(string , array) {
//     return array.reduce((acc, el) => {
//         for(i of string) {
//             if (i === el) {
//                 acc++
//             }
//         }
//         return acc
//     }, 0)
// }
// console.log(func(str, arr));
// Напишите функцию, которая возвращает строку, состоящую из каждого второго символа исходной строки.
// const str = "munarbek";
// function func(params) {
//   for (let i = 1; i < params.length; i+=2) {
//     console.log(str[i]);
//   }
// }
// console.log(func(str));
// Реализуйте функцию, которая определяет, является ли число четным.
// const num = 11111111111111111111111111111111111111
// function func(params) {
//     return params % 2 === 0
// }
// console.log(func(num));
// Напишите функцию, которая конвертирует строку в массив символов.
// const str = 'hello'
// function func(params) {
// return params.split("")
// }
// console.log(func(str));
// Напишите функцию, которая меняет местами два элемента в массиве.
// function swap(params, i, j) {
//   [params[i], params[j]] = [params[j], params[i]];
//   return params;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(swap(arr, 1, 3));

// Массивы:
// Напишите функцию для фильтрации всех четных чисел из массива.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function func(params) {
//   return params.filter((el) => el % 2 === 0);
// }
// console.log(func(arr));
// Создайте функцию, которая находит минимальное значение в массиве чисел.
// const arr = [1,2,3,54,6,5]
// function func(params) {
//     return params.reduce((acc, el) => {
//         return acc < el ? acc : el
//     })
// }
// console.log(func(arr));
// Напишите функцию, которая удаляет все повторяющиеся элементы в массиве.
// const arr = [1,2,3,4,5,6,7,7,6,5,4,2]
// function func(params) {
//     return params.reduce((acc, el) => {
//         for (i of params) {
//             if (!acc.includes(i)) {
//                 acc.push(i)
//             }
//         }
//         return acc
//     }, [])
// }
// console.log(func(arr));
// Реализуйте функцию, которая объединяет два массива.
// const arr1 = [2,3]
// const arr2 = [4,5]
// console.log(arr1.concat(arr2));
// Напишите функцию, которая сортирует массив строк по алфавиту.
// const arr = ["a", "b", "d", "w", "q", "l", "c"]
// function func(params) {
//     return params.sort((a, b) => a.localeCompare(b))
// }
// console.log(func(arr));
// Создайте функцию, которая находит сумму чисел на четных позициях в массиве.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function func(params) {
//   return params
//     .filter((el) => el % 2 === 0)
//     .reduce((acc, el) => {
//       return acc + el;
//     });
// }
// console.log(func(arr));
// Напишите функцию, которая делает сдвиг элементов массива на одну позицию вправо.
// const arr = [1, 2, 3, 4, 5]
// function func(params) {
//   let i = params.slice(-1)
//   let arri = []
//   arri = params
//   arri.unshift(...i)
//   arri.splice(-1)
//   return arri
// }
// console.log(func(arr));
// альтернативный более улучшенный код от чата гпт
// вот он
// const arr = [1, 2, 3, 4, 5];
// function func(params) {
//   let arri = params.slice(); // Копия массива
//   let lastElement = arri.pop(); // Удаляем последний элемент
//   arri.unshift(lastElement); // Вставляем его в начало
//   return arri;
// }
// console.log(func(arr)); // [5, 1, 2, 3, 4]
// Реализуйте функцию, которая находит среднее значение чисел в массиве.
// const arr = [4, 8, 15, 16, 23, 42]
// function func(params) {
//   if (params.length === 0 ) return 0
//  return params.reduce((acc, el) => acc + el) / params.length
// }
// console.log(func(arr));
// Напишите функцию, которая добавляет элемент в начало массива.
// решение : использовать просто метод unshift()
// Объекты:
// Напишите функцию, которая копирует объект.

// Реализуйте функцию, которая объединяет два объекта в один.
// const obj = {
//   name: "munarbek"
// }
// const obj2 = {
//   name: "kyaz"
// }

// function func(params, params2) {
//   return { ...params, ...params2 };
// }

// console.log(func(obj, obj2));

// Напишите функцию, которая проверяет, есть ли ключ в объекте.
// const obj = {
//   name: "munarbek",
//   age: 16,
//   prof: "IT",
// };

// function func(params, key) {
//   for (let i in params) {
//     if (i === key) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(func(obj, "age"));

// Создайте функцию, которая инвертирует ключи и значения в объекте.

// const original = { a: 1, b: 2, c: 3 };

// function invertObject(obj) {
//   let inverted = {};
//   for (let [key, value] of Object.entries(obj)) {
//     inverted[value] = key
//   }

//   return inverted;
// }

// console.log(invertObject(original));

// Реализуйте функцию, которая проверяет, равны ли два объекта.
// const obj1 = { name: "Alice", age: 25 };
// const obj2 = { name: "Alice", age: 25 };
// const obj3 = { name: "Bob", age: 30 };
//   const obj4 = { name: "Alice", age: 25, city: "NY" };

//   function func(params, params2) {
//     if (Object.keys(params).length !== Object.keys(params2).length) return false;

//     for (let key in params) {
//       if (params[key] !== params2[key]) {
//         return false
//       }
//     }
//     return true
//   }
//   console.log(func(obj1, obj4));

// Напишите функцию, которая удаляет ключ из объекта.
// Создайте функцию, которая возвращает все ключи объекта.
// Напишите функцию, которая копирует объект и изменяет одно из его свойств.
// Реализуйте функцию, которая преобразует объект в строку JSON.
// Создайте функцию, которая создает новый объект с заданными ключами и значениями.
// Алгоритмы:
// Реализуйте функцию поиска максимального элемента в массиве.
// Напишите функцию для поиска числа в отсортированном массиве (бинарный поиск).
// Создайте алгоритм быстрой сортировки.
// Напишите функцию для нахождения второго по величине элемента в массиве.
// Реализуйте алгоритм сортировки слиянием.
// Напишите функцию для нахождения наименьшего общего кратного двух чисел.
// Реализуйте алгоритм вычисления факториала.
// Напишите функцию для нахождения наибольшего общего делителя.
// Реализуйте алгоритм перебора всех возможных комбинаций элементов массива.
// Напишите функцию для поиска всех простых чисел до заданного числа.
// Строки:
// Напишите функцию, которая возвращает строку, перевернутую задом наперед.
// Создайте функцию для конкатенации массива строк в одну строку.
// Напишите функцию, которая заменяет все пробелы на символ подчеркивания в строке.
// Реализуйте функцию, которая удаляет все ненужные пробелы в строке.
// Напишите функцию для подсчета количества каждого символа в строке.
// Создайте функцию, которая заменяет все вхождения подстроки в строке на другую подстроку.
// Напишите функцию, которая проверяет, является ли строка анограммой другой строки.
// Создайте функцию, которая меняет регистр всех букв в строке.
// Напишите функцию, которая ищет все вхождения подстроки в строке.
// Реализуйте функцию, которая находит количество слов в строке.
// Асинхронное программирование:
// Напишите асинхронную функцию, которая получает данные с API.
// Реализуйте промис, который разрешается через 3 секунды.
// Напишите функцию с использованием async/await для получения данных из нескольких API.
// Создайте промис, который отклоняется через 2 секунды.
// Напишите асинхронную функцию, которая обрабатывает несколько запросов параллельно.
// Реализуйте механизм retry для промиса.
// Напишите функцию, которая выполняет задержку в определенное количество секунд.
// Создайте функцию, которая выполняет несколько асинхронных операций и возвращает их результаты.
// Напишите асинхронную функцию, которая обрабатывает ошибки с помощью try/catch.
// Реализуйте функцию, которая загружает несколько файлов и возвращает результаты после завершения.
// Функции:
// Напишите функцию, которая принимает другую функцию и выполняет ее через 5 секунд.
// Реализуйте каррирование для функции сложения.
// Напишите функцию debounce для события прокрутки.
// Реализуйте мемоизацию функции для ускорения вычислений.
// Напишите функцию, которая выполняет обратный вызов через определенное время.
// Создайте функцию, которая выполняет указанное действие столько раз, сколько передано в аргументе.
// Напишите функцию, которая возвращает результат функции, только если прошло N секунд с последнего вызова.
// Реализуйте функцию, которая выполняет несколько функций подряд.
// Напишите функцию, которая комбинирует два массива в один, используя переданную функцию.
// Создайте функцию, которая повторяет выполнение другой функции заданное количество раз.
// Работа с DOM (если используешь веб-технологии):
// Напишите функцию, которая добавляет новый элемент в DOM.
// Создайте функцию для удаления элемента из DOM.
// Реализуйте функцию для скрытия элемента на странице.
// Напишите функцию, которая меняет цвет фона элемента.
// Создайте функцию, которая добавляет CSS класс элементу.
// Напишите функцию, которая находит элемент по ID на странице.
// Реализуйте функцию, которая отслеживает клик на странице.
// Напишите функцию для изменения текста внутри элемента на странице.
// Создайте функцию, которая делает элемент видимым.
// Реализуйте функцию для динамического создания и вставки списка элементов.
// React/Frontend:
// Напишите компонент в React, который выводит список пользователей.
// Создайте компонент, который изменяет свой стиль при наведении.
// Напишите компонент формы с валидацией на стороне клиента.
// Реализуйте компонент поиска с автозаполнением.
// Напишите компонент, который отображает детали выбранного пользователя.
// Создайте компонент, который отображает сообщения об ошибках.
// Реализуйте компонент, который управляет состоянием с использованием хука useState.
// Напишите компонент, который делает запросы к API и отображает результаты.
// Создайте компонент, который отображает индикатор загрузки при получении данных.
// Реализуйте компонент с использованием хука useEffect для выполнения побочных эффектов.
// Дополнительные задачи:
// Напишите программу, которая генерирует случайное число в заданном диапазоне.
// Реализуйте игру "Угадай число" с ограниченным количеством попыток.
// Создайте калькулятор для выполнения арифметических операций.
// Напишите функцию для преобразования числа в строку с добавлением разделителей тысяч.
// Реализуйте таймер обратного отсчета.
// Напишите программу для подсчета числа дней между двумя датами.
// Создайте программу для получения текущей даты и времени.
// Реализуйте программу для конвертации температур из градусов Цельсия в Фаренгейты.
// Напишите программу, которая находит квадратный корень числа.
// Создайте программу, которая находит наибольшее общее кратное двух чисел.

// от 100 до 200

// Напишите функцию, которая проверяет, является ли строка числом.
// Реализуйте функцию, которая определяет, является ли строка числовым диапазоном (например, "5-10").
// Напишите функцию, которая находит сумму чисел в массиве, исключая отрицательные.
// Создайте функцию, которая заменяет все вхождения символов в строке на заданный символ.
// Напишите функцию для преобразования массива объектов в один объект с ключами на основе заданного поля.
// Реализуйте функцию, которая сортирует массив строк по длине.
// Напишите функцию, которая ищет первое уникальное число в массиве.
// Создайте функцию, которая определяет, является ли число степенью двойки.
// Напишите функцию, которая возвращает строку, содержащую все гласные в исходной строке.
// Реализуйте функцию, которая находит все четные числа в строке чисел.
// Массивы:
// Напишите функцию, которая делит массив на несколько подмассивов по заданному размеру.
// Реализуйте функцию, которая находит индекс первого элемента массива, который больше заданного числа.
// Напишите функцию, которая удаляет все элементы из массива, равные нулю.
// Создайте функцию, которая находит все элементы массива, которые делятся на 3.
// Напишите функцию, которая удаляет все элементы массива, которые равны строкам.
// Реализуйте функцию, которая объединяет массивы без дублирования элементов.
// Напишите функцию, которая возвращает массив чисел, которые являются квадратами других чисел в исходном массиве.
// const arr = [1, 4, 9, 16, 2, 3];
// function func(params) {
//   return params.reduce((acc, el) => {
//     for (i of params) {
//       if (i ** 2 === el) {
//         acc.push(el);
//       }
//     }
//     return acc;
//   }, []);
// }
// console.log(func(arr));
// Создайте функцию, которая перемещает элементы массива по индексам.
// Напишите функцию, которая переворачивает элементы массива в обратном порядке.

// Реализуйте функцию, которая находит два числа в массиве, сумма которых равна заданному числу.
// const arr = [3, 8, 12, 5, 7];
// function func(params, num) {
//   return params.reduce((acc, el) => {
//     for (i of params) {
//       if (acc.length === 2) return acc;
//       if (i + el === num) {
//         acc.push(el);
//       }
//     }
//     return acc;
//   }, []);
// }
// console.log(func(arr, 15));
// Объекты:
// Напишите функцию, которая возвращает все значения из объекта.

// Создайте функцию, которая извлекает ключи, чьи значения больше заданного числа.
// Реализуйте функцию, которая инвертирует ключи и значения объекта с учетом уникальности значений.
// Напишите функцию, которая проверяет, есть ли у объекта несколько одинаковых значений.
// Создайте функцию, которая создает объект из двух массивов: ключей и значений.
// Реализуйте функцию, которая копирует объект без ссылок на вложенные объекты.
// Напишите функцию, которая возвращает объект с максимальным значением среди всех ключей.
// Создайте функцию, которая проверяет, что все значения объекта являются числами.
// Реализуйте функцию, которая находит общие ключи двух объектов.
// Напишите функцию, которая создает новый объект на основе существующего с измененными значениями.
// Алгоритмы:
// Напишите функцию для подсчета числа вхождений подстроки в строке.
// Реализуйте алгоритм сортировки пузырьком.
// Напишите алгоритм для нахождения наименьшего общего кратного массива чисел.
// Создайте алгоритм для поиска элемента в несортированном массиве.
// Реализуйте алгоритм вычисления факториала с использованием рекурсии.
// Напишите алгоритм для нахождения элемента, который встречается больше всех в массиве.
// Реализуйте алгоритм сортировки вставками.
// Напишите алгоритм для нахождения пары чисел, сумма которых минимальна.
// Создайте алгоритм для вычисления расстояния Левенштейна между двумя строками.
// Реализуйте алгоритм поиска всех подстрок в строке.
// Строки:
// Напишите функцию, которая меняет местами первые и последние символы строки.
// Создайте функцию для извлечения подстроки из строки.
// Реализуйте функцию, которая удаляет все пробелы из строки.
// Напишите функцию, которая меняет регистр каждого символа в строке.
// Напишите функцию, которая проверяет, является ли строка правильной датой (формат: YYYY-MM-DD).
// Реализуйте функцию, которая заменяет все вхождения цифр в строке на символ #.
// Напишите функцию, которая проверяет, является ли строка двусмысленной (имеет одинаковое значение с другими строками).
// Напишите функцию для вычисления количества слов в строке.
// Реализуйте функцию, которая находит и возвращает первый повторяющийся символ в строке.
// Напишите функцию для конвертации строки в массив слов.
// Асинхронное программирование:
// Напишите асинхронную функцию, которая выполняет последовательность запросов.
// Реализуйте функцию, которая задерживает выполнение на определенное количество времени.
// Напишите функцию для обработки ошибок в асинхронных операциях.
// Создайте промис, который выполняет несколько операций в параллели и возвращает все результаты.
// Напишите асинхронную функцию для загрузки данных с сервера и их отображения.
// Реализуйте асинхронный механизм очередей, который обрабатывает запросы поочередно.
// Напишите асинхронную функцию, которая выполняет несколько операций с интервалом.
// Реализуйте функцию для выполнения асинхронной операции через заданный промежуток времени.
// Напишите промис, который будет выполняться через несколько секунд с возвращением результата.
// Создайте асинхронную функцию, которая загружает несколько изображений по URL.
// Функции:
// Напишите функцию, которая возвращает новое значение через несколько секунд.
// Реализуйте каррирование для функции вычитания.
// Напишите функцию, которая выполняет определенное действие через N секунд.
// Создайте функцию, которая выполняет отложенные вызовы другой функции.
// Напишите функцию debounce для события прокрутки страницы.
// Реализуйте функцию throttle для обработки событий прокрутки.
// Напишите функцию, которая возвращает результат функции, если прошло N секунд с последнего вызова.
// Реализуйте каррирование для функции сложения с несколькими аргументами.
// Напишите функцию, которая возвращает первое значение из массива.
// Создайте функцию, которая сжимает строку, оставляя только уникальные символы.
// Работа с DOM:
// Напишите функцию, которая добавляет новый элемент на страницу при клике.
// Реализуйте функцию для динамического добавления CSS стилей в элемент.
// Напишите функцию для проверки наличия элемента в DOM.
// Создайте функцию для отслеживания событий на элементах.
// Напишите функцию, которая изменяет цвет текста элемента при наведении.
// Реализуйте функцию для удаления элемента из DOM по ID.
// Напишите функцию для изменения размера изображения при клике.
// Создайте функцию, которая отслеживает изменения в DOM.
// Напишите функцию, которая меняет фон страницы по нажатию кнопки.
// Реализуйте функцию для загрузки внешнего скрипта на страницу.
// React/Frontend:
// Напишите компонент, который обновляет состояние при каждом клике.
// Создайте компонент, который отображает текст с задержкой.
// Напишите компонент формы с поддержкой валидации и отправки данных.
// Реализуйте компонент, который выполняет запрос к API и отображает результаты.
// Напишите компонент, который меняет свой цвет при наведении.
// Создайте компонент, который отображает ошибки, полученные из API.
// Реализуйте компонент, который изменяет стиль в зависимости от состояния.
// Напишите компонент, который отображает данные из массива.
// Создайте компонент, который фильтрует список пользователей по имени.
// Напишите компонент, который автоматически сохраняет изменения данных в localStorage.
// Дополнительные задачи:
// Напишите программу, которая находит сумму всех четных чисел в диапазоне от 1 до N.
// Реализуйте программу для переворота строки в двоичной системе.
// Напишите программу для нахождения первой буквы каждого слова в строке.
// Создайте программу для вывода всех простых чисел до N.
// Напишите программу для конвертации времени из секунд в часы, минуты и секунды.
// Реализуйте программу для поиска максимального значения среди множества чисел.
// Напишите программу для вычисления площади окружности по радиусу.
// Реализуйте программу для проверки строки на наличие только цифр.
// Напишите программу для нахождения индекса максимального элемента в массиве.
// Создайте программу для подсчета чисел в диапазоне от 1 до N, которые делятся на 3 или 5.

// от 200 до 300

// Основы JavaScript:
// Напишите функцию, которая определяет, является ли строка палиндромом.
// Реализуйте функцию, которая находит самое длинное слово в строке.
// Напишите функцию, которая удаляет все повторяющиеся символы из строки.
// Создайте функцию, которая преобразует строку в массив слов.
// Напишите функцию, которая проверяет, что строка является числовым значением.
// Реализуйте функцию, которая находит среднее значение массива чисел.
// Напишите функцию, которая ищет максимальный элемент в массиве, исключая нулевые значения.
// Создайте функцию, которая проверяет, что строка состоит только из цифр.
// Напишите функцию для нахождения общего наименьшего множителя двух чисел.
// Реализуйте функцию, которая возвращает максимальное число из массива чисел.
// Массивы:
// Напишите функцию, которая находит медиану массива чисел.
// Реализуйте функцию, которая проверяет, все ли элементы массива равны.
// Напишите функцию, которая проверяет, является ли массив монотонным.
// Создайте функцию, которая находит пересечение двух массивов.
// Напишите функцию, которая находит симметричную разницу между двумя массивами.
// Реализуйте функцию, которая фильтрует все элементы массива, которые содержат больше чем три символа.
// Напишите функцию, которая возвращает только те элементы массива, которые являются строками.
// Создайте функцию, которая проверяет, является ли массив подмножеством другого массива.
// Напишите функцию, которая находит индекс элемента в отсортированном массиве с помощью бинарного поиска.
// Реализуйте функцию, которая заменяет все отрицательные числа в массиве на нули.
// Объекты:
// Напишите функцию, которая обновляет значение свойства объекта.
// Реализуйте функцию, которая проверяет, является ли объект пустым.
// Напишите функцию, которая добавляет или обновляет ключ в объекте.
// Создайте функцию, которая удаляет ключ из объекта.
// Реализуйте функцию, которая возвращает значение по ключу, если оно существует в объекте, иначе возвращает значение по умолчанию.
// Напишите функцию, которая сравнивает два объекта по значениям их свойств.
// Создайте функцию, которая проверяет, существует ли свойство в объекте.
// Реализуйте функцию, которая сливает два объекта в один.
// Напишите функцию, которая клонирует объект с вложенными объектами.
// Создайте функцию, которая копирует все свойства объекта в новый объект.
// Алгоритмы:
// Напишите алгоритм для нахождения наибольшего общего делителя двух чисел.
// Реализуйте алгоритм для подсчета числа вхождений подстроки в строке.
// Напишите алгоритм для нахождения первого повторяющегося элемента в массиве.
// Создайте алгоритм для нахождения суммы всех чисел в массиве, кроме минимальных и максимальных.
// Напишите алгоритм для нахождения наибольшей разницы между элементами массива.
// Реализуйте алгоритм для слияния двух отсортированных массивов в один отсортированный массив.
// Напишите алгоритм для проверки, является ли строка анаграммой другой строки.
// Создайте алгоритм для нахождения всех возможных подстрок строки.
// Напишите алгоритм для нахождения всех кратных чисел в диапазоне от 1 до N.
// Реализуйте алгоритм для поиска кратчайшего пути в графе (алгоритм Дейкстры).
// Строки:
// Напишите функцию, которая проверяет, является ли строка числовой и включает ли она только целые числа.
// Создайте функцию для подсчета количества пробелов в строке.
// Реализуйте функцию, которая конвертирует строку в заголовочный регистр (каждое слово с заглавной буквы).
// Напишите функцию для извлечения всех цифр из строки.
// Реализуйте функцию, которая заменяет все цифры в строке на звездочки.
// Напишите функцию, которая находит первое слово в строке, которое является палиндромом.
// Создайте функцию, которая проверяет, состоит ли строка только из пробелов.
// Напишите функцию для разделения строки на массив, используя заданный разделитель.
// Реализуйте функцию, которая удаляет все символы, не являющиеся буквами.
// Напишите функцию для удаления всех гласных из строки.
// Асинхронное программирование:
// Напишите функцию, которая выполняет асинхронную операцию с задержкой.
// Реализуйте асинхронную функцию для загрузки данных с сервера с использованием fetch.
// Напишите асинхронную функцию, которая выполняет несколько операций параллельно и возвращает результаты.
// Создайте промис, который возвращает ошибку, если передано неправильное значение.
// Напишите асинхронную функцию, которая ожидает выполнения нескольких запросов до того, как обработать результат.
// Реализуйте функцию с использованием async/await, которая выполняет последовательность асинхронных запросов.
// Напишите функцию для обработки ошибок в асинхронных операциях с использованием try/catch.
// Создайте асинхронную функцию, которая возвращает результат через определенный интервал времени.
// Реализуйте асинхронный механизм для получения данных с несколькими промежуточными шагами.
// Напишите асинхронную функцию для повторной попытки операции, если она не удалась.
// Функции:
// Напишите функцию, которая вызывает переданную функцию после определенного интервала времени.
// Реализуйте функцию-замыкание, которая возвращает счетчик для отслеживания количества вызовов.
// Напишите функцию, которая применяет другую функцию ко всем элементам массива.
// Создайте функцию для выполнения отложенного действия в определенное время.
// Напишите функцию, которая позволяет кэшировать результаты функции для оптимизации.
// Реализуйте функцию, которая проверяет, является ли число четным или нечетным.
// Напишите функцию, которая возвращает уникальные значения из массива.
// Создайте функцию, которая выводит все возможные комбинации элементов массива.
// Реализуйте функцию для сортировки массива строк по длине.
// Напишите функцию, которая находит повторяющиеся элементы в массиве.
// Работа с DOM:
// Напишите функцию, которая добавляет класс к элементу при наведении.
// Реализуйте функцию, которая меняет содержимое элемента по ID.
// Напишите функцию для отслеживания кликов по элементу.
// Создайте функцию, которая добавляет новый элемент в список на странице.
// Напишите функцию, которая обновляет атрибуты элемента.
// Реализуйте функцию для создания и добавления новых элементов в DOM.
// Напишите функцию, которая проверяет, виден ли элемент на экране.
// Создайте функцию для добавления элемента в начало списка.
// Напишите функцию, которая находит родительский элемент для заданного дочернего элемента.
// Реализуйте функцию, которая изменяет стили элемента на основе его текущего состояния.
// React/Frontend:
// Напишите компонент, который отображает состояние кнопки при каждом клике.
// Создайте компонент с контролируемым состоянием для формы.
// Напишите компонент, который выполняет асинхронный запрос и отображает результат.
// Реализуйте компонент с условным рендерингом.
// Напишите компонент, который изменяет состояние в ответ на пользовательский ввод.
// Создайте компонент, который отображает список данных, полученных через API.
// Напишите компонент с использованием useEffect для выполнения побочного эффекта.
// Реализуйте компонент, который меняет стиль при взаимодействии с пользователем.
// Напишите компонент с обработчиком событий на кнопке для изменения текста.
// Создайте компонент, который обновляет список элементов с использованием React State.
// Дополнительные задачи:
// Напишите программу, которая находит сумму всех чисел от 1 до N, кратных 3 или 5.
// Реализуйте программу для вычисления произведения всех элементов массива.
// Напишите программу для нахождения простых чисел в диапазоне от 1 до N.
// Создайте программу для подсчета всех чисел, которые делятся на 2, 3 или 5 в диапазоне от 1 до N.
// Напишите программу для вычисления квадрата каждого элемента массива.
// Реализуйте программу для нахождения всех чисел, которые являются палиндромами.
// Напишите программу для сортировки массива строк по длине.
// Создайте программу для проверки, является ли строка анаграммой другой строки.
// Напишите программу для подсчета числа гласных в строке.
// Реализуйте программу для нахождения самого длинного подстроки, содержащего только уникальные символы.

// от 300 до 400

// Напишите функцию, которая проверяет, является ли строка правильным форматом даты (например, "2024-12-14").
// Реализуйте функцию, которая проверяет, является ли строка валидным email-адресом.
// Напишите функцию, которая находит наименьшее число в массиве.
// Создайте функцию для подсчета количества слов в строке.
// Напишите функцию, которая проверяет, является ли число степенью двойки.
// Реализуйте функцию, которая проверяет, является ли строка числом с плавающей точкой.
// Напишите функцию, которая конкатенирует массив строк в одну строку.
// Создайте функцию для получения элементов массива по индексу и проверке их наличия.
// Реализуйте функцию, которая проверяет, является ли число положительным.
// Напишите функцию, которая удаляет все пробелы из строки.
// Массивы:
// Напишите функцию для нахождения уникальных элементов в массиве.
// Реализуйте функцию для поворота массива на определенное количество элементов.
// Напишите функцию, которая заменяет все отрицательные числа в массиве на нули.
// Создайте функцию, которая проверяет, является ли массив отсортированным.
// Напишите функцию, которая объединяет два массива, удаляя дубли.
// Реализуйте функцию, которая находит среднее значение всех чисел в массиве.
// Напишите функцию, которая находит первый неповторяющийся элемент в массиве.
// Создайте функцию для создания нового массива, содержащего только те элементы, которые проходят проверку (например, четные числа).
// Напишите функцию для сортировки массива объектов по заданному свойству.
// Реализуйте функцию, которая находит индекс максимального элемента в массиве.
// Объекты:
// Напишите функцию, которая клонирует объект без использования Object.assign или JSON.parse.
// Реализуйте функцию, которая добавляет или обновляет значение в объекте.
// Напишите функцию, которая проверяет, что объект содержит все указанные ключи.
// Создайте функцию для преобразования объекта в массив, содержащий его ключи и значения.
// Реализуйте функцию, которая проверяет, является ли объект массивом.
// Напишите функцию, которая добавляет новый объект в массив объектов.
// Создайте функцию, которая проверяет, пуст ли объект.
// Напишите функцию, которая создает новый объект, объединяя несколько объектов.
// Реализуйте функцию, которая сравнивает два объекта по значениям их свойств.
// Напишите функцию, которая удаляет все свойства из объекта, которые равны null или undefined.
// Алгоритмы:
// Напишите алгоритм для нахождения максимальной суммы подмассива.
// Реализуйте алгоритм для нахождения элемента в отсортированном массиве с использованием бинарного поиска.
// Напишите алгоритм для подсчета количества уникальных символов в строке.
// Создайте алгоритм для нахождения числа, которое встречается больше всего раз в массиве.
// Напишите алгоритм для поиска самого длинного повторяющегося подстроки в строке.
// Реализуйте алгоритм для подсчета всех цифр в числе.
// Напишите алгоритм для нахождения наибольшего общего делителя (НОД) двух чисел.
// Создайте алгоритм для сортировки массива с использованием пузырьковой сортировки.
// Напишите алгоритм для нахождения кратчайшего пути в графе с использованием алгоритма Дейкстры.
// Реализуйте алгоритм для слияния двух отсортированных массивов.
// Строки:
// Напишите функцию, которая инвертирует порядок символов в строке.
// Создайте функцию для нахождения всех уникальных символов в строке.
// Реализуйте функцию, которая меняет все заглавные буквы на строчные в строке.
// Напишите функцию для подсчета гласных в строке.
// Напишите функцию, которая удаляет все символы, кроме букв и цифр.
// Реализуйте функцию, которая находит все подстроки заданной строки.
// Напишите функцию, которая находит первое вхождение подстроки в строке.
// Создайте функцию, которая возвращает все слова, начинающиеся с определенной буквы.
// Напишите функцию, которая преобразует строку в массив, разделенный пробелами.
// Реализуйте функцию для поиска всех уникальных слов в строке.
// Асинхронное программирование:
// Напишите асинхронную функцию для получения данных с сервера с использованием fetch.
// Реализуйте асинхронную функцию, которая обрабатывает несколько промисов одновременно.
// Напишите асинхронную функцию для повторной попытки запроса в случае ошибки.
// Создайте функцию с использованием async/await, которая выполняет несколько запросов последовательно.
// Напишите асинхронную функцию для загрузки данных с использованием промисов.
// Реализуйте функцию для обработки ошибок в асинхронных операциях с использованием try/catch.
// Напишите асинхронную функцию, которая ждет определенное количество времени перед выполнением.
// Создайте асинхронную функцию, которая выполняет действия по очереди с задержками.
// Напишите асинхронную функцию для загрузки нескольких файлов параллельно.
// Реализуйте асинхронную функцию, которая проверяет состояние выполнения промиса.
// Функции:
// Напишите функцию, которая принимает другой функциональный аргумент и применяет его к каждому элементу массива.
// Реализуйте функцию, которая генерирует случайное число в заданном диапазоне.
// Напишите функцию, которая принимает строку и возвращает ее перевернутый вариант.
// Создайте функцию для вычисления факториала числа с использованием рекурсии.
// Напишите функцию, которая генерирует последовательность Фибоначчи до N-го числа.
// Реализуйте функцию для вычисления мощности числа с использованием рекурсии.
// Напишите функцию, которая определяет, является ли число простым.
// Создайте функцию, которая получает наибольший общий делитель (НОД) двух чисел.
// Реализуйте функцию для нахождения суммы всех чисел, которые могут быть делителями числа.
// Напишите функцию, которая находит медиану массива.
// Работа с DOM:
// Напишите функцию, которая добавляет новый элемент в конец списка на веб-странице.
// Реализуйте функцию, которая удаляет элемент из DOM.
// Напишите функцию, которая обновляет текстовый контент элемента в DOM.
// Создайте функцию для изменения стилей элемента по ID.
// Напишите функцию для создания и добавления нового элемента в DOM.
// Реализуйте функцию для поиска всех элементов с заданным классом и их изменения.
// Напишите функцию, которая добавляет или удаляет класс из элемента при клике.
// Создайте функцию, которая скрывает или отображает элемент на странице.
// Напишите функцию, которая отслеживает события нажатия на кнопку.
// Реализуйте функцию, которая автоматически скроллит страницу до заданного элемента.
// React/Frontend:
// Напишите компонент, который меняет свой текст при каждом клике.
// Создайте компонент с состоянием, которое обновляется через определенный промежуток времени.
// Напишите компонент, который рендерит список пользователей, полученных через API.
// Реализуйте компонент, который принимает данные через props и отображает их.
// Напишите компонент, который принимает форму ввода и обновляет состояние при каждом изменении.
// Создайте компонент, который обновляет свой стиль в зависимости от состояния.
// Напишите компонент, который показывает модальное окно при клике на кнопку.
// Реализуйте компонент, который рендерит таблицу данных с возможностью сортировки по столбцам.
// Напишите компонент, который выводит список выбранных элементов.
// Создайте компонент, который использует хуки для управления состоянием.
// Дополнительные задачи:
// Напишите программу, которая находит среднее значение массива.
// Реализуйте программу, которая сортирует массив строк по алфавиту.
// Напишите программу для вычисления максимальной суммы чисел в массиве.
// Создайте программу для нахождения всех кратных числа в массиве.
// Напишите программу, которая находит первое повторяющееся число в массиве.
// Реализуйте программу для вычисления суммы квадратов всех чисел в массиве.
// Напишите программу для нахождения второго по величине числа в массиве.
// Создайте программу для вычисления произведения всех чисел в массиве.
// Напишите программу, которая находит наименьший общий кратный для двух чисел.
// Реализуйте программу для нахождения кратчайшего пути в графе с использованием алгоритма A*.

// от 400 до 500

// Напишите функцию, которая проверяет, является ли строка палиндромом.
// Реализуйте функцию, которая находит наибольший элемент в двумерном массиве.
// Напишите функцию для нахождения повторяющихся элементов в массиве.
// Создайте функцию, которая проверяет, является ли строка анаграммой другой строки.
// Реализуйте функцию, которая находит второй по величине элемент в массиве.
// Напишите функцию, которая удаляет дубликаты из массива.
// Создайте функцию для преобразования массива чисел в строку.
// Напишите функцию, которая добавляет элемент в начало массива.
// Реализуйте функцию, которая удаляет элемент по индексу из массива.
// Напишите функцию для конвертации числа в строку с ведущими нулями.
// Массивы:
// Напишите функцию, которая находит индекс первого элемента, равного максимальному значению массива.
// Реализуйте функцию, которая объединяет два массива, исключая элементы, встречающиеся в обоих.
// Напишите функцию, которая возвращает все четные числа из массива.
// Создайте функцию для сдвига всех элементов массива на N позиций вправо.
// Реализуйте функцию, которая вычисляет разницу между максимальным и минимальным значением в массиве.
// Напишите функцию, которая находит сумму всех чисел в массиве.
// Создайте функцию, которая находит наибольшее число, которое делится на 3 в массиве.
// Напишите функцию, которая сортирует массив чисел по убыванию.
// Реализуйте функцию, которая находит наименьшее число, которое не встречается в массиве.
// Напишите функцию, которая проверяет, есть ли в массиве элемент, делящийся на 5.
// Объекты:
// Напишите функцию, которая фильтрует объект по значению.
// Реализуйте функцию, которая копирует все ключи из одного объекта в другой.
// Напишите функцию, которая меняет местами значения и ключи в объекте.
// Создайте функцию для объединения двух объектов.
// Напишите функцию, которая получает значение по ключу из объекта, если ключ существует.
// Реализуйте функцию, которая преобразует объект в строку JSON.
// Напишите функцию, которая проверяет, содержит ли объект определенное свойство.
// Создайте функцию, которая удаляет свойство из объекта по его ключу.
// Напишите функцию, которая изменяет значение свойства объекта по ключу.
// Реализуйте функцию, которая возвращает ключи объекта, значения которых больше заданного числа.
// Алгоритмы:
// Напишите алгоритм для нахождения всех простых чисел до N с использованием решета Эратосфена.
// Реализуйте алгоритм для поиска самого длинного общего префикса среди строк.
// Напишите алгоритм для нахождения наименьшего числа в строках массива.
// Создайте алгоритм для нахождения всех чисел, которые являются кратными числу в массиве.
// Напишите алгоритм для сортировки массива с использованием быстрой сортировки.
// Реализуйте алгоритм для нахождения пути через лабиринт с использованием поиска в ширину.
// Напишите алгоритм для поиска кратчайшего пути в графе с использованием алгоритма Беллмана-Форда.
// Создайте алгоритм для нахождения всех возможных сочетаний элементов массива.
// Напишите алгоритм для поиска максимальной суммы подмассива с использованием алгоритма Кадана.
// Реализуйте алгоритм для нахождения медианы в массиве.
// Строки:
// Напишите функцию, которая находит первое вхождение символа в строке.
// Создайте функцию для удаления всех пробелов из строки.
// Реализуйте функцию для проверки, является ли строка числом.
// Напишите функцию, которая инвертирует слова в строке.
// Напишите функцию для нахождения всех символов, которые не встречаются в строке.
// Создайте функцию для удаления всех гласных из строки.
// Реализуйте функцию, которая преобразует строку в заглавные буквы.
// Напишите функцию, которая разбивает строку на массив подстрок по заданному разделителю.
// Создайте функцию для нахождения индекса последнего вхождения подстроки в строке.
// Напишите функцию для удаления всех дублирующихся символов в строке.
// Асинхронное программирование:
// Напишите асинхронную функцию, которая получает данные с сервера с использованием fetch и выводит их в консоль.
// Реализуйте асинхронную функцию, которая выполняет несколько запросов параллельно с использованием Promise.all.
// Напишите асинхронную функцию, которая обрабатывает запросы с задержкой и возвращает результат.
// Создайте асинхронную функцию для загрузки файла, используя Blob и FileReader.
// Напишите асинхронную функцию для получения данных с сервера с использованием axios.
// Реализуйте асинхронную функцию, которая повторяет запрос через определенные интервалы времени до успешного выполнения.
// Напишите асинхронную функцию для выполнения запроса с таймаутом.
// Создайте асинхронную функцию для загрузки нескольких файлов параллельно.
// Напишите асинхронную функцию, которая обрабатывает ответ с сервера и вызывает другую функцию после его получения.
// Реализуйте асинхронную функцию, которая выполняет несколько запросов последовательно.
// Функции:
// Напишите функцию, которая находит факториал числа с использованием итерации.
// Создайте функцию для проверки, является ли число совершенным числом (сумма делителей числа равна числу).
// Напишите функцию, которая проверяет, является ли число степенью числа 3.
// Реализуйте функцию, которая генерирует последовательность чисел Фибоначчи.
// Напишите функцию, которая находит наибольший общий делитель (НОД) двух чисел.
// Создайте функцию для нахождения наименьшего общего кратного двух чисел.
// Напишите функцию для проверки, является ли строка числом в экспоненциальной записи.
// Реализуйте функцию для нахождения числа, которое встречается наиболее часто в массиве.
// Напишите функцию для вычисления квадратного корня числа с использованием бинарного поиска.
// Создайте функцию для нахождения наибольшего общего делителя массива чисел.
// Работа с DOM:
// Напишите функцию для добавления нового элемента в DOM.
// Реализуйте функцию для скрытия или отображения элемента на странице.
// Напишите функцию, которая изменяет атрибут элемента в DOM.
// Создайте функцию для отслеживания событий нажатия клавиши.
// Напишите функцию для удаления всех дочерних элементов из контейнера.
// Реализуйте функцию для добавления класса к элементу при его клике.
// Напишите функцию для создания нового списка в DOM с использованием массива данных.
// Создайте функцию для скрытия элемента с анимацией.
// Напишите функцию, которая изменяет содержимое элемента с определенным классом.
// Реализуйте функцию для поиска всех элементов с заданным атрибутом.
// React/Frontend:
// Напишите компонент, который отображает список объектов с возможностью фильтрации по ключам.
// Создайте компонент с условным рендерингом элементов на основе состояния.
// Напишите компонент, который принимает форму и выводит введенные данные.
// Реализуйте компонент, который обновляет свой стиль в зависимости от пропса.
// Напишите компонент, который отображает информацию из API в реальном времени.
// Создайте компонент с возможностью добавления элементов в список.
// Напишите компонент, который отслеживает изменение размеров окна.
// Реализуйте компонент, который отображает заголовок с анимацией появления.
// Напишите компонент, который позволяет изменять состояние на основе кликов.
// Создайте компонент, который рендерит динамическую таблицу с возможностью сортировки.
// Дополнительные задачи:
// Напишите программу для нахождения наибольшего числа среди всех элементов массива.
// Реализуйте программу для вычисления суммы чисел в массиве с учетом отрицательных чисел.
// Напишите программу, которая проверяет, является ли строка подстрокой другой строки.
// Создайте программу для нахождения всех чисел, которые являются кратными заданному числу.
// Напишите программу для нахождения самого частого символа в строке.
// Реализуйте программу для вычисления суммы всех чисел, которые являются делителями числа.
// Напишите программу для удаления всех отрицательных чисел из массива.
// Создайте программу для нахождения самого длинного слова в строке.
// Напишите программу для нахождения наибольшего числа, которое делится на 2 в массиве.
// Реализуйте программу для нахождения самого малого числа в строках массива.

// вопросы от 500 до 600

// Что такое замыкания в JavaScript, и как они работают?
// В чем разница между var, let и const?
// Объясните, что такое асинхронные функции и как работают промисы.
// Чем отличаются null и undefined?
// Что такое this в JavaScript и как его контекст меняется в различных ситуациях?
// Что такое деструктуризация объектов и массивов? Приведите пример.
// Как работает оператор spread и оператор rest в JavaScript?
// Что такое event delegation и зачем оно используется?
// Как работает механизм события в JavaScript? Чем отличается использование addEventListener от onclick?
// Что такое и как работает прототипное наследование в JavaScript?
// Массивы и объекты:
// Как создать пустой объект и массив в JavaScript?
// Как объединить два массива в один?
// Чем отличается метод forEach от метода map?
// Когда и зачем использовать reduce в JavaScript?
// Что такое Object.freeze и как его использовать?
// Как проверить, является ли переменная массивом в JavaScript?
// Чем отличается метод Object.keys() от Object.values()?
// Что такое JSON.parse и JSON.stringify? В чем их отличие?
// Как добавить элемент в начало и в конец массива?
// Как изменить или удалить свойство объекта?
// Строки:
// Как проверить, содержит ли строка подстроку в JavaScript?
// Чем отличается метод split() от метода join() для строк?
// Как извлечь подстроку из строки?
// Как преобразовать строку в массив символов?
// Что делает метод toUpperCase() и toLowerCase()?
// Как удалить пробелы в начале и в конце строки?
// Как проверить, является ли строка числом в JavaScript?
// Как найти позицию первого вхождения символа в строке?
// Как объединить несколько строк в одну?
// Что такое шаблонные строки и как они работают?
// Асинхронное программирование:
// Что такое промисы в JavaScript? Приведите пример их использования.
// В чем разница между async/await и промисами?
// Что такое коллбеки и как избежать "callback hell"?
// Что такое событие "DOMContentLoaded" и как его использовать?
// Как работать с таймерами в JavaScript?
// Что такое setInterval и setTimeout? Чем они отличаются?
// Как обрабатывать ошибки при использовании async/await?
// Как работает оператор await и как он используется с промисами?
// Чем отличается fetch от XMLHttpRequest?
// Что такое Web Workers и как они используются в JavaScript?
// Алгоритмы:
// Как найти наибольший элемент в массиве?
// Что такое сортировка слиянием и как она работает?
// Чем отличается сортировка пузырьком от сортировки вставками?
// Что такое рекурсия в программировании? Приведите пример.
// Как работает алгоритм поиска в глубину (DFS)?
// Как работает алгоритм поиска в ширину (BFS)?
// Что такое алгоритм Дейкстры и когда его использовать?
// Как реализовать бинарный поиск в отсортированном массиве?
// Что такое жадный алгоритм и где его применяют?
// Как работает алгоритм Кадана для нахождения максимальной суммы подмассива?
// ООП (Объектно-Ориентированное Программирование):
// Что такое классы и объекты в JavaScript? Приведите пример.
// Чем отличается наследование в JavaScript от других языков программирования?
// Что такое инкапсуляция, и как она реализована в JavaScript?
// Как работает полиморфизм в JavaScript?
// Что такое абстракция в ООП и как она реализуется в JavaScript?
// Как использовать конструкторы в JavaScript для создания объектов?
// В чем разница между методами экземпляра и статическими методами в классе?
// Что такое super в контексте наследования в JavaScript?
// Как создать абстрактный класс в JavaScript?
// Чем отличаются стрелочные функции от обычных функций?
// Взаимодействие с DOM:
// Что такое DOM и как его использовать для манипуляций с веб-страницей?
// Как добавить и удалить элементы на странице с помощью JavaScript?
// Как создать новый элемент в DOM и добавить его в родительский элемент?
// Как работает метод querySelector и чем он отличается от getElementById?
// Как изменить атрибуты элемента на странице?
// Как изменить стиль элемента на странице?
// Как отслеживать события клика на элементах?
// Что такое событие "blur" и когда оно используется?
// Чем отличается событие "mousedown" от "click"?
// Как работает событие "focus" в JavaScript?
// Работа с событиями:
// Что такое делегирование событий в JavaScript? Почему оно полезно?
// Как отменить действие по умолчанию с помощью event.preventDefault()?
// Чем отличается addEventListener от onclick?
// Как можно остановить всплытие события с помощью event.stopPropagation()?
// В чем разница между событием "load" и событием "DOMContentLoaded"?
// Что такое событие "resize" и как его использовать?
// Как отслеживать событие изменения размера окна?
// Как работает событие "scroll" и как его эффективно использовать?
// Что такое "имитация" событий и как это реализуется?
// Что такое событие "keydown" и как оно отличается от "keypress"?
// Основы React:
// Что такое React и как он работает?
// Чем отличается компонент класса от функционального компонента?
// Что такое JSX в React и как он работает?
// Как работает useState в React?
// Чем отличается useEffect от componentDidMount?
// Как использовать props в React?
// Что такое ключи (keys) в React и зачем они нужны?
// Что такое "React Hooks" и какие из них вы используете в вашем коде?
// Как работает рендеринг в React?
// Что такое контекст (Context) в React и когда его использовать?
// Продвинутый React:
// Что такое и как работают хуки useContext, useReducer, useCallback?
// Как работает динамическая маршрутизация в React с использованием React Router?
// Как происходит взаимодействие компонентов через props и state?
// В чем разница между компонентами "controlled" и "uncontrolled" в React?
// Что такое HOC (Higher Order Components) и как их использовать?
// Как работает состояние в Redux и зачем оно используется в React?
// Что такое "слушатели" и "сабскрайберы" в Redux?
// Как оптимизировать производительность компонента в React?
// Как реализовать ленивая загрузка (lazy loading) компонентов в React?
// Как работает код сплита (code splitting) в React?
// Что такое серверный рендеринг (SSR) и как React поддерживает его?

// вопросы от 600 до 700

// Основы JavaScript:
// Что такое функциональные выражения и чем они отличаются от деклараций функций?
// Как работает оператор typeof и что он возвращает для различных типов данных?
// Что такое значения NaN и как с ними работать?
// Что такое промисы в JavaScript и как они связаны с асинхронными операциями?
// Чем отличается оператор == от === в JavaScript?
// Как работает метод bind() и что он делает с функцией?
// Что такое параметры по умолчанию в функции JavaScript?
// Как работает метод call() и apply() в JavaScript?
// Что такое символы в JavaScript и как их использовать?
// Операторы и типы данных:
// В чем разница между ++x и x++?
// Как работает оператор тернарного выбора в JavaScript?
// Как работает оператор && (логическое И) и || (логическое ИЛИ)?
// Что такое null и как он отличается от undefined?
// Чем отличается let от var в области видимости переменной?
// Что такое неявные и явные преобразования типов в JavaScript?
// Как создать объект с использованием литерала объекта и конструктора?
// Как работает оператор delete и как его использовать?
// Что такое "объект как карта" в JavaScript и как его реализовать?
// Как работает оператор in в JavaScript?
// Асинхронное программирование:
// Чем отличается асинхронная функция от обычной функции?
// Как работает setTimeout() в JavaScript и как его можно отменить?
// В чем разница между Promise.all() и Promise.race()?
// Как работает async/await и как избежать ошибок в асинхронном коде?
// Как правильно обрабатывать исключения в асинхронном коде?
// Что такое Promise chaining и как его использовать?
// Как работать с несколькими промисами, используя Promise.allSettled()?
// Как отслеживать выполнение асинхронных операций с помощью Promise.all()?
// Как использовать finally() с промисами?
// Что такое "порученные" функции и как они работают в JavaScript?
// Работа с DOM:
// Что такое DOM (Document Object Model) и как с ним работать в JavaScript?
// Как добавить или удалить элемент на веб-странице с помощью JavaScript?
// Что такое событие "DOMContentLoaded" и когда оно срабатывает?
// Как изменить содержимое HTML-элемента с помощью JavaScript?
// Как выбрать элементы на странице с помощью querySelector() и getElementById()?
// Как работает метод addEventListener() для обработки событий?
// Чем отличается событие "click" от события "dblclick"?
// Как добавлять и удалять классы у элементов с помощью JavaScript?
// Как изменить стиль элемента с помощью JavaScript?
// Как динамически создать элементы и добавить их в DOM?
// Работа с событиями:
// Как работает событие "mousedown" и чем оно отличается от "click"?
// Как использовать делегирование событий для улучшения производительности?
// Как отменить действие по умолчанию в событии с помощью event.preventDefault()?
// Как остановить всплытие события с помощью event.stopPropagation()?
// Чем отличается событие "focus" от события "blur" в JavaScript?
// Что такое событие "resize" и как его использовать?
// Как обрабатывать события клавиатуры в JavaScript?
// Как отслеживать событие изменения текста в инпуте?
// Как реализовать функциональность "отправить форму по Enter" в JavaScript?
// Что такое событие "wheel" и как его можно использовать для прокрутки?
// Объектно-Ориентированное Программирование (ООП):
// Что такое инкапсуляция в ООП и как она реализуется в JavaScript?
// Как работает наследование классов в JavaScript?
// В чем разница между статическими и экземплярными методами в JavaScript?
// Что такое полиморфизм и как он работает в JavaScript?
// Как создать абстрактный класс в JavaScript?
// Что такое интерфейсы в ООП и как их можно реализовать в JavaScript?
// Как работает ключевое слово super в классовом наследовании?
// Чем отличается композиция от наследования?
// Как реализовать цепочку вызовов (method chaining) в JavaScript?
// Что такое приватные свойства и методы в JavaScript?
// Алгоритмы:
// Как работает алгоритм бинарного поиска?
// В чем заключается алгоритм сортировки пузырьком и как его реализовать?
// Что такое сортировка слиянием и когда она используется?
// Как работает алгоритм поиска наибольшего общего делителя (НОД)?
// Что такое сортировка вставками и как ее реализовать?
// Чем отличается линейный поиск от бинарного поиска?
// Что такое алгоритм Кнута-Морриса-Пратта и для чего он используется?
// Как работает алгоритм Дейкстры для поиска кратчайшего пути?
// Что такое жадный алгоритм и как его применяют в задачах?
// Как реализовать поиск в графе с использованием DFS (поиск в глубину)?
// Работа с библиотеками и фреймворками:
// Что такое React и как его использовать для создания пользовательских интерфейсов?
// Чем React отличается от других JavaScript-фреймворков, например Angular или Vue?
// Как использовать Redux для управления состоянием в приложении на React?
// Что такое "компоненты" в React и как их создавать?
// Как работает JSX в React?
// Что такое props и как они используются в React-компонентах?
// Как использовать хук useState в React?
// Что такое хук useEffect в React и как он используется?
// Как организовать роутинг в React-приложении с помощью React Router?
// Как использовать хук useContext для управления глобальным состоянием в React?
// Продвинутый JavaScript:
// Как работает механизм асинхронности в JavaScript с использованием событийного цикла (event loop)?
// Как работает сборщик мусора в JavaScript и когда он очищает память?
// Что такое eval() в JavaScript и как его использовать?
// Как работают промисы в JavaScript и как использовать методы then, catch и finally?
// Что такое модули в JavaScript и как они реализованы?
// Как использовать шаблонные строки для форматирования строк в JavaScript?
// Что такое Web Workers в JavaScript и как их использовать для параллельных вычислений?
// Как работает механизм всплытия событий (event bubbling) в JavaScript?
// В чем разница между скоупами переменных var, let, const и их областью видимости?
// Как работает метод Object.defineProperty в JavaScript?
// Разное:
// Что такое JSON и как работать с ним в JavaScript?
// Как сгенерировать случайное число в JavaScript в заданном диапазоне?
// Как проверить, является ли строка валидным JSON в JavaScript?
// Что такое модульная система в JavaScript и как импортировать и экспортировать модули?
// Как реализовать кэширование данных в JavaScript?
// Как работать с API с использованием Fetch в JavaScript?
// Как настроить таймеры с использованием setInterval и setTimeout?
// Чем отличается метод slice() от метода splice() в JavaScript?
// Как работать с Date и Time в JavaScript?
// Как использовать методы работы с числами в JavaScript, такие как Math.round, Math.random, и другие?
// Что такое асинхронная итерация в JavaScript с использованием for await...of?

// вопросы от 700 до 800

// Что такое "Hoisting" в JavaScript и как он работает для переменных и функций?
// Чем отличается метод Object.freeze() от Object.seal() в JavaScript?
// Как работает метод Object.keys() и что он возвращает?
// Чем отличаются переменные с типами данных "primitives" и "objects" в JavaScript?
// Как работает метод Array.prototype.map() и в чем его отличие от forEach()?
// В чем заключается особенность работы с объектами и массивами в JavaScript при передаче их в функции?
// Что такое "лишение" переменной в JavaScript и как его избежать?
// Как работает метод Object.assign() и что он делает с объектами?
// Как с помощью JavaScript можно отслеживать события при изменении значений форм?
// Что такое паттерн "Модуль" и как его реализовать в JavaScript?
// Работа с DOM:
// Как получить доступ к атрибутам HTML-элемента с помощью JavaScript?
// Что такое innerHTML, textContent и чем они отличаются друг от друга?
// Как создать и добавить новый элемент в DOM с использованием createElement() и appendChild()?
// Как заблокировать редактирование элемента на странице с помощью JavaScript?
// Как получить родительский элемент с помощью JavaScript?
// Как изменить стили элемента в DOM с помощью JavaScript?
// Чем отличается метод getElementById() от querySelector()?
// Как использовать события мыши для создания интерактивных элементов в DOM?
// Как в JavaScript найти все дочерние элементы конкретного родителя?
// Что такое Shadow DOM и как его использовать для инкапсуляции стилей и поведения?
// Асинхронное программирование:
// В чем разница между асинхронной функцией и промисом в JavaScript?
// Как работает setTimeout() и setInterval() для отсроченных операций в JavaScript?
// Как отменить выполнение setTimeout() с помощью clearTimeout()?
// Как обрабатывать несколько асинхронных операций с помощью Promise.all()?
// Как использовать промисы в цепочке для асинхронных операций?
// Что такое "callback hell" и как его избежать?
// Как работает асинхронный код с async и await?
// Что такое Promise.resolve() и когда его использовать?
// Как работает метод finally() в промисах и в чем его полезность?
// Как обрабатывать ошибки в асинхронном коде с использованием try/catch и промисов?
// ООП (Объектно-Ориентированное Программирование):
// Чем отличается класс от объекта в JavaScript?
// Как создать класс в JavaScript и какие у него особенности?
// В чем разница между статическими и инстансными методами в классе?
// Как использовать наследование в JavaScript и что такое extends?
// Как работает ключевое слово super в классовом наследовании?
// Что такое инкапсуляция и как она используется в JavaScript?
// Чем отличается композиция от наследования в объектно-ориентированном подходе?
// Как реализовать методы для обработки данных в классе?
// Что такое приватные поля в классе и как их использовать в JavaScript?
// Как использовать абстрактные классы и интерфейсы в JavaScript (с помощью ES6)?
// Алгоритмы:
// Что такое линейный поиск и как он работает?
// Как реализовать сортировку слиянием в JavaScript?
// Что такое алгоритм быстрой сортировки и когда его использовать?
// Как работает алгоритм Кнута-Морриса-Пратта для поиска подстроки?
// Что такое жадные алгоритмы и какие примеры таких алгоритмов существуют?
// Как работает алгоритм поиска кратчайшего пути Дейкстры?
// Чем отличается глубинный поиск (DFS) от поисков в ширину (BFS)?
// Как реализовать бинарное дерево и какие алгоритмы с ним связаны?
// Что такое хеширование и как оно используется в алгоритмах поиска?
// Как решить задачу нахождения наибольшей общей подстроки между строками?
// Работа с библиотеками и фреймворками:
// Что такое React и почему его называют "библиотекой для построения UI"?
// Как работает хук useState в React и когда его нужно использовать?
// Как реализовать форму с использованием useState в React?
// В чем разница между функциональными и классовыми компонентами в React?
// Как управлять состоянием компонентов в React с помощью useContext?
// Как работают жизненные циклы компонентов в React (с использованием хуков)?
// Как в React использовать роутинг для создания многостраничного приложения?
// Как создать и передавать компоненты как пропсы в React?
// В чем разница между хелперами useEffect и useLayoutEffect в React?
// Как реализовать обработку форм с несколькими полями в React?
// Модули и сборка:
// Как работать с модулями в JavaScript, используя import и export?
// Что такое CommonJS и ES6 модули и как они отличаются?
// Как настроить Webpack для работы с JavaScript и другими файлами?
// В чем разница между module.exports и exports в Node.js?
// Как настроить Babel для транспиляции JavaScript кода в ES5?
// Как использовать системные модули и пространства имен в JavaScript?
// Что такое Tree Shaking и как это влияет на производительность?
// Как использовать интеграцию с TypeScript в проекте с Webpack?
// Как настроить и использовать ESLint в проекте JavaScript?
// Что такое Sourcemaps и как они помогают в отладке кода?
// Разное:
// Как реализовать функцию для случайного выбора элемента из массива?
// Что такое замыкания в JavaScript и как они используются?
// Как работает метод Object.create() в JavaScript?
// Что такое промисы и как с ними работать при асинхронных операциях?
// Как реализовать классический "каркас" приложения с использованием MVC?
// Как создать и работать с базой данных на стороне клиента с помощью IndexedDB?
// Как использовать фильтрацию и сортировку массивов в JavaScript?
// Как работает метод map() для создания нового массива?
// В чем заключается принцип работы WebSockets в JavaScript?
// Как использовать fetch API для работы с удаленными серверами?
// Продвинутые вопросы:
// Что такое Virtual DOM и как он работает в React?
// Как использовать SSR (Server-Side Rendering) с React?
// Как управлять состоянием в крупных приложениях с помощью Redux?
// Как оптимизировать производительность React-приложений?
// Как работает механизм событий в Node.js и как обработать асинхронные события?
// Что такое "middleware" в Node.js и как его использовать?
// Как настроить и использовать TypeScript в проектах Node.js и React?
// Как обработать ошибку в асинхронных операциях с использованием async/await?
// Как реализовать систему кеширования в Node.js?
// Как использовать Docker для контейнеризации JavaScript приложений?
// Опережающие темы:
// Что такое GraphQL и как он отличается от REST API?
// Как использовать Web Workers для параллельных вычислений в JavaScript?
// В чем суть архитектуры "Microservices" и как ее реализовать в JavaScript?
// Как создать и управлять Web Components в JavaScript?
// Как использовать Firebase для работы с базой данных в реальном времени?
// Что такое WebAssembly и как его использовать с JavaScript?
// Как создавать динамические страницы с помощью Serverless Framework?
// Что такое Progressive Web Apps (PWA) и как их создать?
// Как использовать технологию IndexedDB для хранения данных на стороне клиента?
// Как интегрировать и использовать GraphQL с клиентами на React?

// вопросы от 800 до 900

// Чем отличается == от === в JavaScript?
// Как работает оператор "спред" (...) в JavaScript?
// Что такое null и чем оно отличается от undefined?
// Как в JavaScript проверяется тип данных?
// Как работает метод Array.prototype.filter() в JavaScript?
// Что такое тернарный оператор и как его использовать?
// Как работает метод Array.prototype.reduce() и в чем его особенности?
// Что такое события в JavaScript и как их обрабатывать?
// Чем отличается метод forEach() от метода map() в JavaScript?
// Как работает оператор typeof и когда он может дать неожиданный результат?
// Работа с DOM:
// Как работает метод addEventListener() для добавления обработчиков событий в DOM?
// Как удалить элемент из DOM с помощью JavaScript?
// Как изменить класс элемента с помощью JavaScript?
// Как использовать атрибут data-* для хранения пользовательских данных в HTML?
// Чем отличается метод createElement() от innerHTML?
// Как работает метод querySelectorAll() и чем он отличается от getElementsByClassName()?
// Как можно скрыть элемент на странице с помощью JavaScript?
// Как изменить стиль элемента с помощью style в JavaScript?
// Как удалить атрибут у элемента с помощью JavaScript?
// Что такое атрибуты HTML5 и как их можно использовать с помощью JavaScript?
// Асинхронное программирование:
// Что такое асинхронные функции в JavaScript и как их использовать?
// В чем отличие между асинхронной функцией и промисом?
// Как использовать оператор await внутри асинхронной функции?
// Как обработать ошибку в асинхронных функциях с помощью try...catch?
// Как отменить выполнение асинхронной операции с использованием AbortController?
// Чем отличается асинхронный код с async/await от цепочек промисов?
// Что такое микротаски и макротаски в JavaScript?
// Как использовать функцию Promise.race()?
// Как обрабатывать несколько промисов с помощью Promise.allSettled()?
// Что такое таймеры в JavaScript и как их использовать для асинхронных операций?
// ООП (Объектно-Ориентированное Программирование):
// Что такое конструктор в JavaScript и как его использовать?
// Как работает наследование в JavaScript с использованием ключевого слова extends?
// Как реализовать полиморфизм в JavaScript?
// Чем отличается инкапсуляция от абстракции в ООП?
// Что такое "классическая" и "прототипная" модель наследования в JavaScript?
// Как реализовать приватные методы и поля в классе JavaScript?
// В чем разница между class и function в контексте ООП?
// Как использовать композицию вместо наследования для создания сложных объектов?
// Что такое интерфейсы в ООП и как они могут быть реализованы в JavaScript?
// Как работает метод call() и apply() в контексте ООП в JavaScript?
// Алгоритмы:
// Как работает алгоритм поиска в глубину (DFS)?
// Как работает алгоритм поиска в ширину (BFS)?
// Что такое сортировка слиянием и как она работает?
// Как реализовать бинарный поиск в отсортированном массиве?
// В чем разница между алгоритмами сортировки пузырьком и быстрой сортировкой?
// Как работает алгоритм Кнута-Морриса-Пратта для поиска подстроки?
// Что такое хеш-таблицы и как они используются для поиска данных?
// Как решается задача о нахождении кратчайшего пути с использованием алгоритма Дейкстры?
// Что такое динамическое программирование и как его применить к задаче о рюкзаке?
// Что такое жадные алгоритмы и как они используются для оптимизации задач?
// Работа с библиотеками и фреймворками:
// Что такое Redux и как он используется для управления состоянием в приложениях?
// Как работает механизм связывания данных в React с использованием props и state?
// Что такое useEffect() в React и когда его следует использовать?
// Как реализовать маршрутизацию в приложении на React с использованием React Router?
// Что такое контекст в React и как его использовать для передачи данных между компонентами?
// Как в React организовать работу с формами и их валидацией?
// Как создавать кастомные хуки в React и для чего они нужны?
// В чем разница между функциональными и классовыми компонентами в React?
// Как настроить проект с использованием Next.js для серверного рендеринга?
// Что такое "styled-components" и как они используются для стилизации в React?
// Модули и сборка:
// Что такое Webpack и как он помогает при сборке JavaScript-приложений?
// Как настроить Babel для использования ES6+ синтаксиса в старых браузерах?
// Что такое Tree Shaking и как он улучшает производительность?
// Как использовать Lazy Loading для загрузки модулей в JavaScript?
// Как настроить и использовать TypeScript в проекте?
// Как работает система модулей в Node.js и что такое require() и module.exports?
// Как настроить и использовать систему сборки Parcel для JavaScript проектов?
// Что такое Minification и как она помогает оптимизировать размер кода?
// Что такое Hot Module Replacement (HMR) и как его использовать в процессе разработки?
// Как настроить проект для использования с Vite?
// Разное:
// Что такое JSON и как с ним работать в JavaScript?
// Как хранить данные на стороне клиента с помощью LocalStorage и SessionStorage?
// Как реализовать кеширование в JavaScript для ускорения загрузки данных?
// Как работать с изображениями и мультимедийными файлами в JavaScript?
// Что такое Web Workers и как их использовать для выполнения параллельных задач в браузере?
// Как реализовать обработку ошибок в JavaScript приложении?
// Как использовать регулярные выражения в JavaScript для поиска и замены текста?
// Как работать с файлами на стороне клиента с использованием API FileReader?
// Что такое CORS и как настроить доступ к ресурсам с разных доменов?
// Как использовать API для работы с геолокацией в браузере?
// Продвинутые вопросы:
// Что такое GraphQL и как он отличается от REST API?
// Как настроить Server-Side Rendering (SSR) в React?
// Как реализовать серверless-приложения с использованием AWS Lambda?
// Как использовать WebSockets для реализации реального времени в веб-приложениях?
// Как работает Cloud Functions в Google Cloud?
// Что такое micro-frontends и как их реализовать в JavaScript приложении?
// Как использовать и настроить Firebase для работы с данными в реальном времени?
// Что такое WebAssembly и как его использовать для выполнения кода в браузере?
// Как настроить CI/CD процессы для JavaScript проектов?
// Что такое Progressive Web App (PWA) и как его создать?
// Опережающие темы:
// Как использовать контейнеризацию с Docker для JavaScript приложений?
// Что такое Kubernetes и как он используется для оркестрации контейнеров?
// Как использовать данные с API в реальном времени с использованием WebSockets?
// Как реализовать систему аутентификации и авторизации в JavaScript приложении?
// Как использовать OAuth 2.0 для авторизации в веб-приложениях?
// Что такое Blockchain и как его интегрировать с JavaScript приложениями?
// Как использовать D3.js для визуализации данных на веб-страницах?
// Как использовать TypeScript в больших JavaScript приложениях?
// Как создать и использовать собственные хук и хуки для управления состоянием в React?
// Что такое CI/CD и как его настроить для работы с GitHub Actions?

// вопросы от 900 до 1000

// Каковы особенности работы с числами с плавающей точкой в JavaScript?
// Как в JavaScript объявить и использовать константу?
// Что такое замыкания (closures) в JavaScript и как они работают?
// Что такое "this" в контексте JavaScript и как его значение зависит от контекста?
// Как работает метод Array.prototype.some() в JavaScript?
// Как работает метод Array.prototype.every() в JavaScript?
// Что такое NaN и как с ним работать?
// Как работают стрелочные функции и в чем их отличие от обычных функций?
// Что такое async/await и как они работают в асинхронных функциях?
// Как в JavaScript работать с операторами деструктуризации объектов и массивов?
// Работа с DOM:
// Как работает метод setAttribute() для изменения атрибутов элемента в DOM?
// Как добавить новый элемент в DOM с помощью JavaScript?
// Чем отличается метод innerHTML от textContent?
// Как с помощью JavaScript изменить содержимое элемента на странице?
// Как обработать несколько событий на одном элементе с помощью addEventListener()?
// Как можно реализовать всплывающее окно на странице с помощью JavaScript?
// Что такое событие DOMContentLoaded и когда оно срабатывает?
// Как найти элемент в DOM по его id с помощью JavaScript?
// Чем отличается метод insertBefore() от appendChild() в DOM?
// Как отслеживать изменения в DOM с помощью MutationObserver?
// Асинхронное программирование:
// Что такое промисы и как их использовать в асинхронном коде?
// Как работает метод Promise.all() для обработки нескольких промисов?
// Как обрабатывать ошибку с помощью метода .catch() в промисах?
// Что такое цепочка промисов и как она работает?
// Как выполнить несколько асинхронных операций последовательно с использованием async/await?
// Что такое механизм событийной петли (Event Loop) в JavaScript?
// Чем отличается метод setTimeout() от setInterval()?
// Как отменить выполнение setTimeout() или setInterval()?
// Что такое асинхронные итераторы и как с ними работать?
// Что такое Promise.finally() и как его использовать?
// ООП (Объектно-Ориентированное Программирование):
// Как работает концепция наследования в JavaScript с помощью extends?
// Что такое методы и свойства экземпляров классов в JavaScript?
// Как создать статические методы в классе JavaScript?
// Как реализовать метод toString() для кастомного объекта?
// Чем отличается метод bind() от call() и apply() в JavaScript?
// Как реализовать интерфейсы в JavaScript?
// Как использовать композицию объектов для повторного использования кода в JavaScript?
// Что такое абстракция в ООП и как она реализуется в JavaScript?
// Как работать с приватными полями и методами в классе JavaScript?
// Как организовать полиморфизм в JavaScript?
// Алгоритмы:
// Как работает алгоритм быстрой сортировки (Quicksort)?
// Что такое сортировка пузырьком и как она работает?
// Как работает алгоритм поиска в бинарном дереве?
// В чем отличие между линейным и бинарным поиском?
// Как работает алгоритм поиска на графах?
// Что такое динамическое программирование и как его использовать для решения задач?
// Как вычислить наибольший общий делитель (НОД) с помощью алгоритма Евклида?
// Как работает алгоритм нахождения наименьшего общего кратного (НОК)?
// Как реализовать обход графа в глубину (DFS)?
// Как реализовать обход графа в ширину (BFS)?
// Работа с библиотеками и фреймворками:
// Как настроить проект с использованием Vue.js?
// Как работает концепция реактивности в Vue.js?
// Как в Vue.js работает директива v-bind?
// Как организовать маршрутизацию с использованием Vue Router?
// Что такое Vuex и как он используется для управления состоянием в приложении?
// Как реализовать обработку форм в Vue.js?
// Чем отличается Vue.js от React?
// Как настроить компонент в React с использованием hooks?
// Как работает JSX в React и чем он отличается от обычного HTML?
// Как организовать работу с сервером с помощью Axios в React или Vue?
// Модули и сборка:
// Как использовать модульную систему в ES6?
// Что такое import и export в ES6 и как они работают?
// Как настроить Webpack для работы с JavaScript проектом?
// Как настроить Babel для использования современных JavaScript возможностей в старых браузерах?
// Что такое Tree Shaking и как он помогает уменьшить размер бандла?
// Как использовать NPM для управления зависимостями в проекте?
// Как настроить TypeScript для работы с React?
// Что такое метаданные и как они используются в JavaScript модулях?
// Как использовать module.exports и require в Node.js для работы с модулями?
// Как создать собственный Webpack плагин?
// Разное:
// Что такое JSONP и как его использовать для получения данных с разных доменов?
// Как хранить данные на клиентской стороне с помощью LocalStorage или SessionStorage?
// Что такое CORS и как его можно настроить?
// Как работать с файлами на стороне клиента с использованием API FileReader?
// Как использовать регулярные выражения для поиска и замены в строках JavaScript?
// Что такое WebSocket и как его использовать для общения с сервером в реальном времени?
// Как настроить и использовать OAuth для аутентификации в JavaScript приложениях?
// Как работать с геолокацией в браузере с использованием Geolocation API?
// Как работает API для работы с камерами и микрофонами в браузере?
// Как защитить веб-приложение от XSS-атак?
// Продвинутые темы:
// Как настроить Server-Side Rendering (SSR) с использованием React или Vue?
// Что такое Serverless архитектура и как её реализовать с помощью AWS Lambda?
// Как работать с WebAssembly в JavaScript?
// Что такое Microservices архитектура и как её интегрировать с фронтендом?
// Как использовать Docker для контейнеризации приложений?
// Как работать с графами в JavaScript?
// Как использовать GraphQL вместо REST API?
// Как создать PWA (Progressive Web App) с использованием JavaScript?
// Что такое Kubernetes и как его использовать для оркестрации контейнеров?
// Как настроить CI/CD для автоматической сборки и деплоя JavaScript приложений?
// Опережающие темы:
// Что такое Machine Learning и как интегрировать его с JavaScript?
// Как работать с потоками данных в Node.js?
// Как использовать D3.js для визуализации данных на веб-странице?
// Как настроить облачное хранилище для хранения данных в JavaScript приложении?
// Что такое Blockchain и как использовать его в JavaScript?
// Как работать с Big Data с использованием JavaScript?
// Как настроить кластеризацию для масштабируемых приложений в Node.js?
// Как реализовать автоматическое масштабирование с использованием облачных сервисов?
// Что такое микрофронтенды и как они помогают в архитектуре крупных приложений?
// Как использовать WebRTC для реализации видео-звонков в JavaScript?

// продвинутый уровень 😎😎😎

// 1001. Массивы и строки
// Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.
// Напишите функцию, которая находит наибольшее число в массиве.
// Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны).
// Напишите функцию, которая удаляет все дубликаты из массива.
// Напишите функцию, которая находит все четные числа в массиве.
// Напишите функцию, которая объединяет два массива в один, без повторяющихся элементов.
// 1002. Алгоритмы и структуры данных
// Напишите функцию, которая сортирует массив чисел по возрастанию.
// Напишите функцию, которая находит два числа в массиве, сумма которых равна заданному числу.
// Напишите функцию, которая реализует алгоритм поиска бинарным методом.
// Напишите функцию для вычисления факториала числа.
// Напишите функцию для нахождения максимума в двусвязном списке.
// Напишите функцию, которая переворачивает стек.
// 1003. Объекты и функции
// Напишите функцию, которая принимает объект и выводит все его ключи.
// Напишите функцию, которая проверяет, существует ли свойство в объекте.
// Напишите функцию, которая клонирует объект (глубокое и поверхностное копирование).
// Напишите функцию, которая суммирует все числовые свойства объекта.
// Напишите функцию, которая форматирует объект в строку с ключами и значениями.
// Напишите функцию, которая выводит все свойства объекта, которые являются массивами.
// 1004. Работа с DOM
// Напишите функцию, которая меняет цвет фона веб-страницы при клике на кнопку.
// Напишите функцию, которая динамически создает список на основе массива строк.
// Напишите функцию, которая находит все элементы с определенным классом на странице.
// Напишите функцию, которая меняет текст в элементе по id на странице.
// Напишите функцию, которая добавляет новый элемент в DOM с помощью JavaScript.
// Напишите функцию, которая скрывает элемент на странице по его id.
// 1005. Асинхронное программирование
// Напишите функцию, которая использует setTimeout для выполнения задачи через 2 секунды.
// Напишите функцию, которая обрабатывает несколько асинхронных операций с использованием Promise.all().
// Напишите функцию, которая выполняет асинхронную задачу с использованием async/await.
// Напишите функцию, которая обрабатывает ошибку в асинхронной операции с использованием try/catch.
// Напишите функцию, которая по очереди выполняет два промиса, используя цепочку промисов.
// Напишите функцию, которая получает данные из API с использованием fetch и выводит их в консоль.
// 1006. ООП (Объектно-Ориентированное Программирование)
// Напишите класс для представления книги с полями title, author и методом getDetails(), который выводит информацию о книге.
// Напишите класс для представления автомобиля с методами для старта и остановки двигателя.
// Напишите класс для представления счетчика, который имеет методы для увеличения, уменьшения и сброса значения.
// Напишите класс для представления прямоугольника с методами для расчета площади и периметра.
// Напишите класс для представления банковского счета с методами для пополнения и снятия средств.
// Напишите класс для представления студента с методом, который выводит список всех оценок студента.
// 1007. Типизация и работа с TypeScript
// Напишите интерфейс для представления пользователя с полями id, name и email.
// Напишите функцию, которая принимает объект, соответствующий интерфейсу пользователя, и выводит его данные.
// Напишите тип для функции, которая принимает два числа и возвращает их сумму.
// Напишите тип для функции, которая принимает строку и массив чисел и возвращает новый массив.
// Напишите тип для функции, которая принимает объект и возвращает новый объект с добавленным свойством.
// Напишите тип для метода, который принимает объект с неопределенными свойствами и выводит их.
// 1008. Работа с HTTP и API
// Напишите функцию, которая отправляет GET-запрос к API и выводит данные в консоль.
// Напишите функцию, которая отправляет POST-запрос с данными в API.
// Напишите функцию, которая использует fetch для получения данных и обрабатывает ошибки.
// Напишите функцию, которая использует XMLHttpRequest для выполнения GET-запроса.
// Напишите функцию, которая отправляет запрос на сервер и обрабатывает ответы с различными статусами.
// Напишите функцию, которая обрабатывает JSON-ответ от сервера и выводит результат.
// 1009. Модульность и сборка
// Напишите функцию, которая импортирует модуль и использует его метод.
// Напишите функцию, которая экспортирует объект и используется в другом файле.
// Напишите настройку Webpack для проекта с использованием ES6-модулей.
// Напишите настройку для TypeScript-проекта, который использует различные модули.
// Напишите конфигурацию для использования Babel в проекте для поддержки старых браузеров.
// Напишите конфигурацию для работы с React в Webpack.
// 1010. Оптимизация и производительность
// Напишите функцию, которая предотвращает множественные нажатия на кнопку с помощью debounce.
// Напишите функцию, которая оптимизирует производительность при рендеринге большого списка данных.
// Напишите функцию, которая использует memoization для улучшения производительности.
// Напишите функцию, которая использует асинхронные итераторы для обработки больших данных.
// Напишите функцию, которая удаляет неиспользуемые переменные и функции для улучшения производительности.
// Напишите функцию, которая использует Web Workers для выполнения ресурсоемких операций в фоновом режиме.

// 1011. Регулярные выражения
// Напишите регулярное выражение, которое проверяет, является ли строка валидным email.
// Напишите регулярное выражение, которое находит все цифры в строке.
// Напишите регулярное выражение, которое проверяет, является ли строка валидным номером телефона (например, в формате (XXX) XXX-XXXX).
// Напишите регулярное выражение, которое удаляет все пробелы из строки.
// Напишите регулярное выражение, которое проверяет, является ли строка палиндромом.
// Напишите регулярное выражение, которое заменяет все вхождения слова "javascript" на "JS" в строке.
// 1012. Функции высшего порядка
// Напишите функцию, которая принимает другую функцию и вызывает ее дважды.
// Напишите функцию, которая возвращает другую функцию для умножения числа на заданное значение.
// Напишите функцию, которая принимает два числа и применяет к ним все переданные функции в массиве.
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел, умноженных на 2, с использованием map.
// Напишите функцию, которая фильтрует массив чисел, оставляя только те, которые больше заданного значения.
// Напишите функцию, которая уменьшает каждый элемент массива на определенное число с использованием reduce.
// 1013. Сложные структуры данных
// Напишите функцию, которая находит элемент в дереве по его значению.
// Напишите функцию, которая находит все пути в графе между двумя узлами.
// Напишите функцию, которая реализует очередь с приоритетом.
// Напишите функцию, которая возвращает все возможные комбинации элементов в массиве.
// Напишите функцию, которая проверяет, является ли дерево бинарным деревом поиска.
// Напишите функцию, которая конвертирует двумерный массив в одномерный.
// 1014. Работа с датами и временем
// Напишите функцию, которая находит разницу между двумя датами в днях.
// Напишите функцию, которая проверяет, является ли год високосным.
// Напишите функцию, которая форматирует дату в строку в формате "день-месяц-год".
// Напишите функцию, которая возвращает текущее время в формате "HH:mm:ss".
// Напишите функцию, которая преобразует строку времени в формат 24 часа.
// Напишите функцию, которая вычисляет количество дней между двумя датами с учетом учета високосных лет.
// 1015. Алгоритмы поиска
// Напишите функцию, которая ищет элемент в отсортированном массиве с помощью бинарного поиска.
// Напишите функцию, которая находит наименьший элемент в массиве.
// Напишите функцию, которая реализует алгоритм линейного поиска.
// Напишите функцию, которая находит все индексы заданного элемента в массиве.
// Напишите функцию, которая находит все уникальные элементы в массиве с помощью поиска.
// Напишите функцию, которая находит все вхождения подстроки в строке.
// 1016. Форматы данных
// Напишите функцию, которая преобразует объект в строку JSON и обратно.
// Напишите функцию, которая создает объект из строки параметров URL.
// Напишите функцию, которая парсит CSV строку в массив объектов.
// Напишите функцию, которая конвертирует XML в объект JSON.
// Напишите функцию, которая проверяет, является ли строка валидным JSON.
// Напишите функцию, которая записывает объект в файл JSON.
// 1017. Производительность кода
// Напишите функцию, которая измеряет время выполнения другого кода.
// Напишите функцию, которая вычисляет степень числа, используя экспоненциальный алгоритм.
// Напишите функцию, которая выполняет операции с массивом и сравните скорость работы с использованием обычного цикла и map.
// Напишите функцию, которая использует бинарный поиск для поиска элемента в большом массиве и замеряет время работы.
// Напишите функцию, которая вычисляет все простые числа до заданного числа с использованием алгоритма "Решето Эратосфена".
// Напишите функцию, которая оптимизирует поиск на основе данных в хэш-таблице.
// 1018. Модульность кода
// Напишите функцию, которая делит код на модули и подключает их к основному файлу.
// Напишите функцию, которая генерирует модуль для работы с API.
// Напишите функцию, которая включает и выключает определенные модули в зависимости от конфигурации.
// Напишите функцию, которая компилирует код из нескольких модулей в один.
// Напишите функцию, которая обеспечивает динамическую загрузку модулей по требованию.
// Напишите функцию, которая проверяет, является ли объект модулем.
// 1019. Тестирование и отладка
// Напишите функцию, которая генерирует тесты для каждой функции в проекте.
// Напишите функцию, которая проверяет, выполняется ли код без ошибок.
// Напишите функцию, которая проверяет корректность работы алгоритма с разными наборами входных данных.
// Напишите функцию, которая анализирует покрытие кода тестами.
// Напишите функцию, которая выводит стек вызовов при ошибке.
// Напишите функцию, которая находит и исправляет утечку памяти в коде.
// 1020. Работа с изображениями
// Напишите функцию, которая изменяет размер изображения на заданную ширину и высоту.
// Напишите функцию, которая конвертирует изображение в формат base64.
// Напишите функцию, которая загружает изображение и отображает его в img элементе на странице.
// Напишите функцию, которая создает миниатюру изображения с использованием canvas.
// Напишите функцию, которая накладывает фильтры на изображение с использованием canvas.
// Напишите функцию, которая анимирует изображение с помощью CSS и JavaScript.

// 1021. Обработка ошибок
// Напишите функцию, которая обрабатывает ошибку и выводит ее сообщение в консоль.
// Напишите функцию, которая возвращает результат операции деления с обработкой ошибки деления на ноль.
// Напишите функцию, которая принимает данные и проверяет их тип. Если тип не совпадает, выбрасывает ошибку.
// Напишите функцию, которая выполняет операцию над числами, но в случае возникновения ошибки возвращает сообщение об ошибке.
// Напишите функцию, которая проверяет корректность данных перед отправкой их на сервер (например, проверка формата email).
// Напишите функцию, которая вызывает другую функцию и перехватывает все возможные ошибки с помощью try-catch.
// 1022. Оптимизация кода
// Напишите функцию, которая оптимизирует алгоритм сортировки для больших объемов данных.
// Напишите функцию, которая применяет кэширование для часто вызываемой функции.
// Напишите функцию, которая выполняет вычисления на основе данных и минимизирует количество вызовов API.
// Напишите функцию, которая оптимизирует использование памяти при хранении данных.
// Напишите функцию, которая использует алгоритм быстрой сортировки для сортировки массива.
// Напишите функцию, которая оптимизирует алгоритм поиска по большому массиву данных с использованием бинарного поиска.
// 1023. Асинхронность и промисы
// Напишите функцию, которая выполняет асинхронный запрос с использованием async/await.
// Напишите функцию, которая создает и обрабатывает промис с результатом успешного выполнения.
// Напишите функцию, которая выполняет несколько асинхронных операций параллельно с использованием Promise.all.
// Напишите функцию, которая использует setTimeout для задержки выполнения кода.
// Напишите функцию, которая выполняет асинхронную операцию и откатывает изменения в случае ошибки.
// Напишите функцию, которая обрабатывает асинхронные ошибки с использованием try-catch.
// 1024. Рекурсия
// Напишите рекурсивную функцию, которая вычисляет факториал числа.
// Напишите рекурсивную функцию, которая находит сумму элементов массива.
// Напишите рекурсивную функцию, которая ищет максимальное значение в массиве.
// Напишите рекурсивную функцию, которая генерирует все возможные комбинации элементов массива.
// Напишите рекурсивную функцию, которая преобразует число в строку в двоичной системе счисления.
// Напишите рекурсивную функцию, которая вычисляет число Фибоначчи.
// 1025. Математические задачи
// Напишите функцию, которая находит наибольший общий делитель двух чисел.
// Напишите функцию, которая находит наименьшее общее кратное двух чисел.
// Напишите функцию, которая проверяет, является ли число простым.
// Напишите функцию, которая находит сумму всех чисел в массиве.
// Напишите функцию, которая вычисляет степень числа с использованием рекурсии.
// Напишите функцию, которая вычисляет квадратный корень числа с использованием метода Ньютона.
// 1026. Работа с массивами
// Напишите функцию, которая находит второй наибольший элемент в массиве.
// Напишите функцию, которая объединяет два массива в один без дубликатов.
// Напишите функцию, которая проверяет, является ли массив подмножеством другого массива.
// Напишите функцию, которая удаляет дубликаты из массива.
// Напишите функцию, которая находит все пары чисел в массиве, сумма которых равна заданному числу.
// Напишите функцию, которая переворачивает массив без использования встроенных методов.
// 1027. Функции и замыкания
// Напишите функцию, которая возвращает замыкание и запоминает состояние между вызовами.
// Напишите функцию, которая создает счетчик, увеличивающий значение при каждом вызове.
// Напишите функцию, которая принимает другую функцию и возвращает ее результат с кешированием.
// Напишите функцию, которая возвращает функцию для подсчета количества вызовов.
// Напишите функцию, которая генерирует уникальный идентификатор при каждом вызове.
// Напишите функцию, которая выполняет операцию и кеширует результат для повторных вызовов.
// 1028. Работа с объектами
// Напишите функцию, которая сравнивает два объекта на равенство.
// Напишите функцию, которая копирует все свойства из одного объекта в другой.
// Напишите функцию, которая удаляет свойство из объекта.
// Напишите функцию, которая проверяет, существует ли свойство в объекте.
// Напишите функцию, которая добавляет новое свойство в объект.
// Напишите функцию, которая создает новый объект, комбинируя несколько объектов.
// 1029. Работа с DOM
// Напишите функцию, которая изменяет содержимое элемента по id.
// Напишите функцию, которая создает новый элемент и добавляет его в DOM.
// Напишите функцию, которая удаляет элемент из DOM.
// Напишите функцию, которая добавляет обработчик события на клик для всех элементов на странице.
// Напишите функцию, которая находит все элементы с классом и изменяет их стиль.
// Напишите функцию, которая слушает событие прокрутки страницы и выводит сообщение в консоль.
// 1030. Классы и ООП
// Напишите класс для представления прямоугольника, который имеет методы для вычисления площади и периметра.
// Напишите класс для работы с банковскими счетами, который позволяет снимать и пополнять деньги.
// Напишите класс, который хранит информацию о студенте и позволяет изменять оценки.
// Напишите класс для создания и работы с коллекцией объектов.
// Напишите класс, который реализует паттерн "Одиночка" (Singleton).
// Напишите класс, который реализует базовую структуру данных "Стек" с методами push и pop.

// 1031. Алгоритмы поиска
// Напишите функцию, которая выполняет линейный поиск элемента в массиве.
// Напишите функцию, которая выполняет бинарный поиск элемента в отсортированном массиве.
// Напишите функцию, которая находит индекс первого вхождения элемента в строку.
// Напишите функцию, которая реализует алгоритм поиска на графе с использованием поиска в глубину (DFS).
// Напишите функцию, которая реализует алгоритм поиска на графе с использованием поиска в ширину (BFS).
// Напишите функцию, которая находит все индексы элемента в массиве.
// 1032. Алгоритмы сортировки
// Напишите функцию, которая реализует пузырьковую сортировку массива.
// Напишите функцию, которая реализует сортировку вставками.
// Напишите функцию, которая реализует сортировку слиянием.
// Напишите функцию, которая реализует быструю сортировку.
// Напишите функцию, которая сортирует массив по числовым значениям (от наименьшего к наибольшему).
// Напишите функцию, которая сортирует массив по строковым значениям в алфавитном порядке.
// 1033. Генерация случайных данных
// Напишите функцию, которая генерирует случайное число в заданном диапазоне.
// Напишите функцию, которая генерирует случайную строку из букв и цифр длиной n.
// Напишите функцию, которая генерирует случайную дату в определенном диапазоне.
// Напишите функцию, которая генерирует случайный элемент из массива.
// Напишите функцию, которая генерирует массив случайных чисел заданной длины.
// Напишите функцию, которая генерирует случайный уникальный идентификатор для пользователя.
// 1034. Работа с датами и временем
// Напишите функцию, которая вычисляет количество дней между двумя датами.
// Напишите функцию, которая возвращает текущую дату в формате "ДД-ММ-ГГГГ".
// Напишите функцию, которая вычисляет разницу во времени между двумя событиями в часах и минутах.
// Напишите функцию, которая находит день недели для заданной даты.
// Напишите функцию, которая преобразует строку в формат даты.
// Напишите функцию, которая проверяет, является ли год високосным.
// 1035. Манипуляции с строками
// Напишите функцию, которая переворачивает строку.
// Напишите функцию, которая проверяет, является ли строка палиндромом.
// Напишите функцию, которая удаляет все пробелы из строки.
// Напишите функцию, которая проверяет, является ли строка анаграммой другой строки.
// Напишите функцию, которая считает количество вхождений подстроки в строку.
// Напишите функцию, которая заменяет все пробелы в строке на дефисы.
// 1036. Работа с массивами объектов
// Напишите функцию, которая сортирует массив объектов по ключу.
// Напишите функцию, которая фильтрует массив объектов по значению ключа.
// Напишите функцию, которая группирует массив объектов по значению одного из ключей.
// Напишите функцию, которая находит объект в массиве по уникальному идентификатору.
// Напишите функцию, которая находит объект с максимальным значением ключа в массиве.
// Напишите функцию, которая изменяет значение одного из ключей в объекте массива.
// 1037. Структуры данных
// Напишите функцию, которая реализует структуру данных "Очередь" (Queue).
// Напишите функцию, которая реализует структуру данных "Стек" (Stack).
// Напишите функцию, которая реализует структуру данных "Связанный список".
// Напишите функцию, которая реализует структуру данных "Хеш-таблица".
// Напишите функцию, которая реализует структуру данных "Двоичное дерево поиска".
// Напишите функцию, которая реализует структуру данных "Граф" с использованием списка смежности.
// 1038. Реализация паттернов проектирования
// Напишите класс, который реализует паттерн "Фабрика" для создания различных объектов.
// Напишите класс, который реализует паттерн "Стратегия" для выбора разных алгоритмов.
// Напишите класс, который реализует паттерн "Одиночка" для ограничения количества экземпляров класса.
// Напишите класс, который реализует паттерн "Наблюдатель" для оповещения об изменениях.
// Напишите класс, который реализует паттерн "Декоратор" для динамического добавления функционала объекту.
// Напишите класс, который реализует паттерн "Команда" для инкапсуляции запросов в объекты.
// 1039. Работа с функциями высшего порядка
// Напишите функцию, которая принимает другую функцию и выполняет ее несколько раз.
// Напишите функцию, которая фильтрует массив, применяя переданную функцию.
// Напишите функцию, которая применяет переданную функцию к каждому элементу массива и возвращает новый массив.
// Напишите функцию, которая выполняет действия с массивом и возвращает результат с помощью функции обратного вызова.
// Напишите функцию, которая генерирует композицию функций (составляет несколько функций в одну).
// Напишите функцию, которая выполняет операцию с массивом, используя редуцирование значений с помощью функции.
// 1040. Тестирование и отладка
// Напишите тест для функции, которая проверяет, является ли число четным.
// Напишите тест для функции, которая возвращает максимальное число в массиве.
// Напишите тест для функции, которая обрабатывает ошибку деления на ноль.
// Напишите тест для функции, которая проверяет, является ли строка палиндромом.
// Напишите тест для функции, которая вычисляет факториал числа.
// Напишите тест для функции, которая проверяет, является ли строка числом.

// 1041. Работа с рекурсией
// Напишите рекурсивную функцию, которая вычисляет факториал числа.
// Напишите рекурсивную функцию, которая находит сумму элементов массива.
// Напишите рекурсивную функцию, которая выводит все элементы массива в обратном порядке.
// Напишите рекурсивную функцию, которая вычисляет Фибоначчи.
// Напишите рекурсивную функцию, которая проверяет, является ли строка палиндромом.
// Напишите рекурсивную функцию, которая находит наибольший общий делитель двух чисел.
// 1042. Оптимизация производительности
// Напишите функцию, которая оптимизирует сортировку большого массива с использованием быстрой сортировки.
// Напишите функцию, которая минимизирует количество повторных вычислений с помощью мемоизации.
// Напишите функцию, которая использует кеширование для ускорения выполнения часто вызываемой функции.
// Напишите функцию, которая делает асинхронный запрос с ограничением количества одновременных запросов (пула).
// Напишите функцию, которая выполняет отложенные вычисления и возвращает результат через некоторое время.
// Напишите функцию, которая избегает повторных вычислений при фильтрации больших данных.
// 1043. Работа с асинхронным кодом
// Напишите функцию, которая выполняет асинхронный запрос и обрабатывает результат с использованием async/await.
// Напишите функцию, которая выполняет несколько асинхронных запросов и возвращает все результаты.
// Напишите функцию, которая возвращает промис, который будет выполнен через определенное время.
// Напишите функцию, которая выполняет асинхронный запрос и обрабатывает ошибку с использованием try/catch.
// Напишите функцию, которая выполняет цепочку асинхронных запросов.
// Напишите функцию, которая обрабатывает несколько промисов параллельно с использованием Promise.all().
// 1044. Манипуляции с объектами и массивами
// Напишите функцию, которая копирует все свойства одного объекта в другой.
// Напишите функцию, которая создает новый объект с объединенными свойствами двух объектов.
// Напишите функцию, которая удаляет все ключи с определенным значением из объекта.
// Напишите функцию, которая находит минимальное и максимальное значение в массиве чисел.
// Напишите функцию, которая находит уникальные значения в массиве.
// Напишите функцию, которая фильтрует массив объектов по значениям нескольких ключей.
// 1045. Алгоритмы и структуры данных
// Напишите функцию, которая реализует алгоритм сортировки слиянием.
// Напишите функцию, которая реализует поиск в глубину на графе.
// Напишите функцию, которая реализует очередь с приоритетом.
// Напишите функцию, которая находит кратчайший путь в графе с использованием алгоритма Дейкстры.
// Напишите функцию, которая реализует двоичное дерево поиска.
// Напишите функцию, которая реализует хеш-таблицу.
// 1046. Работа с регулярными выражениями
// Напишите регулярное выражение для проверки, является ли строка электронной почтой.
// Напишите регулярное выражение для проверки, является ли строка URL.
// Напишите регулярное выражение для поиска всех чисел в строке.
// Напишите регулярное выражение для извлечения всех доменных имен из строки.
// Напишите регулярное выражение для проверки, является ли строка строкой, состоящей только из букв и цифр.
// Напишите регулярное выражение для извлечения всех дат в формате "ДД-ММ-ГГГГ".
// 1047. Реализация паттернов проектирования
// Напишите класс, который реализует паттерн "Стратегия" для выбора алгоритма сортировки.
// Напишите класс, который реализует паттерн "Одиночка" для создания единственного экземпляра объекта.
// Напишите класс, который реализует паттерн "Фабрика" для создания объектов с разными параметрами.
// Напишите класс, который реализует паттерн "Наблюдатель" для отслеживания изменений в объекте.
// Напишите класс, который реализует паттерн "Декоратор" для добавления нового функционала в объект.
// Напишите класс, который реализует паттерн "Адаптер" для приведения объектов разных интерфейсов к одному.
// 1048. Обработка ошибок
// Напишите функцию, которая выбрасывает ошибку, если число меньше нуля.
// Напишите функцию, которая обрабатывает ошибку деления на ноль.
// Напишите функцию, которая выбрасывает ошибку, если строка пуста.
// Напишите функцию, которая обрабатывает ошибку при запросе к API.
// Напишите функцию, которая проверяет входные данные и выбрасывает ошибку, если они некорректны.
// Напишите функцию, которая генерирует кастомное сообщение об ошибке.
// 1049. Работа с файлами (Node.js)
// Напишите функцию, которая читает текстовый файл и выводит его содержимое в консоль.
// Напишите функцию, которая записывает строку в текстовый файл.
// Напишите функцию, которая считывает файл и преобразует его содержимое в JSON.
// Напишите функцию, которая копирует файл из одной папки в другую.
// Напишите функцию, которая проверяет существование файла в файловой системе.
// Напишите функцию, которая удаляет файл из файловой системы.
// 1050. Работа с DOM (в браузере)
// Напишите функцию, которая изменяет текст на веб-странице по заданному селектору.
// Напишите функцию, которая добавляет новый элемент на страницу.
// Напишите функцию, которая удаляет элемент с веб-страницы.
// Напишите функцию, которая добавляет обработчик события на клик по кнопке.
// Напишите функцию, которая изменяет атрибут изображения на странице.
// Напишите функцию, которая изменяет стиль элемента на странице.

// 1051. Работа с асинхронным кодом (Node.js)
// Напишите функцию, которая асинхронно читает содержимое файла и выводит его в консоль.
// Напишите функцию, которая асинхронно записывает строку в файл.
// Напишите функцию, которая асинхронно копирует файл из одной директории в другую.
// Напишите функцию, которая асинхронно удаляет файл.
// Напишите функцию, которая асинхронно проверяет, существует ли файл в директории.
// Напишите функцию, которая асинхронно создает новый каталог в файловой системе.
// 1052. Работа с потоками данных (Streams)
// Напишите функцию, которая читает файл с помощью потока (stream) и выводит его содержимое.
// Напишите функцию, которая записывает данные в файл с использованием потока.
// Напишите функцию, которая читает поток данных и преобразует его в строку.
// Напишите функцию, которая с помощью потока данных считывает файл и преобразует его в JSON.
// Напишите функцию, которая применяет сжатие к потоку данных перед записью в файл.
// Напишите функцию, которая использует потоки для копирования данных из одного файла в другой.
// 1053. Работа с событиями (EventEmitter)
// Напишите класс, который эмитирует событие "data" и слушает это событие.
// Напишите класс, который эмитирует событие "error" и обрабатывает его с помощью обработчика ошибок.
// Напишите класс, который слушает несколько событий и реагирует на каждое.
// Напишите класс, который эмитирует событие "done" через заданное время.
// Напишите класс, который эмитирует событие "start", а потом после 5 секунд эмитирует событие "end".
// Напишите класс, который передает данные между событиями с использованием аргументов.
// 1054. Работа с HTTP-запросами (Node.js)
// Напишите функцию, которая отправляет GET-запрос на сервер и выводит ответ.
// Напишите функцию, которая отправляет POST-запрос с JSON-данными и выводит ответ.
// Напишите функцию, которая обрабатывает ошибки при отправке HTTP-запросов.
// Напишите функцию, которая отправляет запрос на сервер и выводит только статус-код ответа.
// Напишите функцию, которая отправляет GET-запрос и обрабатывает его с использованием async/await.
// Напишите функцию, которая отправляет запрос и проверяет, был ли ответ успешным (статус-код 2xx).
// 1055. Регулярные выражения (Regex)
// Напишите регулярное выражение для проверки, является ли строка валидным номером телефона.
// Напишите регулярное выражение для проверки, является ли строка валидным IP-адресом.
// Напишите регулярное выражение для извлечения всех email-адресов из текста.
// Напишите регулярное выражение для поиска всех ссылок в строке.
// Напишите регулярное выражение для проверки, состоит ли строка из букв и пробелов.
// Напишите регулярное выражение для замены всех пробелов в строке на дефисы.
// 1056. Обработка форм в браузере
// Напишите функцию, которая получает значение из поля ввода формы и выводит его.
// Напишите функцию, которая отправляет данные формы на сервер с помощью AJAX.
// Напишите функцию, которая валидирует форму, проверяя, что все обязательные поля заполнены.
// Напишите функцию, которая динамически добавляет новое поле ввода в форму.
// Напишите функцию, которая очищает все поля формы после отправки.
// Напишите функцию, которая предотвращает отправку формы при возникновении ошибки валидации.
// 1057. Работа с cookies и localStorage
// Напишите функцию, которая записывает cookie с заданным именем и значением.
// Напишите функцию, которая читает значение cookie по имени.
// Напишите функцию, которая удаляет cookie по имени.
// Напишите функцию, которая сохраняет данные в localStorage.
// Напишите функцию, которая читает данные из localStorage.
// Напишите функцию, которая удаляет данные из localStorage по ключу.
// 1058. Манипуляции с датами
// Напишите функцию, которая выводит текущую дату в формате "ДД-ММ-ГГГГ".
// Напишите функцию, которая добавляет 7 дней к текущей дате и выводит результат.
// Напишите функцию, которая вычисляет разницу между двумя датами в днях.
// Напишите функцию, которая проверяет, является ли текущая дата выходным днем.
// Напишите функцию, которая извлекает месяц из даты в формате "ММ".
// Напишите функцию, которая форматирует дату в строку с использованием библиотеки date-fns.
// 1059. Интерфейсы и абстракции
// Напишите интерфейс для хранения и извлечения данных из базы данных.
// Напишите класс, который реализует интерфейс для работы с файловой системой.
// Напишите интерфейс, который описывает методы для обработки JSON.
// Напишите класс, который реализует интерфейс для обработки запросов на сервер.
// Напишите абстрактный класс, который реализует методы для работы с базой данных.
// Напишите интерфейс для работы с платежными системами.
// 1060. Оптимизация кода
// Напишите функцию, которая выполняет оптимизацию поиска элементов в массиве с использованием бинарного поиска.
// Напишите функцию, которая применяет оптимизацию к алгоритму сортировки для малых массивов.
// Напишите функцию, которая использует кэширование для быстрого доступа к данным.
// Напишите функцию, которая уменьшает количество обращений к серверу при запросах в цикле.
// Напишите функцию, которая уменьшает количество операций в массиве, применяя методы, такие как map(), filter(), reduce().
// Напишите функцию, которая использует мемоизацию для ускорения выполнения рекурсивной функции.

// 1061. Генераторы и итераторы
// Напишите генератор, который возвращает числа от 1 до 10.
// Напишите генератор, который бесконечно генерирует последовательность чисел Фибоначчи.
// Напишите итератор, который итерирует по массиву, возвращая каждый элемент через заданный интервал времени.
// Напишите генератор, который возвращает значения массива в обратном порядке.
// Напишите функцию, которая использует генератор для перебора объектов с асинхронными запросами.
// Напишите итератор, который итерирует по строке и возвращает символы, пока не встретится пробел.
// 1062. Реализация простых алгоритмов
// Напишите функцию для нахождения наибольшего общего делителя (НОД) двух чисел с помощью алгоритма Евклида.
// Напишите функцию для нахождения наименьшего общего кратного (НОК) двух чисел.
// Напишите функцию для вычисления факториала числа с помощью рекурсии.
// Напишите функцию для проверки, является ли число простым.
// Напишите функцию для вычисления суммы всех чисел в диапазоне от 1 до N.
// Напишите функцию для нахождения числа в массиве с минимальной разницей от среднего значения.
// 1063. Динамическое программирование
// Напишите функцию для вычисления количества способов, которыми можно достичь числа N, используя только 1 и 2.
// Напишите функцию, которая находит наибольшую общую подстроку в двух строках с использованием динамического программирования.
// Напишите функцию, которая решает задачу о рюкзаке с динамическим программированием.
// Напишите функцию для нахождения максимальной суммы подмассива с использованием динамического программирования.
// Напишите функцию для нахождения количества способов построить лестницу, если можно делать шаги на 1 или 2.
// Напишите функцию для нахождения минимальной стоимости пути в сетке с ограничениями.
// 1064. Алгоритмы сортировки
// Напишите функцию для сортировки массива с использованием пузырьковой сортировки.
// Напишите функцию для сортировки массива с использованием быстрой сортировки.
// Напишите функцию для сортировки массива с использованием сортировки слиянием.
// Напишите функцию для сортировки массива с использованием сортировки вставками.
// Напишите функцию для сортировки массива с использованием сортировки выбором.
// Напишите функцию для сортировки массива строк по длине строки.
// 1065. Работа с деревьями
// Напишите функцию для создания бинарного дерева поиска (BST).
// Напишите функцию для поиска элемента в бинарном дереве поиска.
// Напишите функцию для обхода бинарного дерева поиска в глубину (pre-order).
// Напишите функцию для обхода бинарного дерева поиска в ширину.
// Напишите функцию для нахождения минимального и максимального значения в бинарном дереве поиска.
// Напишите функцию для удаления элемента из бинарного дерева поиска.
// 1066. Работа с графами
// Напишите функцию для поиска в глубину (DFS) в графе.
// Напишите функцию для поиска в ширину (BFS) в графе.
// Напишите функцию для нахождения кратчайшего пути в графе с использованием алгоритма Дейкстры.
// Напишите функцию для нахождения кратчайшего пути в графе с использованием алгоритма Беллмана-Форда.
// Напишите функцию для нахождения всех компонент связности в неориентированном графе.
// Напишите функцию для проверки, является ли граф деревом.
// 1067. Использование шаблонов проектирования
// Напишите реализацию паттерна "Одиночка" (Singleton).
// Напишите реализацию паттерна "Фабрика" (Factory).
// Напишите реализацию паттерна "Стратегия" (Strategy).
// Напишите реализацию паттерна "Декоратор" (Decorator).
// Напишите реализацию паттерна "Наблюдатель" (Observer).
// Напишите реализацию паттерна "Адаптер" (Adapter).
// 1068. Параллельное и асинхронное программирование
// Напишите функцию, которая выполняет несколько асинхронных операций параллельно и ожидает их завершения.
// Напишите функцию, которая выполняет несколько асинхронных операций поочередно с использованием async/await.
// Напишите функцию, которая реализует простое ожидание с использованием Promise (например, задержка на заданное количество времени).
// Напишите функцию, которая использует Promise.all для выполнения нескольких асинхронных операций и выводит их результаты.
// Напишите функцию, которая реализует параллельное выполнение нескольких асинхронных операций с ограничением на количество одновременных запросов.
// Напишите функцию, которая обрабатывает асинхронную ошибку в цепочке промисов с помощью catch.
// 1069. Обработка ошибок
// Напишите функцию, которая обрабатывает ошибки в асинхронной операции с использованием try/catch.
// Напишите функцию, которая обрабатывает ошибки в промисах с использованием .catch().
// Напишите функцию, которая возвращает кастомную ошибку с помощью throw.
// Напишите функцию, которая логирует ошибку с использованием console.error.
// Напишите функцию, которая возвращает сообщение об ошибке в случае, если введено некорректное значение.
// Напишите функцию, которая обрабатывает асинхронные ошибки с использованием декоратора.
// 1070. Оптимизация памяти
// Напишите функцию, которая оптимизирует использование памяти при работе с большими массивами данных.
// Напишите функцию, которая применяет кэширование для ускорения поиска в большом массиве.
// Напишите функцию, которая уменьшает использование памяти при работе с большими строками.
// Напишите функцию, которая использует слабые ссылки для предотвращения утечек памяти.
// Напишите функцию, которая сжимает данные перед хранением в памяти.
// Напишите функцию, которая очищает кэш данных после использования.

// 1071. Работа с потоками данных
// Напишите функцию, которая создает поток для чтения и записи данных в файл.
// Напишите функцию для обработки потока данных и конвертации формата (например, преобразование CSV в JSON).
// Напишите функцию, которая читает данные из потока и обрабатывает их асинхронно.
// Напишите функцию для обработки большого количества данных с использованием потоков, избегая блокировки памяти.
// Напишите функцию для применения фильтрации и трансформации данных, используя потоки.
// Напишите функцию для реализации буфера данных при работе с потоками.
// 1072. Использование регулярных выражений
// Напишите функцию, которая проверяет, является ли строка адресом электронной почты с использованием регулярного выражения.
// Напишите функцию, которая извлекает все URL-адреса из текста с использованием регулярного выражения.
// Напишите функцию, которая извлекает все числа из строки с помощью регулярного выражения.
// Напишите функцию, которая проверяет, является ли строка валидным номером телефона.
// Напишите функцию, которая заменяет все пробелы на подчеркивания в строке с использованием регулярного выражения.
// Напишите функцию, которая находит все слова, начинающиеся с определенной буквы, с использованием регулярного выражения.
// 1073. Математические задачи
// Напишите функцию для вычисления чисел Фибоначчи с использованием формулы Бине.
// Напишите функцию, которая находит наибольший общий делитель для массива чисел.
// Напишите функцию для вычисления числа Пи с использованием метода Монте-Карло.
// Напишите функцию для вычисления факториала с использованием цикла.
// Напишите функцию для вычисления числа Эйлера с использованием ряда.
// Напишите функцию для нахождения простых чисел до N с использованием решета Эратосфена.
// 1074. Оптимизация алгоритмов
// Напишите функцию для поиска максимума в массиве с использованием алгоритма, оптимизированного по времени.
// Напишите функцию для поиска дубликатов в массиве и удаления их с минимальными затратами по времени.
// Напишите функцию, которая находит самое длинное увеличивающееся подмножество в массиве с помощью динамического программирования.
// Напишите функцию для сортировки массива с использованием оптимизированного алгоритма.
// Напишите функцию для нахождения максимальной суммы подмассива с использованием метода «разделяй и властвуй».
// Напишите функцию для поиска наибольшей общей подстроки с минимальными затратами времени.
// 1075. Реализация паттернов проектирования
// Напишите реализацию паттерна «Команда» (Command).
// Напишите реализацию паттерна «Цепочка обязанностей» (Chain of Responsibility).
// Напишите реализацию паттерна «Состояние» (State).
// Напишите реализацию паттерна «Посетитель» (Visitor).
// Напишите реализацию паттерна «Мост» (Bridge).
// Напишите реализацию паттерна «Прототип» (Prototype).
// 1076. Асинхронная работа с файлами
// Напишите асинхронную функцию для чтения файла и обработки данных с использованием fs.promises.
// Напишите функцию для записи данных в файл асинхронно.
// Напишите функцию для удаления файла асинхронно.
// Напишите функцию для асинхронного копирования файлов.
// Напишите функцию для чтения и записи данных в два разных файла асинхронно.
// Напишите асинхронную функцию для обработки ошибок при работе с файловой системой.
// 1077. Использование коллекций и Set/Map
// Напишите функцию, которая находит все уникальные элементы в массиве с использованием коллекций Set.
// Напишите функцию, которая находит пересечение двух массивов с использованием Set.
// Напишите функцию, которая создает карту (Map) для подсчета частоты появления каждого слова в строке.
// Напишите функцию, которая проверяет, содержится ли элемент в Set.
// Напишите функцию, которая находит все ключи в Map, чьи значения больше заданного числа.
// Напишите функцию, которая удаляет все дубликаты из массива с использованием Map.
// 1078. Алгоритмы на строках
// Напишите функцию, которая находит первую неповторяющуюся букву в строке.
// Напишите функцию для проверки, является ли строка палиндромом.
// Напишите функцию для переворачивания строки.
// Напишите функцию для поиска самой длинной подстроки без повторяющихся символов.
// Напишите функцию для подсчета всех вхождений подстроки в строке.
// Напишите функцию для замены всех пробелов на подчеркивания в строке.
// 1079. Преобразование данных
// Напишите функцию, которая преобразует массив объектов в строку JSON.
// Напишите функцию, которая преобразует строку JSON в массив объектов.
// Напишите функцию для преобразования массива чисел в строку с разделителями.
// Напишите функцию для преобразования строки в массив чисел.
// Напишите функцию, которая преобразует объект в строку с форматированием.
// Напишите функцию для преобразования массива строк в объект.
// 1080. Работа с многозадачностью
// Напишите функцию, которая выполняет несколько задач асинхронно и ожидает их завершения.
// Напишите функцию, которая выполняет несколько задач с ограничением параллельных потоков.
// Напишите функцию, которая выполняет несколько задач и агрегирует их результаты.
// Напишите функцию, которая отслеживает прогресс выполнения нескольких асинхронных задач.
// Напишите функцию, которая приостанавливает выполнение задачи и возобновляет её через некоторое время.
// Напишите функцию, которая завершает выполнение задачи, если она выполняется слишком долго.

// 1081. Работа с числами
// Напишите функцию, которая проверяет, является ли число совершенным (число, которое равно сумме своих делителей).
// Напишите функцию, которая находит наименьший общий кратник двух чисел.
// Напишите функцию для подсчета количества цифр в числе.
// Напишите функцию для вычисления корня числа с использованием метода Ньютона.
// Напишите функцию для нахождения чисел, которые являются квадратами целых чисел.
// Напишите функцию, которая находит разницу между максимальным и минимальным элементом в массиве чисел.
// 1082. Работа с датами и временем
// Напишите функцию для вычисления разницы между двумя датами в днях.
// Напишите функцию для проверки, является ли год високосным.
// Напишите функцию, которая форматирует текущую дату в строку формата DD-MM-YYYY.
// Напишите функцию, которая вычисляет количество дней в месяце для заданного месяца и года.
// Напишите функцию, которая конвертирует строку в объект Date.
// Напишите функцию для вычисления времени, прошедшего с заданной даты.
// 1083. Асинхронные операции
// Напишите функцию, которая выполняет несколько асинхронных задач параллельно и возвращает их результаты.
// Напишите функцию, которая выполняет серию асинхронных задач, где каждая задача зависит от результата предыдущей.
// Напишите функцию, которая принимает массив URL-ов, загружает страницы и возвращает массив статусов HTTP.
// Напишите функцию, которая ожидает выполнения всех задач, но с ограничением по времени.
// Напишите функцию, которая обрабатывает асинхронные задачи с откатом на предыдущий шаг в случае ошибки.
// Напишите функцию, которая выполняет задачи поочередно с максимальной параллельностью, не превышающей заданное значение.
// 1084. Продвинутое использование функций
// Напишите функцию, которая принимает функцию и возвращает новую функцию, которая кэширует результаты.
// Напишите функцию, которая реализует "карринг" для произвольной функции.
// Напишите функцию, которая проверяет, является ли строка функцией.
// Напишите функцию, которая выполняет переданную функцию с аргументами через промежуток времени.
// Напишите функцию, которая возвращает функцию для повторного вызова через определённый промежуток времени.
// Напишите функцию, которая оборачивает другую функцию, выполняя до и после её вызова дополнительные действия.
// 1085. Реализация алгоритмов сортировки
// Напишите алгоритм сортировки слиянием (Merge Sort).
// Напишите алгоритм быстрой сортировки (Quick Sort).
// Напишите алгоритм сортировки вставками (Insertion Sort).
// Напишите алгоритм сортировки пузырьком (Bubble Sort).
// Напишите алгоритм сортировки выбором (Selection Sort).
// Напишите алгоритм сортировки по счёту (Counting Sort).
// 1086. Использование рекурсии
// Напишите рекурсивную функцию для нахождения суммы всех элементов в массиве.
// Напишите рекурсивную функцию для вычисления факториала числа.
// Напишите рекурсивную функцию для переворачивания строки.
// Напишите рекурсивную функцию для вычисления чисел Фибоначчи.
// Напишите рекурсивную функцию для вычисления наибольшего общего делителя двух чисел.
// Напишите рекурсивную функцию для обхода дерева или графа в глубину.
// 1087. Реализация стека и очереди
// Напишите класс для реализации стека с методами push, pop и peek.
// Напишите класс для реализации очереди с методами enqueue, dequeue и peek.
// Напишите класс для реализации приоритетной очереди с использованием массива.
// Напишите класс для реализации двусторонней очереди.
// Напишите класс для реализации кольцевого буфера.
// Напишите класс для реализации стека с поддержкой минимального элемента.
// 1088. Алгоритмы поиска
// Напишите функцию для поиска элемента в отсортированном массиве с использованием бинарного поиска.
// Напишите функцию для поиска всех вхождений подстроки в строке.
// Напишите функцию для поиска первого повторяющегося элемента в массиве.
// Напишите функцию для поиска самого длинного подстрочного массива в строке.
// Напишите функцию для поиска двух чисел в массиве, которые в сумме дают заданное число.
// Напишите функцию для поиска наибольшего общего подмассива двух строк.
// 1089. Использование Map и Set
// Напишите функцию, которая находит все уникальные элементы в массиве с использованием Set.
// Напишите функцию, которая находит пересечение двух массивов с использованием Set.
// Напишите функцию, которая создает Map, в котором ключи — это элементы массива, а значения — количество их вхождений.
// Напишите функцию, которая удаляет все дубликаты из массива с использованием Map.
// Напишите функцию, которая находит первый элемент в массиве, который встречается больше одного раза с использованием Set.
// Напишите функцию, которая возвращает только те элементы из массива, которые встречаются в обеих коллекциях, с использованием Set.
// 1090. Работа с DOM
// Напишите функцию, которая создает элемент DOM и добавляет его в конец body.
// Напишите функцию, которая находит все элементы на странице с определенным классом и изменяет их стиль.
// Напишите функцию, которая добавляет обработчик события для всех кнопок на странице.
// Напишите функцию, которая удаляет элемент DOM по его ID.
// Напишите функцию, которая обновляет текстовое содержимое элемента при клике на кнопку.
// Напишите функцию, которая создает таблицу из массива данных и добавляет её на страницу.

// 1091. Продвинутая работа с массивами
// Напишите функцию, которая находит все возможные комбинации элементов массива.
// Напишите функцию, которая объединяет несколько массивов в один, исключая дубликаты.
// Напишите функцию, которая сортирует массив строк по длине.
// Напишите функцию, которая находит элементы массива, которые являются палиндромами.
// Напишите функцию, которая удаляет все элементы массива, которые не соответствуют заданному условию.
// Напишите функцию, которая фильтрует массив, оставляя только элементы, являющиеся числами.
// 1092. Использование регулярных выражений
// Напишите функцию, которая проверяет, является ли строка валидным email-адресом.
// Напишите функцию, которая извлекает все ссылки (URL) из строки.
// Напишите функцию, которая проверяет, является ли строка палиндромом с помощью регулярного выражения.
// Напишите функцию, которая заменяет все числа в строке на их квадрат.
// Напишите функцию, которая проверяет, состоит ли строка только из букв и цифр.
// Напишите функцию, которая извлекает все email-адреса из текста.
// 1093. Работа с объектами
// Напишите функцию, которая копирует все свойства одного объекта в другой, не изменяя исходный.
// Напишите функцию, которая сливает два объекта в один, при этом вторичный объект перезаписывает значения первого.
// Напишите функцию, которая проверяет, является ли объект пустым (не содержит свойств).
// Напишите функцию, которая создает новый объект, оставляя только те свойства, которые есть в списке разрешённых.
// Напишите функцию, которая находит пересечение двух объектов по их ключам и значению.
// Напишите функцию, которая находит различия между двумя объектами.
// 1094. Работа с числами и математикой
// Напишите функцию, которая проверяет, является ли число простым.
// Напишите функцию для вычисления среднего арифметического элементов массива.
// Напишите функцию для нахождения медианы массива чисел.
// Напишите функцию для вычисления процентов от числа.
// Напишите функцию для перевода числа в двоичную систему счисления.
// Напишите функцию, которая находит наибольший общий делитель (НОД) двух чисел.
// 1095. Реализация структуры данных
// Напишите класс для реализации связанного списка.
// Напишите класс для реализации бинарного дерева поиска.
// Напишите класс для реализации хеш-таблицы.
// Напишите класс для реализации двустороннего очереди (deque).
// Напишите класс для реализации стека с помощью массива.
// Напишите класс для реализации графа с использованием списка смежности.
// 1096. Асинхронные задачи
// Напишите функцию, которая выполняет несколько асинхронных задач поочередно с использованием async/await.
// Напишите функцию, которая обрабатывает асинхронную задачу с тайм-аутом.
// Напишите функцию, которая выполняет несколько асинхронных задач и собирает только успешные результаты.
// Напишите функцию, которая принимает массив промисов и возвращает первый успешный результат.
// Напишите функцию, которая выполняет асинхронную задачу и повторяет попытку в случае ошибки.
// Напишите функцию, которая выполняет несколько асинхронных задач с ограничением по времени.
// 1097. Работа с API
// Напишите функцию, которая делает GET-запрос и обрабатывает ответ в формате JSON.
// Напишите функцию, которая делает POST-запрос с передачей данных в теле запроса.
// Напишите функцию, которая обрабатывает ошибку при запросе к API и выводит сообщение об ошибке.
// Напишите функцию, которая делает запрос к API и возвращает данные только в случае успешного ответа.
// Напишите функцию, которая кеширует данные, полученные с API, чтобы повторно не делать запросы.
// Напишите функцию, которая делает запрос к API и отображает полученные данные на странице.
// 1098. Модификации строк
// Напишите функцию, которая заменяет все пробелы в строке на подчеркивания.
// Напишите функцию, которая находит все слова, начинающиеся с буквы "a" в строке.
// Напишите функцию, которая удаляет все гласные из строки.
// Напишите функцию, которая переворачивает все слова в строке.
// Напишите функцию, которая изменяет первую букву каждого слова на заглавную.
// Напишите функцию, которая находит самое длинное слово в строке.
// 1099. Управление памятью и производительностью
// Напишите функцию, которая замеряет время выполнения асинхронной задачи.
// Напишите функцию, которая профилирует производительность выполнения цикла в JavaScript.
// Напишите функцию, которая отслеживает использование памяти в процессе выполнения задачи.
// Напишите функцию, которая использует debounce для оптимизации вызовов функции.
// Напишите функцию, которая использует throttle для ограничения частоты вызовов функции.
// Напишите функцию, которая кеширует результаты вычислений, чтобы избежать повторных операций.
// 1100. Продвинутое использование JavaScript
// Напишите функцию, которая создает глубокую копию объекта с использованием рекурсии.
// Напишите функцию, которая обрабатывает ошибки в асинхронных операциях с помощью try-catch.
// Напишите функцию, которая генерирует случайное число в заданном диапазоне.
// Напишите функцию, которая превращает объект в строку JSON и обратно.
// Напишите функцию, которая использует Proxy для перехвата операций с объектом.
// Напишите функцию, которая использует Generator для создания последовательностей чисел.

// вопросы для продвинутых прям таких крутых от 1100 до 1200 тоесть 100 штук😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// .............................................................................................Основы JavaScript
// Что такое замыкания в JavaScript?
// Упрощённо
// Замыкание — это функция, которая «запоминает» переменные из окружающего её контекста, даже если этот контекст уже перестал существовать.

// Пример:

// javascript
// Копировать код
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// Здесь counter запоминает переменную count из функции createCounter, даже когда она завершила выполнение.

/*
Подробно
Замыкание — это механизм, позволяющий функции сохранять доступ к переменным своего лексического окружения, даже если функция вызвана вне этого окружения.

Как это работает:

Когда функция создаётся, она «захватывает» все переменные, которые находятся в её области видимости.
Эти переменные становятся частью внутреннего состояния функции и сохраняются в памяти до тех пор, пока существует сама функция.
Ключевые особенности:

Замыкания используются для создания приватных переменных.
Они помогают разделять доступ к данным и управлять их состоянием.
Пример:

javascript
Копировать код
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2); // factor = 2
const triple = createMultiplier(3); // factor = 3

console.log(double(5)); // 10
console.log(triple(5)); // 15
В этом примере:

factor сохраняется внутри каждой возвращённой функции (double и triple).
Несмотря на то, что createMultiplier завершила работу, переменная factor остаётся доступной через замыкание.
Применения замыканий:

Создание функций с приватными данными.
Генерация функций для повторного использования (например, колбэки, обработчики событий).
Эмуляция объектов (до появления class).
Таким образом, замыкания — мощный инструмент для управления состоянием и структурой кода в JavaScript.
*/

// Объясните разницу между var, let и const.
/*
Упрощённо
var:

Объявляет переменную, видимую во всей функции или глобально.
Может быть переобъявлена и изменена.
Не учитывает блочную область видимости (например, внутри {}).
javascript
Копировать код
if (true) {
  var x = 10;
}
console.log(x); // 10
let:

Объявляет переменную, видимую только внутри блока {}.
Можно изменять, но нельзя переобъявлять в одной области.
javascript
Копировать код
if (true) {
  let y = 20;
}
console.log(y); // Ошибка: y не определена
const:

Объявляет переменную, которая не может быть переназначена.
Значение внутри объекта или массива может изменяться.
Тоже учитывает блочную область видимости.
javascript
Копировать код
const z = 30;
z = 40; // Ошибка
const obj = { a: 1 };
obj.a = 2; // Это работает

// //////////////////////////////////   
Подробно
var:

Декларации с помощью var видимы во всей функции (или глобально, если за пределами функции).
Не учитывает блочную область видимости, поэтому переменная доступна за пределами блока.
Повторное объявление одной переменной допустимо.
Пример:

javascript
Копировать код
function example() {
  if (true) {
    var message = "Hello!";
  }
  console.log(message); // "Hello!"
}
example();
Особенность: "Всплытие" (hoisting).
Переменные, объявленные через var, поднимаются в начало функции, но их значение остаётся неопределённым до момента инициализации.

javascript
Копировать код
console.log(a); // undefined
var a = 5;
let:

Введён в ES6.
Переменная доступна только внутри блока, где она объявлена.
Не поднимается (hoisting) как var, то есть доступ до объявления вызовет ошибку.
Нельзя объявить переменную с тем же именем в одной области видимости.
Пример:

javascript
Копировать код
if (true) {
  let number = 42;
  console.log(number); // 42
}
console.log(number); // Ошибка: number не определён
Особенность:

javascript
Копировать код
console.log(x); // Ошибка: x не определён
let x = 10;
const:

Тоже введён в ES6.
Используется для значений, которые не должны быть переназначены.
Как и let, учитывает блочную область видимости.
Пример:

javascript
Копировать код
const PI = 3.14;
PI = 3.15; // Ошибка: нельзя изменить значение PI
Однако const не делает объект или массив неизменяемым, а лишь запрещает переназначение.

javascript
Копировать код
const arr = [1, 2, 3];
arr.push(4); // Это работает
arr = [5, 6]; // Ошибка
Сравнение:

Особенность	var	let	const
Область видимости	Функция	Блок	Блок
Переназначение	Да	Да	Нет
Переобъявление	Да	Нет	Нет
Всплытие	Да	Ошибка	Ошибка
Когда использовать:

var — не рекомендуется в современных проектах.
let — используйте, если переменная будет изменяться.
const — используйте, если переменная не должна переназначаться.
*/


// Что такое this в JavaScript и как он работает?

/*
Упрощённо
this — это ключевое слово в JavaScript, которое указывает на контекст выполнения функции или объекта.

В глобальном контексте:
this ссылается на глобальный объект (window в браузере или global в Node.js).

В методах объекта:
this ссылается на сам объект.

javascript
Копировать код
const obj = {
  name: "John",
  greet() {
    console.log(this.name);
  },
};
obj.greet(); // "John"
В стрелочных функциях:
Стрелочные функции не имеют собственного this, оно берётся из внешнего контекста.

javascript
Копировать код
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name);
  },
};
obj.greet(); // undefined
Подробно
this — это динамическое ключевое слово, которое определяется в зависимости от контекста вызова функции. Оно может ссылаться на разные значения в зависимости от того,
как и где функция вызывается.

Как работает this в разных ситуациях?
В глобальном контексте:

Вне функций или объектов this ссылается на глобальный объект:
window в браузере.
global в Node.js.
javascript
Копировать код
console.log(this); // В браузере: window, в Node.js: global
В методах объекта:

Если метод вызывается через объект, this указывает на этот объект.
javascript
Копировать код
const person = {
  name: "Alice",
  sayName() {
    console.log(this.name);
  },
};
person.sayName(); // "Alice"
В конструкторах и классах:

При использовании this в конструкторе или классе оно указывает на создаваемый объект.
javascript
Копировать код
function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // "John"
В стрелочных функциях:

Стрелочные функции не имеют собственного this, оно берётся из внешнего контекста.
javascript
Копировать код
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name);
  },
};
obj.greet(); // undefined
В функции, вызванной без объекта:

Если функция вызывается без привязки, this ссылается на глобальный объект (или undefined в строгом режиме).
javascript
Копировать код
function sayHello() {
  console.log(this);
}
sayHello(); // В браузере: window, в strict mode: undefined
Привязка this вручную:
JavaScript позволяет явно задавать, на что указывает this, с помощью методов:

call: вызывает функцию с указанием контекста.
apply: аналогично call, но аргументы передаются массивом.
bind: возвращает новую функцию с привязанным контекстом.
javascript
Копировать код
function greet() {
  console.log(this.name);
}
const user = { name: "Alice" };
greet.call(user); // "Alice"
greet.apply(user); // "Alice"
const boundGreet = greet.bind(user);
boundGreet(); // "Alice"
Особенности this в разных режимах
Без строгого режима (strict mode):
В глобальном контексте this ссылается на window (или global).
В строгом режиме:
В глобальном контексте this становится undefined.
javascript
Копировать код
"use strict";
function sayHello() {
  console.log(this);
}
sayHello(); // undefined
Ключевые моменты:
this определяется не во время написания кода, а во время вызова функции.
Стрелочные функции берут this из контекста, в котором они были объявлены.
Итог
this — это способ указать, на какой объект или контекст должна ссылаться функция. Понимание this помогает управлять контекстом вызова и правильно использовать объекты и функции в JavaScript.
*/


// Что такое прототипы в JavaScript и как работают наследование и прототипное наследование?

/*
Объяснение прототипов в JavaScript (упрощённо и подробно)
Упрощённое объяснение
Что такое прототипы?
В JavaScript каждый объект может "наследовать" свойства и методы от другого объекта, называемого его прототипом. Это позволяет объектам разделять общие функции и свойства.

Пример:

javascript
Копировать код
const animal = {
  eat: function () {
    console.log("Eating...");
  },
};

const dog = Object.create(animal); // dog наследует от animal
dog.eat(); // "Eating..."
dog не имеет метода eat, но благодаря прототипу animal может его использовать.
Как работает наследование?
Когда вы вызываете свойство или метод объекта, JavaScript сначала ищет его в самом объекте. Если его нет, он идёт к его прототипу. Этот процесс продолжается до тех пор, пока не дойдёт до null, который завершает цепочку.

Подробное объяснение
1. Что такое прототипы?
Прототип — это скрытое свойство объекта, доступное через специальное поле [[Prototype]]. Оно указывает на другой объект, от которого данный объект наследует свойства и методы.

Пример создания объекта с прототипом:

javascript
Копировать код
const parent = {
  greet: function () {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent); // Устанавливаем parent как прототип для child
child.greet(); // "Hello from parent!"
2. Свойство __proto__
В старых версиях JavaScript доступ к прототипу объекта осуществлялся через свойство __proto__:

javascript
Копировать код
console.log(child.__proto__ === parent); // true
В современных версиях используют метод Object.getPrototypeOf().

3. Как работает наследование?
Когда вы вызываете метод или свойство, происходит поиск по цепочке прототипов:

Сначала ищется свойство в текущем объекте.
Если его нет, поиск идёт в объекте-прототипе.
Этот процесс продолжается до null.
Пример:

javascript
Копировать код
const grandparent = { canFly: false };
const parent = Object.create(grandparent);
parent.hasTail = true;

const child = Object.create(parent);
child.legs = 4;

console.log(child.legs); // 4 (свойство в child)
console.log(child.hasTail); // true (наследовано от parent)
console.log(child.canFly); // false (наследовано от grandparent)




4. Ключевые методы для работы с прототипами
Object.create(proto) — создаёт новый объект с указанным прототипом.
Object.getPrototypeOf(obj) — возвращает прототип объекта.
Object.setPrototypeOf(obj, proto) — задаёт прототип объекта.
5. Классы и прототипы
В ES6 был введён синтаксис class, который делает работу с прототипами более удобной.

Пример:

javascript
Копировать код
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.eat(); // "Eating..." (унаследовано от Animal)
dog.bark(); // "Woof!" (метод Dog)
Под капотом классы используют прототипы, но синтаксис делает их более понятными.

Итог
Упрощённо: Прототипы — это способ "наследовать" свойства и методы между объектами. Если объект не имеет свойства, он ищет его в своём прототипе.
Подробно: Прототипы создают цепочку наследования, где каждый объект может ссылаться на другой объект через скрытое поле [[Prototype]]. Современные классы в JavaScript — это более удобная форма работы с прототипами.
*/

// Что такое «поднятие» (hoisting) в JavaScript?

/*
Объяснение поднятия (hoisting) в JavaScript
Упрощённо
Что такое поднятие?
Поднятие (hoisting) — это поведение JavaScript, при котором объявления переменных и функций "поднимаются" к началу своей области видимости перед выполнением кода.

Что нужно знать:

Функции: Объявления функций поднимаются полностью, включая их тело.
Переменные:
Для var поднимается только объявление, а не присваивание значения.
Для let и const переменные поднимаются, но остаются в "мертвой зоне" до их инициализации.
Пример:

javascript
Копировать код
console.log(a); // undefined (объявление переменной поднято)
var a = 5;

greet(); // "Hello!" (функция полностью поднята)
function greet() {
  console.log("Hello!");
}
Подробно
1. Как работает поднятие функций?
Объявления функций поднимаются вместе с их телом. Это позволяет вызывать функции до их определения.

javascript
Копировать код
greet(); // "Hi there!"

function greet() {
  console.log("Hi there!");
}
2. Как работает поднятие переменных?
var
Только объявление переменной поднимается, но не её значение.
Если попытаться обратиться к переменной до её инициализации, результат будет undefined.
javascript
Копировать код
console.log(x); // undefined
var x = 10;
console.log(x); // 10
let и const
Переменные поднимаются, но остаются в "мертвой зоне" до их инициализации.
Если попытаться обратиться к ним до инициализации, будет ошибка ReferenceError.
javascript
Копировать код
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
3. Пример с сочетанием функций и переменных
javascript

Копировать код
console.log(foo); // undefined (поднимается объявление переменной `foo`)
var foo = "bar";

hoistExample(); // "I am hoisted!" (функция поднимается вместе с телом)

function hoistExample() {
  console.log("I am hoisted!");
}
4. Важное про "мертвую зону"
Мертвая зона — это период между началом области видимости и фактической инициализацией переменной, объявленной с let или const.

javascript
Копировать код
{
  console.log(a); // ReferenceError
  let a = 5;
}
5. Почему поднятие полезно?
Поднятие делает JavaScript более гибким, позволяя:

Вызывать функции до их определения.
Использовать переменные, объявленные позже, если их значения не нужны до инициализации.
Однако, это может привести к путанице, особенно при использовании var. Поэтому лучше использовать let и const для предсказуемого поведения.

Итог:
Поднятие — это поведение JavaScript, при котором объявления переменных и функций поднимаются к началу их области видимости.
Функции: Полностью поднимаются.
Переменные: Поднимаются, но с разным поведением (var — инициализируется undefined, let и const — "мертвая зона").
Рекомендуется использовать let и const для более предсказуемого кода.
*/

// Чем отличается == от === в JavaScript?

/*
Разница между == и === в JavaScript
Упрощённое объяснение
== (нестрогое равенство)
Сравнивает значения без учёта типа данных. Если типы данных разные, JavaScript пытается их привести к одному типу перед сравнением (автоматическое приведение типов).

=== (строгое равенство)
Сравнивает значения с учётом типа данных. Если типы разные, результат всегда false.

Пример:

javascript
Копировать код
console.log(5 == "5");  // true  (приведение типов: строка "5" становится числом 5)
console.log(5 === "5"); // false (разные типы: число и строка)

console.log(null == undefined); // true  (особое правило приведения)
console.log(null === undefined); // false (разные типы)
Подробное объяснение
1. Как работает == (нестрогое равенство)?
При использовании == JavaScript выполняет приведение типов (type coercion), чтобы попытаться сделать оба значения совместимыми.
Примеры преобразований:
Строки и числа: строка преобразуется в число.
javascript
Копировать код
console.log("42" == 42); // true ("42" становится числом 42)
null и undefined: считаются равными.
javascript
Копировать код
console.log(null == undefined); // true
Булевы значения: преобразуются в числа (true → 1, false → 0).
javascript
Копировать код
console.log(true == 1); // true
console.log(false == 0); // true
Объекты и примитивы: объект преобразуется в примитив (обычно строку или число).
javascript
Копировать код
console.log([1] == "1"); // true (массив [1] становится строкой "1")
console.log({} == "[object Object]"); // true
2. Как работает === (строгое равенство)?
=== не выполняет приведение типов.
Значения сравниваются "как есть" с учётом их типа.
Примеры:

javascript
Копировать код
console.log(0 === false); // false (0 — число, false — булево)
console.log("42" === 42); // false (строка и число)
console.log([1, 2] === [1, 2]); // false (разные объекты в памяти)
3. Почему важно различие?
== полезен, если вы хотите сравнить значения независимо от их типа, но он может быть причиной неожиданных результатов.
javascript
Копировать код
console.log("" == 0); // true (пустая строка становится числом 0)
console.log(" " == 0); // true (строка с пробелом тоже преобразуется в 0)
=== предпочтительнее, так как он делает код более предсказуемым и предотвращает ошибки из-за приведения типов.
4. Когда использовать?
Используйте === для большинства случаев, чтобы избежать неожиданного поведения.
Используйте == только тогда, когда уверены в необходимости приведения типов (например, при проверке null и undefined).
Итог
==: Сравнивает значения с приведением типов.
===: Сравнивает значения без приведения типов.
Рекомендуется использовать === для большей предсказуемости.

*/

// Объясните, что такое замыкание (closure) с примером.

/*
Что такое замыкание (closure) в JavaScript?
Упрощённое объяснение
Замыкание (closure) — это функция, которая "запоминает" своё лексическое окружение, то есть доступ к переменным, которые 
были объявлены в области видимости функции, даже после того, как эта функция завершила выполнение.

Простой пример:

javascript
Копировать код
function outer() {
  const message = "Hello from outer!"; // переменная в outer

  function inner() {
    console.log(message); // inner имеет доступ к переменной message
  }

  return inner; // возвращаем ссылку на функцию inner
}

const closureFunction = outer(); // outer выполняется и возвращает функцию inner
closureFunction(); // "Hello from outer!" — inner "помнит" переменную message
В этом примере, функция inner() использует переменную message, которая была объявлена в функции outer(), даже после того, как outer() завершила выполнение.
Подробное объяснение
1. Что такое замыкание?
Замыкание — это комбинация функции и лексического окружения, в котором эта функция была объявлена. Когда функция создаётся в определённой области видимости (например, в теле другой функции), она сохраняет доступ к переменным этой области видимости, даже если она будет вызвана вне этой области.

Ключевое:
Когда функция используется как замыкание, она имеет доступ к:

Переменным своей собственной области видимости.
Переменным из внешних областей видимости, даже если эти области уже завершили выполнение.
2. Пример с замыканием:
javascript
Копировать код
function makeCounter() {
  let count = 0; // переменная в области видимости функции makeCounter

  return function increment() {
    count++; // функция increment изменяет переменную count
    console.log(count);
  };
}

const counter = makeCounter(); // counter хранит ссылку на increment, вместе с лексическим окружением
counter(); // 1
counter(); // 2
counter(); // 3
Как это работает?
Функция increment имеет доступ к переменной count, которая была определена в функции makeCounter. 
Даже после того, как makeCounter завершила выполнение, функция increment сохраняет ссылку на count, что позволяет ей продолжать изменять и выводить его.
3. Почему замыкания важны?
Замыкания позволяют:

Сохранять состояние между вызовами функций.
Инкапсулировать данные, обеспечивая доступ к ним только через специальные функции (например, паттерн "модуль" или создание приватных переменных).
Пример с инкапсуляцией:

javascript
Копировать код
function createPerson(name) {
  let age = 30; // приватная переменная

  return {
    getName: function () {
      return name;
    },
    getAge: function () {
      return age;
    },
    setAge: function (newAge) {
      if (newAge > 0) {
        age = newAge;
      }
    },
  };
}

const person = createPerson("Alice");
console.log(person.getName()); // "Alice"
console.log(person.getAge()); // 30
person.setAge(35);
console.log(person.getAge()); // 35
В этом примере, переменная age инкапсулирована внутри замыкания и доступна только через методы getAge и setAge.
Итог
Замыкание — это функция, которая сохраняет доступ к переменным своей внешней области видимости, даже после того, как эта область видимости завершила выполнение.
Это позволяет:
Сохранять состояние между вызовами.
Инкапсулировать данные и скрывать их от внешнего доступа.
*/


// Что такое асинхронный код и как он работает в JavaScript?
/*
Упрощённое объяснение
Асинхронный код — это код, который выполняется не блокируя основное выполнение программы. Он позволяет выполнять долгие операции 
(например, запросы к серверу или чтение файлов), не останавливая при этом выполнение других частей программы.

Асинхронный код использует обещания (Promise), колбэки (callback) или async/await для обработки результатов этих операций.

Простой пример с асинхронной функцией:

javascript
Копировать код
console.log("Начало");

setTimeout(() => {
  console.log("Долгая операция завершена");
}, 2000);

console.log("Конец");
Что происходит?

Сначала выводится "Начало".
Затем вызывается setTimeout, который выполняет операцию через 2 секунды, но не блокирует дальнейшее выполнение кода.
Сразу выводится "Конец".
Через 2 секунды, когда таймер сработает, выводится "Долгая операция завершена".
Подробное объяснение
1. Как работает асинхронный код?
Асинхронный код позволяет программе продолжать выполнение, не дожидаясь завершения долгих операций (например, запросов к серверу). В JavaScript это часто реализуется через:

Колбэки (Callbacks): Функции, которые передаются в другие функции и вызываются позже, когда операция завершена.
Promise: Объекты, представляющие будущие значения, которые могут быть получены после завершения асинхронной операции.
async/await: Синтаксис для работы с асинхронным кодом, который выглядит синхронно, но не блокирует выполнение.
2. Пример с колбэком:
javascript
Копировать код
function fetchData(callback) {
  setTimeout(() => {
    callback("Данные получены");
  }, 2000);
}

console.log("Запрос отправлен");
fetchData((result) => {
  console.log(result); // "Данные получены"
});
console.log("Дальше...");
Что происходит?
Вначале выводится "Запрос отправлен".
fetchData инициирует асинхронную операцию (через setTimeout), а когда данные получены, выполняется переданный колбэк.
Пока ожидаем результата, программа продолжает выполнять код (выводится "Дальше...").
Когда операция завершится, выводится результат.
3. Пример с Promise:
javascript
Копировать код
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Данные получены через Promise");
  }, 2000);
});

promise.then((result) => {
  console.log(result); // "Данные получены через Promise"
});
Что происходит?
Promise создаёт объект, который в будущем либо будет успешным (resolve), либо неудачным (reject).
После того как данные получены, вызывается .then(), и выводится результат.
4. Пример с async/await:
javascript
Копировать код
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Данные получены через async/await");
    }, 2000);
  });

  let result = await promise; // Ожидаем завершения Promise
  console.log(result); // "Данные получены через async/await"
}

console.log("Запрос отправлен");
fetchData();
console.log("Дальше...");
Что происходит?
async обозначает, что функция будет асинхронной и может использовать await для ожидания завершения асинхронных операций.
await приостанавливает выполнение функции, пока не будет получен результат из промиса. Однако другие части программы продолжают выполняться.
Этот код выглядит как синхронный, но на самом деле он не блокирует выполнение.
Почему важен асинхронный код?
Асинхронность позволяет:

Выполнять долгие операции (например, загрузка данных с сервера) без блокировки интерфейса пользователя или других частей программы.
Повышать производительность, позволяя JavaScript выполнять несколько операций одновременно (с помощью параллельных запросов или многозадачности).
Без асинхронности JavaScript блокировал бы выполнение на время загрузки данных, что могло бы привести к задержкам и зависаниям.

Итог
Асинхронный код позволяет выполнять операции, не блокируя выполнение программы.
Использует колбэки, Promise или async/await для управления операциями.
Это позволяет делать более быстрые и отзывчивые приложения, поскольку длинные операции не блокируют основной поток.
*/



// Объясните, что такое колбэки, промисы и async/await.
/*
Упрощённое объяснение
Колбэки (Callbacks) — это функции, которые передаются в другие функции и вызываются после завершения асинхронной операции.
Промисы (Promises) — это объекты, которые представляют собой результат асинхронной операции, который может быть получен в будущем.
Async/await — это синтаксис, который делает работу с асинхронным кодом проще и более читаемой, позволяя писать асинхронный код как синхронный.
Подробное объяснение
1. Колбэки (Callbacks)
Колбэк — это функция, которая передаётся другой функции как аргумент и вызывается в определённый момент времени, чаще всего после завершения какой-либо асинхронной операции.

Пример с использованием колбэка:

javascript
Копировать код
function fetchData(callback) {
  setTimeout(() => {
    callback("Данные получены");
  }, 2000); // Симулируем асинхронную операцию с задержкой
}

fetchData((result) => {
  console.log(result); // "Данные получены"
});
Здесь функция fetchData принимает колбэк-функцию, который будет вызван через 2 секунды с результатом "Данные получены".
Колбэк позволяет работать с результатом асинхронной операции после её завершения.
Проблема с колбэками: Если операции требуют вложенности, это может привести к так называемому "адскому колбэку", когда код 
становится сложным и трудным для понимания из-за глубокой вложенности функций.

2. Промисы (Promises)
Промис — это объект, представляющий результат асинхронной операции, который будет доступен в будущем. Промис может быть:

Решённым (resolved), если операция завершена успешно.
Отклонённым (rejected), если операция не удалась.
Промис имеет методы .then() для обработки успешного результата и .catch() для обработки ошибок.

Пример с использованием промиса:

javascript
Копировать код
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Данные получены через Promise");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result); // "Данные получены через Promise"
  })
  .catch((error) => {
    console.log(error); // Если ошибка, она будет обработана здесь
  });
Что происходит:
Промис создаётся с помощью конструктора new Promise.
Внутри промиса вызываются функции resolve (для успешного завершения) или reject (для ошибки).
.then() вызывается, когда промис решён успешно, а .catch() — при отклонении промиса.
Промисы позволяют избегать "адского колбэка" и делать код более читаемым.

3. Async/await
async/await — это синтаксис, который облегчает работу с асинхронным кодом, делая его более похожим на синхронный код, что упрощает его понимание и поддержку.

async — помечает функцию как асинхронную, то есть она всегда возвращает промис.
await — позволяет ждать завершения асинхронной операции (например, промиса) внутри асинхронной функции, не блокируя поток выполнения.
Пример с использованием async/await:

javascript
Копировать код
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Данные получены через async/await");
    }, 2000);
  });

  let result = await promise; // Ожидаем завершения промиса
  console.log(result); // "Данные получены через async/await"
}

fetchData();
Что происходит:
async делает функцию асинхронной и позволяет использовать await внутри.
await приостанавливает выполнение функции, пока не будет получен результат из промиса.
Этот код выглядит как синхронный, но на самом деле он асинхронный и не блокирует выполнение программы.
Преимущества async/await:

Код выглядит более линейным и легко читаемым.
Уменьшается необходимость в .then() и .catch(), что делает работу с асинхронным кодом проще.
Сравнение:
Колбэки: Функции, которые передаются в другие функции для обработки результатов асинхронных операций. Проблемы с глубокой вложенностью.
Промисы: Позволяют обрабатывать асинхронные операции более удобно и избежать проблем с вложенностью. Применяются с методами .then() и .catch().
Async/await: Более современный и читаемый способ работы с асинхронным кодом, который позволяет писать код, как синхронный, но при этом не блокирует выполнение.
Итог
Колбэки — это функции, передаваемые другим функциям для обработки асинхронных операций.
Промисы — объекты, представляющие асинхронную операцию и её результат.
Async/await — синтаксис, который позволяет работать с промисами как с синхронным кодом, улучшая читаемость и поддержку.
*/

// Как работает событие в JavaScript? Что такое "Event Loop"? 
/*
Упрощённое объяснение
Событие в JavaScript — это действие, которое происходит в браузере или на веб-странице, и на которое можно отреагировать с помощью кода.
 Например, клики мышью, нажатия клавиш, загрузка страницы — всё это события.

Event Loop (Цикл событий) — это механизм, который управляет асинхронными операциями в JavaScript.
Он позволяет обрабатывать асинхронный код (например, таймеры, обработчики событий) и очередь задач по порядку, не блокируя выполнение программы.

Подробное объяснение
1. События в JavaScript
События — это действия или изменения, которые происходят в браузере и могут быть обработаны с помощью JavaScript. Примеры событий:

Клик по кнопке
Прокрутка страницы
Нажатие клавиши на клавиатуре
Завершение загрузки изображения
События могут быть синхронными (например, нажатие кнопки) или асинхронными (например, запросы к серверу). Для работы с событиями в 
JavaScript используются обработчики событий, которые прикрепляются к определённым элементам.

Пример обработчика события:

javascript
Копировать код
// Пример события с обработчиком
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Кнопка была нажата!');
});
Когда пользователь нажимает на кнопку, срабатывает обработчик события click, и выводится сообщение в консоль.
2. Что такое Event Loop?
Event Loop (Цикл событий) — это механизм, который управляет асинхронным кодом в JavaScript. Он позволяет JavaScript выполнять
асинхронные операции (например, обработку событий или таймеры) без блокировки выполнения основного кода.

JavaScript работает в однопоточном режиме, что означает, что он может выполнять только одну операцию в момент времени. Однако 
благодаря Event Loop и механизмам очереди задач, асинхронные операции не блокируют основной поток, а обрабатываются по очереди.

Как работает Event Loop:

Вызов функций: Когда JavaScript выполняет код, он последовательно выполняет синхронные операции.
Очередь задач: Когда асинхронная операция (например, обработчик события или таймер) завершена, она помещается в очередь задач.
Микрозадачи: Некоторые задачи (например, промисы) помещаются в очередь микрозадач, которая имеет более высокий приоритет, чем обычные задачи.
Event Loop: Event Loop постоянно проверяет стек вызовов и очередь задач. Если стек вызовов пуст, он начинает выполнять задачи из очереди.
Пример с асинхронным кодом и Event Loop:

javascript
Копировать код
console.log('Начало');

setTimeout(() => {
  console.log('Это событие после 2 секунд');
}, 2000);

console.log('Конец');
Что происходит:

Сначала выводится "Начало".
Затем вызывается setTimeout, который добавляет функцию в очередь событий с задержкой в 2000 миллисекунд.
В это время основной код продолжает выполнение, и выводится "Конец".
Через 2 секунды, когда стек вызовов будет пуст, выполнение возвращается к таймеру и выводится "Это событие после 2 секунд".
Процесс Event Loop:
Выполнение кода: JavaScript выполняет синхронный код (например, логи в консоль).
Асинхронные операции: Когда выполняется асинхронная операция (например, таймер или событие), она добавляется в очередь.
Очередь задач: После того как стек вызовов пуст, Event Loop проверяет очередь задач и начинает их выполнять по порядку.
Микрозадачи: Если в очереди есть микрозадачи, они выполняются перед обычными задачами, несмотря на их порядок.
Пример с микрозадачами и задачами:

javascript
Копировать код
console.log('Начало');

setTimeout(() => {
  console.log('Это из таймера');
}, 0);

Promise.resolve().then(() => {
  console.log('Это из промиса');
});

console.log('Конец');
Что происходит:

Сначала выводится "Начало".
setTimeout добавляет свою задачу в очередь с тайм-аутом 0.
Промис (Promise.resolve()) создаёт микрозадачу и добавляет её в очередь микрозадач.
Выводится "Конец".
Сначала выполняются все микрозадачи, так что сначала выводится "Это из промиса".
Затем выполняется задача из setTimeout, и выводится "Это из таймера".
Очередь микрозадач и макрозадач:
Микрозадачи: Промисы и другие асинхронные операции, которые выполняются с более высоким приоритетом, чем обычные задачи (например, события).
Макрозадачи: Обычные асинхронные операции (например, таймеры или события), которые выполняются после микрозадач.
Итог
Событие — это действие, которое происходит в браузере или веб-странице, и на которое можно отреагировать с помощью JavaScript (например, клик по кнопке).
Event Loop — это механизм, который позволяет JavaScript выполнять асинхронный код, управляя очередностью задач и микрозадач, не блокируя 
выполнение программы. Event Loop обрабатывает события и таймеры после завершения основного кода.
*/


// .............................................................................................Массивы и объекты
// Чем отличаются методы массива map(), filter() и reduce()?
/*
Упрощённое объяснение:
map(): Преобразует каждый элемент массива и возвращает новый массив с результатами.
Пример: Увеличить каждый элемент массива на 1.

javascript
Копировать код
[1, 2, 3].map(x => x + 1); // [2, 3, 4]
filter(): Фильтрует массив, возвращая только те элементы, которые удовлетворяют условию.
Пример: Оставить только чётные числа.

javascript
Копировать код
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
reduce(): Обрабатывает массив, возвращая одно значение, например сумму или объект.
Пример: Найти сумму всех элементов.

javascript
Копировать код
[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
Подробное объяснение:
map():

Итеративно применяет функцию ко всем элементам массива.
Результат функции для каждого элемента помещается в новый массив.
Оригинальный массив остаётся неизменным.
Используется для преобразования данных.
Пример: Преобразовать массив чисел в их квадраты.

javascript
Копировать код
const numbers = [1, 2, 3];
const squares = numbers.map(x => x ** 2);
console.log(squares); // [1, 4, 9]
filter():

Проходит по массиву и выбирает только те элементы, для которых функция возвращает true.
Возвращает новый массив с выбранными элементами.
Используется для фильтрации данных.
Пример: Отобрать только слова длиной больше 3 букв.

javascript
Копировать код
const words = ['cat', 'lion', 'tiger', 'bat'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords); // ['lion', 'tiger']
reduce():

Сводит массив к одному значению, применяя функцию к каждому элементу и аккумулятору.
Принимает начальное значение аккумулятора (необязательно).
Используется для вычислений, таких как сумма, объединение объектов или подсчёт.
Пример: Посчитать сумму всех чисел.

javascript
Копировать код
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
Пример: Сгруппировать элементы массива по длине.

javascript
Копировать код
const words = ['cat', 'lion', 'tiger', 'bat'];
const grouped = words.reduce((acc, word) => {
    const len = word.length;
    if (!acc[len]) acc[len] = [];
    acc[len].push(word);
    return acc;
}, {});
console.log(grouped); // { 3: ['cat', 'bat'], 4: ['lion'], 5: ['tiger'] }
*/

// Как проверить, является ли объект массивом в JavaScript?


// Что такое деструктуризация объектов и массивов?
// Что такое spread-оператор и как его использовать?
// Как клонировать объект или массив в JavaScript?
// Как добавить элементы в начало и конец массива?
// Как перебрать все свойства объекта?
// Как проверить наличие свойства в объекте?
// Как объединить два массива в один?
// Как объединить два объекта в один?
// .............................................................................................Функции и области видимости
// Что такое IIFE (Immediately Invoked Function Expression)?
// Объясните разницу между функцией и стрелочной функцией.
// Что такое рекурсия? Приведите пример использования рекурсии.
// Что такое каррирование и как его использовать в JavaScript?
// Чем отличается область видимости переменных в функциях от глобальной области видимости?
// Объясните концепцию «чистых функций» (pure functions).
// Как работают стрелочные функции в контексте this?
// Что такое декораторы функций?
// Как работают функции высшего порядка (higher-order functions)?
// Что такое функции-передатчики (callback functions)?
// .............................................................................................Объектно-ориентированное программирование
// Что такое ООП (объектно-ориентированное программирование)?
// Объясните разницу между классом и объектом.
// Как работает наследование в JavaScript?
// Что такое инкапсуляция?
// Что такое полиморфизм?
// Как реализовать абстракцию в JavaScript?
// Что такое интерфейсы и как они реализуются в JavaScript?
// Как работает механизм супер-классов и подклассов в ES6?
// Что такое методы и свойства экземпляра класса?
// Как создаются и используются конструкторы классов?
// .............................................................................................Асинхронное программирование
// Что такое промисы и как они работают?
// Как использовать async/await и чем он отличается от промисов?
// Что такое Promise.all() и Promise.race()? Приведите примеры их использования.
// Как обрабатывать ошибки в асинхронных функциях?
// Как создать и обработать промисы вручную?
// Что такое цепочки промисов и как с ними работать?
// Как работает асинхронный код в JavaScript?
// Что такое setTimeout и setInterval? Чем они отличаются?
// Объясните, что такое event loop и как он работает в асинхронных операциях.
// Как использовать fetch для асинхронных запросов в JavaScript?
// .............................................................................................Основы работы с браузером
// Что такое DOM (Document Object Model) и как с ним работать?
// Как изменить содержимое страницы через DOM?
// Что такое события DOM и как их обрабатывать?
// Чем отличается event.preventDefault() от event.stopPropagation()?
// Как работает делегирование событий в JavaScript?
// Что такое localStorage и sessionStorage? Как их использовать?
// Как работать с cookies в JavaScript?
// Как обрабатывать формы с помощью JavaScript?
// Как работать с HTML5 API для чтения и записи файлов?
// Что такое запросы XMLHttpRequest и fetch?
// .............................................................................................Алгоритмы и структуры данных
// Что такое стек и очередь? Чем они отличаются?

// Что такое хеш-таблица и как она работает?
// Как работает алгоритм сортировки пузырьком?
// Как работает алгоритм быстрой сортировки?
// Что такое двоичное дерево поиска?
// Что такое графы и как они представлены в JavaScript?
// Как найти наибольший общий делитель двух чисел?
// Что такое линейный и двоичный поиск?
// Как решить задачу о нахождении второго по величине элемента в массиве?
// Как вычислить факториал числа с помощью рекурсии?
// .............................................................................................Разработка с использованием фреймворков
// Что такое фреймворк и чем он отличается от библиотеки?
// Какие основные принципы работы с React.js?
// Что такое JSX в React?
// Чем отличаются компоненты класса и функциональные компоненты в React?
// Как работают хуки в React? Приведите пример использования useState.
// Что такое Redux и как он используется в React-приложениях?
// Как настроить роутинг в React с помощью react-router?
// Как использовать эффекты в React с помощью хука useEffect?
// Что такое жизненный цикл компонента в React?
// Как настроить и использовать TypeScript в проекте React?
// .............................................................................................Тестирование и отладка
// Как написать юнит-тест с использованием Jest?
// Что такое мок-объекты (mock objects) в тестировании?
// Чем отличаются интеграционные тесты от юнит-тестов?
// Что такое TDD (Test Driven Development)?
// Как использовать асинхронные тесты в Jest?
// Как проводить тестирование производительности в JavaScript?
// Как провести отладку JavaScript-кода в браузере?
// Что такое консольные логи и как их правильно использовать для отладки?
// Как писать тесты для асинхронных функций?
// Как настроить тестирование с использованием Cypress?
// .............................................................................................Оптимизация кода и производительность
// Как минимизировать время загрузки страницы?
// Как уменьшить размер бандла в Webpack?
// Что такое lazy loading и как его реализовать в приложении?
// Как улучшить производительность React-приложений?
// Что такое мемоизация и как ее использовать для оптимизации производительности?
// Как провести оптимизацию работы с памятью в JavaScript?
// Что такое дебаунс (debounce) и как его использовать?
// Что такое троттлинг (throttle) и где его применяют?
// Как оптимизировать обработку событий в JavaScript?
// Как работает браузерный кэш и как его можно использовать для улучшения производительности?

// для тех кто хочет ну прям стать жеееескими как сениоры 1200 до 1300 тоесть 100 штук😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// ........................................................................................................................ Продвинутые концепции JavaScript
// Объясните, как работает механизм прототипов в JavaScript. Чем он отличается от классов в других языках программирования?
// Как работает механизм событий в JavaScript? Объясните, как происходит событие bubbling и capturing.
// Что такое «это» в JavaScript и как работает контекст выполнения?
// Чем отличаются null и undefined? Когда и почему лучше использовать одно, а не другое?
// Что такое «замыкания» и как они могут быть использованы для реализации приватных свойств и методов?
// Объясните различия между синхронным и асинхронным кодом в JavaScript. Как асинхронные операции реализуются с использованием callback, промисов и async/await?
// Как работает механизим call, apply, и bind в JavaScript? Когда следует использовать каждую из этих функций?
// Как вы реализуете кэширование данных в JavaScript, чтобы минимизировать количество повторных запросов к серверу?
// В чем разница между forEach, map, filter, reduce? Как выбрать подходящий метод в зависимости от ситуации?
// Объясните, что такое event loop, call stack и Web APIs. Как они взаимодействуют между собой?
// ........................................................................................................................ Оптимизация производительности
// Как вы оцениваете производительность приложения на стороне клиента? Какие инструменты для профилирования вы используете?
// Как минимизировать время загрузки веб-страниц?
// Как работает виртуальный DOM в React? Как он помогает улучшить производительность?
// Как вы уменьшаете количество рендеров в React компоненте?
// Объясните понятие "debouncing" и "throttling". В чем их разница и когда следует использовать каждый подход?
// Что такое lazy loading, и как его можно использовать для улучшения производительности сайта?
// Как избежать проблем с памятью, таких как утечки, при работе с асинхронным кодом?
// Как предотвратить рендеринг компонента, если входные данные не изменились?
// Чем отличается синхронный и асинхронный рендеринг в React?
// Как вы используете веб-воркеры в браузерах и почему они важны для производительности?
// ........................................................................................................................ ООП и проектирование
// Объясните, что такое SOLID принципы и как вы применяете их на практике.
// Как вы проектируете расширяемые и тестируемые приложения? Какие архитектурные подходы вы используете?
// Что такое паттерн проектирования «Singleton» и когда его стоит использовать?
// Объясните, что такое паттерн «Observer». Когда и где он применим?
// Что такое Dependency Injection и как это связано с инверсией управления?
// Как вы обеспечиваете декомпозицию сложных компонентов и сервисов?
// Чем отличается композиция от наследования? Когда лучше использовать одно вместо другого?
// Какие принципы вы применяете при проектировании REST API?
// Объясните принципы CQRS (Command Query Responsibility Segregation) и когда их стоит применять.
// Как вы подходите к тестированию больших приложений и библиотек?
// ........................................................................................................................ Инструменты и технологии
// Как работает webpack? Объясните основные принципы работы с конфигурацией.
// Какие существуют методы минимизации кода и зачем они нужны?
// Как работает Tree Shaking? Как использовать его для оптимизации сборки?
// Что такое CI/CD и как вы реализуете эти процессы в своих проектах?
// Как вы работаете с Docker и контейнерами? В чем преимущества использования Docker для разработки и продакшн-сред?
// Что такое контейнеризация и чем она отличается от виртуализации?
// Как вы используете Git в своей повседневной разработке? Какие стратегии ветвления вы используете?
// Как использовать микросервисы в вашем приложении? Что такое сервисная архитектура?
// Как настроить систему мониторинга и логирования в приложении? Какие инструменты для этого вы используете?
// Что такое DevOps и как вы интегрируете эту практику в свою команду разработки?
// ........................................................................................................................ Безопасность
// Какие существуют способы предотвращения атак Cross-Site Scripting (XSS)?
// Как можно предотвратить уязвимости в приложении при работе с пользовательскими данными?
// Что такое Cross-Site Request Forgery (CSRF) и как с этим бороться?
// Что такое Content Security Policy (CSP) и как она помогает защитить веб-приложение?
// Как защитить приложение от SQL инъекций?
// Что такое шифрование данных и какие алгоритмы вы используете для обеспечения безопасности в приложениях?
// Что такое аутентификация и авторизация, и чем они отличаются?
// Как обеспечивается безопасное хранение паролей в базе данных?
// Как работают JSON Web Tokens (JWT) и когда их следует использовать?
// Каковы основные принципы безопасной разработки и защиты от атак?
// ........................................................................................................................ Типизация и язык программирования
// В чем разница между динамической и статической типизацией? Какие плюсы и минусы у каждой?
// Как работает система типов в TypeScript? Чем она отличается от JavaScript?
// Какие преимущества дает использование TypeScript в крупных проектах?
// Как реализовать типизацию для сложных объектов и массивов в TypeScript?
// Как вы используете интерфейсы и типы в TypeScript?
// Что такое generics в TypeScript и как их правильно использовать?
// Как работает система декораторов в TypeScript?
// Как правильно настроить конфигурацию TypeScript для большого проекта?
// Как использовать TypeScript с React и как это влияет на разработку?
// Что такое типизация в JavaScript и зачем она нужна?
// ........................................................................................................................ Тестирование
// Как вы пишете юнит-тесты для React-компонентов?
// Какие инструменты для тестирования вы предпочитаете? Объясните их сильные стороны.
// Как вы подходите к тестированию асинхронных операций?
// Как тестировать API? Какие инструменты вы используете для тестирования RESTful сервисов?
// Как вы подходите к написанию интеграционных тестов?
// Как использовать TDD (Test Driven Development) в вашем процессе разработки?
// Как вы обеспечиваете покрытие тестами для сложных бизнес-логик?
// Что такое мокирование и как использовать моки в тестах?
// Как вы тестируете производительность приложения?
// Как вы справляетесь с проблемами флоков и flaky тестов?
// ........................................................................................................................ Производственные среды и серверы
// Чем отличается серверная и клиентская архитектура?
// Какие типы серверных технологий вы использовали? Что предпочитаете и почему?
// Как вы конфигурируете серверные приложения для работы в продакшн-среде?
// Как вы решаете проблему масштабирования приложения?
// Что такое контейнеризация и как Docker помогает в развертывании приложений?
// Как работать с клауд-сервисами, такими как AWS или Azure?
// Как обеспечить безопасность при работе с базами данных в продакшн-среде?
// Что такое шардирование и когда его следует применять?
// Как вы настраиваете балансировку нагрузки и высокую доступность на сервере?
// Как вы работаете с многозадачностью и параллельными вычислениями на сервере?
// ........................................................................................................................ Системы баз данных
// Чем отличается реляционная база данных от нереляционной?
// Как вы выбираете между SQL и NoSQL базами данных?
// Как нормализовать базу данных и зачем это нужно?
// Как эффективно работать с большими объемами данных?
// Как вы реализуете индексацию в базе данных для ускорения поиска?
// Как управлять миграциями базы данных?
// Как работает транзакция в SQL? Что такое ACID-принципы?
// Что такое денормализация и когда ее следует применять?
// Как вы решаете проблему блокировок при работе с базой данных?
// Как вы обеспечиваете отказоустойчивость баз данных?
// ........................................................................................................................ Методологии разработки
// Что такое Agile и Scrum? Как вы применяете эти методологии в работе?
// Что такое Kanban и как он используется в разработке программного обеспечения?
// Как вы реализуете процесс разработки в своей команде?
// Как вы решаете проблему технического долга?
// Как вы работаете с требованиями, которые постоянно изменяются?
// Как вы подходите к выбору технологий для нового проекта?
// Как вы обучаете своих коллег и поддерживаете хорошую практику кодирования в команде?
// Как вы оцениваете результаты разработки и измеряете эффективность команды?
// Как вы решаете конфликты в команде?
// Как вы поддерживаете качество кода в долгосрочных проектах?

// и вот очень крутые советыыы 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// ................................................................................. Углубление знаний .................................................................................

// Продолжайте изучать алгоритмы и структуры данных. Даже если вы освоили основы, необходимо понимать более сложные алгоритмы и структуры данных, такие как графы, динамическое программирование, алгоритмы поиска и сортировки. Это поможет вам решать задачи более эффективно.
// Изучите новые языки программирования. Даже если вы специализируетесь на одном языке, знание других может улучшить ваше понимание концепций программирования и дать вам новые инструменты для решения задач. Например, изучение Go, Rust или Python может раскрыть новые горизонты.
// Глубже изучите принципы ООП. Понимание таких понятий, как полиморфизм, инкапсуляция, наследование и абстракция, поможет вам создавать более чистый и поддерживаемый код.
// Обратите внимание на архитектуру приложений. Ознакомьтесь с паттернами проектирования (например, MVC, Singleton, Observer, Factory) и изучите, как строить масштабируемые и поддерживаемые архитектуры.
// Углубитесь в типизацию с TypeScript. Понимание работы с типами, интерфейсами и generics сделает вас более эффективным разработчиком и повысит качество вашего кода.

// ................................................................................. Изучение фреймворков и библиотек .................................................................................

// Продолжайте изучать популярные фреймворки. Освойте углубленно такие фреймворки как React, Angular, Vue.js, а также серверные технологии, такие как Node.js, Django, Flask или Spring.
// Изучите State Management. Работа с состоянием приложений (например, с Redux, Zustand, MobX) критична для построения приложений средней и большой сложности. Разберитесь в этих технологиях, чтобы уметь их применять эффективно.
// Понимание API и интеграции. Изучите работу с REST API и GraphQL, а также с системами авторизации и аутентификации (JWT, OAuth). Эти навыки необходимы для взаимодействия между фронтендом и бэкендом.

// ................................................................................. Тестирование и код-ревью .................................................................................

// Изучите тестирование. Освойте юнит-тестирование, интеграционные тесты и тестирование производительности. Понимание таких библиотек, как Jest, Mocha, Chai, и Cypress, позволит вам писать качественный код и избегать багов.
// Практикуйтесь в код-ревью. Процесс код-ревью помогает развивать навыки, учит лучше понимать код других и совершенствовать свой стиль программирования. Научитесь давать конструктивные замечания и анализировать чужой код.

// ................................................................................. Совершенствование рабочих процессов .................................................................................

// Освойте CI/CD. Знание инструментов для автоматизации процессов сборки и развертывания приложений (например, Jenkins, GitLab CI, CircleCI) значительно повысит вашу продуктивность и поможет быстрее выявлять и устранять проблемы.
// Работа с контейнерами. Изучите Docker и Kubernetes для создания и управления контейнерами и оркестрации приложений. Эти инструменты важны для работы с микросервисами и масштабируемыми приложениями.
// Изучение DevOps. Понимание принципов DevOps, таких как автоматизация процессов, улучшение взаимодействия между разработчиками и операционной командой, поможет вам работать эффективнее и быстрее.

// ................................................................................. Развитие софт-скиллов .................................................................................

// Улучшайте навыки коммуникации. Важной частью работы программиста является способность эффективно общаться с коллегами, заказчиками и другими командами. Умение четко излагать свои мысли на технические и нетехнические темы имеет большое значение.
// Научитесь работать в команде. Совместная работа с другими разработчиками, понимание принципов Agile и Scrum, работа с Jira или Trello поможет вам стать ценным членом команды.
// Понимание бизнес-логики. Понимание требований бизнеса и способность адаптировать код под эти требования даст вам преимущества при решении задач, связанных с проектированием и оптимизацией.
// Управление временем и проектами. Освойте основы тайм-менеджмента, чтобы эффективно распределять время между задачами и следить за сроками выполнения проектов. Знание инструментов для отслеживания задач и планирования (например, Trello, Jira, Asana) будет полезным.

// ................................................................................. Готовьтесь к собеседованиям .................................................................................

// Решайте задачи на алгоритмы и структуры данных. Подготовьтесь к собеседованиям, решая задачи на LeetCode, HackerRank, Codewars или других платформах, которые проверяют ваши знания алгоритмов и структур данных.
// Изучите паттерны проектирования. Понимание шаблонов проектирования, таких как Singleton, Factory, Strategy, Observer, поможет вам лучше справляться с задачами, которые могут возникнуть на собеседованиях.
// Практикуйте собеседования. Проводите mock-интервью с друзьями или используйте платформы вроде Interviewing.io для практики собеседований. Это поможет вам научиться решать задачи под давлением и четко отвечать на технические вопросы.

// ................................................................................. Развитие в смежных областях .................................................................................

// Погружайтесь в области искусственного интеллекта и машинного обучения. Если вам интересна эта область, изучите основы ML, работу с библиотеками вроде TensorFlow или PyTorch и начните создавать простые модели.
// Занимайтесь кибербезопасностью. Знания в области безопасности приложений (например, шифрование, аутентификация, защита от атак) являются очень ценными и востребованными.
// Изучите работу с большими данными. Освойте технологии работы с большими данными, такие как Hadoop, Spark, и базы данных NoSQL, которые необходимы для анализа больших объемов данных.

// ................................................................................. Постоянное саморазвитие .................................................................................

// Читайте технические блоги и статьи. Подпишитесь на популярные технические блоги (например, на Medium, Dev.to) и читайте книги по программированию, чтобы не отставать от новых технологий и подходов.
// Посещайте конференции и митапы. Принятие участия в технических конференциях и митапах поможет вам познакомиться с профессионалами из вашей области и узнать о новых трендах в программировании.
// Развивайтесь в open-source. Внесение вкладов в проекты с открытым исходным кодом поможет вам набраться опыта, научиться работать с другими разработчиками и повысить репутацию в сообществе.

// ................................................................................. Планирование карьеры .................................................................................

// Планируйте карьерный рост. Установите для себя цели на следующие 2–3 года, решите, какие навыки и технологии вы хотите изучить, и на каком уровне вы хотите быть через определенное время.
// Изучайте возможности для перехода на более высокие роли. Освойте дополнительные навыки для того, чтобы стать Technical Lead, Architect или пройти на управленческую роль, если это ваше направление.
// Настройте личный бренд. Развивайте профиль на GitHub, пишите статьи и блоги, принимайте участие в open-source проектах — это поможет вам сделать имя в профессиональном сообществе.

// ................................................................................. Практика и проекты .................................................................................

// Продолжайте работать над реальными проектами. Практика — лучший способ улучшить свои навыки. Применяйте знания на практике, создавайте новые проекты, в том числе и личные. Это может быть сайт, приложение или даже помощь стартапам с их задачами.
// Пробуйте работать с командой на реальных проектах. Работая в команде над реальными проектами, вы научитесь учитывать потребности заказчиков, следовать срокам и работать с кодом, который должен быть стабильным в долгосрочной перспективе.

// ! v1
// Удвоение чисел в массиве
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает новый массив с удвоенными значениями.
// Пример входных данных:
// ? const nums = [1, 2, 3, 4];
// Пример вывода:
// ? [2, 4, 6, 8]

// const arr = [1, 2, 3, 4];

// const func = (params) => {
//   return params.map((el) => el* 2)
// }
// console.log(func(arr));

// ! v2
// Возведение чисел в квадрат
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает массив с числами, возведенными в квадрат.
// Пример входных данных:
// const nums = [2, 4, 6];
// Пример вывода:
// ? [4, 16, 36]

// const func = (params) => {
//   return params.map((el) => el** 2)
// }
// console.log(func(nums));

// ! v3
// Приветствие пользователей
// Напиши стрелочную функцию, которая принимает массив имен и добавляет "Hello" перед каждым именем.
// Пример входных данных:
// Пример вывода:
// ["Hello Alice", "Hello Bob", "Hello Charlie"]
// const arr =  ["Alice", "Bob", "Charlie"];

// const func = (params) => {
//   return params.map((el) =>"Hello" + " " + el )
// }
// console.log(func(arr));

// ! v4
// Добавление индексов к элементам массива
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает массив строк с индексами и значениями элементов.
// Пример входных данных:
// const num = [10, 20, 30, 40];
// Пример вывода:
// ? ["Индекс 0: 10", "Индекс 1: 20", "Индекс 2: 30", "Индекс 3: 40"]

// const func = (params) => {
//   return params.map((el, idx) =>`Индекс ${idx}:   ` + el )
// }
// console.log(func(num));

// ! v5
// Изменение регистра текста
// Напиши стрелочную функцию, которая принимает массив строк и переводит их в верхний регистр.
// Пример входных данных:
// const str =  ["apple", "banana", "cherry"];
// Пример вывода:
// ? ["APPLE", "BANANA", "CHERRY"]

// const func = (params) => {
//   return params.map((el, idx) => el.toUpperCase() )
// }
// console.log(func(str));

// ! v6
// Фильтрация чисел больше 5
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает массив чисел, которые больше 5.
// Пример входных данных:
// const num = [2, 5, 8, 1];
// Пример вывода:
// ? [8]

// const func = (params) => {
//   return params.reduce((acc , el) => el > 5 ? el : acc )
// }
// console.log(func(num));

// ! v7
// Проверка на четность чисел
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает массив с true или false, указывая, четное число или нет.
// Пример входных данных:
// const arr = [1, 2, 3, 4];
// Пример вывода:
// ? [false, true, false, true]

// const func = (params) => {
//   return params.map((el) => el % 2 === 0 ? true : false )
// }
// console.log(func(arr));

// ! v8
// Сумма чисел в массиве
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает их сумму.
// Пример входных данных:
// const arr = [1, 2, 3, 4];
// Пример вывода:
// ? 10

// const func = (params) => {
//   return params.reduce((acc, el) => acc + el)
// }
// console.log(func(arr));

// ! v9
// Преобразование в объект
// Напиши стрелочную функцию, которая принимает массив строк и преобразует его в массив объектов с ключами id и name.
// Пример входных данных:
// const arr  = ["Alice", "Bob", "Charlie"];
// Пример вывода:
// ? [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie"}]

// const func = (params) => {
//   let res  = []
//   let idx = 0
//   for( i of params) {
//     idx++
//     res.push({
//       id : idx,
//       name : i
//     })

//   }
//   return res
// }
// console.log(func(arr));

// ! v10
// Умножение чисел с помощью другой стрелочной функции
// Напиши стрелочную функцию, которая принимает массив чисел и возвращает массив, где каждое число умножено на результат другой стрелочной функции, возвращающей фиксированное значение.
// Пример входных данных:
// const arr = [1, 2, 3, 4, 5];
// ? const multiplier = () => 3; // фиксированное значение
// Пример вывода:
// ? [3, 6, 9]

// const func = (params) => {
//   return params.map((el) => {
//     return el + el * 2
//   })
// }

// console.log(func(arr));

// ! TASK 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Дана функция checkTask(arr) которая принимает массив чисел.
// Необходимо вернуть новый массив без дубликатов используя reduce.
// Пример:
// Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10].
// Результат: [18, 21, 1, 51, 5, 7, 10]

// const arr =  [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]
// function func(params) {
//   return params.reduce((acc, el) => {
//     for (i of params) {
//       if (!acc.includes(i)){
//         acc.push(i)
//       }
//     }
//     return acc
//   }, [])
// }

// console.log(func(arr));

// ! TASK 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Данa функция, которая принимает строку.
// Необходимо заменить регистр каждого символа и вернуть новую строку.

// Пример:
// Дана строка 'The Quick Brown Fox'.
// Результат: 'tHE qUICK bROWN fOX'

// const str = 'The QuICK Brown Fox'
// function func(params) {
//   return params.split("").map((el) => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join("")
// }

// console.log(func(str));

// ! TASK 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Описания задания
// Дан массив объектов:
// [
//   {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//   {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//   {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//   {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//   {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ]
// Задача: на все автомобили старше 2007 года, дать скидку 20% (использовать 'sale').
// const arr = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];

// function func(params) {
//   const res = [];
//   for (i of params) {
//     if (i.year > 2007) {
//       res.push({
//         mark: i.mark, year: i.year, price: i.price * 80 / 100 , sale: 20
//       })
//     } else {
//       res.push(i)
//     }
//   }
// return res
// }

// console.log(func(arr));

// ! TASK 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50
// function functionLimit(start) {
//   let num = start;
//   while (num <= 800) {
//     console.log(num);
//     if (num === 800) break;
//     num *= 2;
//   }
//   while (num >= start) {
//     console.log(num);
//     if (num === start) break;
//     num /= 2;
//   }
// }

// functionLimit(50);