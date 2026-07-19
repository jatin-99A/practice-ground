# Brute Force
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int ans[] = new int[nums.length];

        for(int i = 0; i < nums.length; i++){
            int product = 1;
            for(int j = 0; j < nums.length; j++) {
                if(j != i){
                    product *= nums[j];
                }
                    
            }

            ans[i] = product;
        }

        return ans;
    }
}

# Better With Space O(n)
class Solution {
    public int[] productExceptSelf(int[] nums) {

        int prefix[] = new int[nums.length];
        int suffix[] = new int[nums.length];

        prefix[0] = 1;
        for(int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        suffix[suffix.length - 1] = 1;
        for(int i = suffix.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for(int i = 0; i < nums.length; i++) {
            nums[i] = prefix[i] * suffix[i];
        }
        return nums;
    }
}

# Optimal without space 
class Solution {
    public int[] productExceptSelf(int[] nums) {

        int ans[] = new int[nums.length];

        ans[0] = 1;
        for(int i = 1; i < nums.length; i++) {
            ans[i] = ans[i-1] * nums[i-1];
        }

        int suffix = 1;
        for(int i = nums.length - 2; i >= 0; i--) {
            suffix *= nums[i + 1];
            ans[i] *= suffix;
        }
        return ans;
    }
}