class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] ans = new int[nums.length];

        for(int i = 0; i < n; i++) {
            int val = 1;
            for(int j = 0; j < n; j++) {
                if(i == j) continue;
                val = val * nums[j];
            }

            ans[i] = val;

        }

        return ans;
    }
}