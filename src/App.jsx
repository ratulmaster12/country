
import { Suspense } from 'react'
import './App.css'
import Counties from './assets/Component/countries/Counties'


const countriesPromise=fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json());
function App() {


  return (
    <>
<Suspense fallback={<h2>nadir vhai on the go</h2>}>
    <Counties countriesPromise={countriesPromise}>
    

    </Counties>

</Suspense>
    </>
  )
}

export default App
