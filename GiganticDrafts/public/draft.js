var atkCounterT1 = 0;
var defCounterT1 = 0;
var mCounterT1 = 0;
var utCounterT1 = 0;
var atkCounterT2 = 0;
var defCounterT2 = 0;
var mCounterT2 = 0;
var utCounterT2 = 0;


function startDraft(){

const heroDDM = document.getElementById("heroName");
  const heroDDM2 = document.getElementById("heroName2");
  document.getElementById("teamName1").style.color ="green";
  document.getElementById("teamName1").style.textShadow ="1px 1px 20px green";  
  document.getElementById("modalTitle").innerHTML = "Team 1 pick a hero";
  document.getElementById("btnCommit").value = "Pick";
  document.getElementById("btnCommit").style.color = "green";
  document.getElementById("pickBtn").style.left = "-28%";
  document.getElementById("pickBtn").value = "Pick";
  document.getElementById("heroName2").style.display='none';
  document.getElementById("heroName").style.display='inline-block';
  
  let heroArray = [
    { _id: 18, name: "Aisling" }, 
      { _id: 1, name: "Zandora" }, 
      { _id: 2, name: "Xenobia" },      
      { _id: 3, name: "Wu" },
      { _id: 4, name: "Voden" },
      { _id: 5, name: "Vadasi" },
      { _id: 6, name: "Tyto" },
      { _id: 7, name: "Tripp" },
      { _id: 8, name: "Uncle Sven" },
      { _id: 9, name: "Pakko" },    
      { _id: 10, name: "Mozu" },
      { _id: 11, name: "The Margrave" },
      { _id: 12, name: "Lord Knossos" },
      { _id: 13, name: "Imani" },
      { _id: 14, name: "HK-206" },
      { _id: 15, name: "Griselma" },
      { _id: 16, name: "Charnok" },
      { _id: 17, name: "Beckett" }      
    ];
    // Populate options
    for (let i = 0; i < heroArray.length; i++) {
        let newOption = heroArray[i];
        let createNewOption = document.createElement("option");
        createNewOption.textContent = newOption.name;
        createNewOption.value = newOption._id;
        heroDDM.add(createNewOption, heroDDM[1]);      
    };


    for (let i = 0; i < heroArray.length; i++) {
        let newOption = heroArray[i];
        let createNewOption = document.createElement("option");
        createNewOption.textContent = newOption.name;
        createNewOption.value = newOption._id;
        heroDDM2.add(createNewOption, heroDDM2[1]);      
    };


  document.getElementById('id01').style.display='block';
}// END startDraft()












function heroStatsT1(imgsrc){
      let str = imgsrc;
      let source = str.slice(61);   //change to 47 to test local

      let atkT1 = document.getElementById("T1A");
      let defT1 = document.getElementById("T1D");
      let mobT1 = document.getElementById("T1M");
      let utT1 = document.getElementById("T1U");

   let atkWidthT1 = window.getComputedStyle(atkT1).getPropertyValue("width");
   let defWidthT1 = window.getComputedStyle(defT1).getPropertyValue("width");
   let dWidthT1 = defWidthT1.slice(0,-2);
   let mobWidthT1 = window.getComputedStyle(mobT1).getPropertyValue("width");
   let mWidthT1 = mobWidthT1.slice(0,-2);
   let utWidthT1 = window.getComputedStyle(utT1).getPropertyValue("width");
   let uWidthT1 = utWidthT1.slice(0,-2);

if  (source == 'images/Aisling.jpg'){
   let atk = 10;
   let def = 12;
   let mob = 6;
   let ut = 16;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
   
   
}
else if(source == 'images/Beckett.jpg'){
   let beckettAtk = 16;
   let beckettDef = 8;
   let beckettMob = 20;
   let beckettUt = 6;

   atkCounterT1 += beckettAtk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += beckettDef;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += beckettMob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += beckettUt;
   utT1.style.width = utCounterT1 + "%";
 return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
   
}
else if(source == 'images/Charnok.jpg'){
   let atk = 18;
   let def = 6;
   let mob = 12;
   let ut = 10;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Griselma.jpg'){
   let atk = 14;
   let def = 14;
   let mob = 4;
   let ut = 12;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/HK-206.jpg'){
   let atk = 16;
   let def = 20;
   let mob = 2;
   let ut = 6;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Imani.jpg'){
   let atk = 20;
   let def = 4;
   let mob = 6;
   let ut = 12;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Lord Knossos.jpg'){
   let atk = 18;
   let def = 12;
   let mob = 12;
   let ut = 6;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/The Margrave.jpg'){
   let atk = 10;
   let def = 20;
   let mob = 10;
   let ut = 8;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Mozu.jpg'){
   let atk = 16;
   let def = 8;
   let mob = 12;
   let ut = 12;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Pakko.jpg'){
   let atk = 10;
   let def = 14;
   let mob = 10;
   let ut = 8;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Tripp.jpg'){
   let atk = 20;
   let def = 4;
   let mob = 18;
   let ut = 4;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Tyto.jpg'){
   let atk = 14;
   let def = 10;
   let mob = 20;
   let ut = 4;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Uncle Sven.jpg'){
   let atk = 10;
   let def = 40;
   let mob = 10;
   let ut = 20;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Vadasi.jpg'){
   let atk = 8;
   let def = 14;
   let mob = 8;
   let ut = 18;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Voden.jpg'){
   let atk = 10;
   let def = 10;
   let mob = 14;
   let ut = 14;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Wu.jpg'){
   let atk = 14;
   let def = 10;
   let mob = 16;
   let ut = 8;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Xenobia.jpg'){
   let atk = 8;
   let def = 10;
   let mob = 8;
   let ut = 20;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }
 else if(source == 'images/Zandora.jpg'){
   let atk = 8;
   let def = 14;
   let mob = 10;
   let ut = 18;
   
   atkCounterT1 +=  atk;
   atkT1.style.width = atkCounterT1 + "%";
   
   defCounterT1 += def;
   defT1.style.width = defCounterT1 + "%";
   
   mCounterT1 += mob;
   mobT1.style.width = mCounterT1 + "%";
   
   utCounterT1 += ut;
   utT1.style.width = utCounterT1 + "%";
   return atkCounterT1, defCounterT1, mCounterT1, utCounterT1;
 }  
} // End heroStatsT1();










function heroStatsT2(imgsrc){
      let str = imgsrc;
      let source = str.slice(61);   //change to 47 to test local
      console.log(source);

      let atkT2 = document.getElementById("T2A");
      let defT2 = document.getElementById("T2D");
      let mobT2 = document.getElementById("T2M");
      let utT2 = document.getElementById("T2U");

   let atkWidthT2 = window.getComputedStyle(atkT2).getPropertyValue("width");
   let defWidthT2 = window.getComputedStyle(defT2).getPropertyValue("width");
   let mobWidthT2 = window.getComputedStyle(mobT2).getPropertyValue("width");
   let utWidthT2 = window.getComputedStyle(utT2).getPropertyValue("width");

if  (source == 'images/Aisling.jpg'){
   let atk = 10;
   let def = 12;
   let mob = 6;
   let ut = 16;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
   
   
}
else if(source == 'images/Beckett.jpg'){
   let atk = 16;
   let def = 8;
   let mob = 20;
   let ut = 6;

   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
   
}
else if(source == 'images/Charnok.jpg'){
   let atk = 18;
   let def = 6;
   let mob = 12;
   let ut = 10;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Griselma.jpg'){
   let atk = 14;
   let def = 14;
   let mob = 4;
   let ut = 12;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/HK-206.jpg'){
   let atk = 16;
   let def = 20;
   let mob = 2;
   let ut = 6;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Imani.jpg'){
   let atk = 20;
   let def = 4;
   let mob = 6;
   let ut = 12;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Lord Knossos.jpg'){
   let atk = 18;
   let def = 12;
   let mob = 12;
   let ut = 6;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/The Margrave.jpg'){
   let atk = 10;
   let def = 20;
   let mob = 10;
   let ut = 8;
   
  atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Mozu.jpg'){
   let atk = 16;
   let def = 8;
   let mob = 12;
   let ut = 12;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Pakko.jpg'){
   let atk = 10;
   let def = 14;
   let mob = 10;
   let ut = 8;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Tripp.jpg'){
   let atk = 20;
   let def = 4;
   let mob = 18;
   let ut = 4;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Tyto.jpg'){
   let atk = 14;
   let def = 10;
   let mob = 20;
   let ut = 4;
   
  atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Uncle Sven.jpg'){
   let atk = 10;
   let def = 40;
   let mob = 10;
   let ut = 20;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Vadasi.jpg'){
   let atk = 8;
   let def = 14;
   let mob = 8;
   let ut = 18;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Voden.jpg'){
   let atk = 10;
   let def = 10;
   let mob = 14;
   let ut = 14;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Wu.jpg'){
   let atk = 14;
   let def = 10;
   let mob = 16;
   let ut = 8;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Xenobia.jpg'){
   let atk = 8;
   let def = 10;
   let mob = 8;
   let ut = 20;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }
 else if(source == 'images/Zandora.jpg'){
   let atk = 8;
   let def = 14;
   let mob = 10;
   let ut = 18;
   
   atkCounterT2 +=  atk;
   atkT2.style.width = atkCounterT2 + "%";
   
   defCounterT2 += def;
   defT2.style.width = defCounterT2 + "%";
   
   mCounterT2 += mob;
   mobT2.style.width = mCounterT2 + "%";
   
   utCounterT2 += ut;
   utT2.style.width = utCounterT2 + "%";
   return atkCounterT2, defCounterT2, mCounterT2, utCounterT2;
 }  
} // End heroStatsT2();





function scrollBottom(){
  document.body.scrollTop = document.body.scrollHeight;
}





function btnCommit(){
  const heroDDM = document.getElementById("heroName");
  const heroDDM2 = document.getElementById("heroName2");
  const team1Name = document.getElementById("teamName1");
  const team2Name = document.getElementById("teamName2");
  let modalTitle = document.getElementById("modalTitle");
  let btnCommit = document.getElementById("btnCommit");
  const draftBtn = document.getElementById("pickBtn");
  
 

if (document.getElementById("pick1_1").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px green";
  team2Name.style.color ="green";
  team2Name.style.textShadow ="1px 1px 20px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team1Pick = document.createElement("IMG");
  team1Pick.src = "images/" + heroDDM.options[heroDDM.selectedIndex].text + '.jpg';
  document.getElementById("pick1_1").appendChild(team1Pick);  
  heroDDM.remove(heroDDM.selectedIndex);
  document.getElementById("id01").style.display = "none";
 document.getElementById("pickBtn").style.left = "28%";
 heroDDM.style.display="none";
 heroDDM2.style.display="inline-block";
  heroStatsT1(team1Pick.src);
  console.log(team1Pick.src);
}
else if(document.getElementById("pick2_1").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px white";
  team2Name.style.color ="green";
  team2Name.style.textShadow ="1px 1px 20px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team2Pick = document.createElement("IMG");
  team2Pick.src = "images/" + heroDDM2.options[heroDDM2.selectedIndex].text + '.jpg';
  document.getElementById("pick2_1").appendChild(team2Pick);  
  heroDDM2.remove(heroDDM2.selectedIndex);
  document.getElementById("id01").style.display = "none";
  document.getElementById("pickBtn").style.left = "28%";
  heroDDM.style.display="none";
  heroDDM2.style.display="inline-block";
  heroStatsT2(team2Pick.src);
}
else if(document.getElementById("pick2_2").childNodes.length === 0){
  team1Name.style.color ="green";
  team1Name.style.textShadow ="1px 1px 20px green";
  team2Name.style.color ="white";
  team2Name.style.textShadow ="0px 0px 0px white";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team2Pick = document.createElement("IMG");
  team2Pick.src = "images/" + heroDDM2.options[heroDDM2.selectedIndex].text + '.jpg';
  document.getElementById("pick2_2").appendChild(team2Pick);  
  heroDDM2.remove(heroDDM2.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "-28%";
   heroDDM.style.display="inline-block";
  heroDDM2.style.display="none";
  heroStatsT2(team2Pick.src);
}
else if(document.getElementById("pick1_2").childNodes.length === 0){
  team1Name.style.color ="green";
  team1Name.style.textShadow ="1px 1px 20px green";
  team2Name.style.color ="white";
  team2Name.style.textShadow ="0px 0px 0px green";
  modalTitle.innerHTML = "Team 1 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team1Pick = document.createElement("IMG");
  team1Pick.src = "images/" + heroDDM.options[heroDDM.selectedIndex].text + '.jpg';
  document.getElementById("pick1_2").appendChild(team1Pick);  
  heroDDM.remove(heroDDM.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "-28%";
   heroDDM.style.display="inline-block";
 heroDDM2.style.display="none";
  heroStatsT1(team1Pick.src);
}
else if(document.getElementById("pick1_3").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px green";
  team2Name.style.color ="green";
  team2Name.style.textShadow ="1px 1px 20px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team1Pick = document.createElement("IMG");
  team1Pick.src = "images/" + heroDDM.options[heroDDM.selectedIndex].text + '.jpg';
  document.getElementById("pick1_3").appendChild(team1Pick);  
  heroDDM.remove(heroDDM.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "28%";
   heroDDM.style.display="none";
 heroDDM2.style.display="inline-block";
  heroStatsT1(team1Pick.src);
}
else if(document.getElementById("pick2_3").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px green";
  team2Name.style.color ="green";
  team2Name.style.textShadow ="1px 1px 20px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team2Pick = document.createElement("IMG");
  team2Pick.src = "images/" + heroDDM2.options[heroDDM2.selectedIndex].text + '.jpg';
  document.getElementById("pick2_3").appendChild(team2Pick);  
  heroDDM2.remove(heroDDM2.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "28%";  
   heroDDM.style.display="none";
  heroDDM2.style.display="inline-block"
  heroStatsT2(team2Pick.src);
}
else if(document.getElementById("pick2_4").childNodes.length === 0){
  team1Name.style.color ="green";
  team1Name.style.textShadow ="1px 1px 20px green";
  team2Name.style.color ="white";
  team2Name.style.textShadow ="0px 0px 0px white";
  modalTitle.innerHTML = "Team 1 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team2Pick = document.createElement("IMG");
  team2Pick.src = "images/" + heroDDM2.options[heroDDM2.selectedIndex].text + '.jpg';
  document.getElementById("pick2_4").appendChild(team2Pick);  
  heroDDM2.remove(heroDDM2.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "-28%";
   heroDDM.style.display="inline-block";
  heroDDM2.style.display="none";
  heroStatsT2(team2Pick.src);
}
else if(document.getElementById("pick1_4").childNodes.length === 0){
  team1Name.style.color ="green";
  team1Name.style.textShadow ="1px 1px 20px green";
  team2Name.style.color ="white";
  team2Name.style.textShadow ="0px 0px 0px white";
  modalTitle.innerHTML = "Team 1 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team1Pick = document.createElement("IMG");
  team1Pick.src = "images/" + heroDDM.options[heroDDM.selectedIndex].text + '.jpg';
  document.getElementById("pick1_4").appendChild(team1Pick);  
  heroDDM.remove(heroDDM.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "-28%";
   heroDDM.style.display="inline-block";
  heroDDM2.style.display="none";
  heroStatsT1(team1Pick.src);
}
else if(document.getElementById("pick1_5").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px green";
  team2Name.style.color ="green";
  team2Name.style.textShadow ="1px 1px 20px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team1Pick = document.createElement("IMG");
  team1Pick.src = "images/" + heroDDM.options[heroDDM.selectedIndex].text + '.jpg';
  document.getElementById("pick1_5").appendChild(team1Pick);  
  heroDDM.remove(heroDDM.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "28%";
   heroDDM.style.display="none";
 heroDDM2.style.display="inline-block";
  heroStatsT1(team1Pick.src);
}
else if(document.getElementById("pick2_5").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px green";
  team2Name.style.color ="green";
  team2Name.style.textShadow ="1px 1px 20px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team2Pick = document.createElement("IMG");
  team2Pick.src = "images/" + heroDDM2.options[heroDDM2.selectedIndex].text + '.jpg';
  document.getElementById("pick2_5").appendChild(team2Pick);  
  heroDDM2.remove(heroDDM2.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "28%";
   heroDDM.style.display="none";
  heroDDM2.style.display="inline-block";
  heroStatsT2(team2Pick.src);
}
else if(document.getElementById("pick2_6").childNodes.length === 0){
  team1Name.style.color ="green";
  team1Name.style.textShadow ="1px 1px 20px green";
  team2Name.style.color ="white";
  team2Name.style.textShadow ="0px 0px 0px green";
  modalTitle.innerHTML = "Team 1 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team2Pick = document.createElement("IMG");
  team2Pick.src = "images/" + heroDDM2.options[heroDDM2.selectedIndex].text + '.jpg';
  document.getElementById("pick2_6").appendChild(team2Pick);  
  heroDDM2.remove(heroDDM2.selectedIndex);
  document.getElementById("id01").style.display = "none";
   document.getElementById("pickBtn").style.left = "-28%";
   heroDDM.style.display="inline-block";
  heroDDM2.style.display="none";
  heroStatsT2(team2Pick.src);
}
else if(document.getElementById("pick1_6").childNodes.length === 0){
  team1Name.style.color ="white";
  team1Name.style.textShadow ="0px 0px 0px green";
  team2Name.style.color ="white";
  team2Name.style.textShadow ="0px 0px 0px green";
  modalTitle.innerHTML = "Team 2 pick a hero";
  btnCommit.value = "Pick";
  btnCommit.style.color = "green";
  let team1Pick = document.createElement("IMG");
  team1Pick.src = "images/" + heroDDM.options[heroDDM.selectedIndex].text + '.jpg';
  document.getElementById("pick1_6").appendChild(team1Pick);  
  heroDDM.remove(heroDDM.selectedIndex);
  document.getElementById("id01").style.display = "none";
  document.getElementById("beginDraft").style.visibility = "hidden"; 
   document.getElementById("pickBtn").style.left = "28%"; 
  heroStatsT1(team1Pick.src);
}
}
