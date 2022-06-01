import { Heart, ShoppingBag, User } from "phosphor-react";

export default function Header(props) {
  return (
    <div className="bg-white z-10 sticky top-0 border-b border-gray-100">
      <div className="container grid grid-cols-4 items-center px-8 py-4 mx-auto">
        <div>Hey ?</div>
        <div className="col-span-2 mx-auto">
          <input
            type="text"
            placeholder="Lieblingsprodukt suchen..."
            className="px-4 py-2 bg-gray-100 rounded-md"
          />
        </div>
        <div className="flex items-center justify-end gap-4">
        <User size={24}></User>
          <div className="relative">
            <Heart size={24}></Heart>
            {"?" != null && <Bubble text="?"></Bubble>}
          </div>
          <div className="relative">
            <ShoppingBag size={24}></ShoppingBag>
            {"?" != null && <Bubble text="?"></Bubble>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble(props) {
  return (
    <div className="absolute top-1/2 left-1/2 w-4 h-4 text-xs text-white flex items-center justify-center rounded-full bg-red-600">
      {props.text}
    </div>
  );
}
