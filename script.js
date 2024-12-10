// alert("welcome to all")

// a="welcome back"
// console.log("hello",a);

// var a="hello"
// a=20

// console.log(a);

// let a=20
// console.log(a);

let a={name:'ibin',age:21}
let b=false
let c=[1,2]
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(a)
console.log(b)
console.log(c)


// ___________________________________________

function sample(){
    // let result=document.getElementById('name')
    //     console.log(result.value);
    //     document.getElementById("display").innerHTML=result.value

    // let result=document.getElementById('name').value
    // console.log(result);
    // let h2=document.getElementById('display')
    // h2.innerHTML=result
    

}

function add(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("dis")
    h2.innerHTML=no1+no2
}

function sub(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("dis")
    h2.innerHTML=no1-no2
}

function mult(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("dis")
    h2.innerHTML=no1*no2
}

function div(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("dis")
    h2.innerHTML=no1/no2
}

function mode(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("dis")
    h2.innerHTML=no1%no2
}