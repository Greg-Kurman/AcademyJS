
let money = prompt('ваш бюджет')
let name = prompt('название вашего магазина ?')

let time = 12



let mainList = {
    budget: money,
    shopName: name,
    shopProducts: [],
    employers: {},
    open: false
}


for (let i = 0; i < 5; i++) {
    let a = prompt('какой товар будем продавать?')

    if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
        console.log('Данные внесены')
        mainList.shopProducts[i] = a
    } else {
            mainList.shopProducts[i]= null
    }
}

if (time > 8 && time < 18) {
    mainList.open = true
    console.log('магазин работает')
} else {
    console.log('магазин не работает')
    mainList.open = false

}

console.log(mainList)

 
 