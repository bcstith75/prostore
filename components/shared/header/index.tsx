
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

import Logo from '@/public/images/logo.svg'

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return ( 
  <header className="w-full border-b">
    <div className="wrapper flex-between">
      <div className="flex-start">
        <Link href='/' className='flex-start'>
          <Image src={Logo} width={48} height={48}  alt="Main Logo" priority={true} className=""/>
          <span className='hidden font-bold text-2xl ml-3 lg:block'>{APP_NAME}</span>
        </Link>
      </div>
   
      <Menu />
    </div>
  </header> 
  );
}
 
export default Header;