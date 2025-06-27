console.log("aastha is the best.");
const fs =  require('fs');
fs.writeFile("output.txt", " aastha can do anything" , (err)=>{
  if (err) throw console.log(" error occurred");
  else console.log("file written succesfully");
  
})

