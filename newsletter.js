
document.getElementById("perio").addEventListener("click", function() {
  const parent = document.querySelector('.right')
  const template = document.getElementById('successTemplate')

  const child = document.getElementById('rightChild')

  console.log(template)
    var email = document.getElementById("emai").value;
  
    if (email.trim() === "") {
      document.getElementById("error").textContent = "Error: Email cannot be blank.";
    } else if (!isValidEmail(email)) {
      document.getElementById("error").textContent = "Error: Invalid email format.";
    } else {
      // document.getElementById("error").textContent = "Success: Email submitted!"
      
      const elem = template.content.cloneNode(true)
      console.log(elem.children)
      parent.replaceChild(elem, child)
    }
  });
  
  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }