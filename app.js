/* eslint-disable */

window.onload = function() {
  //write your code here
  domainGenerator();
};
const PRONOUN = ["the", "our"];
const ADJ = ["great", "big"];
const NOUN = ["jogger", "racoon"];

function domainGenerator() {
  for (let i = 0; i < PRONOUN.length; i++) {
    for (let j = 0; j < ADJ.length; j++) {
      for (let r = 0; r < NOUN.length; r++) {
        console.log(PRONOUN[i] + ADJ[j] + NOUN[r] + ".com");
      }
    }
  }
}
