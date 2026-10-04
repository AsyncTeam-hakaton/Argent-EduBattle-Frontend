import { Panel, Flex, Typography, Avatar, Grid, Button, Input } from '@maxhub/max-ui';

import BigActionButton from './components/BigActionButt';

import createIcon from "./assets/teacher/create.png";

const App = () => (
  <Panel className="fullscreen">
    <Flex
      direction="column"
      style={{ padding: 26, height: '100dvh', overflow: 'hidden' }}
    >
      {/* Заголовок */}
      <Typography.Title style={{ fontSize: 28, marginBottom: 16, fontWeight: 700, letterSpacing: 0.1 }}>
        Последние квизы:
      </Typography.Title>

      {/* Скролл-зона со списком (пока пусто) */}
      <div style={{ flex: 1, overflowY: 'auto', width: "100%", textAlign: 'center'}}>
        <div style={{marginTop: "20px"}}>
        <Typography.Text style={{ opacity: 0.5, textAlign: 'center'}}>
          Вы не провели ещё ни одного квиза.
        </Typography.Text>
        </div>
      </div>

      {/* Кнопка внизу */}
      <BigActionButton
        title="Создать"
        subtitle="группу, лекцию, квиз"
        icon={<img src={createIcon} style={{ width: 54 }} />}
        onClick={() => alert('Создаlol')}
      />
    </Flex>
  </Panel>
);


export default App;