
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	let user2 = localStorage.getItem(email);
	if (user2) {
		let user = JSON.parse(user2);
		if (user.pass == password) {
			alert("მოგესალმებით ", + user.name + ' ' + user.lastName);
			window.location.href = "./cockie.html";
		} else {
			alert('მომხამრებელი არ არსებობს');
		};
	};
	
});