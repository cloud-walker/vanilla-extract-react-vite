import ReactDOM from 'react-dom/client'

import {App} from './App'
import {getBySelector} from './model/DOM'

ReactDOM.createRoot(getBySelector('#root')).render(<App />)
