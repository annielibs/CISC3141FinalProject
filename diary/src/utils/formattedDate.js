const getDateInMmDdYyyy = function () {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    if (day < 9) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }

    const fullDate = month + "/" + day + "/" + year;
    return fullDate;
};
 
module.exports = getDateInMmDdYyyy;
