function printId(id: number | string) {
  console.log(id);
}

///

function createFlag(type: "sale" | "recommended" | "bestseller") {
  const flag = document.createElement("div");
  flag.classList.add("flag", `flag--${type}`);

  return flag;
}

///

function getAppType() {
  if (Math.random() > 0.5) {
    return "iOS";
  } else {
    return "Android";
  }
}

///

type NumberOrString = number | string;

function printId2(id: NumberOrString) {
  console.log(id);
}

///

type UserRole = "admin" | "editor" | "default";

function hasAccess(role: UserRole) {}

export {};
