"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

export default function List() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => (
        <Item
          key={membership.organization.id}
          id={membership.organization.id}
          name={membership.organization.name}
          imgUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  );
}
