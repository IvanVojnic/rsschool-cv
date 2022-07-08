#Ivan Voynich
====
## **Junior frontend developer**
====

### **Contact information**

**Phone:** +375 29 373 03 83

**e-mail:** ivojnic44@gmail.com

**telegram:** @vojnicMe
====
### **About myself**

I am a third-year student of BSU. I studied at the Faculty of Applied Mathematics and Computer Science full-time on a budget. In high school, I had got acquainted with programming and started studying  the Java programming language. In my first year at university, I have learned C++, OOP using this language, and also engaged in graphic development while studying WinAPI. In the middle of the first year, I decided to study a new technology for myself and chose the front-end direction. Using resources such as javascript.ru , w3School and video tutorials independently studied HTML, CSS and JavaScript. At the beginning of my second year at university, I started working on my first commercial project. Using learned technologies, I began the development of an online store, additionally studied PHP and MySQL for backend development, completed the work, successfully handing over the project to the customer. In my second year at university, I studied Java, algorithms and data structures using Java, moreover, operating systems using C++. In the middle of the second year, I set out to become a qualified frontend developer and create my own application. To do this, I started studying the React Native framework, which allows me to write cross-platform applications.
I chose the frontend direction because of the huge functionality and variability of development. This means that there is an opportunity to develop a huge number of different projects in different areas. With high motivation and diligence, I believe that I can achieve my goals.

*********
### **My Skills**

1. JavaScript Basics 1
2. HTML5 2
3. CCS3 3
4. Java Basics 4
5. C++ Basics 5
6. MySQL Basics 6
7. PHP Basics 7

_Frame_

1. Bootstrap4 1
2. JQuery 2
3. Tools 3
4. Git, GitHub 4
5. PHPStorm, Intellij IDEA, Visual Studio, VS Code, phpMyAdmin 5
6. Figma Basics 6
*********
###**Code Example**

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

```
var twoSum = function(nums, target) {
let myNumsArr = new Array();
for(let i = 0; i < nums.length; i++){
let tmpObj = new Object();
tmpObj.val = nums[i];
tmpObj.key = i;
myNumsArr.push(tmpObj);
}
myNumsArr.sort(compareNumbers);
for(let i = 0; i < myNumsArr.length; i++) {
let tmp = myNumsArr[i];
let currentElOfArr = myNumsArr[i].val;
let diff = target - currentElOfArr;
myNumsArr.splice(i,1)
let result = binarySearch(myNumsArr,diff);
myNumsArr.splice(i,0,tmp);
if(result!=-1){
let outArr = new Array();
outArr.push(myNumsArr[i].key);
outArr.push(result);
return [myNumsArr[i].key, result];
}
}
};

function compareNumbers(a, b){

    if(a.val > b.val){
        return 1;
    } else if(a.val < b.val){
        return -1;
    } else if(a.val == b.val){
        return 0;
    }
}

function binarySearch(nums, tmpTarget){
let begInd = 0;
let endInd = nums.length-1;
let middleInd = Math.floor((begInd+endInd)/2);
while(begInd<=endInd){
if(nums[middleInd].val!==tmpTarget){
if(tmpTarget < nums[middleInd].val){
endInd = middleInd-1;
middleInd = Math.floor((begInd+endInd)/2);
} else if(tmpTarget > nums[middleInd].val){
begInd = middleInd+1;
middleInd = Math.floor((begInd+endInd)/2);
}
} else if(nums[middleInd].val === tmpTarget){
return nums[middleInd].key;
}
}
return -1;
}
```

*********

###**Courses**

*RS-school Stage0 1

*********
###**Languages**

+English B1 1

+Belarusian Native 2

+Russian Native 3
