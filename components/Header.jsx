import { Heart, ShoppingBag, User } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../pages";

export default function Header(props) {
  const user = useContext(UserContext);
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="container grid items-center grid-flow-row-dense grid-cols-2 px-8 py-4 mx-auto gap-y-4 sm:grid-cols-4">
        <div className="text-xl">Hey {user.firstName}</div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Lieblingsprodukt suchen..."
            className="w-full px-4 py-2 bg-gray-100 rounded-md"
          />
        </div>
        <div className="flex items-center justify-end gap-4">
          <User size={24}></User>
          <div className="relative">
            <Heart size={24}></Heart>
            {user != null && <Bubble text={user.wishlistCount}></Bubble>}
          </div>
          <div className="relative">
            <ShoppingBag size={24}></ShoppingBag>
            {user != null && <Bubble text={user.cartSize}></Bubble>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble(props) {
  return (
    <div className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full top-1/2 left-1/2">
      {props.text}
    </div>
  );
}
