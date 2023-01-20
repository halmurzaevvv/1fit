import { Box, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../Contexts/OutContext";
import StudioCard from "./StudioCard";

const StudioList = () => {
  const { getProducts, products, pages } = useContext(productContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  console.log(products);

  return ( <div>
    <Box>
    ProductList
    {products.map((item) => (
      <StudioCard key={item.id} item={item} />
    ))}
    </Box>
    <Box>
      <Pagination
      count={pages}
      variant="outlined"
      color="primary"
      page={currentPage}
      onChange={(e, p) => setCurrentPage(p)}
      />
    </Box>
  </div>
  );
};

export default StudioList;
