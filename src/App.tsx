import { Greet, Person, PersonList, Profile } from './components'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Status } from './components/Status'


function App() {
  const personName={
    fName:'Nag',
    lName:'Kumar'
  }
  const nameList=[
    {

      first:'Nag',
      last:'Kumar'
    },
    {
      first:'Joe',
      last:'Kumar'

    },
    {
      first:'John',
      last:'Kumar'

    }
  ]
  return (
    <div>
      <Greet name={'Avisek'} msgCount={20} isLoggedIn={false} />
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status='online' /> */}
      <Oscar>

      <Heading>Oscar is a wild dog</Heading>
      </Oscar>

      {/* <Profile name={'Avisek'} status={'Coder'}  age={12} />
      <Profile name={'Sarath'} status={'Coder'}  age={12} >
        Salary 10LPA
        </Profile> */}
    </div>
  )
}

export default App
  