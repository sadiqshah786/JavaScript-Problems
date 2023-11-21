// JavaScript Problems 

// Date and Time 
// ============================
let months= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Date and Time Questions 
// ===================================
// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
const FindDayTime=()=>{
    let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = daysName[date.getDay()];
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let amOrPm = hr>12 ? "AM" : "PM";
    let hours12 = hr%12===0 ? 12 : hr%12;
    return `Today is : ${day}\nCurrent time is : ${hours12}${amOrPm} : ${min} : ${sec}`
}
// console.log(FindDayTime());


// 2. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const CurrentDate = (format)=>{
    let findDate = date.toISOString().split("T")[0].split(`-`);
    if(format === "mm-dd-yyyy" || "MM-DD-YYYY"){
        return `${findDate[1]} - ${findDate[2]} - ${findDate[0]}`;
    }
    else if(format === "mm/dd/yyyy" || "MM/DD/YYYY"){
        return `${findDate[1]} / ${findDate[2]} / ${findDate[0]}`;
    }
    else if(format === "dd-mm-yyyy" || "dd-mm-yyyy"){
        return `${findDate[2]} - ${findDate[1]} - ${findDate[0]}`;
    }
    else if(format === "dd/mm/yyyy" || "DD/MM/YYYY"){
        return `${findDate[2]} / ${findDate[1]} / ${findDate[0]}`;
    }
    return "Invalid format";
}
// console.log(CurrentDate("mm/dd/yyyy"));


// 3. Write a JavaScript function to check whether an `input` is a date object or not.

// Test Data :
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));
// Output :
// false
// true
// true
// false

const is_date = (dateObj)=>{
    return Array.isArray(dateObj) ? false : true;
}
// console.log(is_date(date))





// 4. Write a JavaScript function to get the current date.

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"


const curday = (seprator)=>{
    let findDate = date.toISOString().split("T")[0].split(`-`);
    if(seprator==="/"){
        return `${findDate[1]}/${findDate[2]}/${findDate[0]}`;
    }
    else if(seprator==="-"){
        return `${findDate[1]}-${findDate[2]}-${findDate[0]}`;
    }
    else{
        return `Invalid Seprator`
    }
}
// console.log(curday("-"))




// 5. Write a JavaScript function to get the number of days in a month.

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31

const getDaysInMonth = (month,year)=>{
    let date = new Date(year,month,1)
    let lastDay = new Date(date-1)
    console.log(lastDay.getDate())
    
}
 console.log(getDaysInMonth(3,2021))


// 6. Write a JavaScript function to get the month name from a particular date.

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"
const month_name = (date)=>{
    let months= ["January","February","March","April","May","June","July",
             "August","September","October","November","December"];
    return  months[date.getMonth()]
 }
//  let dateObj = new Date('11/13/2014')
//  console.log(month_name(dateObj))




// 7. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"

// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"

const compare_dates = (date1, date2) =>{

    if(date1.getTime() > date2.getTime()){
        return 'date1 > date2'
    }
    else if(date1.getTime() < date2.getTime()){
        return 'date1 < date2'
    }
    else{
        return 'date1 = date2'
    }
}

// let date1 = new Date("11/14/2013 00:00");
// let date2 = new Date("11/14/2013 00:01");

// console.log(compare_dates(date1,date2))



// 8. Write a JavaScript function to add specified minutes to a Date object.

// Test Data :
// console.log(add_minutes(new Date(2014,10,2), 30).toString());
// Output :
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"


const add_minutes = (date,minutes)=>{
    let getDate = new Date(date);
    getDate.setMinutes(minutes);
    return getDate;
}

// console.log(add_minutes(new Date(2014,10,2), 30));
// Output :
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"


// 7. Write a JavaScript function to test whether a date is a weekend.

// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined


const is_weekend = (date) =>{
    let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getDay = daysName[new Date(date).getDay()]
    return getDay==="Saturday" || getDay==="Sunday" ? "Weekend" : undefined
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
console.log(is_weekend('Nov 17, 2025'));


// 8. Write a JavaScript function to get the difference between two dates in days.

// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28

const date_diff_indays = (date1,date2)=>{
    
    let getDate1 = new Date(date1).getTime();
    let getDate2 = new Date(date2).getTime();
    let diff = getDate2 - getDate1;
    return diff/(1000*60*60*24)
}

console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));




// 9. Write a JavaScript function to get the last day of a month.

// Test Data :
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));
// Output :
// 31
// 28
// 31

const lastday=(year,month)=>{
    return new Date(year,month+1,0).getDate();
}
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));



// 10. Write a JavaScript function to calculate 'yesterday's day.

// Test Data :
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));

// Output :
// "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
// "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
// "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"


const yesterday = (date)=>{
    const currentDay = new Date(date);
    return new Date(currentDay-1).toString()
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));


// 11. Write a JavaScript function to get the maximum date from an array of dates.

// Test Data :
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/02/02"


const max_date=(arr)=>{
    const maxDate = new Date(arr[0])
    const filterDate = arr.filter(dateString => new Date(dateString) > maxDate);
    return filterDate.join(',','').toString()
}

console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));



// 12. Write a JavaScript function to get the minimum date from an array of dates.

// Test Data :
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/01/03"

const min_date=(arr)=>{
    const min_date = new Date(arr[0])
    const filterDate = arr.filter(dateString => new Date(dateString) < min_date);
    return filterDate.join(',','').toString()
}

console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']))



// 13. Write a JavaScript function that returns the number of minutes in hours and minutes.

// Test Data :
// console.log(timeConvert(200));
// Output :
// "200 minutes = 3 hour(s) and 20 minute(s)."


const timeConvert











