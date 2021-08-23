var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("login.html");
        }
      });
}
    
init();

mainApp.logout = logout;
})();


const blogPosts = document.querySelectorAll('.container');
const search = document.getElementById(search);


// SEARCH FILTER
const search = document.getElementById("search");
const postAuthorName = document.querySelectorAll("#posts-collection h4");

// A BETTER WAY TO FILTER THROUGH THE POSTS
search.addEventListener("keyup", filterposts);


function filterposts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(postName[0]);
    postAuthorName.forEach(function(post) {
        const item = post.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            post.parentElement.parentElement.style.display = "block"
        } else {
            post.parentElement.parentElement.style.display = "none"
        }
    })
}
