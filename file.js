// const fs = require('fs');

// //Read a file

// fs.readFile('./docs/blog1.txt',(err,data) =>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("Holaaa")

// //Writing in  a file.

// fs.writeFile('./docs/blog1.txt',"I Love You",(err) =>{
// if(err){
//   console.log(err);
// }
//   console.log("File is written.");
// })

//Directories

// if (!fs.existsSync('./asset')) {
//   fs.mkdir('./asset', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('Folder Created')
//   });
// } else {
//   fs.rmdir('./asset', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Directory removed')
//   })
// }

//Deleting Files

// if (fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("File Deleted");
//   })
// }
