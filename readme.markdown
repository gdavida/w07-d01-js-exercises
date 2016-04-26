# Week 07, Day 01 - Practice
https://s3-us-west-2.amazonaws.com/week07javascriptexercises/index.html

## Description

You'll create one link that, when pressed, performs the tasks described. Collect
user input using `prompt`s. Do output with `alert`s. If you want to, you can use
`console.log()` statements.

Each of these tasks should have its own function defined, which then gets called
with an `onclick` event handler (defined inline in the HTML element).

## Tasks

+ **Shouty Hello**: When clicked, the link prompts the user for their name, then
  greets the person in a shouty fashion with an alert (and what an alert!). If I
  input my name as `Andrew`, it should output `HELLO, ANDREW!!!` (or something
  like that).
+ **Even or Odd?**: When clicked, the user is prompted for a number. There are
  three possible outputs:
    + `'Your number is odd'` if the number is odd
    + `'Your number is even'` if the number is even
    + `'That's not a number'` if they input a word
+ **Number Prompter**: Prompt the user for an even number greater than 3 and
  less than 11. Keep prompting until the user gives you a valid input. Once
  they've given you a valid input, congratulate them with an alert.
+ **Bottles of Beverage On the Wall?**: Prompt the user for a positive number
  (keep prompting them if they don't give you a positive number). Now play the
  *that-many-bottles-of-(beer?)-on-the-wall* game. Your output should look like
  this (though you can format it however you want):
    + 5 bottles of beer on the wall! 5 bottles of beer! Take one down and pass
      it around. 4 bottles of beer on the wall!
    + 4 bottles of beer on the wall! 4 bottles of beer! Take one down and pass
      it around. 3 bottles of beer on the wall!
    + 3 bottles of beer on the wall! 3 bottles of beer! Take one down and pass
      it around. 2 bottles of beer on the wall!
    + 2 bottles of beer on the wall! 2 bottles of beer! Take one down and pass
      it around. 1 bottles of beer on the wall!
    + 1 bottle of beer on the wall! 1 bottle of beer! Take one down and pass
      it around. No more bottles of beer on the wall!
+ **Fizzbuzz**: Prompt the user for a positive number. Count from one to that
  number, but in *FizzBuzz* fashion. If the number is divisible by 3, replace it
  with `"Fizz"`. If divisible by 5, replace it with `"Buzz"`. If divisible by
  both 3 and 5, `"FizzBuzz"`:
  + 1
  + 2
  + Fizz
  + 4
  + Buzz
  + Fizz
  + 7
  + 8
  + Fizz
  + Buzz
  + 11
  + Fizz
  + 13
  + 14
  + FizzBuzz
  + 16
  + etc.
+ **Word Reverser**: Prompt the user for a word. Alert the word, but reversed.
+ **Driver's License**: Ask the user for their age (it has to be a positive
  number; if not, keep asking). Then alert a message based on the following:
    + If the age is less than 15: `"You're not eligible for a license yet"`
    + If the age is 15: `"You can get a learner's permit"`
    + If the age is between 16 and 17 (inclusive): `"You can get a license, but
      you can't vote yet."`
    + If the age is between 18 and 21: `"You can get a license, but you can't
      drink yet"`
    + If the age is between 21 and 24: `"You can drink, but you can't rent cars
      yet."`
    + If the age is greater than 25: `"You have full adult privileges."`
+ **Word Sorter**: Prompt the user for five words (one at a time). Store those
  words in an array. Then sort those words in alphabetical order and output the
  result. It should be trivially easy to change your solution from prompting for
  five words to prompting for 25 words (or 2500 words, or...). So easy, in fact,
  that it should require changing just one line of code.

## Bonus Tasks

+ Write a Fahrenheit-to-Celsius converter. It should prompt the user for degrees
  Fahrenheit, and alert the equivalent degrees celsius. Can you make it always
  return an integer? Can you make it convert to a floating point number?
+ Do the same as above, but Celsius to Fahrenheit.
+ Re-do the MySpace Name Generator, but in Javascript. Prompt the user for their
  name, then alert the MySpace version. If I respond to the prompt with `"Andrew
  Ek"`, it should give me back `"xX_AnDrEwEk_Xx"`.
+ Ask the user for some text, then replace all the vowels in that text with
  `'z'`. Bonus points if you can preserve capitalization as well.
+ Redo the Word Sorter exercise from above, but sort by word length.
+ Add some styling with Bootstrap (or equivalent).
