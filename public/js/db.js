//Firestore.instance.collection("recipe") - Dart

db.enablePersistence().catch(
    err=>{
        if (err.code == "failed-precondition"){
            console.log("Persistance Falied...");
        }

        else if (err.code == "unimplemented"){
            console.log("persistence is not available in this browser...")
        }
    }
);//errors might occurs

db.collection("recipe").onSnapshot((sn)=>{
  //  console.log(sn.docChanges());

  sn.docChanges().forEach(ch => {
     // console.log(ch, ch.doc.data(), ch.doc.id);
      //In Dart documentId here id
      //data is the same

      if (ch.type === "added"){
          //add the document data to index.html
          console.log(ch.doc.data());
          renderRecipe(ch.doc.data(), ch.doc.id)
      }

      if (ch.type === "removed"){
          //remove the document data to index.html

          removeRecipe(ch.doc.id);
      }
  });
}); 


//Add New Document
const form = document.querySelector("form");
form.addEventListener("submit", evt=>{
    evt.preventDefault();
    console.log("Logged");

    const recipe = {
        title:form.title.value,
        ingredient: form.ingredients.value,
    };

    db.collection("recipe").add(recipe).then(()=>{console.log("Added")}).catch(err => console.log(err));
    form.title.value = "";
    form.ingredients.value="";

})

//Delete a Recipe 

const recipeContainer = document.querySelector(".recipes");
recipeContainer.addEventListener("click", eve=>{
    //console.log(eve);

    if (eve.target.tagName === "I"){
        const id = eve.target.getAttribute("data-id");
        db.collection("recipe").doc(id).delete();
    }
})