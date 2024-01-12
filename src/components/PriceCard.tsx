import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  annualPrice: number;
  monthlyPrice: number;
  storage: number;
  storageType: 'GB' | 'TB';
  users: number;
  sendAmount: number;
  sendType: 'GB' | 'TB';
  check: 'unchecked' | 'checked' | undefined;
  style: 'empty' | 'filled';
};

export const PriceCard = ({
  title,
  annualPrice,
  monthlyPrice,
  storage,
  storageType,
  users,
  sendAmount,
  sendType,
  check,
  style,
}: Props) => {
  return (
    <Card
      className={`flex flex-col items-center text-center ${
        style === 'filled'
          ? 'bg-gradient-to-br from-[--clr-gradient-1] to-[--clr-gradient-2]'
          : 'bg-white'
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`${
            style === 'filled'
              ? 'text-[--clr-neutral-1]'
              : 'text-[--clr-neutral-4]'
          }`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='w-full'>
        <div
          className={`${
            style === 'filled'
              ? 'text-[--clr-neutral-1]'
              : 'text-[--clr-neutral-4]'
          }`}
        >
          <div className='pb-8'>
            <strong className='text-7xl relative'>
              <span className='text-3xl absolute -left-5 top-1/3'>$</span>
              {check === 'checked' ? annualPrice : monthlyPrice}
            </strong>
          </div>
          <div className='flex flex-col gap-4 divide-y [&>*]:pt-3 border-t border-b font-bold'>
            <p>
              {storage} {storageType} Storage
            </p>
            <p>{users} Users Allowed</p>
            <p className='pb-4'>
              Send up to {sendAmount} {sendType}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className='w-full pb-8'>
        {style === 'empty' ? (
          <Button variant='empty' size={'lg'} className='w-full'>
            Learn More
          </Button>
        ) : (
          <Button variant='filled' size={'lg'} className='w-full'>
            Learn More
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
