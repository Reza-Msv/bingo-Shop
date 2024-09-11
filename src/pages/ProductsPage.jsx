import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar";
import SearchBox from "../components/SearchBox";

import { fetchData } from "../features/productSlice/productSlice";

import {
  filterProducts,
  getIntialQuery,
  searchProducts,
} from "../helper/helper";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, Loading } = useSelector((store) => store.products);

  const [displeyd, setDispleyd] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setDispleyd(products);

    setQuery(getIntialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDispleyd(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {Loading && <Loader />}
          {displeyd.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <SideBar query={query} setQuery={setQuery} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
