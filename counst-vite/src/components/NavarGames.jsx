
 function NavarGames() {
  return (
    <main>
    <header>
      <div className="interior">
        <a href="/"className="logo" target="blank"><img src="https://pbs.twimg.com/profile_images/1542894300530413569/uKseC-yt_400x400.jpg" alt="Logo" /></a>
        <nav className="navegacion">
          <ul>
            <li><a href="/" target="blank">Inicio</a></li>
            <li><a href="/juegos" target="blank">juegos</a></li>
            <li className="submenu">
              <a href="https://cristianvasquez13.github.io/links/" target="blank">Productos</a>
              <ul className="hijos">
                <li><a href="">Item1</a></li>
                <li><a href="">Item2</a></li>
                <li><a href="">Item3</a></li>
                <li><a href="">Item4</a></li>
                <li><a href="">Item5</a></li>
              </ul>
            </li>
            <li><a href="https://cristianvasquez13.github.io/links/" target="blank">Contacto</a></li>
            <li><a href="https://cristianvasquez13.github.io/links/" target="blank">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </main>
  )
}


export default NavarGames
