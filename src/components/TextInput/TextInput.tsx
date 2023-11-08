import { Field } from 'formik';
import './TextInput.css';

type TextInputType = {
  name: string;
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  error?: string;
};

function TextInput(props: TextInputType) {
  const { id, label, type, name, placeholder, error } = props;
  return (
    <div className="text-field">
      <label className="text-field--label" htmlFor={id}>
        {label}
      </label>
      <Field
        className={`text-field--input ${
          error ? 'text-field--input__error' : ''
        }`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      ></Field>
      <span className="text-field--error">{error}</span>
    </div>
  );
}
export default TextInput;
