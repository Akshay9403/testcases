//regular expreshion written in /string/
//method 1] exec--return index
let sentex="i am akshay and akshay become a test engineer"
let regOne=/akshay/

let a=regOne.exec(sentex)
let b=regOne.exec(sentex)
console.log(a)// only take first element index whose serching in sentex i.e akshay-index 5
console.log(b)
// then search globaly by using g tag
sentex="i am akshay and akshay become a test engineer"
regOne=/akshay/g
let a1=regOne.exec(sentex)
let b1=regOne.exec(sentex)
console.log(a1)
console.log(b1)// g tag can search whole sring and number of available text in sentex then return in index
// sentex available nasel tar null return karnar 
console.log('------------------------')
//i tag use for case sensetive
sentex="i am akshay and Akshay become a test engineer"
let regTwo=/akshay/gi
let c=regTwo.exec(sentex)
console.log(c)
let cc=regTwo.exec(sentex)
console.log(cc)//small or capital sring index return 
console.log('------------------------')
//method 2] test--return boolean
let sentex1="i am akshay and Akshay become a test engineer"
let regThree=/akshay/gi
let regFour=/hay/
let c1=regThree.test(sentex1)
console.log(c1)//true
let c2=regThree.test(sentex1)
console.log(c2)//true

let d=regFour.test(sentex1)
console.log(d)//true

//regular expreshion method 2--exec,test
// string method
//search--first index return,match--return array of repeatword,replace

let subject='aksahy sandip,yogesh,Sandip,SANDIP'
let asp=/SANDIP/gi
let dd=subject.search(asp)
console.log(dd)//7  nasel tar -1 ani pahilach index deil nantar cha nahi
let ddd=subject.match(asp)
console.log(ddd)//[ 'sandip', 'sandip', 'sandip' ]

let dddd=subject.replace(asp,'sanny')
console.log(dddd)//aksahy sanny,yogesh,sanny,sanny

// count string 

let aa="I am akshay and i learn javascript and i learn cypress"
let regFive=/and/g
let regSix=/i/gi
let ex=aa.match(regFive)
console.log(ex.length)//2
let ex1=aa.match(regSix)
console.log(ex1.length)//4
// replace string
let regSven=/i/gi
let ex2=aa.replace(regSven,"you")
console.log(ex2)//you am akshay and you learn javascryoupt and you learn cypress

// META characters 
//startWith ^, endWith $
aa="tester am akshay and i learn javascript and i learn cypress"
regEight=/^tes/
if(regEight.test(aa)){
    console.log('is pass')
}
else{
    console.log('is fail')
}//pass

regEight=/ess$/g
if(regEight.test(aa)){
    console.log('is pass')
}
else{
    console.log('is fail')
}//pass
//. means konta pan character repleceble ahe 
let fruit='banana'
let regNine=/b.nana/
if(regNine.test(fruit)){
    console.log('is pass')
}
else{
    console.log('is fail')
}//pass

//x*  start x follwed by any number of characters
fruit='Banabatyrdtfy'
regNine=/ba*/  //zero and any number of chara check avilable then pass
if(regNine.test(fruit)){
    console.log('is pass')
}
else{
    console.log('is fail')
}//pass
// char before ? optional
let flower='apple'//''appple--fail
let reggOne=/ap?p?le/
if(reggOne.test(flower)){
    console.log('is pass')
}
else{
    console.log('is fail')
}//pass

//optional[] match
let aaa='cct'     //cdt--fail,cat--pass ,cet--fail
let reggTwo=/c[abc]t/  
console.log(reggTwo.test(aaa))//true

aaa='cbct'   //cdet--fail,cact--pass ,ceet--fail
reggTwo=/c[abc][abc]t/
console.log(reggTwo.test(aaa))//true

//using range

let bbb='kela'
let reggThree=/k[a-z][a-z]a/
console.log(reggThree.test(bbb))//true


bbb='ke5a'  
reggThree=/k[a-z][a-z]a/
console.log(reggThree.test(bbb))//fail


bbb='ke5a'  
reggThree=/k[a-z][0-9]a/
console.log(reggThree.test(bbb))//true


bbb='keba'  
reggThree=/k[a-z][0-9abc]a/
console.log(reggThree.test(bbb))//true

let asp1='Akshay Sanjay Pa8rdeshi'
let reggg=/[a-z][A-Z][0-9]/gi
console.log(reggg.test(asp1))//true

let reg1=/[^abc][A-Z][0-9]/
let one='i aA3 new to jS4'
console.log(reg1.test(one))//true

reg1=/[^abc][A-Z][0-9]/
one='i aA3 new to bS4'
console.log(reg1.test(one))//false


let reg2=/[^0-5][^a-z][A-z]/g
let two='8AA1WW9AA'
console.log(two.match(reg2))//[ '8AA', 'W9A' ]
//group

let reg3=/(akshay)p/gi
let three="akshay Akshay akshayp"
console.log(three.match(reg3))//akshayp

reg3=/(akshay)[abp]/gi
three="akshaya Akshayb akshayp"
console.log(three.match(reg3))//[ 'akshaya', 'Akshayb', 'akshayp' ]
//OR

let reg4=/(aa|ba|ca)z/g
let four="aa bb cc dd ee ff gg aa ab aa ba ca"
console.log(four.match(reg4))//null

reg4=/(aa|ba|ca)/g
four="aa bb cc dd ee ff gg aa ab aa ba ca"
console.log(four.match(reg4))

//checking mobile nuberr starting

let reg5=/(88|99|94)[1-9]/g
let five="889 945 998"
console.log(five.match(reg5))

let reg6=/(ram){2}/g
let six="ramram ram ramramram"
console.log(six.match(reg6))//[ 'ramram', 'ramram' ]

reg6=/(ram){1}/g
six="ramram ram ramramram"
console.log(six.match(reg6))//[ 'ram', 'ram', 'ram', 'ram', 'ram', 'ram' ]

reg6=/(ram){1,3}/g
six="ramram ram ramramram"
console.log(six.match(reg6))//[ 'ramram', 'ram', 'ramramram' ]

//mobile number
let reg7=/[^0][0-9]{9}/

console.log("9403693659".match(reg7))
console.log("0403693659".match(reg7))//null
console.log("996007250".match(reg7))//null