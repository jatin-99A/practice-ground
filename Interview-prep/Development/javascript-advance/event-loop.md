1. Call Stack (Synchronous code)
        ↓
2. Microtask Queue (Promises etc.)
        ↓ (until empty)
3. Macrotask Queue (setTimeout, setInterval)
        ↓
4. Back to Call Stack
        ↺ repeat cycle (Event Loop)


# Web APIs (Browser / Node provided async layer)
- Timers API
        setTimeout
        setInterval
        clearTimeout
        clearInterval
- Network API
        fetch
        XMLHttpRequest
- DOM APIs (Browser only)
        addEventListener
        removeEventListener
        UI events (click, scroll, input, mousemove)
        Others
requestAnimationFrame
IntersectionObserver
MutationObserver

# Microtask Queue (Highest Async Priority)
- Promise-based tasks:
- Promise.then()
- Promise.catch()
- Promise.finally()
- Other microtasks:
    - queueMicrotask()
    - MutationObserver callback

# Macrotask Queue (Task Queue)
Timer-based tasks:
 - setTimeout
 - setInterval
UI / Browser events:
 - click
 - scroll
 - keydown
 - mouseover
 - input
Network callbacks:
 - XMLHttpRequest.onload
 - fetch