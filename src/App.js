import './App.css';
import {Testimonio} from './componentes/testimonios';

function App() {
  return (
    <div className="App">
      <div className='contenedor-pricipal'>
        <h1>Ésto es lo que dicen nuestros alumnos de freeCodeCamp</h1>
        <Testimonio 
          name='Yesenia Marcano'
          country='Trinidad y Tobago'
          position='Vendedora'
          company='Mall Falls'
          text='Gracias a freeCodeCamp me va muy bien aqui en trinidad y tobago, echandole full bolas con estos negritos del coño'
          image='1'/>
        <Testimonio 
          name='Marcos Matos'
          country='Peru'
          position='Junior Dev'
          company='Pepe Developers LTD'
          text='Me tuve que regresar pa esta verga a echarle bolas porque alla se iba mucho la luz, la de arriba es como medio loca'
          image='2'/>
        <Testimonio 
          name='Jose Guanipa'
          country='Peru'
          position='Operador de Maquina'
          company='Garmin Trading'
          text='Ando cogiendo peruanas a diestra y siniestra, si tienen bendiciones mejor todavia, son como el combo 2 hamburguesas por 1 dolar, no las pelo'
          image='3'/>

      </div>
    </div>
  );
}

export default App;
