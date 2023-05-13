import { Input, Button } from '../ClientSide'
import { CiSearch } from "react-icons/ci"



export default function Search() {

  return (

    <div className="relative flex w-full gap-2 md:w-max lg:w-[50rem]">
      <Input
        type="search"
        label="Pesquisar"
        className="pr-36"
        size='lg'
        containerProps={{
          className: "min-w-[200px]",
        }}
      />
      <Button size="md" className="!absolute right-1 top-1 rounded">
        <CiSearch/>
      </Button>
    </div>
  )
}