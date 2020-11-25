import React, { useEffect } from "react";
import {
  usePropertyUser,
  useNamePropertyUserSet
} from "../core/PropertyUserProvider";

export default function UserName() {
  const namePropertyUserSet = useNamePropertyUserSet();
  const name = usePropertyUser();

  useEffect(() => {
    namePropertyUserSet("name");
  });

  return <div className="break-word text-5xl font-bold">{name}</div>;
}
