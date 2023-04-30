const num1 = document.getElementById('num1') as HTMLInputElement
const num2 = document.getElementById('num2') as HTMLInputElement
const button = document.getElementById('button')!
const numResult: Array<number>=[]
const textResult: string[]=[]

type NumorString=number | string
type Result={
    val:number,
    timeStamp:Date
}
function add(num1:NumorString, num2:NumorString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2

    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2
    }

    return +num1 + +num2
}

function printResult(resultObj:Result){
    console.log(resultObj.val)
}

button.addEventListener('click', () => {
    const num1Value = num1.value
    const num2Value = num2.value
    const result = add(+num1Value, +num2Value)
    numResult.push(result as number)
    const result2=add(num1Value,num2Value)
    textResult.push(result2 as string)
    printResult({val:result as number,timeStamp:new Date()})
    console.log(numResult,textResult)
})



console.log(add(1, 6))
console.log(add('1', '6'))