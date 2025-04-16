import { DesignSystemProvider, Field } from '@strapi/design-system';

import { type OembedField } from '@/shared/types/oembed-field';

import InputEmptyButton from '../InputEmptyButton';
import InputOembedCard from '../InputOembedCard';

export type InputCallback = (entry: OembedField | null) => void;

export type InputProps = {
  name: string;
  error: any;
  label: any;
  onChange: (event: {
    target: {
      name: string;
      value: OembedField | null;
    };
  }) => void;
  value: OembedField | null;
};

export default function Input({ error = undefined, name, label, onChange, value }: InputProps) {
  const hasValue = !!value?.url && !!value?.oembed;

  const handleImport: InputCallback = (data: OembedField | null) => {
    onChange({
      target: {
        name,
        value: data,
      },
    });
  };

  return (
    <DesignSystemProvider>
      <Field.Root name="oembed" error={error}>
        <Field.Label>{label}</Field.Label>

        {!hasValue && <InputEmptyButton onImport={handleImport} />}
        {hasValue && <InputOembedCard entry={value} onImport={handleImport} />}

        <Field.Hint />
        <Field.Error />
      </Field.Root>
    </DesignSystemProvider>
  );
}
