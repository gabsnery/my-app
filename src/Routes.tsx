import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ItemListPage } from "pages";

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>carregando</div>}>
      <Routes>
          <Route path="/" element={<ItemListPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
