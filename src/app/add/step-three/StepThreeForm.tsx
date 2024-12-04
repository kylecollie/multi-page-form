'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/Submit';
import { stepThreeFormAction } from './actions';
import { useFormState } from 'react-dom';

const initialState: FormErrors = {};

export default function StepThreeForm() {
  const [serverErrors, formAction] = useFormState(
    stepThreeFormAction,
    initialState
  );
  return (
    <form
      action={formAction}
      className="flex flex-1 flex-col items-center"
    >
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Contact Name"
          id="contactName"
          type="text"
          required
          errorMsg={serverErrors?.contactName}
          minLength={5}
        />
        <Input
          label="Contact Email"
          id="contactEmail"
          type="email"
          required
          errorMsg={serverErrors?.contactEmail}
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
