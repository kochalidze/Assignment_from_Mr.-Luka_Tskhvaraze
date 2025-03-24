
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const name = document.getElementById('name').value;
	const lastName = document.getElementById('lastName').value;
	const pass = document.getElementById('password').value;
	const pass2 = document.getElementById('password2').value;

	if (localStorage.getItem(email)) {
        alert("ეს ემაილი უკვე არსებობს!");
        return;
    }

	let user = {email,name,lastName,pass,pass2};
	localStorage.setItem(email, JSON.stringify(user));
	
	if (pass2 != pass) {
		alert('გაიმეორეთ პაროლი!');
	}else {
		alert('რეგისტრაცია წარმატებით დამთავრდა!');
		window.location.href = "./login.html";
	};
});
