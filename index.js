// Level 0 -------------------------------
function numberOrNotA(angka) {
    return new Promise(function (resolve, reject) {
        if (typeof angka === 'number') {
            resolve('input is a number')
        } else {
          reject('Error : input is not a number')
        }
    })
}
numberOrNotA(2).then(response => console.log(response,'0')).catch(error => console.log(error,'0'))
numberOrNotA(555).then(response => console.log(response,'0')).catch(error => console.log(error,'0'))
numberOrNotA(true).then(response => console.log(response,'0')).catch(error => console.log(error,'0'))


// Level 1 -------------------------------
function numberOrNotB (angka) {
    if (typeof angka === 'number') {
      return Promise.resolve('input is a number')
    } else {
      return Promise.reject('input is not a number')
    }
  }
  
  numberOrNotB(2).then(response => console.log(response,'1')).catch(error => console.log(error,'1'))
  numberOrNotB(555).then(response => console.log(response,'1')).catch(error => console.log(error,'1'))
  numberOrNotB(true).then(response => console.log(response,'1')).catch(error => console.log(error,'1'))
  
// Level 2 -------------------------------
function checkVariableType(input) {
    return new Promise((resolve, reject) => {
        if (input) {
            resolve(`input is a ${typeof input}`)
        } else {
            reject('please input a variable')
        }
    })
}

checkVariableType("abc").then(res => console.log(res,'2')).catch(err => console.log(err,'2'))
checkVariableType(2).then(res => console.log(res,'2')).catch(err => console.log(err,'2'))
checkVariableType([]).then(res => console.log(res,'2')).catch(err => console.log(err,'2'))
checkVariableType().then(res => console.log(res,'2')).catch(err => console.log(err,'2'))

// Level 3 -------------------------------
function numberValidation(input) {
    return new Promise((resolve, reject) => {
        if (typeof input === 'number') {
            resolve(input)
        } else {
            reject('input is not a number')
        }
    })
}

function multipleByTwo(input) {
    return input * 2
}

function multipleByThree(input) {
    return input * 3
}

numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res,'3')).catch(err => console.log(err,'3'))
numberValidation("").then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res,'3')).catch(err => console.log(err,'3'))

// Level 4 -------------------------------
async function result1 () {
    console.log('before promise')
    await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res,'4')).catch(err => console.log(err,'4'))
    console.log('after promise')
  }
  
  result1()
  
// Level 5 -------------------------------
async function result2 () {
    let result = await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => res).catch(err => err)
    console.log(result,'5')
  }
  
  result2()

