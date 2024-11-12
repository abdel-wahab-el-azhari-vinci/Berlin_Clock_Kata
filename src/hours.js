export class HoursMain {
    hoursOne(hour){
        return multipleOf5(hour);
    }
}

function multipleOf5(hour) {
    return hour % 5;
}
