'use strict'; 
// console.log('test');

function getRandomGrade (){
    return Math.floor(Math.random()*100);
}

// var x= getRandomGrade();

// console.log(x);

function Classgrade(studentname,cource){
    this.studentname= studentname;
    this.studentgrade= getRandomGrade();
    this.cource= cource;
    Classgrade.prototype.allgrades.push(this);
}

Classgrade.prototype.allgrades = []; 

// new Classgrade('izz','english');
// console.log(Classgrade.prototype.allgrades);

var gradeform = document.getElementById('gradeform'); 

gradeform.addEventListener('submit', addgrade);

function addgrade(event){
    event.preventDefault();
    // console.log('event test');

// console.log(event.target.studentname.value); 
var name = event.target.studentname.value; 
var course = event.target.course.value; 

new Classgrade (name,course); 


console.log(Classgrade.prototype.allgrades);

storage();

result(); 
}
// result(); 
function result (){
    var datarow; 
    var namedata;
    var gradedata;
    var courcedata;
    var statusdata;
    console.log(Classgrade.prototype.allgrades);
    var resulttable = document.getElementById('resulttable');
    resulttable.innerHTML = ''; 
    var header = document.createElement('tr'); 
    resulttable.appendChild(header); 
    var name = document.createElement('th');
    resulttable.appendChild(name); 
    name.textContent= 'Sudent Name';

    var grade = document.createElement('th');
    resulttable.appendChild(grade); 
    grade.textContent='Student Grade';

    var cource = document.createElement('th');
    resulttable.appendChild(cource); 
    cource.textContent='Cource'; 

    var status = document.createElement('th');
    resulttable.appendChild(status); 
    status.textContent = 'Status'
    if (izz> 0 ){
        var x = localStorage.getItem('gradedata')

        x = JSON.parse(x);
    console.log(x);
      
    Classgrade.prototype.allgrades = x ;
    for (var i=0 ; i< Classgrade.prototype.allgrades.length; i++){
        datarow = document.createElement('tr'); 
        resulttable.appendChild(datarow); 
        namedata = document.createElement('td');
        resulttable.appendChild(namedata);
        namedata.textContent= Classgrade.prototype.allgrades[i].studentname;
 
        gradedata = document.createElement('td'); 
        resulttable.appendChild(gradedata); 
        gradedata.textContent=Classgrade.prototype.allgrades[i].studentgrade; 
 
        courcedata = document.createElement('td'); 
        resulttable.appendChild(courcedata); 
        courcedata.textContent = Classgrade.prototype.allgrades[i].cource;

        if (Classgrade.prototype.allgrades[i].studentgrade >= 50){
            statusdata = document.createElement('td'); 
            resulttable.appendChild(statusdata);
            statusdata.textContent = 'PASS';
        }else{
            statusdata = document.createElement('td'); 
            resulttable.appendChild(statusdata);
            statusdata.textContent = 'FAIL';
        }


 
     }
    }else {

        for (var i=0 ; i< Classgrade.prototype.allgrades.length; i++){
            datarow = document.createElement('tr'); 
            resulttable.appendChild(datarow); 
            namedata = document.createElement('td');
            resulttable.appendChild(namedata);
            namedata.textContent= Classgrade.prototype.allgrades[i].studentname;
     
            gradedata = document.createElement('td'); 
            resulttable.appendChild(gradedata); 
            gradedata.textContent=Classgrade.prototype.allgrades[i].studentgrade; 
     
            courcedata = document.createElement('td'); 
            resulttable.appendChild(courcedata); 
            courcedata.textContent = Classgrade.prototype.allgrades[i].cource;
            
            if (Classgrade.prototype.allgrades[i].studentgrade >= 50){
                statusdata = documnet.createElement('td'); 
                resulttable.appendChild(statusdata);
                statusdata.textContent = 'PASS';
            }else{
                statusdata = documnet.createElement('td'); 
                resulttable.appendChild(statusdata);
                statusdata.textContent = 'FAIL';
            }
         }
    }
    
   
    
}
var izz= 0 ; 
function storage (){

    izz ++ ;
    var x = Classgrade.prototype.allgrades ; 
    
    x = JSON.stringify(x); 
    localStorage.setItem('gradedata',x);
    console.log(izz);

}
 

// console.log(typeof(Classgrade.prototype.allgrades.cource));

result(); 