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
}: Props) => {
  return (
    <Card className='flex flex-col items-center text-center'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className='pb-6'>
            <strong className='text-5xl'>
              <span className='text-3xl'>$</span>
              {check === 'checked' ? annualPrice : monthlyPrice}
            </strong>
          </div>
          <div className='flex flex-col gap-4'>
            <p>
              {storage} {storageType} Storage
            </p>
            <p>{users} Users Allowed</p>
            <p>
              Send up to {sendAmount} {sendType}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>Learn More</Button>
      </CardFooter>
    </Card>
  );
};
