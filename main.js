const first = document.querySelector('#first-no')
console.log("first",first)
const second = document.querySelector('#second-no')
const ans1 = document.querySelector('#answer')


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.submitter.id)
    let ans =0
    if (e.submitter.id == "times") {
       ans = (parseInt(first.value) * parseInt(second.value))
    } else if (e.submitter.id == "add") {
        ans = (parseInt(first.value) + parseInt(second.value))

    } else if ( e.submitter.id == "subtract") {
        ans = (parseInt(first.value) - parseInt(second.value))

    } else ans = (parseInt(first.value) / parseInt(second.value))

    console.log(first.value, second.value, ans)

    return  document.querySelector('#answer').value = ans


})

document.querySelector('#reset').addEventListener('click', function () {
    first.value =""
    second.value =""
    ans1.value = ""
})

