// src/components/Instruction.jsx

const Instruction = ({ onClose }) => (
  <div
    className="instruction"
    style={{
      width: '90%',
      maxHeight: '80vh',
      overflowY: 'auto',
      backgroundColor: '#2C2D33',
      borderRadius: '15px',
      boxShadow: '0px 0px 20px black',
      padding: 'clamp(16px, 3vw, 24px)',
      color: '#ebebeb',
      fontSize: 'clamp(14px, 1vw, 17px)',
      fontFamily: 'inherit',
      lineHeight: 1.4,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(12px, 2vw, 18px)',
    }}
  >
    {/* Кнопка закрытия — только если передан onClose */}
    {onClose && (
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#ebebeb',
          cursor: 'pointer',
          fontSize: 18,
          fontFamily: 'inherit',
        }}
      >
        ✕
      </button>
    )}

    <h2 style={{
      fontSize: 'clamp(20px, 5vw, 26px)',
      width: '100%',
      margin: 0,
      paddingBottom: 'clamp(8px, 2vw, 12px)',
      textAlign: 'center',
      borderBottom: '2px solid #595A62',
    }}>
      Как проходит игра
    </h2>

    <div>
      <h3 style={{ marginBottom: 6, fontSize: 'clamp(16px, 4vw, 19px)' }}>
        Первый этап
      </h3>
      <p style={{ margin: 0, opacity: 0.85 }}>
        Учитель создает класс, получает код, и ждет пока зайдет нужное количество учеников по коду.
      </p>
    </div>

    <div>
      <h3 style={{ marginBottom: 6, fontSize: 'clamp(16px, 4vw, 19px)' }}>
        Второй этап
      </h3>
      <p style={{ margin: 0, opacity: 0.85 }}>
        Учитель вводит тему — ИИ генерирует лекцию, пробный тест для учеников и квиз.
        Квиз можно редактировать.
      </p>
    </div>

    <div>
      <h3 style={{ marginBottom: 6, fontSize: 'clamp(16px, 4vw, 19px)' }}>
        Третий этап
      </h3>
      <p style={{ margin: 0, opacity: 0.85, marginBottom: 8 }}>
        Ученики, прошедшие пробный тест ждут старта. Баллы зарабатываются следующим путем:
      </p>
      <ul style={{ paddingLeft: 20, margin: 0, opacity: 0.85, justifyItems:'start'}}>
        <li>Правильный ответ — 1 балл</li>
        <li>Неправильный — 0</li>
        <li>Финиш первым — +1</li>
        <li>Финиш вторым — +0.5</li>
      </ul>
    </div>
  </div>
);

export default Instruction;