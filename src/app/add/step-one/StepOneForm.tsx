'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/Submit';

export default function StepOneForm() {
  return (
    <form className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Name"
          id="name"
          type="text"
          required
        />
        <Input
          label="Link"
          id="link"
          type="text"
          required
          description='Must start with "https:// or "http://".'
          pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
