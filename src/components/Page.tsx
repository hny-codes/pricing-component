import { Switch } from '@/components/ui/switch';
import { PriceCard } from './PriceCard';
import { useState } from 'react';

const Page = () => {
  const [check, setCheck] = useState<'unchecked' | 'checked'>('checked');

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const result = e.currentTarget.getAttribute('data-state');

    // Null guard
    if (
      result &&
      (result == 'unchecked' || result == 'checked') &&
      result !== undefined
    ) {
      setCheck(result);
    }
  };

  return (
    <main className='px-6 my-20'>
      <section className='flex flex-col justify-center items-center pb-16 sm:pb-8'>
        <h1 className='text-4xl font-bold text-[--clr-neutral-4]'>
          Our Pricing
        </h1>
        <div data-test='switch-container' className='flex gap-4 text-[--clr-neutral-3] py-6'>
          <p>Annually</p>
          <Switch data-test='switch' onClick={handleClick} />
          <p>Monthly</p>
        </div>
      </section>
      <div className='flex flex-col gap-8 sm:flex-row sm:justify-center sm:gap-0'>
        <PriceCard
          title='Basic'
          annualPrice={199.99}
          monthlyPrice={19.99}
          storage={500}
          storageType='GB'
          users={2}
          sendAmount={3}
          sendType='GB'
          check={check}
          style='empty'
        />
        <PriceCard
          title='Professional'
          annualPrice={249.99}
          monthlyPrice={24.99}
          storage={1}
          storageType='TB'
          users={5}
          sendAmount={10}
          sendType='GB'
          check={check}
          style='filled'
        />
        <PriceCard
          title='Master'
          annualPrice={399.99}
          monthlyPrice={39.99}
          storage={2}
          storageType='TB'
          users={10}
          sendAmount={20}
          sendType='GB'
          check={check}
          style='empty'
        />
      </div>
    </main>
  );
};

export default Page;
