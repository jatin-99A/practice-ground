fetch("https://example.com/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Rahul",
    age: 25
  })
})
.then(response => response.json())
.then(data => {
  console.log("Success:", data);
})
.catch(error => {
  console.error("Error:", error);
});