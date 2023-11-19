// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {

//     let s_1={}
//     let t_1={}
//     for(let i =0;i<s.length;i++){
//         if(!s_1[s[i]]){
//             s_1[s[i]]=1;
//         }else{
//              s_1[s[i]]+=1;
//         }
//     }
//     for(let i =0;i<t.length;i++){
//         if(!t_1[t[i]]){
//             t_1[t[i]]=1;
//         }else{
//              t_1[t[i]]+=1;
//         }
//     }
//     for(key in s_1){
//         if(t_1[key]!==s_1[key]) return false;
//     }
//     return true

// };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {};
    let sorted = strs.map(item => [...item].sort().join(""));
    sorted.map((item, index) => {
        if (!ans[item]) {
            ans[item] = [strs[index]];
        } else {
            ans[item].push(strs[index])
        }
    })

    return Object.values(ans)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));