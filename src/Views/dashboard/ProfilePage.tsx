import React from "react";
import { UserContext } from "../../controllers/contexts";

export default function ProfilePage() {
  const user = React.useContext(UserContext);
  return (
    <>
      {user.email || "hi"}
      {user.bankInfo || "hi"}
      {user.cashBalance || "hi"}
      {user.sharesBalance || "hi"}
    </>
  );
}
