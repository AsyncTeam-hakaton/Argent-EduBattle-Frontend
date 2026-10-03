import { Panel, Grid, Container, Flex, Avatar, Typography, Button, Spinner} from '@maxhub/max-ui';

const App = () => (
    <Panel mode="secondary" className="panel">
        <Grid gap={12} cols={1}>
            <Container className="me">
                <Flex direction="column" align="center" gap={20}>
                    <Avatar.Container size={112} form="squircle" className="me__avatar">
                        <Avatar.Image src="src/assets/react.svg"/>
                    </Avatar.Container>

                    <Typography.Title>Hatsune Miku</Typography.Title>
                    <Button
                      appearance="themed"
                      mode="primary"
                      onClick={() => {}}
                      size="medium"
                    >
                      <Spinner
                          appearance="primary"
                          size={20}
                        />
                    </Button>
                </Flex>
            </Container>
        </Grid>

        <Grid gap={12} cols={1}>
            <Container className="me">
                <Flex direction="column" align="center" gap={20}>
                    <Avatar.Container size={112} form="squircle" className="me__avatar">
                        <Avatar.Image src="src/assets/react.svg"/>
                    </Avatar.Container>

                    <Typography.Title>Hatsune Miku</Typography.Title>
                    <Button
                      appearance="themed"
                      mode="primary"
                      onClick={() => {}}
                      size="medium"
                    >
                      <Spinner
                          appearance="primary"
                          size={20}
                        />
                    </Button>
                </Flex>
            </Container>
        </Grid>
    </Panel>
    
    
)

export default App;
