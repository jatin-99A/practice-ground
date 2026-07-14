# Brute Force -->
step 1 - take an hashmap 
step 2 - itrate over the given array and every ith index sort it lexographically 
        - then check whether isExisted ? then add in hashmap with key and value : push in group
step 3 - then return all the groups in array 

    SOLUTION :
               
                var groupAnagrams = function (strs) {
                    const map = new Map();

                    for (const str of strs) {
                        const key = str.split('').sort().join('');

                        if (!map.has(key)) {
                            map.set(key, [str]);
                        } else {
                            map.get(key).push(str);
                        }
                    }

                    return Array.from(map.values());

                };


# Optimal ------->
var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const ch of str) {
            count[ch.charCodeAt(0) - 97]++;
        }

        const key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return [...map.values()];
};