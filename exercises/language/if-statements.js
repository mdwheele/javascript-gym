/**
 * This function returns a sassy string representing someone's age.
 * 
 * Rules:
 *   - If the age is less than 99, return a string in the form "In your XXs" 
 *     (e.g. an age of 95 would return "In your 90s")
 *   - If the age is 99, refer to the GOAT with a "RIP Betty"
 *   - If the age is greater than or equal to 100 (but less than 200), give it a "Uhhh..."
 *   - If the age is >= 200 (but < 900), give it an even longer "Uhhhhhhh..."
 *   - If the age is >= 900, we're talking to Yoda, so give it a "Okay Yoda"
 * 
 * Handling errors:
 *   - If we get unexpected inputs like a string or boolean, return undefined.
 *   - If we get a negative or zero age, return undefined. 
 */
function ageify(age) {

}

module.exports = { ageify }