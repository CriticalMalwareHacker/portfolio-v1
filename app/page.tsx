import { GridCards } from "@/components/misc/(home)/grid-cards";
import { Intro } from "@/components/misc/(home)/intro";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <h1 className="mt-0 mb-1 text-xl font-medium dark:text-white">
        Tanay Kumar
      </h1>
      <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
        IT Undergrad & Developer, Mumbai
      </div>
      <Intro />
      <GridCards />
    </section>
  );
};

export default Home;