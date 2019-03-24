/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift(0);
  let triangels =[];
  let count =0;
  for (k=1;k<preferences.length;k++)
  {
	if(!triangels.includes(preferences[k]))
	{
		let n = preferences[k]; //second spichonee's index 
		if(n>0 && n<preferences.length && n!=k)
		{
			var j = preferences[n]; //third spichonee's index
			if(preferences[j]==k &&j!=k) // check if third spichonee loves first one
			{
				count=count+1; 
				triangels.push(preferences[k],preferences[n],preferences[j]);
				
			}
		}
		
	}	
  }
  
  return count;
};

