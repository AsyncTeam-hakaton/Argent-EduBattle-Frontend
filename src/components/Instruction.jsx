// src/components/Instruction.jsx
import { useState } from 'react';

const Instruction = ({ onClose }) => {
  const [closing, setClosing] = useState(false);

  // Клик по крестику или по заднику — запускаем анимацию ухода
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose?.();   // вызываем родительский onClose после анимации
    }, 250);          // 250ms = столько же, сколько идёт анимация в CSS
  };

  return (
    <div
      className={`overlay ${closing ? 'closing' : ''}`}
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5vw',
      }}
    >
      <div
        className={`instruction modal ${closing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 500,
          maxHeight: '80vh',
          overflowY: 'auto',
          backgroundColor: '#2C2D33',
          borderRadius: 15,
          padding: 'clamp(16px, 3vw, 24px)',
          color: '#ebebeb',
          fontSize: 'clamp(14px, 1vw, 17px)',
          fontFamily: 'inherit',
          lineHeight: 1.4,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(12px, 2vw, 18px)',
          position: 'relative',
        }}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={handleClose}
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
            Учитель создаёт класс и получает код. Ученики заходят по коду.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: 6, fontSize: 'clamp(16px, 4vw, 19px)' }}>
            Второй этап
          </h3>
          <p style={{ margin: 0, opacity: 0.85 }}>
            Учитель вводит тему — ИИ генерирует лекцию, пробный тест и квиз.
            Квиз можно редактировать.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: 6, fontSize: 'clamp(16px, 4vw, 19px)' }}>
            Третий этап
          </h3>
          <p style={{ margin: 0, opacity: 0.85, marginBottom: 8 }}>
            Ученики, прошедшие пробный тест, ждут старта. Баллы:
          </p>
          <ul style={{ paddingLeft: 20, margin: 0, opacity: 0.85 }}>
            <li>Правильный ответ — 1 балл</li>
            <li>Неправильный — 0</li>
            <li>Финиш первым — +1</li>
            <li>Финиш вторым — +0.5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instruction;