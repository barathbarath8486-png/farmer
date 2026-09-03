import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
function Home() { return <div className="page"><Hero /><h2 className="section-title">Shop by category</h2><div className="grid"><CategoryCard name="Vegetables" description="Picked fresh from local farms." /><CategoryCard name="Fruits" description="Seasonal produce at fair prices." /><CategoryCard name="Grains" description="Wholesome staples for every kitchen." /></div></div> }
export default Home