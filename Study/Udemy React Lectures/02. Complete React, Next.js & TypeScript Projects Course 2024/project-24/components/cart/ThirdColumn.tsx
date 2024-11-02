'use client';

import { useState } from 'react';

import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';

import SelectProductAmount from '../single-product/SelectProductAmount';
import { Mode } from '../single-product/SelectProductAmount';

import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';

import { useToast } from '@/hooks/use-toast';

const ThirdColumn = ({ quantity, id }: { quantity: number; id: string }) => {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  // 수량 변경 시 이벤트 처리
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);

    toast({ description: '⏰ Calculating...' });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });

    setAmount(value);
    toast({ description: result.message });

    setIsLoading(false);
  };

  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' className='mt-4' text='remove' />
      </FormContainer>
    </div>
  );
};

export default ThirdColumn;
