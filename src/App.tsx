import { Greet, Profile } from './components'


function App() {
  return (
    <div>
      <Greet name={'Avisek'} msgCount={20} isLoggedIn={false} />

      {/* <Profile name={'Avisek'} status={'Coder'}  age={12} />
      <Profile name={'Sarath'} status={'Coder'}  age={12} >
        Salary 10LPA
        </Profile> */}
    </div>
  )
}

export default App
  