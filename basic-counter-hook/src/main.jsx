import React from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter'
import './style.css'

const root = createRoot(document.getElementById('root'))
root.render(<Counter />)
