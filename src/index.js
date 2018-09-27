// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
 
  let MoneyExchange = new Object();
  const ERROR = {
                 error: 'You are rich, my friend! We don\'t have so much coins for exchange'
  };
 

  if (currency > 10000) return ERROR;
  else {
      
       if ( Math.floor(currency / 50) > 0) MoneyExchange["H"] = Math.floor( currency / 50);
       if ( Math.floor( (currency % 50) / 25 ) > 0 ) MoneyExchange["Q"] = Math.floor( (currency % 50) / 25);
       if ( Math.floor( (currency % 25) / 10 ) > 0 ) MoneyExchange["D"] = Math.floor( (currency % 25) / 10);
       if ( Math.floor ( ( (currency % 25) % 10) / 5) > 0 ) MoneyExchange["N"] = Math.floor ( ( (currency % 25) % 10) / 5);
       if ( currency % 5 > 0) MoneyExchange["P"] = currency % 5;
	   
  }
	   
  return MoneyExchange;

}

