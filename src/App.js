import React, {useState,useEffect} from 'react';
import NavBar from './NavBar';
import RecipeList from './RecipeList';



const App = () => {
  const APP_ID = "359ead8e"
  const APP_KEY = "6dfb7724b616538d98349bdc6becc054"

  
  const [submitted, setSubmitted] = useState(0);
  const [search, setSearch] = useState("");
  const [response_body, setResponseBody] = useState([]);

  useEffect(function(){
    (async ()=>{
    try{
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      setResponseBody((await response.json()).hits);
    }catch(err){
      console.log('Fetching Err', err)
    }
    })();
  },[submitted]
  )

  return(
    <div className="app-content">
        <NavBar submitted={submitted} setSubmitted={setSubmitted} setSearch={setSearch}/>
        <div className="container">
          <RecipeList recipe_list={response_body} />
        </div>
    </div>
    )
}

export default App;  