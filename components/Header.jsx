import { Heart, ShoppingBag, SignIn, SignOut, User } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../pages";

export default function Header(props) {
  const [user, service] = useContext(UserContext);

  function onSignIn() {
    const password = prompt("Passwort");
    service({ type: "SIGN_IN", password });
  }

  function onSignOut() {
    service({ type: "SIGN_OUT" });
  }

  return (
    <div className="bg-white z-10 sticky top-0 border-b border-gray-100">
      <div className="container grid grid-cols-4 items-center px-8 py-4 mx-auto">
        <div>Hey {user?.firstName}</div>
        <div className="col-span-2 mx-auto">
          <input
            type="text"
            placeholder="Lieblingsprodukt suchen..."
            className="px-4 py-2 bg-gray-100 rounded-md"
          />
        </div>
        <div className="flex items-center justify-end gap-4">
          <button onClick={user == null ? onSignIn : onSignOut}>
            {user == null ? (
              <SignIn size={24}></SignIn>
            ) : (
              <SignOut size={24}></SignOut>
            )}
          </button>
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
    <div className="absolute top-1/2 left-1/2 w-4 h-4 text-xs text-white flex items-center justify-center rounded-full bg-red-600">
      {props.text}
    </div>
  );
}
