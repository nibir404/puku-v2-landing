import fs from 'fs';
const routes=JSON.parse(fs.readFileSync('content/routes.json'));let index=0,failures=[];
await Promise.all(Array.from({length:6},async()=>{while(index<routes.length){const route=routes[index++];try{const r=await fetch('http://127.0.0.1:3000/'+route.slug);if(r.status!==200)failures.push({route:route.slug,status:r.status});await r.arrayBuffer()}catch(e){failures.push({route:route.slug,error:String(e)})}}}));
fs.writeFileSync('content/route-check.json',JSON.stringify({checked:routes.length,failures},null,2));console.log({checked:routes.length,failures});
