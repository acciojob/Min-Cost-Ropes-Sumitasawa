function mincost(arr)
{ 
//write your code here
// return the min cost
  if(arr.length===0)return 0;
	let total=0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);
	const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;
		 arr.push(cost);
	}
	return total;
	  }

module.exports=mincost;
