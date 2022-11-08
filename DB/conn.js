const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/prathmesh";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connections Succussful");
  })
  .catch((err) => {
    console.log("No connection");
  });

// Links =>

// Showproduct(user: any) {
//     let url = "http://localhost:3000/prod/show";
//     return this.http.post(url, user)
//   }

// addproduct(user: any) {
//     let url = "http://localhost:3000/prod/product/";
//     return this.http.post(url, user)
//   }

//   deleteData(id) {
//     let url = `http://localhost:3000/prod/delete/${id}`
//     return this.http.delete(url);
//   }
//   updateData(obj) {
//     let url = `http://localhost:3000/prod/update/${obj._id}`;
//     return this.http.patch(url, obj);
//   }
