/* eslint-disable react/prop-types */
import './FormInput.scss';

const FormInput = ({ label, inputOptions }) => (
  <div className="group">
    <input className="form-input" {...inputOptions} required />
    {label && (
      <label
        htmlFor={inputOptions.name}
        className={`${
          inputOptions.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
