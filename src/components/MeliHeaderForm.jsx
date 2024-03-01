import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const MeliHeaderForm = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { searchText , onInputChange} = useForm({
        searchText: ''
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if (searchText.trim().length <= 1) return;

        location.pathname = '/';
        navigate(`/?q=${searchText.toLowerCase().trim()}`);
    }

    return (
        <form onSubmit={onSearchSubmit}>
            <input 
                type="text"
                placeholder="Search a product"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
            />

            <button
                className='btn search ms-2'
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}
