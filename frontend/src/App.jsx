import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const queryclient =  new QueryClient()

  return (
    <QueryClientProvider client={queryclient}>
    <div className="App">
    <h1 className='text-2xl my-4'>Markdown Editor with Live Preview</h1>
    <Editor />
  </div>
  </QueryClientProvider>
  )
}

export default App
