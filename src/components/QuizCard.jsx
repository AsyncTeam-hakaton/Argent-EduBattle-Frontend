// src/components/QuizCard.jsx

const QuizCard = ({title, date, leftIcon, leftText, rightIcon, rightContent}) => (
    <div style={{
        width: '100%',
        height: '90px',
        backgroundColor: '#2C2D33',
        borderRadius: '15px',
        padding: '11px 3%',
        paddingBottom: '8px',
        color: '#ebebeb',
        fontFamily: 'inherit',
        position:'relative',
        display:'flex',
        flexDirection:'column'
    }}>
        {/* верхняя часть, название темы, дата */}
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
            <div style={{ fontSize: 20, fontWeight: 400}}>
                {title}
            </div>
            <div style={{fontSize: 20, fontWeight: 400}}>
                {date}
            </div>
        </div>

        {/* Линия разделения */}
        <div style={{width: "94%", borderBottom: "2px solid #595A62", 
            position: "absolute", top:"50%", left:"50%", transform:"translate(-50%)"}}>
        </div>

        {/* нижняя часть, колво участников/место, пустота/кол-во баллов */}
        <div style={{ display: 'flex', justifyContent: "space-between", marginTop:'auto', alignItems: 'center'}}>

            {leftIcon && (
        <div style={{display: "flex"}}>
            {leftIcon}
            <div style={{ fontSize: 20, fontWeight: 400, marginLeft:"6px"}}>
                {leftText}
            </div>
        </div>
        )}
        
            {(rightIcon || rightContent) && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {rightIcon && (
                    <div style={{display:'flex'}}>{rightIcon}</div>
                    )}
                    {rightContent && (
                    <div style={{ fontSize: 20, fontWeight: 400, marginLeft:"6px" }}>
                        {rightContent}
                    </div>
                    )}
                </div>
            )}
        </div>
    </div>
)

export default QuizCard