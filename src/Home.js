import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
      .then(response => {
        return response.json();})
        .then(data=>{
          setBlogs(data);
          setIsPending(false); //dont display laoding message if fetch has gotten data
        })
  },[]);

  return (
    <div className="home">
      {isPending&& <div> Loading... </div>} 
      {blogs && <BlogList blogs={blogs} title = 'All blogs!'/>}
    </div>
  );
}
 
export default Home;