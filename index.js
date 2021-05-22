let stringOne = "freeCodeCamp is the best place to learn";
let stringTwo = "frontend and backend development";

// charAt() - The charAt() method returns the character at the specified index in a string.

console.log(stringTwo.charAt(3)); // n

/*  --------------------------------------------------------- */

// charCodeAt() - The charCodeAt() method returns the Unicode of the character at the specified index in a string.

console.log(stringTwo.charCodeAt(3)); //110

/*  --------------------------------------------------------- */

// concat() -The concat() method is used to join two or more strings.

console.log(stringOne.concat(stringTwo)); //freeCodeCamp is the best place to learnfrontend and backend development

/*  --------------------------------------------------------- */

// constructor - the constructor property returns the constructor function for an object.

console.log(stringOne.constructor); //[Function: String]

/*  --------------------------------------------------------- */

// endsWith() - The endsWith() method determines whether a string ends with the characters of a specified string.
// This method returns true if the string ends with the characters, and false if not.
// The endsWith() method is case sensitive.

console.log(stringOne.endsWith("learn")); //true

/*  --------------------------------------------------------- */
// fromCharCode() - The fromCharCode() method converts Unicode values into characters.
// This is a static method of the String object, and the syntax is always String.fromCharCode().

console.log(String.fromCharCode(65)); // A

/*  --------------------------------------------------------- */
// includes - The includes() method determines whether a string contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.
//  The includes() method is case sensitive.
// string.includes(searchvalue, start)
// start - Optional. Default 0. At which position to start the search

console.log(stringOne.includes("learn")); // true

/*  --------------------------------------------------------- */
// indexOf - The indexOf() method returns the position of the first occurrence of a specified value in a string.
//  This method returns -1 if the value to search for never occurs.
// The indexOf() method is case sensitive.

console.log(stringOne.indexOf("the")); // 16
/*  --------------------------------------------------------- */
// lastIndexOf() - The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
// This method returns -1 if the value to search for never occurs.
// string.lastIndexOf(searchvalue, start)
//  start - Optional. The position where to start the search (searching backwards). If omitted, the default value is the length of the string

console.log(stringOne.lastIndexOf("t")); // 31
/*  --------------------------------------------------------- */
// match - The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
console.log(res); // [ 'ain', 'ain', 'ain' ]

/*  --------------------------------------------------------- */
// prototype - The prototype property allows you to add new properties and methods to existing object types.
//  Prototype is a global property which is available with almost all JavaScript objects.
// object.prototype.name = value

function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

var fred = new employee("Fred Flintstone", "Caveman", 1970);
console.log(fred.salary); // 2000

/*  --------------------------------------------------------- */

// repeat()  - The repeat() method returns a new string with a specified number of copies of the string it was called on.
// string.repeat(count)

var str = "Hello world! ";
let pt = str.repeat(2);
console.log(pt); // Hello world! Hello world!

/*  --------------------------------------------------------- */
/* The replace() method searches a string for a specified value, 
   or a regular expression, and returns a new string where the specified values are replaced. 
   Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. 
   To replace all occurrences of a specified value, use the global (g) modifier  
*/
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
console.log(res); // Visit W3Schools!

/*  --------------------------------------------------------- */
/* 
    - The search() method searches a string for a specified value, and returns the position of the match.
    - The search value can be string or a regular expression.
    - This method returns -1 if no match is found.
*/
var str = "Visit W3Schools!";
var n = str.search("W3Schools");
console.log(n); // 6

/*  --------------------------------------------------------- */
/* 
    - slice() - The slice() method extracts parts of a string and returns the extracted parts in a new string.
    - Use the start and end parameters to specify the part of the string you want to extract.
    - The first character has the position 0, the second has position 1, and so on.
    -  Use a negative number to select from the end of the string.
    - string.slice(start, end)
*/
var str = "Hello world!";
var res = str.slice(0, 5);
console.log(res); // Hello

/*  --------------------------------------------------------- */
/* 
        - The split() method is used to split a string into an array of substrings, and returns the new array.
        - Tip: If an empty string ("") is used as the separator, the string is split between each character.
        -The split() method does not change the original string.
        - string.split(separator, limit)
        - limit - 	Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array
    */
var str = "How are you doing today?";
var res = str.split(" ");
var res1 = str.split(" ", 2);
console.log(res); // [ 'How', 'are', 'you', 'doing', 'today?' ]

console.log(res1); // [ 'How', 'are' ]

/*  --------------------------------------------------------- */
/* 
    -The startsWith() method determines whether a string begins with the characters of a specified string.
    -This method returns true if the string begins with the characters, and false if not.
    -The startsWith() method is case sensitive.
    -string.startsWith(searchvalue, start)
    - start	> Optional. Default 0. At which position to start the search
*/
var str = "Hello world, welcome to the universe.";
var n = str.startsWith("Hello");
console.log(n); // true

/*  --------------------------------------------------------- */
/* 
- The substr() method extracts parts of a string, 
  beginning at the character at the specified position,
   and returns the specified number of characters.
- Tip: To extract characters from the end of the string, use a negative start number
- Note: The substr() method does not change the original string.
*/

var str = "Hello world!";
var res = str.substr(1, 4);
console.log(res); // ello

/*  --------------------------------------------------------- */
/* 
-The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
-This method extracts the characters in a string between "start" and "end", not including "end" itself.
-If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
-If either "start" or "end" is less than 0, it is treated as if it were 0.
-Note: The substring() method does not change the original string.
*/
var str = "Hello world!";
var res = str.substring(1, 4);
console.log(res); // ell
/*  --------------------------------------------------------- */
/* 
- The trim() method removes whitespace from both sides of a string.
- The trim() method does not change the original string.
*/
var str = "       Hello World!        ";
console.log(str.trim()); // Hello World!
/*  --------------------------------------------------------- */

/*  --------------------------------------------------------- */

/*  --------------------------------------------------------- */
