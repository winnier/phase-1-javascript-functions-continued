function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(visualFlair= "*") {
    return function(adjective= "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
}
