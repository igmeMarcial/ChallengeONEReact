import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "../Pages/DefaultPage";
import Home from "../Pages/Home";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewCategory from "../components/form/NewCategory";

const MyWeb = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />

            {/* <Route path="add-video" element={<PaginaNuevoVideo />} />
            <Route path="watch-video/:id" element={<WatchVideo />} />
            <Route path="categoria/:categoria" element={<Categorias />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="copyright" element={<SeccionCopyright />} /> */}
            {/* <Route
              path="edit-delete-videos"
              element={<EditDeleteVideoPage />}
            />
            <Route path="no-existe-data" element={<NoExisteData />} />
            <Route path="editar-video/:id" element={<EditarVideo />} /> */}
            {/* <Route path="*" element={<Error404 />} /> */}
          </Route>
          <Route path="/add-video" element={<Form />} />
          <Route path="/add-category" element={<NewCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default MyWeb;
