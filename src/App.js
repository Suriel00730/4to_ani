import React from 'react';
import Acronym from './components/Acronym';
import Heart from './components/Heart';
import index from './index.css';

function App() {
  return (
    <div className="app">

      <div className="body__header">Mi niña bonita</div>

      <div className="acronym_top_container">
        <Acronym initial="I" attribute="Mi niña bonita"
          paragraph="Porque eres muy linda, siempre fuíste delicada, tan femenina y quiero protegerte por siempre." />
        <Acronym initial="S" attribute="Mi amor"
          paragraph="Porque me enseñáste lo que es amar y ser amado, te necesito en mi vida para estar completo."/>
        <Acronym initial="M" attribute="Mi princesa"
          paragraph="Porque eres esa persona perfecta para mí y un día te sacaré de allá y te llevaré conmigo."/>
        <Acronym initial="E" attribute="Mi chiquita"
          paragraph="Porque eres muy adorable, dulce, tierna, cursi, romántica, eres la invasora de mis pensamientos."/>
        <Acronym initial="I" attribute="Mi tesoro"
          paragraph="Porque eres lo más valioso que tengo y no te cambio por nada, eres mi prioridad después de Dios."/>
        <Acronym initial="R" attribute="Mi amiga"
          paragraph="Porque eres mi confidente, te he contado todo de mi vida y siempre serás esa persona que mejor me conoce."/>
        <Acronym initial="I" attribute="Mi compañera"
          paragraph="Porque estás conmigo en cada momento y sabes como hacer que me sienta bien por eso te quiero en este viaje."/>
      </div>

      <div className="heart__container">
        <Heart />
        <Heart />
        <Heart />
        <Heart />
        <Heart />
      </div>
      
      <div className="feeling">
        <p>
          Hola mi niña bonita, primeo que nada quiero decirte 
          que te amo mucho y espero que nunca te canses de 
          escucharlo de mi boca porque pienso decírtelo por
          el resto de nuestras vidas.
        </p>
        <p><br />
          Puede que estos no sean nuestros mejores momentos,
          pero se que vendrán cosas muy buenas para nosotros.
        </p>
        <p><br />
          No dejo de pensar en aquel día en que conocí a una 
          niña vegana con muchas cejas y pestañas, con su falda
          blanca, lista para ensuciarla. Persibí cierto cariño
          aquel día, una niña dulce, amable, delicada pero al 
          mismo tiempo fuerte y que sabe muy bien como dar su 
          atención.
        </p>
        <p><br />
          Son algunas de las muchas cualidades que veo en ti, 
          tu delicadeza y feminidad me cautiva cada día y hoy 
          me siento muy afortunado de llevar cuatro años sabiendo
          que tal niña siente algo lindo por mí, porque para mí 
          te mereces todo, y aprovecho para decírte que me esforzare
          por darte todo eso que sé que te mereces.
        </p>
        <p><br />
          Me haz enseñado lo bueno que puede ser un abrazo, 
          lo que es duras horas hablando por llamada y sentir
          como que el tiempo se paraliza, lo que es mirar a 
          tu alrededor y ver tu cara en cada lugar y tener tu 
          nombre inscrito en mi mente. Ahora puedo decír que 
          se siente hacer planes a largo plazo que ronden en 
          en sola persona, me haz enseñado tanto que puedo 
          decir que haz sido mi mejor maestra.
        </p> 
        <p><br />
          Mi intención no es aburrírte con mis palabras, quiero 
          concluír diciéndote que eres lo mejor que tengo 
          mi tesoro y te cuidaré como tal, espero que este día 
          sea muy especial para ti y recuerdes todo lo que hemos
          vivido juntos si quieres escuchar más o recordar 
          junto conmigo llamame esta noche.
        </p>
        <h4><br/>Eres lo que nunca esperé, pero siempre soñé.</h4>
      </div>

    </div>
  );
}

export default App;
