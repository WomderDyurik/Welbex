import './index.scss'

function Footer() {
  const links = [
    {
      name: 'Расчёт стоимости',
      path: '/',
    },
    {
      name: 'Услуги',
      path: '/',
    },
    {
      name: 'Виджеты',
      path: '/',
    },
    {
      name: 'Интеграции',
      path: '/',
    },
    {
      name: 'Наши клиенты',
      path: '/',
    },
    {
      name: 'Кейсы',
      path: '/',
    },
    {
      name: 'Благодарственные письма',
      path: '/',
    },
    {
      name: 'Сертификаты',
      path: '/',
    },
    {
      name: 'Блог на Youtube',
      path: '/',
    },
    {
      name: 'Вопрос / Ответ',
      path: '/',
    },
  ]
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-column-title">О компании</h3>
            <a href="/" className="footer-column-link">Партнёрская программа</a>
            <a href="/" className="footer-column-link">Вакансии</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-column-title">Меню</h3>
            <div className="footer-column-links">
            {
          links.map(el => <a href={el.path} key={el.name} className="footer-column-link">{el.name}</a>)
        }
          </div>
        </div>
        <div className="footer-contacts">
          <h3 className="footer-column-title">Контакты</h3>
          <a href='tel:+7 555 555-55-55' className="footer-contacts-phone">
              +7 555 555-55-55
          </a>
          <div className="footer-social">
            <a href='/' className="footer-social-item">
              <img src="/svg/telegram.svg" alt="telegram"/>
            </a>
            <a href='/' className="footer-social-item">
              <img src="/svg/phone.svg" alt="phone" />
            </a>
            <a href='/' className="footer-social-item">
              <img src="/svg/whatsapp.svg" alt="whatsapp"/>
            </a>
          </div>
          <a target='_blank' href='https://yandex.ru/maps/-/CCUKvWTMwB' className="footer-contacts-address">
            Москва, Путевой проезд 3с1, к 902
          </a>
        </div>
      </div>
      <div className="footer-copyrights">
        <p className="footer-copyrights-text">©WELBEX 2022. Все права защищены.</p>
        <a href='/' className="footer-copyrights-link">Политика конфиденциальности</a>
      </div>
    </footer>
  )
}

export default Footer
