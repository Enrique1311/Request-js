// fetch (GET)
// fetch("https://reqres.in/api/unknown/2")
// 	.then((res) => res.json())
// 	.then((res) => console.log(res));

// fetch (POST)
// fetch("https://reqres.in/api/users", {
// 	method: "POST",

// 	// or the body may contain
// 	body: `{"name" : "Enrique", "age" : "47"}`,
// 	headers: { "Content-type": "application/json" },
// })
// 	.then((res) => res.json())
// 	.then((res) => console.log(res));

// fetch (with async/await)
const getName = async () => {
	let myrequest = await fetch("db.txt");
	res = await myrequest.json();
	console.log(res);
	document.querySelector(
		".result"
	).textContent = `My name is ${res.name}, I have ${res.age} years old and my email is ${res.email}.`;
};

document.querySelector(".get-name-btn").addEventListener("click", getName);

//******************************************************
// axios (GET)
// axios.get("db.txt").then((r) => console.log(r.data));

// axios (POST)
// axios
// 	.post("https://reqres.in/api/users", { name: "Enrique", age: "47" })
// 	.then((r) => console.log(r));

// another option
// axios("https://reqres.in/api/users", {
// 	method: "POST",
// 	data: { name: "Enrique", age: "47" },
// }).then((r) => console.log(r));
