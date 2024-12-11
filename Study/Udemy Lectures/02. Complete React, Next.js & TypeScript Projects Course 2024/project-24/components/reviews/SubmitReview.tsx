'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

import { createReviewAction } from '@/utils/actions';

import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RatingInput from '@/components/reviews/RatingInput';

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <Button
        size='lg'
        className='capitalize'
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        Leave Review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || 'user'}
            />
            <input
              type='hidden'
              name='authorImageUrl'
              value={user?.imageUrl || ''}
            />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='feedback'
              defaultValue='Outstanding product! 👍'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SubmitReview;
