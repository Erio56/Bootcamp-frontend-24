let arr2 = [7,9,1,'a','a','f',9,4,2,'d','d']

console.log(arr2.filter((item, index) => arr2.indexOf(item) === index))
class HttpError extends Error {
   constructor(response) {
     super(`${response.status} for ${response.url}`);
     this.name = "HttpError";
     this.response = response;
   }
 }
 
 async function loadJson(url) {
   const response = await fetch(url);
     if (response.status == 200) {
         return response.json();
     } else {
         throw new HttpError(response);
     }
 }
 
 function demoGithubUser() {
   let name = prompt("Enter a name?", "Erio56");
   return loadJson(`https://api.github.com/users/${name}`)
     .then((user) => {
       alert(`Full name: ${user.name}.`);
       return user;
     })
     .catch((err) => {
       if (err instanceof HttpError && err.response.status == 404) {
         alert("No such user, please reenter.");
         return demoGithubUser();
       } else {
         throw err;
       }
     });
 }
 
 demoGithubUser();
 