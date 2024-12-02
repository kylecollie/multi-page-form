'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/Submit';

export default function StepTwoForm() {
  return (
    <form className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Coupon Code"
          id="code"
          type="text"
          required
          minLength={5}
        />
        <Input
          label="Discount (%)"
          id="discount"
          type="number"
          required
          min={1}
          max={100}
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
