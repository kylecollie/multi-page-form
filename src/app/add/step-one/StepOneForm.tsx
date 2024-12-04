'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/Submit';
import { FormErrors } from '@/types';
import { useFormState } from 'react-dom';
import { stepOneFormAction } from './actions';

const initialState: FormErrors = {};

export default function StepOneForm() {
  const [serverErrors, formAction] = useFormState(
    stepOneFormAction,
    initialState
  );
  return (
    <form
      action={formAction}
      className="flex flex-1 flex-col items-center"
    >
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Name"
          id="name"
          type="text"
          min={2}
          required
          errorMsg={serverErrors?.name}
        />
        <Input
          label="Link"
          id="link"
          type="text"
          required
          errorMsg={serverErrors?.link}
          description='Must start with "https:// or "http://".'
          pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
