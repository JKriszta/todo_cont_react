
import './App.css';
import Container from 'react-bootstrap/Container'
import {Counter} from './components/Counter'
import {Toggle} from './components/Toggle'
import {TodoList} from './components/TodoList'
import {data} from './data'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// for add icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinusSquare, faPlusSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faCheckSquare, faMinusSquare, faPlusSquare, faTrash)

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
// install packages:
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
  // npm install --save @fortawesome/react-fontawesome

  // npm install --save @fortawesome/free-brands-svg-icons
 // npm install --save @fortawesome/free-regular-svg-icons

 // 


function App() {

  return (
    <Container className="border bg-light text-center">
      <h1>My first React App</h1>
      <Counter />
      <Toggle />
      <TodoList data={data} />

    </Container>
  );
}

export default App;
