import ReactDOM from 'react-dom/client'

import {App} from './App'
import {getBySelector} from './modules/DOM'

ReactDOM.createRoot(getBySelector('#root')).render(<App />)
