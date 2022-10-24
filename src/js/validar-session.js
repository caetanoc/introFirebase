var displayName = document.getElementById('displayName');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        const idisplayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
              
        if (idisplayName !== null) displayName.innerText = 'Logado como ' + idisplayName
        else                       displayName.innerText = 'Logado como ' + email
        
        // User is signed in.
    } else {
        alert(" você precisa se autenticar para acessar essa página" );
        window.location.replace("authentication.html");
        
        // usuario nao esta logado..
    }
  });

