import { useCities } from "../contexts/ContextCities.jsx";
import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";
// import PropTypes from "prop-types";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add first data by clicking on a type on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
