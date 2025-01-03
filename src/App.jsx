import { useState } from 'react'
import webLanguages from './data/webLanguages'

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(webLanguages[0])

  return (
    <>
      <section className='container'>
        <h1 className='text-center my-3'>Learn Web Development</h1>
        <div>
          {/* console.log(webLanguages); */}
          {webLanguages.map((curLanguage) => (
            <button key={curLanguage.id} className='my-3 me-3' onClick={() => setSelectedLanguage(curLanguage)}>
              {curLanguage.name}
            </button>
          ))}
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{selectedLanguage.name}</h5>
              <p className="card-text">{selectedLanguage.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
