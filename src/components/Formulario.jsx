import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    //opciones para el select
    const opciones = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimientos'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},
    ]

    //utilizar custom hooks
    const [categoria, SelectNoticias] = useSelect('general', opciones);

    //submit al form
    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8  offset-m2"></div>
            <form
                onSubmit={buscarNoticias}
            >
                <h2 className={styles.heading}>Encuentra Noticias por Categorías</h2>

                <SelectNoticias />

                <div className="input-field col s12">
                    <input 
                        type="submit" 
                        className={`btn-large amber darken-2 ${styles['btn-block']}`}
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
 
export default Formulario;