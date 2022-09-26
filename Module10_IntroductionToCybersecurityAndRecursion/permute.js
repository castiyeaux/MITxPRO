function permute(string) {
    let stringLength = string.length;
    if(stringLength === 1) {
        return string;
    }
    let pick = "";
    let permutations = [];
    for(let i = 0; i < stringLength; i++) {
        pick = string[i];
        let remainder = string.slice(0, i) + string.slice(i + 1, stringLength);
        for(var perm of permute(remainder)) {
            permutations.push(pick + perm);
        }
        return permutations;
    }
}

let input = permute("abc");
console.log("permute(" + input + "): " + JSON.stringify(permute(input)));
// doesn't work??? (straight copy from video)
