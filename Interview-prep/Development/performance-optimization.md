# ⚡ JavaScript + React Performance Optimization Topics

---

# 🟡 JavaScript Performance Optimization (Core)

## 1. Time Complexity (Big-O)
- O(1), O(n), O(log n), O(n²)
- Avoid nested loops
- Choose efficient algorithms

---

## 2. DOM Performance
- Minimize DOM access
- Batch DOM updates
- Avoid frequent reflow/repaint

---

## 3. Debouncing & Throttling
- Debounce: delay execution after last event
- Throttle: execute at fixed intervals
- Use cases: search input, scroll, resize

---

## 4. Event Delegation
- Attach event to parent instead of multiple children
- Improves memory usage and performance
- Uses event propagation (bubbling phase)

---

## 5. Memory Management
- Avoid memory leaks
- Clean event listeners
- Avoid unnecessary global variables
- Proper closure usage

---

## 6. Async Optimization
- Non-blocking code using async/await
- Use Promises efficiently
- Avoid blocking main thread

---

## 7. Rendering Optimization (Browser)
- Reduce layout thrashing
- Avoid forced reflow
- Use transform instead of layout properties (top/left)

---

## 8. Lazy Loading & Code Splitting
- Load only required code
- Dynamic imports
- Reduce initial bundle size

---

## 9. Web APIs for Performance
- requestAnimationFrame (animations)
- IntersectionObserver (lazy loading)
- Web Workers (heavy tasks in background)

---

## 10. Caching & Memoization
- Store computed results
- Avoid recalculation

---

# 🟣 React Performance Optimization (Core)

## 1. Re-render Control
- Avoid unnecessary re-renders
- Understand React rendering cycle

---

## 2. React.memo
- Prevent re-render of functional components
- Shallow props comparison

---

## 3. useMemo
- Memoize expensive calculations
- Avoid recalculation on every render

---

## 4. useCallback
- Memoize functions
- Prevent child re-renders due to function reference changes

---

## 5. Key Prop Optimization
- Use stable and unique keys in lists
- Avoid index as key (when possible)

---

## 6. State Management Optimization
- Keep state local when possible
- Avoid lifting state unnecessarily
- Split state logically

---

## 7. Lazy Loading Components
- React.lazy + Suspense
- Load components on demand

---

## 8. Code Splitting
- Dynamic imports
- Route-based splitting

---

## 9. Virtualization
- Render only visible list items
- Example: react-window, react-virtualized

---

## 10. Context Optimization
- Avoid unnecessary context re-renders
- Split contexts
- Memoize context values

---

## 11. Profiling Tools
- React DevTools Profiler
- Identify slow renders

---

# 🧠 Summary

- JavaScript → engine + browser level optimization
- React → UI + rendering optimization using JS concepts

---