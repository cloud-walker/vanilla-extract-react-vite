import {themeClass, vars} from './modules/theme'

export function App() {
  return (
    <div className={themeClass}>
      <button>btn solid|neutral|medium</button>
      <button>btn solid|neutral|small</button>
      <button>btn solid|neutral|large</button>

      <button style={{backgroundColor: vars.color.blue1}}>
        btn solid|brand|medium
      </button>
      <button>btn solid|brand|small</button>
      <button>btn solid|brand|large</button>

      <button>btn ghost|neutral|medium</button>
      <button>btn ghost|neutral|small</button>
      <button>btn ghost|neutral|large</button>

      <button>btn ghost|brand|medium</button>
      <button>btn ghost|brand|small</button>
      <button>btn ghost|brand|large</button>
    </div>
  )
}
