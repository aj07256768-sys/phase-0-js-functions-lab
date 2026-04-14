
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

  
   // calculate tax 

  function   calculateTax(amount){
let tax =amount*0.10

return tax;
}

   console.log(calculateTax(400))

   // calculate to upper case 
    

   function convertToUpperCase(text){
     let name='kaali'
    return text.toUpperCase();
   }
    console.log(convertToUpperCase('abdinasir'))



    // find maximum
     function findMaximum(num,num2){
        if (num>num2)
        return num;
       else (num<num2)
      return num2
     }
     console.log(findMaximum(45,67))


 
     // isPalindrome

     function isPalindrome(word){
        
     let reverseD =word.split('') .reverse('') .join('')
      
    return reverseD===word
     }

     console.log(isPalindrome('men'))

      // calculateDiscountedPrice

      function calculateDiscountedPrice(original,discount){
        
        discountedPrice= original-discount;
          
        return discountedPrice
      }
      console.log(calculateDiscountedPrice(400,100))
      

