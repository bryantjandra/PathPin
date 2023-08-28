import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
// import { Message } from "./Message";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  //   if (!cities.length)
  //     return (
  //       <Message message="Add your first city by clicking on one on the map!" />
  //     );
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
