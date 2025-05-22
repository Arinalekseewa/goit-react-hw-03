import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
    const handleinputChange = (evt) => {
        onChange(evt.target.value);
    };

    return (
        <label className={styles['search-name']}>
            Find contacts by name
            <input type="text"
                value={value}
                onChange={handleinputChange} />
        </label>
    );
};

export default SearchBox;