function getCapitalLetter(word){
    let parseWord = word.split("");
    parseWord[0] = parseWord[0].toUpperCase();
    return parseWord.join("");
}

function getWeekNum(date){
    const day = date.getDate()
    const weekDay = date.getDay()
    return Math.ceil((day + 7 - weekDay)/7);
}

function getMonth(date){
    const month = date.toLocaleString("ru", {month: "long"});
    if(month == "март" || month == "август")
        return `${month}а`;
    return `${month.slice(0, -1)}я`
}


function getDayInfo(dateStr){
    const [d, m, y] = dateStr.split(".")
    const userDate = new Date(y, m-1, d);
    const weekOfMonth = getWeekNum(userDate)
    const month = getCapitalLetter(getMonth(userDate));
    let weekdayName = getCapitalLetter(userDate.toLocaleString("ru", {weekday: "long"}));
    return `${weekdayName}, ${weekOfMonth} неделя ${month} ${y} года`;
}

console.log(getDayInfo("15.08.2021"))