/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    
let quantity = 0 ;

for(let i=0; i<=preferences.length;i++){
    let lover = preferences[i] - 1 
        if (lover != i) { 
            lover = preferences [lover] - 1

            if (preferences[lover] - 1 == i) { 
            
            quantity++ 
             preferences[i] = 0 
            }  
        }
    }
    return quantity;
}
