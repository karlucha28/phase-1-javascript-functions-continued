// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(parametr = "special"){
    if (parametr = "*") {
        return function() {
            console.log(`You are ${parametr}a hard worker${parametr}!`)
    }
    } else if (parametr = "||") {
        return function() {
            console.log(`You are ${parametr}a hard worker${parametr}!`)
    }
    }
}