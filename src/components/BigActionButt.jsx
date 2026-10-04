// src/components/BigActionButton.jsx

const BigActionButton = ({ title, subtitle, icon, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: '100%',
      background: 'linear-gradient(90deg, #9B59D6 0%, #4A90E2 100%)',
      border: 'none',
      borderRadius: 20,
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      cursor: 'pointer',
      fontFamily: 'inherit',
    }}
  >
    {/* Левая часть: заголовок + подзаголовок */}
    <div style={{ textAlign: 'left' }}>
      <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>
        {title}
      </div>
      <div style={{ fontSize: 13, opacity: 0.85, marginTop: 2 }}>
        {subtitle}
      </div>
    </div>

    {/* Правая часть: иконка */}
    {icon && (
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: 'rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        {icon}
      </div>
    )}
  </button>
);

export default BigActionButton;