import React,{useEffect,useState} from 'react'

function App() {
    const [image,setImage]=useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=> {setImage(data.message)
         setLoaded(true)
        })
    },[]);
     // if the data hasn't been loaded, show a loading indicator
  if (!loaded) return <p>Loading...</p>;

  return (
    <div>
        <img src={image} alt="A Random Dog"/>
    </div>
  )
}

export default App