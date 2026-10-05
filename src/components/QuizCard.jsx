// src/components/QuizCard.jsx

const QuizCard = ({title, date, leftIcon, leftText, rightContent}) => (
    <div style={{
        width: '100%',
        height: '90px',
        backgroundColor: '#2C2D33',
        borderRadius: '15px',
        padding: '11px 12px',
        paddingBottom: '8px',
        color: '#ebebeb',
        fontFamily: 'inherit',
        position:'relative',
        display:'flex',
        flexDirection:'column'
    }}>
        {/* верхняя часть, название темы, дата */}
        <div style={{ display: 'flex', justifyContent: "space-between"}}>
            <div style={{ fontSize: 20, fontWeight: 400}}>
                {title}
            </div>
            <div style={{fontSize: 20, fontWeight: 400}}>
                {date}
            </div>
        </div>

        {/* нижняя часть, колво участников/место, пустота/кол-во баллов */}
        <div style={{ display: 'Flex', justifyContent: "space-between", borderTop: '2px solid #595A62',
            marginTop:'auto'
        }}>
            {leftIcon && (
        <div style={{display: "flex"}}>
            {leftIcon}
            <div style={{ fontSize: 20, fontWeight: 400, marginLeft:"6px"}}>
                {leftText}
            </div>
        </div>
        )}
            {rightContent && (
            <div style={{fontSize: 20, fontWeight: 400}}>
                {rightContent}
            </div>
            )}
        </div>
    </div>
)

export default QuizCard