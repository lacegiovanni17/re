// Implement the function accum(str) that takes string and returns the accumulated string by index.
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// # Example
//    accum("abcd") -> "A-Bb-Ccc-Dddd"
//    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt" 
function accum(str) {
    let answer = "";
    str.toLowerCase().split("").forEach((element, i) => { 
        let upperLetter = element.toUpperCase();
        let x = element.repeat(i);
        answer += upperLetter + x + "-"; 
        // console.log(element, x, upperLetter, answer)
    }); 
    answer = answer.slice(0, -1); 
    return answer;
}
console.log(accum("RqaEzty"));