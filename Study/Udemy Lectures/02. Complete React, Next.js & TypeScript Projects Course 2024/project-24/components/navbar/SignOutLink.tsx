'use client';

import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      description: 'Logout Successful!',
    });
  };

  return (
    <SignOutButton redirectUrl="/">
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
