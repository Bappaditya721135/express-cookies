fetch("http://127.0.0.1:5000").then(res => {
    return res.json();
}).then(data => {
    console.log(data)
}).catch(err => {
    console.error(err)
})


// GET COOKIE 
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: "myemail@gmail.com", password: "password"}),
        credentials: "include"
    }).then(res => {
    return res.json();
}).then(data => {
    console.log(data)
}).catch(err => {
    console.error(err)
})
})