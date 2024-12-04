'use server';

import { stepThreeSchema } from '@/schemas';
import { AddDealRoutes, FormErrors } from '@/types';
import { redirect } from 'next/navigation';

export const stepThreeFormAction = (
  prefState: FormErrors | undefined,
  formData: FormData
): FormErrors | undefined => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepThreeSchema.safeParse(data);

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

  redirect(AddDealRoutes.REVIEW_DEAL);
};
