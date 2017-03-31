# _Ping-Pong_

#### _This is a simple application that returns the words "ping", "pong", and "ping-pong" based on a user's numerical input {3/31/17}_

#### By _**Eric Schoettle**_

## Description

_This website is a game using the words ping-pong. If the user inputs a multiple of three, it returns "ping", if a multiple of five, "pong", and if a multiple of 15, "ping-pong"._


## Specifications

* _Application takes a numerical input_
  * _Application returns input to user_
    * _eg 2 => 2_
  * _Application will show jumbotron with returned input when button is submitted_
* _Application tests if input is an integer_
  * _If not an integer, application alerts user_
    * _eg the => "please enter an integer"_
* _Application tests if input is a multiple of three_
  * _If input is a multiple of three, application returns "ping" to user_
    * _eg 6 => "ping"_
* _Application tests if input is a multiple of five_
  * _If input is a multiple of three, application returns "pong" to user_
    * _eg 25 => "pong"_
* _Application tests if input is a multiple of fifteen_
  * _If input is a multiple of three, application returns "ping pong" to user_
    * _eg 15 => "ping-pong"_
* _Form has a drop down button allowing addition or removal_
  * _On "add", behavior is as above_
  * _On "remove", all instances of the word, number, or corresponding word are removed_
    * _eg on "pong"     11                            11
                        ping                          ping
                        14                            14
                        pong            =>            4
                        4                             ping-pong
                        pong                          
                        ping-pong                          

    IDEAS:
* _button "randomize" will randomize the order of previously entered input_
* _store values in an array, and recalculate. This would allow sneaky features, like remove 30 removing particular instances of ping pong, not all of them.

## Setup/Installation Requirements

_{Simply double click on index.html to open the page in a web browser. Application is compatible with all modern web browsers}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{If you have any ideas for how to make this more interesting, please contact me at an email address I'm unwilling to share freely on the internet. Thanks!!}_

## Technologies Used

_{This app uses javascript and jQuery}_

### License

*{This product may be used under the MIT license}*

Copyright (c) 2016 **_{Eric Schoettle}_**
