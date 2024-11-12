export class HoursMain {
    hoursOne(hour){
        if(hour === 2){
            return 2;
        }
        if(hour === 3){
            return 3;
        }
        if(hour === 4){
            return 4;
        }
        if (hour === 5) {
            return 0;
        }
        return 1;
    }
}