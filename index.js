function printHello() {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value

      const containerElement = document.createElement('div');
        const welcomeElement = document.createElement('p');
        const usernameElement = document.createElement('p');
        const passwordElement = document.createElement('p');

        welcomeElement.innerText = "Welcome"
        usernameElement.innerText = "Your user name is " + username;
        passwordElement.innerText = "Your password is " + password;

        containerElement.appendChild(welcomeElement);
        containerElement.appendChild(usernameElement);
        containerElement.appendChild(passwordElement);
        
       
    console.log(username, password);

    //  document.body.appendChild(containerElement);
    if (username == "" || password == "") {
        //alert("Name must be filled out")
        //const empty = document.querySelector('#empty').value
        const warningElement = document.createElement('p');
        warningElement.style.color = 'red'
        warningElement.innerText = "Name must be filled out"
        //containerElement.appendChild(emptyElement);
        document.body.appendChild(warningElement);
        //return false
    } else if (username == "") {
        const usernamewarningElement = document.createElement('p');
        usernamewarningElement.style.color = 'red'
        usernamewarningElement.innerText = "username ee buglu"
        document.body.appendChild(usernamewarningElement)
    } else {
        const passwordwarningElement = document.createElement('p');
        passwordwarningElement.style.color = 'red'
        passwordwarningElement.innerText = "password oo buglu"
        document.body.appendChild(passwordwarningElement)   
    }
}


