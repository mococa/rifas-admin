import React, { useEffect, useState } from 'react';

import { Form } from 'components/Form';
import { FormInput } from 'components/FormInput';

import { Input } from '_types/Forms';
import { Button } from 'components/Button';
import { CSSColors } from 'enums/colors';

interface Props {
  fields: Input[];
  onSubmit: (values: unknown) => Promise<void>;
  submitButtonText: string;
  buttonColor?: keyof typeof CSSColors;
}

export const FormCreator: React.FC<Props> = ({
  fields,
  onSubmit,
  submitButtonText,
  buttonColor,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [formFields, setFormFields] = useState<{ [key: string]: string }>(
    fields.reduce(
      (acc, { name, defaultValue }) => ({ ...acc, [name]: defaultValue || '' }),
      {}
    )
  );

  useEffect(() => {
    return () => {
      setSubmitting(false);
    };
  }, []);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form onSubmit={() => null}>
      {fields.map((currInput) => (
        <FormInput
          key={currInput.name}
          type={currInput.type || 'text'}
          label={currInput.label}
          name={currInput.name}
          placeholder={currInput.placeholder || ''}
          value={formFields[currInput.name]}
          onChange={handleOnChange}
          end={currInput.end}
          required={currInput.required}
          pattern={currInput.pattern}
          onClick={() => currInput.onClick && currInput.onClick(formFields)}
        />
      ))}
      <br />
      <Button
        disabled={submitting}
        color={buttonColor}
        onClick={async () => {
          setSubmitting(true);
          onSubmit(formFields).finally(() => {
            setSubmitting(false);
          });
        }}
      >
        {submitButtonText}
      </Button>
    </Form>
  );
};
