import { lazy, Suspense } from "preact/compat";

const MainHome = lazy(() => import("../dashboard"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainHome />
    </Suspense>
  );
};

export default Home;
