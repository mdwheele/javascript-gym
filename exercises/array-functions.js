/**
 * This function receives an array of strings. Its job is to return
 * an array of strings in upper-case. There are several different ways 
 * you can accomplish this. 
 * 
 * Try using a simple "for loop"
 *   See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 *
 * Try using Array.forEach 
 *   See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
 * Finally, use Array.map 
 *   See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 */
function arrayToUppercase(array = []) {

}

/**
 * This function receives an array of strings and returns a filtered list
 * of those strings which are longer than (>=) the provided length. If length
 * is not provided, the entire list is returned. 
 * 
 * Consider an imperative approach through use of a "for loop" as well 
 * as options like Array.prototype.forEach and Array.prototype.filter.
 */
function wordsLongerThan(words = [], length) {
  
}

/**
 * This function receives a "haystack" of strings and returns true if it 
 * finds a "needle" string within that haystack. If needle is not provided, 
 * then it returns false.
 */
function arrayContains(haystack = [], needle) {

}

module.exports = { arrayContains, arrayToUppercase, wordsLongerThan }