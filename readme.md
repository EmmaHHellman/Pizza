# _Mr. Roboger's Neighborhood_

#### _A website that converts a number into a range of numbers with exceptions, June 12, 2020_

#### By _**Emma Hellman**_

## Description

_The website allows users to input a number which returns a range of numbers from 0 to the user inputted number with exceptions. If the number contains a 1 the digits will be replaced with "beep". If the number contains a 2 the digit will be replaced by "boop". If the digit contains a 3, the digit will be replaced with "Won't you be my neighbor". The rules are written from least to most important. So if the number is 32, the number 32 is replaced by "Won't you be my neighbor". You can view the website here https://emmahhellman.github.io/numbers/_

## Specifications

Behavior

Return a range of numbers from 0 to the users inputted number
Input: '4'
Output: '0, 1, 2, 3, 4'

Behavior

All digits containing a 1 should output "Beep!"
Input: 1
Output: "0", "Beep"

Behavior

All digits containing a 2 should output "Boop!"
Input: 2
Output: "0", "Beep", "Boop!"

Behavior

All digits containining a 3 should output "Won't you be my neighbor"
Input: 3
Output: "0", "Beep", "Boop", "Won't you be my neighbor"

Behavior

The rules are written from least to most important so the second takes precedence over the first and the third takes precedence over the second.  
Input: 23
Output: "Won't you be my neighbor?"

Input: 12 
Output: "Boop" 

## Setup/Installation Requirements

* _Clone this repository https://github.com/EmmaHHellman/numbers.git_
* _Open index file in browser_

## Known Bugs

_There are no known bugs._

## Support and contact details

_Contact me at ehh801@icloud.com if there are any issues or concerns._

## Technologies Used

_Virtual Studio Code_

### License

*MIT License*

Copyright (c) 2020 **_Emma Hellman_**