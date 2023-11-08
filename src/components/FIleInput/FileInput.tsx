/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikErrors } from 'formik';
import './FileInput.css';

type FileInputType = {
  name: string;
  label: string;
  id: string;
  error?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<{
    name: string;
    email: string;
    whatsApp: string;
  }>>;
};

function FileInput(props: FileInputType) {
  const { id, label, name, error, setFieldValue } = props;

  return (
    <div className="file-field">
      <label className="file-field--label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`file-field--input ${
          error ? 'file-field--input__error' : ''
        }`}
        id={id}
        name={name}
        type="file"
        onChange={(e) =>
          setFieldValue(name, e?.currentTarget?.files?.[0], false)
        }
      ></input>
      <span className="file-field--error">{error}</span>
    </div>
  );
}
export default FileInput;
