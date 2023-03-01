import { Route, Routes } from "react-router"
// import { mainLayout } from "./layout"
import { Nested } from "./Components"
import { HomeComponents , ReelsComponents } from "./Page"

function App() {

  return (
    <Routes>
      <Route path="/" element = {<Nested />}>
        <Route index element = {<HomeComponents />} />
        <Route path="reels" element = {<ReelsComponents />} />
      </Route>
      {/* <Route path="/reels" element = {<ReelsComponents />} /> */}
      <Route path="*" />
    </Routes>
    // <div className="flex">
    //   <Nested />
    //   <div>
    //    <Header />
    //    <Profile />
    //    <Video />
    //   </div>
    // </div>

  )
}

export default App
