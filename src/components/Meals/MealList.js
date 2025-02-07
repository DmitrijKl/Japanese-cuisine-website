import React from "react";
import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наоми"',
    description: "Сыр филадельфия, куриное филе, масаго,помидор,огурец,кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососе",
    description: "Рис, лосось, соус спайся",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суши с угрем",
    description: "Угорь копченый, соус унаги, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: "Салат с лососем",
    description:
      "Рис, лосось, огурец, чука, нори, стружка тунда, ореховый соус",
    price: 7.99,
  },
];

function MealList() {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default MealList;
