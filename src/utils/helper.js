function compareDateTime(dateObj1,dateObj2){
    let time1 = new Date(dateObj1);
    let time2 = new Date(dateObj2);

    return time1.getTime() > time2.getTime();
}

module.exports = compareDateTime