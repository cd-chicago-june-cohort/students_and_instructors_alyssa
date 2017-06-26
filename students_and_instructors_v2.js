/* studentRoster takes an array of person objects (two keys: "first_name" and "last_name")
    logs a roster of the students in the order they appear in the array
*/

function studentRoster(arr){
    for (var idx = 0; idx < arr.length; idx += 1){
        console.log(arr[idx].first_name, arr[idx].last_name);
    };
};

// testing the studentRoster function
var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];

console.log("\n--Expected--\nMichael Jordan \nJohn Rosales \nMark Guillen \nKB Tonel");
console.log("\n--Actual--\n")
studentRoster(students);

/* fullUserRoster takes an array of person objects (two keys: "first_name" and "last_name")
    logs a roster of the students in the order they appear in the array
*/

function fullUserRoster(obj){
    for (key in obj) {
        console.log(key);
        var arr = obj[key];
        for (var i = 0; i < arr.length; i += 1){
            var position = i + 1
            var name = arr[i].first_name + " " + arr[i].last_name
            var nameLength = name.length-1;
            console.log(position + " - " + name.toUpperCase() + " - " + nameLength);
        };
    }
};


// testing the fullUserRoster
var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 };

console.log("\n--Expected--\nStudents\n1 - MICHAEL JORDAN - 13 \n2 - JOHN ROSALES - 11 \n3 - MARK GUILLEN -11 \n4 - KB TONEL - 7 \nInstructors \n1 - MICHAEL CHOI - 11 \n2 - MARTIN PURYEAR - 13");
console.log("\n--Actual--\n")
fullUserRoster(users);
