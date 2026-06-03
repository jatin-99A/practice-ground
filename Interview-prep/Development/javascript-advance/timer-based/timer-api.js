// 1. setTimeOut()
setTimeout(() => {
    console.log("2 sec baad run hoga");
}, 2000);


// 2. setInerval()
setInterval(() => {
    console.log("har 1 sec me run");
}, 1000);

// 3. clearTimeout()
let id = setTimeout(() => console.log("hi"), 2000);
clearTimeout(id);

// 4. clearInterval()
let id = setInterval(() => console.log("hi"), 1000);
clearInterval(id);

// 5. queueMicrotask()
queueMicrotask(() => {
    console.log("microtask run");
});

// 6. setImmediate() only in Nodejs
setImmediate(() => {
  console.log("node me immediate run");
});

    // Example -- heavy task will run in end
    console.log("Start");

    setImmediate(() => {
      console.log("Heavy task baad me chalega");
    });
    
    console.log("End");