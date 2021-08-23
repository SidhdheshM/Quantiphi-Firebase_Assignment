var fireBase = fireBase || firebase;
var hasInit = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZrkcSBL-iqbVuZ_ub1Xlwnpsvwpu57NM",
  authDomain: "blogkaro-56b54.firebaseapp.com",
  //databaseURL: "https://blogkaro-56b54-default-rtdb.firebaseio.com",
  projectId: "blogkaro-56b54",
  storageBucket: "blogkaro-56b54.appspot.com",
  messagingSenderId: "1034687933635",
  appId: "1:1034687933635:web:0a660ea826b39814bf8676"
};
// Initialize Firebase

if(!hasInit){
  firebase.initializeApp(firebaseConfig);
  hasInit = true;
}

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, name, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let h4 = document.createElement("h4")
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  h4.textContent = name;
  small.textContent = time;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(h4)
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().author,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();

