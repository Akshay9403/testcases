let arry=[11,22,33]
console.log(arry[0])
console.log(arry[1])
console.log(arry[2])

//distructure

let [a,b,c]=arry
console.log(a)
console.log(b)
console.log(c)

let name={
    fullname:"akshay pardeshi",
    age:28,
    state:"maha"
}
console.log(name.fullname)
console.log(name.age)
console.log(name.state)

//distructure

let {fullname,age,state} = name
console.log(fullname)
console.log(age)
console.log(state)
// put allias name 
let {fullname:aa,age:bb,state:cc} = name
console.log(aa)
console.log(bb)
console.log(cc)

let name1={
    fullname1:"akshay pardeshi",
    age1:28,
    state1:"maha",
    skills1:["python","java"]
}
console.log(name1.skills1[0])
console.log(name1.skills1[1])

let {fullname1,age1,state1,skills1:[aaa,bbb]}=name1
console.log(aaa)
console.log(bbb)

let student=[
    {
        name:"akshay",
        code:431114
    },
    {
       name:"sanjay",
       code:441144
    }
]
let [{name:dd,code:ee},{name:rr,code:pp}]=student
console.log(dd)
console.log(ee)
console.log(rr)
console.log(pp)

let family={
    parents:{
        mother:"nutan",
        brother:"chiru"
    }
}

let {parents:{mother:ll,brother:mb}}=family
console.log(ll)
console.log(mb)

let vehicle={
    color:"black",
    tyre:["mrf","tvs"],
    start:{
        one:"automatic",
        two:"manual"
    }
}


let {color,tyre:[mm,tt],start:{one:oo,two:ii}}=vehicle
console.log(mm)
console.log(tt)
console.log(oo)
console.log(ii)

//rest
// function addition(x,y,z){
//     console.log(x+y+z)
// }
// addition(11,22,33)// but i dont know how many value pass by below then use rest 

// function addition(x,y,z){
//     console.log(x+y+z)
// }
// addition(11,22,33,44)// in this case only first 3 value calculate then

function addition(...xxx){
    //console.log(xxx)//got array then use reduce
    let sum=xxx.reduce(function(acc,el){
        return acc+el
    })
    return sum

}
let total=addition(11,22,33,44)
console.log(total)

//spred

let ar=[11,22,33,55]

// function add(h,g,f){
//     console.log(h+g+f)
// }
// add(ar[0],ar[1],ar[2])

function add(h,g,f){
    console.log(h+g+f)
}
add(...ar)