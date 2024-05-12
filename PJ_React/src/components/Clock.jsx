import { useState, useEffect, useContext } from "react";
import LanguageContext from "../LenguageContext";

function Clock() {
  const [time, setTime] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2>
      {language === "it" ? "Ora corrente" : "Current time"}:{" "}
      {time.toLocaleTimeString()}
    </h2>
  );
}

export default Clock;
