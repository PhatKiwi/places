import React from "react";

import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Jean-Baptiste Emanuel Zorg",
      image:
        "https://i.pinimg.com/originals/2c/4c/25/2c4c259c3b58801be7203e5ec2fd7b65.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
