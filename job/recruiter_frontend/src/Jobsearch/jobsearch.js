import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Joblist from "./Joblist";

const jobsearch = () => {
  return (
    <main>
      <Searchbar />
      <Joblist />
    </main>
  );
};

export default jobsearch;
