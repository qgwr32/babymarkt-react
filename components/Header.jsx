import { Heart, ShoppingBag, User } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../pages";

export default function Header(props) {
  const user = useContext(UserContext);
  return (
    <div className="bg-white z-10 sticky top-0 border-b border-gray-100">
      <div className="container grid grid-cols-4 items-center px-8 py-4 mx-auto">
        <div>Hey {user.firstName}</div>
        <div className="col-span-2 mx-auto">
          <input
            type="text"
            placeholder="Lieblingsprodukt suchen..."
            className="px-4 py-2 bg-gray-100 rounded-md"
          />
        </div>
        <div className="flex items-center justify-end gap-4">
          <button onClick={() => setUser(user == null ? "Jack" : null)}>
            <User size={24}></User>
          </button>
          <div className="relative">
            <Heart size={24}></Heart>
            {user != null && (
              <div className="absolute top-1/2 left-1/2 w-4 h-4 text-xs text-white flex items-center justify-center rounded-full bg-red-600">
                {user.wishlistCount}
              </div>
            )}
          </div>
          <div className="relative">
            <ShoppingBag size={24}></ShoppingBag>
            {user != null && (
              <div className="absolute top-1/2 left-1/2 w-4 h-4 text-xs text-white flex items-center justify-center rounded-full bg-red-600">
                {user.cartSize}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
