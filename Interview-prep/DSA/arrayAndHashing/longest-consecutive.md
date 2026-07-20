# Brute Force
class Solution {
    public int longestConsecutive(int[] nums) {

        if(nums.length == 0) return 0;
        
        int longest = 1;
        Arrays.sort(nums);
        int counter = 1;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] - 1 == nums[i - 1]) {
                counter++;

                if (longest < counter) {
                    longest = counter;
                }
            } else if (nums[i] == nums[i - 1]) {
                continue;
            }

            else {

                counter = 1;
            }
        }

        return longest;
    }
}

# Optimal
class Solution {
    public int longestConsecutive(int[] nums) {

        if (nums.length == 0)
            return 0;
        int longest = 1;

        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }

        for (int num: set) {
            if (set.contains(num - 1)) {
                continue;
            } else {
                int counter = 1;
                int curr = num;
                while (set.contains(curr + 1)){
                    counter++;
                    curr = curr + 1;
                }
                longest = Math.max(longest, counter);
            }
        }

        return longest;
    }
}