function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

let roman ='';
for(let i= 0; i < obj.length; i++){
   while(num >=obj[i][1]){
      roman += obj[i][0];
      num -= obj[i][1]
   }

}

return roman;
}
console.log(convertToRoman(num));
module.exports = convertToRoman