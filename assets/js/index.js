const form = document.getElementById('form');
form.addEventListener('submit',  e =>{
  e.preventDefault();

  const email = form['email'].value;

  if ( email === '') {
		addError('email', 'Email is required');
	} else if (!isValid(email)) {
		addError('email', 'Please enter a valid email address');
	} else {
		removeError('email');
	}
  
});
function addError(field , message ){
  const formControl = form[field].parentNode;
  formControl.classList.add('error');

  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
  small.style.opacity = '1';
}
function removeError(field){
  const formControl = form[field].parentNode;
  formControl.classList.remove('error');

  const small = form[field].parentNode.querySelector('small');
  small.style.opacity = '0';
}
function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
