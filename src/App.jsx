import { Panel, Flex, Typography, Grid, Button, Input } from '@maxhub/max-ui';
import { useState } from 'react';

import BigActionButton from './components/BigActionButt';
import QuizCard from './components/QuizCard';
import Instruction from './components/Instruction';
 
import createIcon from "./assets/teacher/create.png";
import memberIcon from "./assets/teacher/members.png";

import ILetter from "./assets/letter-i.png"

import starIcon from "./assets/student/star.png";
import trophyIcon from "./assets/student/trophy.png";

const App = () => {
  const [showInstruction, setShowInstruction] = useState(false);

  return(
    <Panel className="fullscreen">
      <Flex
        direction="column"
        style={{ padding: 26, height: '100dvh', overflow: 'hidden' }}
      >
        {/* Заголовок */}
        <Typography.Title style={{ fontSize: 28, marginBottom: 26, fontWeight: 700, letterSpacing: 0.1 }}>
          Последние квизы:
        </Typography.Title>

        {/* Скролл-зона со списком */}
        <div style={{ flex: 1, overflowY: 'auto', width: "100%", textAlign: 'center', display:'flex',
          flexDirection:'column', gap:'18px'
        }}>

          {/* <div style={{marginTop: "20px"}}>
          <Typography.Text style={{ opacity: 0.5, textAlign: 'center'}}>
            Вы не провели ещё ни одного квиза.
          </Typography.Text>
          </div> */}

          <QuizCard 
              title="Docker"
              date="22.09"
              leftIcon={<img src={memberIcon} style={{ width: 28, height:28  }} />}
              leftText="14"
            />

          <QuizCard 
                title="Смерть Сократа"
                date="19.09"
                leftIcon={<img src={trophyIcon} style={{ width: 28, height:28 }} />}
                leftText="3 место"
                rightIcon={<img src={starIcon} style={{ width: 28, height:28  }} />}
                rightContent="6 из 10"
              />
          </div>

        {/* Кнопка вызова инструкции */}
            <button onClick={() => setShowInstruction(true)} 
              style={{display:"flex",background:'none',border:'none', cursor:'pointer', 
              color:'#e7e7e7a2', gap:8, alignItems:'center', margin:'10px auto', 
              fontSize:'clamp(15px, 0.9vw, 24px)'}}>
              {<img src={ILetter} style={{ width: 16, height:16 }} />}
              <p style={{ margin: 0, lineHeight: '16px', paddingBottom: 2 }}>как проходит игра</p>
            </button>
            
        {/* Кнопка внизу */}
        <BigActionButton
          title="Создать"
          subtitle="группу, лекцию, квиз"
          icon={<img src={createIcon} style={{ width: 54 }} />}
          onClick={() => alert('Создаlol')}
        />
      </Flex>
            {showInstruction && (
              <Instruction onClose={() => setShowInstruction(false)} />
            )}
    </Panel>
  );
};

export default App;