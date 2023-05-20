import './App.css';
import Card from './Card';
import Navbar from './Navbar';

function App() {

  let mData = {
    myName: "mohit",
    school: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam non tempore quos ad aperiam? Ad voluptas facere iusto eius molestias incidunt dolorem animi aspernatur quam. Iste assumenda ad perspiciatis ipsum unde at blanditiis veritatis earum. Similique, illo doloribus! Alias tempora quasi praesentium tempore facere at.",
    class: "mohit class",
    imgUrl: "https://www.gowallpaper.co.uk/media/catalog/product/cache/a35feaac9df764e89b33b339cfadd4b6/5/9/59119_kailani_dark_blue_roomset.jpg"
  }

  let pData = {
    myName: "pawan",
    school: "pawan school",
    class: "pawan class",
    imgUrl: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
  }

  let sData = {
    myName: "sandeep",
    school: "sandeep school",
    class: "sandeep class",
    imgUrl: "https://media.istockphoto.com/id/1257005098/photo/hd-wallpaper-for-mobile-phones.jpg?b=1&s=170667a&w=0&k=20&c=Hl1nOy1NbJbEvGQsoAW4zDtMmNg9yPL7H7a1mdftly8=" 
  }

  let rData = {
    myName: "ritesh",
    school: "ritesh school",
    class: "ritesh class",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9REClTzT7YmgnXrXgrfgDw3xLV673aPq4Q&usqp=CAU"
  }


  return (
    <>

      {/* <Navbar />

      <div className="d-flex justify-content-center">

        <Card war={rData} />
        <Card war={mData} />
        <Card war={pData} />
        <Card war={sData} />



      </div> */}


      

    </>
  )

}


export default App;