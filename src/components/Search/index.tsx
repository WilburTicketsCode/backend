import { Input, Button } from '../ClientSide'
import { CiSearch } from "react-icons/ci"



export default function Search() {

  return (

    <div className="relative flex w-full gap-2 md:w-max">
      <Input
        type="search"
        label="Pesquisar"
        className="pr-20"
        containerProps={{
          className: "min-w-[288px]",
        }}
      />
      <Button size="sm" className="!absolute right-1 top-1 rounded">
        <CiSearch/>
      </Button>
    </div>
  )
}