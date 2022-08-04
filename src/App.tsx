import {Button} from './ui/Button'
import {Stack} from './ui/Stack/Stack'
import {Text} from './ui/Text'
import {lightThemeClass} from './ui/theme'

export function App() {
  return (
    <div className={lightThemeClass}>
      <Stack>
        <Button variants={{size: 'small'}}>btn solid|neutral|small</Button>
        <Button>btn solid|neutral|medium</Button>
        <Button variants={{size: 'large'}}>btn solid|neutral|large</Button>

        <Button variants={{tone: 'brand', size: 'small'}}>
          btn solid|brand|small
        </Button>
        <Button variants={{tone: 'brand'}}>btn solid|brand|medium</Button>
        <Button variants={{tone: 'brand', size: 'large'}}>
          btn solid|brand|large
        </Button>

        <Button variants={{type: 'ghost', size: 'small'}}>
          btn ghost|neutral|small
        </Button>
        <Button variants={{type: 'ghost'}}>btn ghost|neutral|medium</Button>
        <Button variants={{type: 'ghost', size: 'large'}}>
          btn ghost|neutral|large
        </Button>

        <Button variants={{type: 'ghost', tone: 'brand', size: 'small'}}>
          btn ghost|brand|small
        </Button>
        <Button variants={{type: 'ghost', tone: 'brand'}}>
          btn ghost|brand|medium
        </Button>
        <Button variants={{type: 'ghost', tone: 'brand', size: 'large'}}>
          btn ghost|brand|large
        </Button>
      </Stack>

      <hr />

      <Stack>
        <Text>text neutral|medium</Text>
        <Text>text neutral|small</Text>

        <Text>text secondary|medium</Text>
        <Text>text secondary|small</Text>

        <Text>text strong|medium</Text>
        <Text>text strong|small</Text>

        <Text>text link|medium</Text>
        <Text>text link|small</Text>
      </Stack>
    </div>
  )
}
