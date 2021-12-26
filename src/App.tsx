import { Greet, Person, Profile } from './components'


function App() {
  const personName={
    fName:'Nag',
    lName:'Kumar'
  }
  return (
    <div>
      <Greet name={'Avisek'} msgCount={20} isLoggedIn={false} />
      <Person name={personName} />

      {/* <Profile name={'Avisek'} status={'Coder'}  age={12} />
      <Profile name={'Sarath'} status={'Coder'}  age={12} >
        Salary 10LPA
        </Profile> */}
    </div>
  )
}

export default App
  