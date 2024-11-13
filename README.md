# Berlin_Clock_Kata
## This project realised by : 
 - EL AZHARI Abdel Wahab 
 - BENHAMMOU Ayoub
 - TOUZANI Ali-Reda

## Description
This project implements the Berlin Clock, which displays the time using a series of illuminated lamps.

How the Berlin Clock Works
Seconds Lamp:

The large round lamp at the top is lit for even seconds and off for odd seconds.
Hours:

The first row represents blocks of 5 hours and consists of 4 red lamps.
The second row represents single hours and consists of 4 red lamps.
Minutes:

The third row represents blocks of 5 minutes and consists of 11 lamps. Every third lamp is red, and the others are yellow.
The fourth row represents single minutes and consists of 4 yellow lamps.
Usage
To use the Berlin Clock, create an instance of the BerlinClock class and call the clockPrint method to get the current time in the Berlin Clock format.

## Output
For the time 13:17:01, the Berlin Clock would display:

```Actual hour: 13:17:1
     X     
    RRRX
    RRRX
 YYRXXXXXXXX
    YYXX
```