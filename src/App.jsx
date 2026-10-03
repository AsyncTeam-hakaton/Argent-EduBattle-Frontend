import { Panel, Flex, Typography, Avatar, Grid, Button } from '@maxhub/max-ui';

const App = () => (
  <Panel>
    <Flex direction="column" align="center" gap={16} style={{ padding: 24 }}>
      <Typography.Title>Привет, MAX UI!</Typography.Title>
      <Typography.Text>Библиотека работает!</Typography.Text>

      <Avatar.Container size={96} form="squircle">
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
      
    </Flex>
  </Panel>
);

export default App;