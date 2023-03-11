import Button from '../UI/Button/Button';
import './index.scss'

function Main() {
  return (
    <section className="main">
      <div className="main-left">
        <h3 className="main-left-title">Зарабатывайте больше <br /><span className='main-left-span'>с WELBEX</span></h3>
        <p className="main-left-text">Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="main-right">
        <h3 className="main-right-title">Вместе с <span className="main-right-span">бесплатной <br /> консультацией</span> мы дарим:</h3>
        <div className="main-right-description">
          <div className="main-right-description-item item">
            <h4 className="item-title">Виджеты</h4>
            <p className="item-text">30 готовых решений</p>
          </div>
          <div className="main-right-description-item item">
            <h4 className="item-title">Dashboard</h4>
            <p className="item-text">с показателями вашего бизнеса</p>
          </div>
          <div className="main-right-description-item item">
            <h4 className="item-title">Skype Аудит</h4>
            <p className="item-text">отдела продаж и CRM системы</p>
          </div>
          <div className="main-right-description-item item">
            <h4 className="item-title">35 дней</h4>
            <p className="item-text">использования CRM</p>
          </div>
        </div>
        <Button text={'Получить консультацию'} className={'main-right-btn'}/>
      </div>
    </section>
  )
}

export default Main
