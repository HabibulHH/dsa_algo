//https://www.youtube.com/watch?v=NPZn9jBrX8U&t=1507s

function sub(strone, strtwo, idxone, idxtwo,dp) {

    if (idxone <= 0 || idxtwo <= 0) {
        return 0;
    }

    if (strone[idxone] === strtwo[idxtwo]) {
        return dp  1 + sub(strone, strtwo, idxone - 1, idxtwo - 1);
    }
    return 0 + Math.max(sub(strone, strtwo, idxone - 1, idxtwo), sub(strone, strtwo, idxone, idxtwo - 1))
}
console.log(sub("abcde", "ace", 5, 3,[]));