import '../assets/style/style.css'

 function Cabecera() {
  return (
    <header className="bg_animate">
      

    <section className="banner contenedor">
        <section className="banner_title">
            <h2>Necesitas cuentas <br/> o aprender a jugar?</h2>
            <a href="#" className="llamanos">Llamanos ya!</a>
        </section>
        <div className="banner_img">
            <img src="https://i.pinimg.com/originals/10/df/51/10df51963b6108f8fc7fab12cd955daa.gif" alt="" />
        </div>
    </section>

    <div className="burbujas">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
    </div>
</header>
  )
}
export default Cabecera