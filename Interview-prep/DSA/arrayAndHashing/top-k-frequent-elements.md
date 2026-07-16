# Optimal using Bucket sort
class Solution {
    public int[] topKFrequent(int[] nums, int k) {

        Map<Integer, Integer> map = new HashMap<>();

        // Frequency count
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Buckets: index = frequency
        List<Integer>[] buckets = new List[nums.length + 1];

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int freq = entry.getValue();

            if (buckets[freq] == null) {
                buckets[freq] = new ArrayList<>();
            }

            buckets[freq].add(entry.getKey());
        }

        // Get top k frequent elements
        int[] ans = new int[k];
        int index = 0;

        for (int i = buckets.length - 1; i >= 0 && index < k; i--) {
            if (buckets[i] != null) {
                for (int num : buckets[i]) {
                    ans[index++] = num;

                    if (index == k) break;
                }
            }
        }

        return ans;
    }
}

# Less optimal using priority Queue

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> mp = new HashMap<>();
        int[] res = new int[k];
        for(int num : nums) {
            mp.put(num, mp.getOrDefault(num,0)+1);
        }
        PriorityQueue<Pair> pq = new PriorityQueue<>((a,b)->b.val-a.val);
        for(int key : mp.keySet())
            pq.offer(new Pair(key, mp.get(key)));
        for(int i = 0; i < k; i++)
            res[i] = pq.poll().key;
        
        return res;
    }
}

class Pair {
    int key;
    int val;
    
    Pair(int k, int v) {
        key = k;
        val = v;
    }
}

# Brute using 
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();

        // Frequency count
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Sort entries by frequency (descending)
        List<Map.Entry<Integer, Integer>> list = new ArrayList<>(map.entrySet());

        list.sort((a, b) -> b.getValue() - a.getValue());

        // Store top k elements
        int[] ans = new int[k];

        for (int i = 0; i < k; i++) {
            ans[i] = list.get(i).getKey();
        }

        return ans;
    }
}