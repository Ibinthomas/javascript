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

function equal(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let h2=document.getElementById("dis")
    
    if (a==b){
        h2.innerHTML='eql'
    }
    else if(a!=b)
        h2.innerHTML='not eql'
}

function check(){
    let city=document.getElementById("city").value
    let h2=document.getElementById("dis")
    if (city=='delhi'){
        h2.innerHTML='mounment red fort'
    }
    else if(city=='kerala'){
        h2.innerHTML='alappuzha'
    }

    else if(city=='goa'){
        h2.innerHTML='beatch'
    }

}

function days(){
    let day=document.getElementById("day").value
    let h2=document.getElementById("dis")
    if (day=='1'){
        h2.innerHTML='sunday'
    }
    else if(day=='2'){
        h2.innerHTML='monday'
    }

    else if(day=='3'){
        h2.innerHTML='tuesday'
    }

    else if(day=='4'){
        h2.innerHTML='wednesday'
    }

    else if(day=='5'){
        h2.innerHTML='thursday'
    }

    else if(day=='6'){
        h2.innerHTML='friday'
    }

    else if(day=='7'){
        h2.innerHTML='saturday'
    }

}

