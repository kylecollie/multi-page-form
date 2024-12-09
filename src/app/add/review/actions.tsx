'use server';

import { NewDealType, stepOneSchema } from '@/schemas';
import { AddDealRoutes } from '@/types';

export type SubmitDealActionReturnType = {
  redirect?: AddDealRoutes;
  errorMsg?: string;
  success?: boolean;
};

export const submitDealAction = async (
  deal: NewDealType
): Promise<SubmitDealActionReturnType> => {
  const stepOneValidated = await stepOneSchema.safeParseAsync(deal);
  if (!stepOneValidated.success) {
    return {
      redirect: AddDealRoutes.PRODUCT_INFO,
      errorMsg: 'Please validate product info',
    };
  }

  const stepTwoValidated = await stepOneSchema.safeParseAsync(deal);
  if (!stepTwoValidated.success) {
    return {
      redirect: AddDealRoutes.COUPON_DETAILS,
      errorMsg: 'Please validate coupon details',
    };
  }

  const stepThreeValidated = await stepOneSchema.safeParseAsync(deal);
  if (!stepThreeValidated.success) {
    return {
      redirect: AddDealRoutes.CONTACT_INFO,
      errorMsg: 'Please validate contact info',
    };
  }

  return {
    success: true,
    redirect: AddDealRoutes.PRODUCT_INFO,
  };
};
