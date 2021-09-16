import React from "react";
import Head from "../components/Head";
import * as api from "../api";
import { initializeStore } from "../lib/store";
import { useStore } from "../lib/store";

const Home = () => {
  const { notes } = useStore((state) => state);

  return (
    <>
      <Head title="Home Page" />

      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const zustandStore = initializeStore();

  const { data } = await api.getNotes();

  zustandStore.getState().getNotes(data.notes);

  return {
    props: {
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  };
};
