function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    return (dayRate(ratePerHour) * numDays) - (((dayRate(ratePerHour) * 22)*(1-discount))*Math.floor((numDays/22)) + dayRate(ratePerHour) * (numDays % 22));  
}

const DAY_HOUR_WORK_TIME = 8;

function dayRate(ratePerHour) {
    return ratePerHour * DAY_HOUR_WORK_TIME;
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));