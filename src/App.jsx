import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard } from './features/labs/Student'

function App() {
  const john = {
    name: 'John',
    age: 18,
  }

  function handleStudentClick(student) {
    console.log('student click', student)
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} onClick={handleStudentClick} />
      <Footer></Footer>
    </div>
  )
}

export default App
