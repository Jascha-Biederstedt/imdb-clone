import React from 'react';
import Image from 'next/image';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';

import HeaderIcon from './HeaderIcon';

const Header = () => {
  return (
    <div>
      <div>
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Header;
