import React from "react";
import FormSendAndShowText from "../common/FormSendAndShowText";
import { PropertyUserProvider } from "../core/PropertyUserProvider";
import SimpleIndex from "./SimpleIndex";
import FilterStatus from "./FilterStatus";
import UniqueIndex from "./UniqueIndex";
import { PropertyOtherUsersProvider } from "../core/PropertyOtherUsersProvider";
import { UniqueIndexProvider } from "../core/UniqueIndexProvider";

export default function StatisticOfUser() {
  return (
    <div className="w-1/2">
      <PropertyUserProvider>
        <SimpleIndex nameProperty="score" />
      </PropertyUserProvider>

      <PropertyUserProvider>
        <SimpleIndex nameProperty="mistruth" />
      </PropertyUserProvider>

      <PropertyOtherUsersProvider>
        <PropertyUserProvider>
          <UniqueIndexProvider>
            <UniqueIndex />
          </UniqueIndexProvider>
        </PropertyUserProvider>
      </PropertyOtherUsersProvider>

      <PropertyUserProvider>
        <FilterStatus />
        <FormSendAndShowText nameProperty="filter" />
      </PropertyUserProvider>
    </div>
  );
}
