# Brute Force -->
step 1 - take an hashmap 
step 2 - itrate over the given array and every ith index sort it lexographically 
        - then check whether isExisted ? then add in hashmap with key and value : push in group
step 3 - then return all the groups in array 

    SOLUTION :
               
    public class Solution {
        public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);

            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }

            map.get(key).add(str);
        }

        return new ArrayList<>(map.values());
    }



# Optimal ------->
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            int[] count = new int[26];

            for (char ch : str.toCharArray()) {
                count[ch - 'a']++;
            }

            StringBuilder key = new StringBuilder();

            for (int num : count) {
                key.append(num).append("#");
            }

            if (!map.containsKey(key.toString())) {
                map.put(key.toString(), new ArrayList<>());
            }

            map.get(key.toString()).add(str);
        }

        return new ArrayList<>(map.values());
    }
}