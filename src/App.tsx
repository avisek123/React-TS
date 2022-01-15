import { Greet } from './components'
import { Button } from './components/Button'
import { Container } from './components/Container'
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
      <Container
      styles={{
        backgroundColor:'red',
        color:'white',
        padding:'10px',
        border:'1px solid black'
      }}
      />

     
    </div>
  )
}

export default App
  