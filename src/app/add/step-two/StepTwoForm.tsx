'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/Submit';
import { stepTwoFormAction } from './actions';
import { useFormState } from 'react-dom';
import { FormErrors } from '@/types';

const initialState: FormErrors = {};

export default function StepTwoForm() {
  const [serverErrors, formAction] = useFormState(
    stepTwoFormAction,
    initialState
  );
  return (
    <form
      action={formAction}
      className="flex flex-1 flex-col items-center"
    >
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Coupon Code"
          id="coupon"
          type="text"
          required
          errorMsg={serverErrors?.coupon}
          minLength={5}
        />
        <Input
          label="Discount (%)"
          id="discount"
          type="number"
          required
          errorMsg={serverErrors?.discount}
          min={1}
          max={100}
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
