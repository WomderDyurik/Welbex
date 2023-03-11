import './index.scss'

function Header() {
  const links = [
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
      name: 'Кейсы',
      path: '/',
    },
    {
      name: 'Сертификаты',
      path: '/',
    },
  ]
  return (
    <header className="header">
      <a href='/' className="header-logo">
        <img src="/svg/logo.svg" alt="logo"/>
        <p className="header-logo-text">крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </a>
      <nav className="header-nav">
        {
          links.map(el => <a href={el.path} key={el.name} className="header-nav-item">{el.name}</a>)
        }
      </nav>
      <div className="header-contacts">
        <a href='tel:+7 555 555-55-55' className="header-phone">
          +7 555 555-55-55
        </a>
        <div className="header-social">
          <a href='/' className="header-social-item">
            <img src="/svg/telegram.svg" alt="telegram"/>
          </a>
          <a href='/' className="header-social-item">
          <img src="/svg/phone.svg" alt="phone" />
          </a>
          <a href='/' className="header-social-item">
          <img src="/svg/whatsapp.svg" alt="whatsapp"/>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
