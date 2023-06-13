import { Input, Button } from '../../ClientSide'
import { CiSearch } from "react-icons/ci"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [query, setQuery] = useState('');

  const router = useRouter();
  const submitHandler = (e:any) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (

    <div className="relative flex w-full gap-2 md:w-max lg:w-[30rem]">
      <Input
        type="search"
        label="Pesquisar"
        className="pr-36"
        size='lg'
        onChange= {(e) => setQuery(e.target.value)}
        containerProps={{
          className: "min-w-[200px]",
        }}
      />
      <Link href="../../search">
      <Button size="md" className="!absolute right-1 top-1 rounded" onClick={submitHandler}>
        <CiSearch/>
      </Button>
      </Link>
    </div>
  )
}