const first = document.querySelector('#first-no')
const second = document.querySelector('#second-no')
const ans1 = document.querySelector('#answer')


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    
    let ans = 0
    if (e.submitter.id == "times") {
       ans = (Number(first.value) * Number(second.value))
    } else if (e.submitter.id == "add") {
        ans = (Number(first.value) + Number(second.value))

    } else if ( e.submitter.id == "subtract") {
        ans = (Number(first.value) - Number(second.value))

    } else ans = (parseInt(first.value) / parseInt(second.value))

    if (ans === NaN) {
        alert ('Not valid')
    }   
    return  ans1.value = ans


})

  
// const dispValue = ''
// firstNum =''
// secNum = false
// operator = ''
  
   
// function displayValue() {
//     const inputValue = document.querySelector('#total')
//     inputValue.value = total
// }

const form = document.querySelector('#calculator')
const total = document.querySelector('#total')

  
  
function res(){
    document.getElementById("form").reset();
    // document.getElementById("calculator").reset()
    total.value=''
    fNum.value=''

  }

//   let fNum = '' 
// function getUserInput(input) {
//     fNum=fNum + input
//     return fNum    
// }


// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const inpVal = e.submitter.value
//     // console.log(e.attributes)
//     return total.value = Number(getUserInput(inpVal))


// })


// let lastNum = total.value
// console.log(lastNum)

    
// document.getElementById
// console.log(fNum)
