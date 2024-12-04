'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/Submit';

export default function StepThreeForm() {
  return (
    <form className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Contact Name"
          id="contactName"
          type="text"
          required
          minLength={5}
        />
        <Input
          label="Contact Email"
          id="contactEmail"
          type="email"
          required
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
