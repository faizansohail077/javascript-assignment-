//CHAPTER 1

// Task 1
// var a="welcome to javascript website"
// alert(a)

//Task 2
// var b="Error!please enter a valid password"
// alert(b)

//Task 3
// var c='Welcome to Javascript\nHappy coding! '
// alert(c)

//Task 4
// var d='welcome to js land'
// var e=confirm('Happy coding')
// alert(d)
// alert(e)

//Task 5 (write this in console with alert call)
// console.log(f)
// var f='Hello... i can run javascript through console'

//Chapter 2 

//Task 1
// var username=''

//Task 2
// var myname ='Muhammad Faizan'

//Task 3
// var message='Hello world'
// alert(message)


//Task 4
// var age=20
// var certificate='CNC'
// alert(myname)
// alert(age)
// alert(certificate)

//Task 5
// var food='PIZZA'
// alert(food.slice(0,5))
// alert(food.slice(0,4))
// alert(food.slice(0,3))
// alert(food.slice(0,2))
// alert(food.slice(0,1))

//Task 6
// var mail ='faizansohail077@gmail.com'
// var email='my emai is '+ mail
// alert(email)

//Task 7

// var book='A smarter way to learn JavaScript';
// var learn='I am learn from'+book+' book'
// alert(learn)

//Task 8
// document.write('Yeah i can write HTML through javascript')

//Task 9

// var art= '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ '
// alert(art)

//CHAPTER 3


//Task 1
// var age=20
// var myage='i am '+age+' year old'
// alert(myage)

//Task 3

// var year=1999
// var birthyear='my birth year is '+year
// alert(birthyear)


//Task 4
// var visitor=prompt('Enter name')
// var order =prompt('Enter order')
// var site=prompt('Enter site')
// var print=visitor+' ordered '+order+' from '+site
// document.write(print)


//Chapter 5

//Task 1

// var a=5
// var b=5
// document.write(a+b)

//Task 2

// var a=5
// var b=5
// document.write(a-b)


// var a=5
// var b=5
// document.write(a*b)


// var a=5
// var b=5
// document.write(a/b)

//Task 3
// var value=''
// var declare='value after declarize is :'+ value
// document.write(declare,'<br>') 


// value=5
// document.write('initial value'+value,'<br/>')
// value +=1
// document.write('value after increament'+value,'<br/>')

// var num=7
// num=num+value
// document.write('value after addition is:'+num,'<br/>')

// num -=1
// document.write('value after decrement is:'+num,'<br/>')

// var reminder =num%3
// document.write('the reminder is:'+reminder)


//Task 4

// var ticket=600
// var total=600 *5
// document.write('the price of buying 5 tickets is :'+total)

//Task 5
// var a =4;
// var b='';
// for (var i=1;i<=10;i++){
//     b=a*i;
//     document.write(a+'*'+i+'='+b+'<br/>')
// }

//Task 6
// var C=25
// var F=70

// var formula_C =(F-32)*5/9
// var formula_F=(C*9/5)+32


// document.write(C +' is '+ formula_C,'<br/>')
// document.write(F +' is '+ formula_F)

//Task 7

// var item1=200
// var item2=300
// var order1=2
// var order2=3
// var shipping=100
// var total=item1+item2+order1+order2+shipping

// document.write('price of item 1 is :'+item1,'<br/>')
// document.write('quantity of item 1 is :'+order1,'<br/>')

// document.write('price of item 2 is :'+item2,'<br/>')
// document.write('quantity of item 2 is :'+order2,'<br/>')
// document.write('Shipping charge will be :'+shipping,'<br/>','<br/>','<br/>')

// document.write('Your total amount will be '+total)


//Task 8

// var marks_obtained=680
// var total=980
// var percent=marks_obtained/total * 100
// document.write('Marks obtained by studen : '+marks_obtained,'<br/>')
// document.write(' Total marks are : '+total,"<br/>")
// document.write('Percentage : ',percent+'%')

//Task 10

// var num=5
// var express=(num + 5) * 10 / 2
// alert(express)

//Task 11

// var year = 2020;
// var birthyear=1999;
// var age = year - birthyear
// document.write('Your age is :'+age)



//Task 12


// var r=20;
// var circle=2*3.14*r
// var area=3.14*r**2

// document.write('Radius of a circle :'+r,'<br/>')
// document.write('The circumference is :'+circle,'<br />')
// document.write('the area is :'+area)



//Task 13

// var snacks= 'Lays';
// var age=21;
// var max_Age=95;
// var snacks_per_day=3;
// var total=(max_Age - age) * snacks_per_day

// document.write('your favourite chips :'+snacks,'<br/>')
// document.write('Your courrent age :'+age,'<br/>')
// document.write('your max age : '+max_Age,'<br/>')
// document.write('your sancks per day : '+snacks_per_day,'<br/>')
// document.write('you will need '+total+' lays to last you until the rip age of '+max_Age)




//Chapter 6 - 9

//Task 1

// var a =10

// document.write('The value of a is '+a,'<br/>');
// document.write('The value of ++a is '+ ++a,'<br/>');
// document.write('The value of a++ is '+a++,'<br/>');
// document.write('now the value of a is :'+a,'<br/>')
// document.write('The value of --a is '+ --a,'<br/>');
// document.write('The value of a-- is '+a--,'<br/>');
// document.write('The value of a-- is '+a,'<br/>');

//Task 2

// var a =2
// var b=1
// var result= --a - --b + ++b + b--;
// alert()

// --a ('its a pre decrement : so the value of a is 1')
// --a - --b("in b its also pre decrement so the value of b is 0 so 1-0 =1 ")
// --a - --b + ++b('in here the value of pre increment(b)is now 1 ,so 1 +1 =2 ')
// --a - --b + ++b + b-- ("in here there is post derement in b but the value before decrement of b is 1 and the value will decrese afte sum so the answer is 3 and thhe value of b is after sum 0")


//Task 3
// var name=prompt('Enter name')
// alert('hello '+name)



//Task 4,5

// var number = prompt('Enter number')
// var b = ''

// for (var i = 1; i <= 10; i++){
//    if(number==number){
//        b=number*i
//    }
//    else {

//     b = 5 * i
//    }
//    document.write(number +" * "+  i +" = "+b ,'<br/>')
// }



//TAsk 6

// var subject1 = prompt('Enter subject')
// subject1 = subject1
// var obtained = prompt('Enter marks')

// var subject2 = prompt('Enter subject')
// subject2 = subject2
// var obtained2 = prompt('Enter marks')

// var subject3 = prompt('Enter subject')
// subject3 = subject3
// var obtained3 = prompt('Enter marks')

// var total = 100

// obtained=  obtained / 100 * 100
// obtained2= obtained2 / 100 * 100
// obtained3= obtained3 / 100 * 100


// document.write(subject1 + ' ' + total+' '+obtained, '<br/>')
// document.write(subject2 + ' ' + total+' '+obtained2, '<br/>')
// document.write(subject3 + ' ' + total+' '+obtained3, '<br/>')


//Chapter 9-11

//Task 1

// var city=prompt('Enter city');
// if(city=='Karachi'){
//     document.write('Welcome to the city of light')
// }
// else{
//     document.write('sorry wrong city')
// }



//Task 2
// var gender=prompt('Enter gender')
// if (gender=='male'){
//     document.write('Good moring sir')
// }
// else if(gender=="female"){
//     document.write("Good morning mam")
// }
// else{
//  document.write('good morning')
// }


//Task 3

// var color=prompt("Enter color")
// if (color =='red'){
//     alert('must stop')
// }
// else if(color=='yellow'){
//     alert('start your vehical')
// }
// else if(color=='green'){
//     alert('YOU CAN GO')
// }


//Task 4

// var fuel=prompt('Enter fuel')
// if(fuel < 0.25){
//     alert('please refil the fuel in car')
// }

//Task 5(a)

// var a =4
// if(++a===5){
//     alert('given condition for variable is true')
// }

//Task 5(b)

// var b =82
// if(b++===83){
//     alert('given condition for variable is true')
// }

// Task 5(c)

// var c =12
// if(c++===13){
//     alert('condition 1 is true')
// }

// if(c===13){
//     alert('condition 2 is true')
// }
// if(++c<13){
//     alert('condition 3 is true')
// }
// if(c===14){
//     alert('condition 4 is true')
// }
// condition 2 and 4 is true

// Task 5(e)
// if(true){
//     alert(true)
// }
// if(false){
//     alert(false)
// }

// if ('car'<"cat"){
//     alert("car is smaller than cat")
// }


//Task 7

// var num =3
// var num1=prompt('enter number')
// if(num==num1){
//     alert("bingo")
// }
// else if(num1 < num){
// alert('close enoguh')
// }
// else{
//     alert('try again')
// }



//Task 8

// var num = prompt('enter number')
// if (num % 3 ==0){
//     alert('number is divisible by 3')
// }
// else{
//     alert ("not divisible")
// }


//Task 9

// var num=prompt('Enter number')
// if(num %2==0){
//     alert('Even number')
// }
// else if(num %2 !==0){
//     alert('odd number')
// }


//Task 10

// var T =prompt('Enter number')

// if(T > 40){
//     alert('its to hot outside')
// }


// if(T > 30){
//     alert('the wether is ok')
// }

// if(T > 20){
//     alert('Today\'s wether in cold')
// }

// if(T > 10){
//     alert('OMG today\'s wether is so cool')
// }


//TAsk 11

// var firstnumber=prompt('Enter number')
// var first=Number(firstnumber)
// var secondnumber=prompt('Enter number')
// var second = Number(secondnumber)
// var operator=prompt('Enter number')


// if (operator =='+'){
//     document.write(first + second)
// }

// else if (operator =='-'){
//     document.write(first - second)
// }
// else if (operator =='*'){
//     document.write(first * second)
// }
// else if (operator =='%'){
//     document.write(first % second)
// }


//Chapter 12-13
//TAsk 2
// var a =prompt('enter number')
// var b =prompt('enter number') 
// if (a>b){
//     alert(a+ ' is greater ')
// }
// else if (b>a){
//     alert(b+' is greater')
// }

//Task 3

// var a=prompt('Enter number')
// var b=Number(a)
// if (b>0){
//     alert("positive number")
// }

// else if (b<0){
//     alert("neagtive number")
// }
// else if (b==0){
//     alert("zero")
// }

//TAsk 4

// var value=prompt('Enter a singal letter')

// if (value=="a" || value=="e" || value=="i" || value=="o" || value=="u"){
//     alert('its a vowel')
// }
// else{
//     alert('its not a vowel')
// }


//Task 5 

// var password='123456'
// var input_password=prompt('Input password')
// if(input_password !== password){
//     alert('wrong password')
// }

// else if(input_password == password){
//     alert('correct password')
// }



//TAsk 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// alert(greeting = "Good day");}
// else{
// alert(greeting = "Good evening");
// }


//Chapter 21 -25

//Task1

// var name1=prompt('Enter Name ')
// var name2=prompt(' Enter name')
// var username=name1 + name2
// alert(username)

//Task 2
// var model=prompt('enter you phone model')
// document.write('His favorite phone model is: '+model,'<br/>')
// document.write('the length of input is :'+model.length)


//Task3

// var name="Pakistan"
// var name1=name.indexOf('n')

// document.write('the variable is: ' +name,'<br/>')
// document.write('index of n is: ' +name1)

//Task 4


// var word="Hello world"
// var word1=word.lastIndexOf('l')

// document.write('the variable is: ' +word,'<br/>')
// document.write('last index of l is: ' +word1)


//Task 5
// var string='Pakistan'
// var string1=string.charAt(3)

// document.write('the variable is: ' +string,'<br/>')
// document.write(' letter of 3rd index  is: ' +string1)


//Task 6

// var  name=['faizan']
// var  name2=['sohail']
// var name3=name.concat(name2)
// document.write(name3)


//Task 7

// var city='Hyderabad'
// var city2=city.replace('Hyder','Islam')
// document.write('The first city was :'+city,'<br/>')
// document.write('After replacing :'+city2)


//Task 8
// var message = 'Ali and Sami are best friends. They play cricket and football together.'
// var message1=message.replace('and','&')

// document.write('The first message was :'+message,'<br/>','<br/>','<br/>')
// document.write('After replacing :'+message1)


//Task 9

// var string='475';
// document.write('value of string ' + string,'<br>' )
// document.write('type of string '+typeof "475",'<br>')
// document.write('value of number : '+string,'<br>')
// document.write("type of same number "+typeof  Number(string),'<br>')

//Task 10


// var enter=prompt('Enter anything')
// var enter1=enter.toUpperCase()
// document.write('in lowercase : '+enter,'<br/>')
// document.write('converted to uppercase : '+enter1,'<br/>')



//TAsk 11

// var enter=prompt('Enter anything')
// var enter1=enter.()
// document.write('in lowercase : '+enter,'<br/>')
// document.write('converted to uppercase : '+enter1,'<br/>')


//TAsk 12

// var num = 35.36
// var num1=num.toString()
// var num1=num1.replace('.','')
// document.write('number : '+num,'<br/>')
// document.write('converted to string : '+num1,'<br/>')
// document.write('converted to string : '+ typeof "num1",'<br/>')

//Task 13

// var name=prompt('enter name')

// if (name == name.charcode){
//     alert('ok')
// }

//Task 14

// var input='Enter food'
// var A=['cook','biryani','karahi','korma']

// if (input==A)

//TAsk 15


//TAsk 16


//Task 17
// var country=prompt('enter ')
// alert(country.slice(-1))

//TAsk 18


// var sent='The quick brown fox jumps over the lazy dog'
// var sent1=sent.split
// alert(sent.(the))




//chapter 26-30

//TAsk 1
// var num=3.45214
// document.write('value of num: '+num,'<br/>')
// document.write('round value of num: '+Math.round(num),'<br/>')
// document.write('floor value of num: '+Math.floor(num),'<br/>')
// document.write('ceil value of num: '+Math.ceil(num),'<br/>')

//Task 2

// var num=prompt('enter number')
//  document.write('value of num: '+num,'<br/>')
//  document.write('round value of num: '+Math.round(num),'<br/>')
//  document.write('floor value of num: '+Math.floor(num),'<br/>')
//  document.write('ceil value of num: '+Math.ceil(num),'<br/>')


//Task 3

// var num=prompt('enter value')
// document.write('absolute value: '+Math.abs(num))

//Task 4


// var dice=Math.floor( Math.random() * 6 )
// var dice1=Math.floor( Math.random() * 6 )
// document.write('random dice value:'+dice,'<br/>')
// document.write('random dice value:'+dice1,'<br/>')


//Task 5

// var coin=Math.ceil( Math.random() * 2 )
// alert(coin)

//Task  6

// var random=Math.ceil( Math.random() * 100 )
// document.write('random number between 1 to 100: '+random)

//Task 7

// var weight=prompt('input your weight')
// document.write('weight of user is: '+weight+' kilograms')


//Task 8
// var num1=Math.ceil(Math.random()*10)
// var user=prompt('enter number')
// if (user==num1){
//     alert('congratulations sir you guess is correct')
// }

// else{
//     alert('better luck next time')
// }



//chapter 31 -34

//Task 1
// var date=new Date()
// document.write('today\'s date : '+date)


//Task 2

// var monthNames = ["jan", "feb", "march", "april", "may", "june", "july","august","september","octubar","november","December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var month = monthNames[11];
// alert(month)

//Task 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// if (nameOfToday=='Sat'|| nameOfToday=='Sun'){
//     alert('its fun day')
// }
// else{
//     alert('its not fun day')
// }


//Task 5

// var day=prompt('enter date number')
// if(day <= 15){
//     alert('First Fifteen days of month')
// }
// else{
//     alert('Last days of month')
// }


//Chapter 35-38
//Task 1

// function date(){
//     return new Date
// }
// document.write(date())


//TAsk 2

// function name(firstname,lastname){
//     document.write('Greetings ' + firstname+' ' + lastname)

// }
// name('faizan','sohail')


//Task 3


// var num=Number(prompt('enter number'))
// var num1=Number(prompt('enter number'))


// function add(num,num1){
//     document.write(num + num1)
// }

// add(num,num1)


//Task 4

// function calculator(num1,num2,operator){
//     if (operator=='+'){
//         document.write(num1 + num2)
//     }
//     else if (operator=='-'){
//         document.write(num1 - num2)
//     }
//     else if (operator=='*'){
//         document.write(num1 * num2)
//     }
//     else if (operator=='%'){
//         document.write(num1 % num2)
//     }
//     else{
//         alert('operator not found')
//     }
// }
// calculator(2,3,'*')  



//TAsk 5

// function sq(a){

// }

// alert(sq(2))


//Chapter 38-42

//Task 1

// function calulate(a,b){
//     document.write(a**b)
// }
// calulate(2,5)

//Task 2

// function leap(year) {
//     if (year % 4 == 0) {
//         alert('It\'s a leap year ')
//     }
//     else {
//         alert('not a leap year')
//     }
// }    
// leap(2021)


//Task 3

// var a = prompt('enput')
// var b = prompt('enput')
// var c = prompt('enput')
// var S = (a + b + c) / 2;
// var a = S(S - a)(S - b)(S - c);
// function sides(z) {
//     return s

//     return a
// }
// console.log(sides('sides of traingle are ' + S))
// console.log(sides('Area of traingle is ' + a))



//TAsk 4

// var a = prompt('enter marks')
// var b = prompt('enter marks')
// var c = prompt('enter marks')

// var marks
// var average
// var percent
// var main
// function marks() {
//     var mark1 = 'Math = ' + a;
//     var mark2 = 'English = ' + b;
//     var mark3 = 'Urdu = ' + c;

// }

// function average() {
//     (a + b + c) / 3
// }

// function percent() {
//     (marks / 300) * 100
// }


// function main() {
//     console.log('mark obtained = ' + marks());
//     console.log('avergae =' + average());
//     console.log('Percentage =' + percent())

// }
//main()


//Task 5

// function index() {

// }


//TAsk 6

// var input = 'hello how are u doing'
// function rm(input){
//     document.write( input.replace(/[/a/e/i/o/u]/gi,''))
// }
// rm(input)


//Task 7




//TAsk 8

// var dist = prompt('Enter')

// function meter(){
//     console.log( dist * 1000+' meters')
// }
// meter()

// function feet(){
//     console.log(dist* 3280.8+ ' feets')
// }
// feet()
// function inc(){
//     console.log(dist*39370+' inches')
// }
// inc()
// function cm(){
//     console.log(dist *100000 +' cm/s ');
// }
// cm()



//TAsk 10


// var amount = prompt('Enter amount in hundreads')
// var note = prompt('Enter note')
// function notes(){
//     if(note==100){
//         console.log('Number of notes required is '+amount/note)
//     }else if(note==50){
//         console.log('Number of notes required is '+(amount % 100) / 50);
//     }
//     else if(note==10){
//         console.log('Number of notes required is '+ (((amount % 100) % 50) / 10));
//     }
//     else {
//         'we dont use this note'
//     }
// }

// notes()

//chap 43-48

//TAsk 1
// function alert1(){
//     alert('You just clicked on the link')
// }

//TAsk 2

// function alert2(){
//     alert('Thanks for purchasing')
// }

//Task 3

// var btn=document.querySelector('#btn')

// function button(){
//     btn.remove.parentNode;
// }


//TAsk 4

// function over(img) {
//     img.src = 'https://propakistani.pk/price/wp-content/uploads/2018/10/Xcell-View-in-Pakistan.jpg'
// }


// function out(img) {
//     img.src = "https://www.whatmobile.com.pk/admin/images/Tecno/TecnoCamon15Pro-b.jpg"
// }

//TAsk 5
// var inc = 0
// var dec = 0
// const increase1 = document.getElementById('increase')


// function increase() {
//     inc++
//     increase1.innerHTML = inc
// }

// function decrease() {
//     inc--
//     increase1.innerHTML = inc
// }





//chapter 49-52
//Task 1 




// TAsk 2

// function expand() {
//     var para = "Expedita laborum beatae temporibus, \
//     a cum, cumque consequuntur ad voluptatibus nemo minima quo sunt incidunt perferendis nisi eligendi, rem culpa eos. Tempora adipisci maiores minus ratione, cum fuga labore dignissimos, sint quidem, blanditiis numquam! Iste commodi molestias quas laborum! Beatae, error. In?"
//     document.getElementById('para1').innerHTML=para

// }



//chapter 53-58
 //Task 2

//  function zoomIn()
// {
//     var Page = document.getElementById('p');
//     var zoom = parseInt(Page.style.zoom) + 10 +'%'
//     Page.style.zoom = zoom;
//     return false;
// }

// function Out()
// {
//     var Page = document.getElementById('p');
//     var zoom = parseInt(Page.style.zoom) - 10 +'%'
//     Page.style.zoom = zoom;
//     return false;
// }




//chapter 58 - 67

//Task1 (i)


// var id=document.getElementById('”main-content')

//task 1 ii
// var children=id.children
// console.log(children);

//task 1 iii

// var render= document.getElementsByClassName('render')
// console.log(render.innerHTML);


//task 1 iv

// var name=document.getElementById('firstName')

// name.innerHTML = 'faizan'


//task 1 v
// var lname=document.getElementById('lastName')
// console.log(lname.innerHTML='sohail');