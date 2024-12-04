'use server';

import { stepTwoSchema } from '@/schemas';
import { AddDealRoutes, FormErrors } from '@/types';
import { redirect } from 'next/navigation';

export const stepTwoFormAction = (
  prefState: FormErrors | undefined,
  formData: FormData
): FormErrors | undefined => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepTwoSchema.safeParse(data);

  if (!validated.success) {
    const errors = validated.error.issues.reduce(
      (acc: FormErrors, issue) => {
        acc[issue.path[0]] = issue.message;
        return acc;
      },
      {}
    );
    return errors;
  }

  redirect(AddDealRoutes.CONTACT_INFO);
};
