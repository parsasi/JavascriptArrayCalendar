# Javascript Array Calendar

JAC returns a 2D array that contains the months and the days of a year. The value of each index is the day of the week for that day.

## Getting Started

Require the file in your project and make an instance of it.

```
let JavascriptArrayCalendar = require('./JavascriptArrayCalendar.js');
let JAC = new JavascriptArrayCalendar(); 


```

### Acquiring

Getting all the days of a year & their 
```
let thisYear = JAC.getDaysOfTheYear(2019);
console.log(thisYear[1][12]);
//February 13 => Wednesday
```
Finding out what day of the week a date is
```
let dayOfTheWeek = getDayOfTheWeek('2019','05',''12);
console.log(dayOfTheWeek);
//Sunday
```


If you don't specify a year, the current year of your system will be used as the defult value.
```
year = parseInt((new Date()).getFullYear());

```


## Developer

* **ParsaSi** - [Parsa.Pro](http://Parsa.pro)

