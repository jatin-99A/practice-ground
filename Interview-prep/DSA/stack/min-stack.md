# Brute Force (Extra Space)
- Use two stacks.
- First stack stores all elements.
- Second stack stores the minimum at each level.
- Time: O(1) for all operations.
- Extra Space: O(n).

# Optimal (O(1) Extra Space)
- Maintain one stack and one variable `min`.
- If `x >= min`, push `x` normally.
- If `x < min`, push encoded value: `2*x - min`, then update `min = x`.
- During `top()`, if `stackTop < min`, actual top is `min`; otherwise return `stackTop`.
- During `pop()`, if `stackTop < min`, it is an encoded value, so restore the previous minimum using:
  `oldMin = 2*min - stackTop`.
- Time: O(1) for all operations.
- Extra Space: O(1).

class MinStack {
    private int min;
    private Stack<Integer> s = new Stack<>();

    public MinStack() {
    }

    public void push(int value) {
        if (s.empty()) {
            min = value;
            s.push(value);
        } 
        else if (value < min) {
            s.push(2 * value - min); 
            min = value;             
        } 
        else {
            s.push(value);
        }
    }

    public void pop() {
        if (s.empty()) return;

        int top = s.pop();

        if (top < min) {
            min = 2 * min - top; 
        }
    }

    public int top() {
        if (s.peek() < min) {
            return min;          
        }
        return s.peek();
    }

    public int getMin() {
        return min;
    }
}