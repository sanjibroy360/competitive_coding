### CamelCase Method [6 kyu]

#### Answer

String.prototype.camelCase=function(){
  if(!this.trim()){
    return "";
  } else {
      return this.split(" ").map(el => el.slice(0,1).toUpperCase()+el.slice(1)).join("");
  }
}