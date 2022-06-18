/* Your Code Here */

function createEmployeeRecord(record){
    return{
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRowData){
 return employeeRowData.map(function(record){
    return createEmployeeRecord(record)
 })
}

const createTimeInEvent = function(dateStamp){
    const [date, hour] = dateStamp.split (' ')


    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate( workedDate){
    const inEvent = this.timeInEvents.find(function(event){
        return event.date === workedDate
    })

    const outEvent = this.timeOutEvents.find(function(event){
        return event.date === workedDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(dateWorked){
     const employeeWage = hoursWorkedOnDate.call(this, dateWorked)
     *this.payPerHour
     return parseFloat(employeeWage.toString())
}

function allWagesFor(){
    const eligibleDates = this.timeInEvents.map(function(event){
        return event.date
    })

    const payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

