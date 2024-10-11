import { useState } from "react"
import { MenuCard } from "./Page/MenuCard"
import { ListAnimation } from "./Page/ListAnimation"
import { Game } from "./Page/Game"
import { NotFound } from "./Page/NotFound"

function App() {
  // return <TestApi/>
  const [page, setPage] = useState('mP')

  if (page === 'mP'){
    return <MenuCard onClick={setPage}/>
  }else if (page === 'lA'){
    return <ListAnimation onClick={setPage}/>
  }else if (page === 'game'){
    return <Game onClick={setPage}/>
  }else{
    return <NotFound onClick={setPage}/>
  }
}
export default App
