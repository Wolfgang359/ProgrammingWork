export const InputRow = ({ value, id, name, handleChange, labelText }) => (
    <div className="form-row">
        <label htmlFor={id}>{labelText}</label>
        <input
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
            className="form-control"
        />
    </div>
);
