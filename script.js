// let one = document.querySelector('.one');
// let two = document.querySelector('.two');
// let plus = document.querySelector('.plus');
// let tr = document.querySelector('.true');
// let d1 = document.querySelector('.d1');
// let d2 = document.querySelector('.d2');
// let d3 = document.querySelector('.d3');
// let d4 = document.querySelector('.d4');
// let d5 = document.querySelector('.d5');

// one.onclick =() => {
//     d1.innerHTML = +"1"
// }

// two.onclick =() => {
//     d3.innerHTML = +"2"
// }
// plus.onclick =() => {
//     d2.innerHTML = "+"
// }


// tr.onclick = () => {
//     if (d2.innerHTML = "+")
//     d5.innerHTML = +d1.innerHTML + +d3.innerHTML
//     d4.innerHTML = "="
// }

function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

document.querySelector('.intem').onclick = insert

document.querySelector('.clean').onclick = function clean() {
    document.form.textview.value = " ";

}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.lenght - 1);
}

document.querySelector('.equal').onclick = function equal() {
    let exp = document.form.textview.value;
    if (exp)  {
        document.form.textview.value = eval(exp);
    }
}

// document.querySelector('.back').onclick = back