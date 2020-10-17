module.exports = function check(str, bracketsConfig) {
  var arr = [];
    var brackets = Object.fromEntries(bracketsConfig);
    for (var a of str.split``) {
        if (arr[0] === a) {
            arr.shift();
        } else if (brackets[a]) {
            arr.unshift(brackets[a]);
        } else {
            return false;
        }
    }

    return arr.length === 0;
}
