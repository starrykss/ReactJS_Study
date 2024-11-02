'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { adminLinks } from '@/utils/links';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathName === link.href;
        const variant = isActivePage ? 'default' : 'ghost';

        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
          >
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
