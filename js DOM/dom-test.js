// alert(document.title); // displays "Hello World!"
//   document.title = "Goodbye World!";
// alert(document.title); // displays "Goodbye World!"


const loginForm = document.forms.login; // Or document.forms['login']
  loginForm.elements.email.placeholder = 'test@example.com';
  loginForm.elements.password.placeholder = 'password';
  
  function validateForm() {
    let x = document.forms["login"]["password"].value;
    if (x == "") {
      alert("email must be filled out");
      return false;
    }
  }
  

  const set = new Set([1, 2, 3]);

const first = [...set][1];
console.log(first); //  1
