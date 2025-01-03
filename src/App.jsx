import { useState } from 'react'
import webLanguages from './data/webLanguages'
import LanguageCard from './components/LanguageCard'
import LanguageButtons from './components/LanguageButtons'

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(null)

  return (
    <>
      <section className='container'>
        <h1 className='text-center my-3'>Learn Web Development</h1>
        <div className='d-flex justify-content-center'>
          {/* console.log(webLanguages); */}
          {webLanguages.map((curLanguage) => (
            <LanguageButtons
              key={curLanguage.id}
              buttonColor={selectedLanguage && selectedLanguage.id === curLanguage.id ? 'warning' : 'primary'}
              handleOnClick={() => setSelectedLanguage(curLanguage)}
              name={curLanguage.name}
            />
          ))}
        </div>
        <LanguageCard language={selectedLanguage} />
      </section>
    </>
  )
}

export default App
