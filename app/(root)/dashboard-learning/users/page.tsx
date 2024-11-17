import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <ul>
        <li> <Link href="/dashboard-learning/users/1">User detail 1</Link> </li>
        <li> <Link href="/dashboard-learning/users/2">User detail 2</Link> </li>
        <li> <Link href="/dashboard-learning/users/3">User detail 3</Link> </li>
      </ul>
    </div>
  );
};

export default Users;
