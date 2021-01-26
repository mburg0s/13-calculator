const first = document.querySelector('#first-no')
const second = document.querySelector('#second-no')
// const ans1 = document.querySelector('#answer')


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    let ans =0
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
    return  document.querySelector('#answer').value = ans


})

  
  
  function res(){
    document.getElementById("form").reset();
    document.getElementById("calculator").reset();
  } 

  const uno = document.querySelector('#uno')
  const dos = document.querySelector('#dos')
  const three = document.querySelector('#three')
  const four = document.querySelector('#four')
  const five = document.querySelector('#five')
  const six = document.querySelector('#six')
  const seven = document.querySelector('#seven')
  const eight = document.querySelector('#eight')
  const nine = document.querySelector('#nine')
  const zero = document.querySelector('#zero')
  const plus = document.querySelector('#add')
  const minus = document.querySelector('#subtract')
  const times = document.querySelector('#times')
  const divide = document.querySelector('#divide')
  const equal = document.querySelector('#equal')
  const decimal = document.querySelector('#decimal')

  let tot =document.querySelector('#calculator').addEventListener('submit', function (e) {
    e.preventDefault()
    // let fVal = e.submitter.value
    // let sVal = e.submitter.value

    // console.log(fval, sVal)

    let ans =0
    if (e.submitter.id == "mult") {
       ans = (Number(e.submitter.value) * Number(e.submitter.value))
    } else if (e.submitter.id == "plus") {
        ans = (Number(first.value) + Number(second.value))

    } else if ( e.submitter.id == "sub") {
        ans = (Number(first.value) - Number(second.value))

    } else ans = (parseInt(first.value) / parseInt(second.value))

    if (ans === NaN) {
        alert ('Not valid')
    }   
     return  
    

  })

  document.querySelector('#calculator').addEventListener('submit', function (e) {

    if (e.submitter.id == 'equal') {
        document.querySelector('#total').value = tot
}
  })
