import React from 'react'
import './Home.scss'
import bg from '../../Assets/images/Sub (1).png'
import { Link } from 'react-router-dom'
import Genre from '../../Components/Genre/Genre'
import Prem from '../../Components/Prem/Prem'
import FAQ from '../../Components/FAQ/Faq'
import Plan from '../../Components/plan/Plan'
const Home = () => {
  React.useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="Home">
    
    <div className="overlay">
  <img className="bg-img" src={bg} alt="background" />
  <div className="container">
    <div className="hero-content">
      <h1 className="title">The Best Streaming Experience</h1>
      <p className="desc">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
      <Link to="/Movies">
        <button className="start-btn">▶ Start Watching Now</button>
      </Link>
    </div>
  </div>
</div>
<Genre />
<FAQ/> 
<Plan/>
<Prem/>

    </div>
  )
}

export default Home
