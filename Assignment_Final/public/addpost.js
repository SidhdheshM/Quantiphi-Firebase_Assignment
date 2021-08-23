document.querySelector("#submitBtn").addEventListener("click", function() {
    let postAuthor = document.querySelector("#author").value;
    let postTitle = document.getElementById("postTitle").value;
    let postContent = document.querySelector("#postContent").value;
    let postDate = document.getElementById("postDate").value;
  
    if (
      postAuthor === "" ||
      postTitle === "" ||
      postContent === "" ||
      postDate === ""
    ) {
      alert("Fields Empty");
    } else {
      db.collection("posts")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent
        });
    }
  });

// function addImage(){
//   const image = document.getElementById('image').files[0];
//   //let post = document.getElementById('post').value;
//   let imageName = image.name;
//   //firebase storage reference
//   var storageRef = firebase.storage().ref('images/'+ imageName);

//   var uploadTask = storageRef.put('image');

//   uploadTask.on('state_changed',function(snapshot){
//     var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
//     console.log("upload is " + progress + " done" );
//   },function(error){
//     console.log(error.message);
//   },function(){
//       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
//         firebase.database().ref('posts/').push().set({
//             text:postContent,
//             imageURL: downloadURL
//         },function(error){
//             if(error){
//               alert("Error while uploading");
//             }else{
//               alert("Successfully uploaded");
//               //Form Reset
//               document.getElementById('card-body').reset()
//             }
//         });
//       });
//   });
// }

  