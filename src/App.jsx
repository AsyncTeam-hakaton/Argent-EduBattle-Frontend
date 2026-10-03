import { Panel, Flex, Typography, Avatar, Grid, Button, Input } from '@maxhub/max-ui';

const App = () => (
  <Panel className='fullscreen'>
    <Flex direction="column" align="center" gap={16} style={{ padding: 24 }}>
      <Typography.Title>Привет, MAX UI, React Component.</Typography.Title>

      <Avatar.Container size={96} form="squircle" className='avatar'>
        <Avatar.Image src="src/assets/react.svg" />
      </Avatar.Container>

        <Typography.Title>Hatsune Miku</Typography.Title>
        <Typography.Text>Ученик • 9А класс</Typography.Text>

        <Grid gap={8} cols={3} style={{ width: '100%', marginTop: 16 }}>
          <Flex direction="column" align="center">
            <Typography.Title>12</Typography.Title>
            <Typography.Text>Квизов</Typography.Text>
          </Flex>
          <Flex direction="column" align="center">
            <Typography.Title>87%</Typography.Title>
            <Typography.Text>Средний</Typography.Text>
          </Flex>
          <Flex direction="column" align="center">
            <Typography.Title>3</Typography.Title>
            <Typography.Text>Места</Typography.Text>
          </Flex>
        </Grid>

        <Button appearance="themed" mode="primary" size="large" style={{ width: '50%', marginTop: 24 }}>
          Начать квиз
        </Button>
      
        <Grid cols={1} style={{ width: '100%', marginTop: 36 }}>
          <Flex direction="column" align="center">
            <Typography.Title>Необходимо набрать</Typography.Title>
            <Typography.Title>70+</Typography.Title>
          </Flex>
        </Grid>

        <div style={{ width: '90%', border:'2px solid #007AFF', borderRadius:'20px', position:'fixed', bottom:'30px'}}>
          <Input
            defaultValue=""
            iconBefore={<img src="src/assets/react.svg" style={{ width: "30px" }} />}
            mode="secondary"
            placeholder="Placeholder"
          />
        </div>
    </Flex>
  </Panel>
);

export default App;