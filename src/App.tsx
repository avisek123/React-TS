import { Greet } from './components'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'



function App() {
  
  return (
    <div>
      <Greet name={'Avisek'} isLoggedIn={false} />
    
      <Oscar>

      <Heading>Oscar is a wild dog</Heading>
      </Oscar>
      {/* <Button
      onClick={(e,i)=>{
        console.log('clicked',e,i)
      }}
      /> */}
      <Input
      value=''
      onChange={(e)=>{console.log(e.target.value)}}
      />

     
    </div>
  )
}

export default App
  