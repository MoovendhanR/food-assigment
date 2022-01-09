//make api call
//append data

async function getData(url){
try{
    let res=await fetch(url)
    let data=await res.json()
   // console.log(data)
    return data.meals;
}
catch(er){
    console.log("e:",er)
  }
}
function appendData(data,location){

    data.forEach((el) => {
        
        let div=document.createElement("div");
        let h2=document.createElement("h2"); 
        //console.log(meals.strMeal)
        h2.innerText=el.strMeal;
        let img=document.createElement("img");
        img.src=el.strMealThumb;
        let p=document.createElement("p")
        p.innerText=`price$:${+(el.idMeal)-52000}`
        let h3=document.createElement("h3");
        h3.innerText=`food style:${el.strArea}`
        div.append(img,h2,p,h3)
        location.append(div);

    
    })
}
export {getData,appendData}

async function getData1(url1){
    try{
        let res=await fetch(url1)
        let data=await res.json()
       // console.log(data)
        return data.meals;
    }
    catch(er){
        console.log("e:",er)
      }
    }
    function appendData1(data,location){
    
        data.forEach((el) => {
            
            let div=document.createElement("div");
            let h2=document.createElement("h2"); 
            //console.log(meals.strMeal)
            h2.innerText=el.strCategory;
            let img=document.createElement("img");
            img.src=el.strMealThumb;
        
            // let iframe=document.createElement("iframe");
            // iframe.src=el.strYoutube;
          
            // iframe.height="215";
            // iframe.width="460";
            // iframe.setAttribute("allowfullscreen","true");
            let div1=document.createElement("div");
            let p=document.createElement("p");
            p.innerText=el.strInstructions;
             div1.append(img,h2)
            div.append(div1,p)
            location.append(div);
    
        
        })
    }
    export {getData1,appendData1}