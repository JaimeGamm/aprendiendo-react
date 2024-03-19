import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts.js";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };
  //para recupera la cita de la pagina
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
