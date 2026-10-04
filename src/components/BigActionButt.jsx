// src/components/BigActionButton.jsx

const BigActionButton = ({ title, subtitle, icon, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: '100%',
      background: 'linear-gradient(90deg, #9B59D6 18%, #4A90E2 100%)',
      border: 'none',
      borderRadius: 26,
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#ebebeb',
      cursor: 'pointer',
      fontFamily: 'inherit',
    }}
  >
    {/* Левая часть: заголовок + подзаголовок */}
    <div style={{ textAlign: 'left' }}>
      <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.1 }}>
        {title}
      </div>
      <div style={{ fontSize: 14, opacity: 0.94, marginTop: 2, letterSpacing: 0.3}}>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}
        >
            {icon}
        </div>
        )}
  </button>
);

export default BigActionButton;