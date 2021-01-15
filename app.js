// Changing Case

// Q.no.1
// var user_input_1 = prompt("Enter your First name").toUpperCase();
// document.write(user_input_1 + "</br>");

// Q.no.2
// var user_input_2 = prompt("Enter your Last name").toLowerCase();
// document.write(user_input_2 + "</br>");

// Strings: Measuring Length and extracting parts

// Q.no.1
// var fav_mob = prompt("Enter your favourite mo bile phone");
// var fav_mob_len = fav_mob.length;
// document.write(fav_mob_len)

// Q.no.2
// var fav_mob = prompt("Enter your favourite mo bile phone");
// var fav_mob_len = fav_mob.length;
// var last_char = fav_mob.slice(fav_mob_len-1, ); 
// document.write("the last character of your favourite mobile phone is: " + last_char)

// Strings: finding segments

// Q.no.1
// var country = "pakistani"; 
// var index_of_n = country.indexOf("n");
// document.write("The index of character n is: " + index_of_n);

// Q.no.2
// var username = prompt("Enter your username");
// var special_char_found = false;
// for(var i = 0; i < username.length; i++){
//     if(username.charAt(i) === "@" || username.charAt(i) === "." || username.charAt(i) === "," || username.charAt(i) === "!"){
//         special_char_found = true;
//         break;
//     }
// }
// if(special_char_found === true){
//     var valid_username = prompt("Enter valid username")
// }
// else if(special_char_found === false){
//     alert("Your Username is valid")
// }

// Q.no.3

// Strings: Finding a character at a location

// Q.no.1
// var country = "pakistani";
// var char = country.charAt(3);
// alert(char)

// Strings: Replacing Characters

// Q.no.1
// var text = "Hyderabad";
// var new_text = text.replace("Hyder", "Islam");
// alert(new_text)

// Q.no.2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var new_message = message.replace(/and/g, "&")
// alert(new_message)

// Rounding Numbers

// Q.no.1
// var number = parseFloat(prompt("Enter Positive number"));
// var number_round_off = Math.round(number);
// var number_floor = Math.floor(number);
// var number_ceil = Math.ceil(number);
// document.write("Number : " + number + "<br>");
// document.write("Round Off : " + number_round_off + "<br>");
// document.write("Floor : " + number_floor + "<br>");
// document.write("Ceil : " + number_ceil + "<br>");

// Q.no.2
// var number = parseFloat(prompt("Enter Negative number"));
// var number_round_off = Math.round(number);
// var number_floor = Math.floor(number);
// var number_ceil = Math.ceil(number);
// document.write("Number : " + number + "<br>");
// document.write("Round Off : " + number_round_off + "<br>");
// document.write("Floor : " + number_floor + "<br>");
// document.write("Ceil : " + number_ceil + "<br>");


// Generating Random Numbers

// Q.no.1
// var random = Math.random();
// var random_6 = (random*5) + 1;
// var random_round = Math.round(random_6);
// var dice = random_round;
// alert("Result of Dice is: " + dice)

// Q.no.2
// var random = Math.random();
// var random_upgrade = (random*1) + 1;
// var random_upgrade_round = Math.round(random_upgrade);
// var toss = random_upgrade_round;
// if(toss === 1){
//     alert("Tails")
// }
// else{
//     alert("Heads")
// }

// Q.no.3
// var random = Math.random();
// var random_upgrade = (random*9) + 1;
// var number = Math.round(random_upgrade);
// var userinput = parseInt(prompt("Guess a number"));
// if(userinput === number){
//     alert("Congratulation");
// }
// else{
//     alert("Better Luck next time");
// }

// Converting Strings to integers and decimals

// Q.no.1
// var weight = parseInt(prompt("Enter your weight in kg."));
// alert(weight + " Kilograms")

// Converting string to numbers and numbers to string

// Q.no.1
// var string = "472";
// var number = Number(string);
// alert("The type of " + string + " is " + typeof(string));
// alert("The type of " + number + " is " + typeof(number));

// Q.no.2
// var num = 35.36;
// var str = num.toString();
// var string = str.replace(".", "");
// alert(string)

// Controlling the length of decimals

// Q.no.1
// var percentage = 30 / 45 * 100;
// var percentage = percentage.toFixed(2)
// alert(percentage)
 
        //  ============================================================  




