/*import ClassComponent from "./ClassComponent"
import ClassComponent2 from "./ClassComponent2"
function Demo(){
  return(
    <section>
    <p>hello fellow</p>
    <p> This is class component</p>
    <h1>This is header tag</h1>
    <img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"alt="react"/>
    <ClassComponent/>
    <ClassComponent2/>
    </section>
    )
}
export default Demo*/
/*import PropsExample from "./PropsExample"
function Demo(){
  return(
    <div>
    <h1>this is about props example</h1>
    <PropsExample name="karthik" age="19" rollno="203114"/>
    </div>
    )
}
export default Demo*/


//import ClassComponent3 from "./ClassComponent3";
//import FuncExample from "./FuncExample"
//import StateExample from "./StateExample";
import {BrowserRouter,Routes,Route} from"react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Components/NotFound"

function Demo()
{
return(
  <div>
  {/*<p>Good morning</p>
  <h1>React</h1>
  <ClassComponent3 framework="karthik" rollno="203114" year="2003"/>
  <h1>vs code</h1>
  <ClassComponent3 framework="siva" rollno="203109" year="2003"/>
  <h1>react js</h1>
  <ClassComponent3 framework="rajesh" rollno="203116" year="2003"/>
  <h1>vs code</h1>
  <ClassComponent3 framework="trinath" rollno="203125" year="2003"/>
  <FuncExample/>
  <StateExample/>
   <Events/> */}
  <BrowserRouter>
  <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
    
     </Routes>
  </BrowserRouter>

  </div>

)

}
export default Demo