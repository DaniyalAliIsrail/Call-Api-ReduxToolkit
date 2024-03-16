import { useDispatch, useSelector } from "react-redux"
import  {getAllData}  from "./feature/gituserSlice"

function App() {
  // ksy bhy action ko hit karnay kay lye use karty hay useDispacth 
  const dispatch = useDispatch()
  const data = useSelector((state)=>{
    console.log(state.app.users);
    return state.app.users;
  })
  // console.log(data);

  return (
    <>
    <h4>hit  button & call api using redux tool kit</h4>
    <button onClick={()=>dispatch(getAllData()) }>hit github api</button>

    <div>
      {
        data.map((item)=>{
          return <p key={item.id}>{item.login}</p>
        })
      }
    </div>
    </>
  )
}

export default App
