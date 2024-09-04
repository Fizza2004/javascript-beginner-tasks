//*****--------Counting letters in the sentence----------*****
//TASK1----------------------
let numberOfLetters = (sentence) =>{
  let num=0;
  for(let item of sentence){
    if(item==" "){
      continue;
    }
    ++num;
  }
  return num;
};

console.log(numberOfLetters('Mən Turing Academydə Programing tədrisi alıram'));
//---------------------------


//*****--------Array with Objects----------*****
//TASK2----------------------
let students = [
  {id:1,name:"Ali",surname:"Alisoy",age:20,grade:95},
  {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
  {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
  {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
  {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
  {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
  {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
  {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
  {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
];

//----------------------------------
//1) students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını consolda yazdırın;
for(let i=0;i<=students.length;i++){
  if(students[i].grade==95 || students[i].grade==100){
    console.log(students[i].name);
  }
}
//----------------------------------

//----------------------------------
//2) students arrayində adındakı hərflərin sayı 5 və 5dən kiçik olanların sayını consolda yazdırın;
let numberOfStudents=0;
for(let i=0;i<students.length;i++){
  if(students[i].name.length<=5){
    ++numberOfStudents;
  }
}
console.log(numberOfStudents);
//----------------------------------

//----------------------------------
//3) students arrayində id-i 8 olan obyektin adını və soyadını consolda yazdırın.
for(let i=0;i<=students.length-1;i++){
  if(students[i].id==8){
    console.log(`${students[i].name} ${students[i].surname}`);
  }
}
//----------------------------------