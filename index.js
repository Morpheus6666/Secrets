import axios from "axios";
import express from "express";
 
const app= express();
const port= 3000;
const URL= "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req,res) => {
try {
  const result= await axios.get(URL);
  res.render("index.ejs", { 
  secret: result.data.secret,
  user: result.data.user,
 });
}
catch(error){
    console.log(error);
    
  }
});

app.listen(port, () =>{
    console.log(`Server started at http://localhost:${port}`);
});
