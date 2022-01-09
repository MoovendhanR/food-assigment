function navbar(){

  return`<div id="navbar">
    <img id="img" src="https://www.themealdb.com/images/logo-small.png"/>
    <div>
    <input type="text" id="input" placeholder="search here"/>
    <button onclick="">Click here</button>
    </div>
     <div id="options">
         <h3><a href="dealoftheday.html">DEAL OF THE DAY</a></h3>
         <h3 id="option2"><a href="receipes.html">RECEIPES</a></h3>
     </div>
</div>`
     
}

export default navbar;