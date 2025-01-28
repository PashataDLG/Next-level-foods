import Link from "next/link";
import { Suspense } from "react";

import MealsGrid from "../../components/meals/meals-grid";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals that were shared by our community. If you like a meal, you can cook it yourself.',
};

async function Meals() {
  console.log('Fetching meals');
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = async () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself motherfucker. It is
          easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Do not SHARE your shit recipe</Link>
        </p>
      </header>
      <main className={classes.header}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
