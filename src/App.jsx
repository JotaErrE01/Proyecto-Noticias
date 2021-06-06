import { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";
import ConsultarAPI from "./helpers/ConsultarAPI";

function App() {

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('');

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {

    ConsultarAPI(categoria)
      .then(setNoticias);

  }, [categoria]);

  return (
    <Fragment>

    <Header 
      titulo='Buscador de Noticias'
    />

    <div className="container white">
      <Formulario 
        setCategoria={setCategoria}
      />
    </div>

    <ListadoNoticias 
      noticias={noticias}
    />

    </Fragment>

  );
}

export default App;