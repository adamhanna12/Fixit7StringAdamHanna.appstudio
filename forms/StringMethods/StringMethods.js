/* Create a variable named quoteString and put this string in it: 
Failure is simply the opportunity to begin again this time more intelligently. */ 

var quoteString = 'Failure is simply the opportunity to begin again this time more intelligently.'
console.log(quoteString)

/* Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. */ 

var upperCaseString = quoteString.toUpperCase()
console.log(upperCaseString)

/* Create a new variable named authorString and put this text in it. 

- Henry Ford */ 

var authorString = ' - Henry Ford'
console.log(authorString)

/* Then use a string method to put the authorString value on the end of the quoteString value, saving the new string in a variable named completeString. */ 

var completeString = quoteString.concat(authorString)
console.log(completeString)

/* Using a string method, add this string to the end of myString and save the new string in a variable named authorString. */



/* Now create a new string named secondQuote and put this string in it: 
Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King */ 

var secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
console.log(secondQuote)

/* Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString. */ 

var lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)

/* Find the character at the 3rd position of secondQuote. */

console.log(secondQuote.slice(3,4))

/* Create a new variable named findString. Using a string method, remove this part of the secondQuote string and put it in findString variable:
What separates the talented individual from the successful one is a lot of hard work. */ 

var findString = secondQuote.replace('What separates the talented individual from the successful one is a lot of hard work.','') 
console.log(findString)