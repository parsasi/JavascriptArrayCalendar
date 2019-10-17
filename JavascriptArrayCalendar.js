class JavascriptArrayCalender{
    constructor() {}

    //Checks for leap years
    isLeapYear(year){
        if(year % 4 == 0){
            return false;
        }else if(year % 100){
            return true;
        }else if(year % 400){
            return false;
        }else{
            return true;                
        }
    }

    // Associates the month with its code 
    getMonthCode(month){
        let monthCode = null;
        switch(month){
            case '1':
            case '01':
                monthCode = 1;
                break;
            case '2':
            case '02':
                monthCode = 4;
                break;
            case '3':
            case '03':
                monthCode = 4;
                break;
            case '4':
            case '04':
                monthCode = 0;
                break;
            case '5':
            case '05':
                monthCode = 2;
                break;
            case '6':
            case '06':
                monthCode = 5;
                break;
            case '7':
            case '07':
                monthCode = 0;
                break;
            case '8':
            case '08':
                monthCode = 3;
                break;
            case '9':
            case '09':
                monthCode = 6;
                break;
            case '10':
                monthCode = 1;
                break;
            case '11':
                monthCode = 4;
                break;
            case '12':
                monthCode = 6;
                break; 
        }
        return monthCode;
    }

    //Converts the index to the day name
    getDayByItsIndex(index){
        let dayName;
        switch(index){
            case 0:
                dayName = 'Saturday';
                break;
            case 1:
                dayName = 'Sunday';
                break;
            case 2:
                dayName = 'Monday';
                break;
            case 3:
                dayName = 'Tuseday';
                break;
            case 4:
                dayName = 'Wednsday';
                break;
            case 5:
                dayName = 'Thursday';
                break;
            case 6:
                dayName = 'Friday';
                break;
        }
        return dayName;
    }
//Checks for the century, in order to add the reletive number
    centuryCalc(century,monthCode){
        if(century == '16'){
            return monthCode + 6;
        }else if(century == '17'){
            return monthCode + 4;
        }else if(century == '18'){
            return monthCode + 2;
        }else if(century == '20'){
            return monthCode + 6;
        }else if(century == '21'){
            return monthCode + 4;
        }else if(century == '22'){
            return monthCode + 2;
        }else if(century == '23'){
            return monthCode + 6;
        }
        return monthCode;
    }
    //Gets Year, Month and Day as strings and returns the Day of the week
    getDayOfTheWeek(year, month, day) {
        //Check for a leap year
        let isLeap = this.isLeapYear(year);
        day =  parseInt(day,10);
        //Takes out the last two digits of the full year 
        let slicedYear = year.slice(2,4);
        //Gets the century out of the full year
        let century = year.slice(0,2);
        let numberOfTwelves = Math.trunc(slicedYear/12);
        let numberOfTwelvesRemainder = slicedYear - (numberOfTwelves * 12 );
        let numberOfFoursFitting = Math.trunc(numberOfTwelvesRemainder / 4);
        let monthCode = isLeap ? this.getMonthCode(month) : this.getMonthCode(month) - 1 ;
        monthCode = this.centuryCalc(century,monthCode);
        let sum = numberOfTwelves + numberOfTwelvesRemainder + numberOfFoursFitting + monthCode + day;
        let index = sum % 7;
        return this.getDayByItsIndex(index);
    }


    //Returns the days of the year in a 2D array. The first layer contains months and the second contains the days in that month. The value of each index is the day of the week.

    getDaysOfTheYear(year){
        if(year != undefined || isNaN(typeof(year))){
            year = parseInt((new Date()).getFullYear());
        }else if(typeof year == "string"){
            year = parseInt(year);
        }
        let day = 1;
        let month = 1;
        let thisYear = [...(new Array(12))].map(i => []);
        while(month <= 12){  
            thisYear[month - 1][day - 1] = this.getDayOfTheWeek(String(year),String(month),String(day));
            if(month == 1 || month == 3 || month == 5 ||month == 7 || month == 8 || month == 10 || month == 12){
                if(day < 30){
                    day++;
                }else{
                    month++;
                    day = 1;
                }   
            }else if(month == 4 || month == 6 || month == 9 || month == 11){
                if(day < 29){
                    day++;
                }else{
                    month++;
                    day = 1;
                }
            }else if(month == 2){
                if(!this.isLeapYear(year)){
                    if(day < 28){
                        day++;
                    }else{
                        month++;
                        day=1;
                    }
                }else{
                    if(day < 29){
                        day++;
                    }else{
                        month++;
                        day=1;
                    }
                }
            }            
            
        }
        return thisYear;
    }

    
}


module.exports = JavascriptArrayCalender;