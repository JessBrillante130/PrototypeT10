 apply:[null,(b,d)=>{
  const app={
   id:newId(), offerId:Number(b.offerId)||0, title:str(b.title,100),
   type:str(b.type,50), name:str(b.name,100), email:str(b.email,100),
   phone:str(b.phone,50),
   address:str(b.address,200),          // NEW
   note:str(b.details,300),             // NEW — store details in `note` so staff table shows them
   status:'Pending', note:'', date:new Date().toISOString()
  };
  // (remove the duplicate note:'' above if you merge carefully — final object should have `note: str(b.details,300)`)
  d.apps.unshift(app);
  write(d);
  return {ok:true, app};
 }]