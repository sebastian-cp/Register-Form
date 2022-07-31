const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	last_name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	direction: /^[a-zA-ZÀ-ÿ0-9\s]{7,60}$/, // Letras, numeros y espacios, (pueden llevar acentos.)
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
	password: /^.{4,20}$/ // 4 a 12 digitos.
}

const field = {
	user: false,
	name: false,
	last_name: false,
	direction: false,
	email: false,
	phone: false,
	password: false
}

const ValidateForm = (e) => {
	switch (e.target.name) {
		case "user":
			ValidateField(expressions.user, e.target, 'user');
		break;
		case "name":
			ValidateField(expressions.name, e.target, 'name');
		break;
		case "last_name":
			ValidateField(expressions.last_name, e.target, 'last_name');
		break;
		case "direction":
			ValidateField(expressions.direction, e.target, 'direction');
		break;
		case "email":
			ValidateField(expressions.email, e.target, 'email');
		break;
		case "phone":
			ValidateField(expressions.phone, e.target, 'phone');
		break;
		case "password":
			ValidateField(expressions.password, e.target, 'password');
			ValidatePassword2();
		break;
		case "password2":
			ValidatePassword2();
		break
	}
}

const ValidateField = (expressions, input, field) => {
	if(expressions.test(input.value)){
		document.getElementById(`gruop__${field}`).classList.remove('form__gruop-incorrect');
		document.getElementById(`gruop__${field}`).classList.add('form__gruop-correct');
		document.querySelector(`#gruop__${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#gruop__${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#gruop__${field} .form__input-error`).classList.remove('form__input-error-active');
		field[field] = true;
	} else {
		document.getElementById(`gruop__${field}`).classList.add('form__gruop-incorrect');
		document.getElementById(`gruop__${field}`).classList.remove('form__gruop-correct');
		document.querySelector(`#gruop__${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#gruop__${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#gruop__${field} .form__input-error`).classList.add('form__input-error-active');
		field[field] = false;
	}
}

const ValidatePassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`gruop__password2`).classList.add('form__gruop-incorrect');
		document.getElementById(`gruop__password2`).classList.remove('form__gruop-correct');
		document.querySelector(`#gruop__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#gruop__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#gruop__password2 .form__input-error`).classList.add('form__input-error-active');
		field['password'] = false;
	} else {
		document.getElementById(`gruop__password2`).classList.remove('form__gruop-incorrect');
		document.getElementById(`gruop__password2`).classList.add('form__grupo-correct');
		document.querySelector(`#gruop__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#gruop__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#gruop__password2 .form__input-error`).classList.remove('form__input-error-active');
		field['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', ValidateForm);
	input.addEventListener('blur', ValidateForm);
});
