
import { Toaster, toast } from 'sonner'

const toaster = () => {
    return (
            <div>
              <Toaster />
              <button onClick={() => toast('My first toast')}>
                Give me a toast
              </button>
            </div>
          )
}

export default toaster

// import { Toaster, toast } from 'sonner'

// // ..

// function App() {
//   return (
//     <div>
//       <Toaster />
//       <button onClick={() => toast('My first toast')}>
//         Give me a toast
//       </button>
//     </div>
//   )
// }