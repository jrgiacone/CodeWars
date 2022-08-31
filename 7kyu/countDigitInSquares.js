function nbDig(n, d) {
 let k = 0, count = 0;
   d = d.toString();
   while (k <= n) {
      let a = 0;
      let s = (k*k).toString();
      for(let i = 0; i < s.length; i++)
         if(s[i] == d)
      a++;
      if (a > 0) {
         count += a;
      };
      k++;
   };
   return count;
} 