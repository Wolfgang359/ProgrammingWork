import { useState, useEffect } from 'react';
import { API } from '../data/API';
import { InputRow } from '../components/Form/InputRow';

export const GiphySearch = () => {
    const [search, setSearch] = useState('cat');
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleSearch();
    }, []);

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setSearch(value);
    };

    const handleSearch = async () => {
        const results = await API.search(search);
        const { data } = await results.json();
        setItems([...data]);
    };

    return (
        <>
            <h1>Search giphy for {search ? search : '...'}</h1>
            <div className="row my-3">
                <div className="col-10">
                    <InputRow
                        id="search"
                        name="search"
                        value={search}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className="row">
                {items.length > 0 &&
                    items.map((item) => (
                        <div className="col-4 my-3">
                            <img
                                src={item.images.fixed_height.url}
                                alt={item.title}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
};
