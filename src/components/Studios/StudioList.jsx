// import { Box, Pagination } from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { productContext } from "../Contexts/OutContext";
// import StudioCard from "./StudioCard";

// const StudioList = () => {
// const { getProducts, products, pages } = useContext(productContext);

// const [currentPage, setCurrentPage] = useState(1);
// const [searchParams, setSearchParams] = useSearchParams();

// useEffect(() => {
//   getProducts();
// }, []);

// useEffect(() => {
//   getProducts();
// }, [searchParams]);

// useEffect(() => {
//   setSearchParams({
//     page: currentPage,
//   });
// }, [currentPage]);

// console.log(products);

//   return ( <div>
// <Box>
// ProductList
// {products.map((item) => (
//   <StudioCard key={item.id} item={item} />
// ))}
// </Box>
// <Box>
//   <Pagination
//   count={pages}
//   variant="outlined"
//   color="primary"
//   page={currentPage}
//   onChange={(e, p) => setCurrentPage(p)}
//   />
// </Box>
// </div>
//   );
// };

// export default StudioList;
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { outContext } from "../Contexts/OutContext"
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Map from "../Map/Map";
import { Pagination } from "@mui/material";
import { productContext } from "../Contexts/OutContext";
import StudioCard from "./StudioCard";

// const { fetchByParams } = useContext(productContext);

// const [page, setPage] = useState(1);
// const count = Math.ceil(products.length / 3);

// function currentData() {
//   const begin = (page - 1) * 3;
//   const end = begin + 3;
//   return products.slice(begin, end);
// }

//!-------------------category
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

//!-------------------search
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const StudioList = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const { getProducts, products, pages } = useContext(productContext);

  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const { getStudios, studios, pages } = useContext(outContext)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [searchParams, setSearchParams] = useSearchParams()

  // useEffect(() => {
  // 	getStudios()
  // }, [])

  // useEffect(() => {
  // 	getStudios()
  // }, [searchParams])

  // useEffect(() => {
  // 	setSearchParams({
  // 		page: currentPage,
  // 	})
  // }, [currentPage])

  // console.log(studios)

  return (
    <Box
      sx={{
        // height: "100vh",
        width: "100%",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Box
        sx={{
          pl: 5,
          pr: 5,
          width: "100%",
          height: "180px",
          background: "#fff",
          zIndex: 6,
          position: "fixed",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Box
            sx={{
              mt: 5,
            }}
          >
            <Typography
              sx={{
                mt: 50,
                color: "#3447F6",
                // width: "50%",
                fontWeight: "700",
              }}
              // variant="h6"
              component="span"
            >
              Главная{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
              }}
              component="span"
              color="grey"
            >
              / Залы и студии
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mt: 0,
                // width: "50%",
                fontWeight: "700",
                fontSize: "40px	",
              }}
              component="div"
            >
              Залы и студии{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            mb: 500,
          }}
        >
          <Toolbar component="div" sx={{ flexWrap: "wrap" }}>
            <Box
              sx={{
                width: "20%",
              }}
            >
              <Search
                sx={{
                  border: "1px solid grey",
                  borderRadius: "25px",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "grey" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Поиск…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <FormControl sx={{ m: 1, width: 250 }}>
              <InputLabel sx={{ mt: -1 }} id="demo-multiple-name-label">
                Категории
              </InputLabel>
              <Select
                sx={{
                  borderRadius: "25px",
                  height: "40px",
                }}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* --------------------StudioCart------------------------- */}
        {/* <Box
					sx={{
						// alignItems: "center",
						width: "60%",
						display: "flex",
						justifyContent: "space-evenly",
						flexWrap: "wrap",
					}}
				>
					<Box
						sx={{
							width: "320px",
							pt: 10,
							// pr: 2,
							// pb: 8,
							display: "inline-block",
						}}
					>
						<CardMedia
							sx={{
								height: "210px",
								borderRadius: "20px",
							}}
							component="img"
							alt="green iguana"
							height="140"
							image="https://onefit-static.s3.amazonaws.com/media/fitness/None/fu2d5dcdhxv85jdiundoqfxpg.jpg"
						/>
						<CardContent
							sx={{
								mb: 0,
								pb: 0,
							}}
						>
							<Typography
								sx={{
									fontWeight: "700",
								}}
								gutterBottom
								variant="h5"
								component="div"
							>
								First Fitness
							</Typography>
						</CardContent>
						<CardActions>
							<Typography variant="h6">⭐4.9</Typography>
							<Typography
								sx={{
									fontSize: "18px",
									whiteSpace: "nowrap"  Запрещаем перенос строк ,
									overflow:
										"hidden" Обрезаем все, что не помещается в область ,
									padding: "5px"  Поля вокруг текста ,
									textOverflow: "ellipsis"  Добавляем многоточие ,
								}}
								variant="h6"
								color="text.secondary"
							>
								ул. Муратбаева, 180, 9-й этаж
							</Typography>
						</CardActions>
					</Box>
				</Box> */}

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

        {/* --------------------StudioCart end------------------------- */}

        {/* //!================================Map start=================================== */}
        <Box
          sx={{
            width: "60%",
            height: "480px",
            // display: "flex",
            // backgroundColor: "white",
            position: "sticky",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            bottom: "20px",
            // top: "200px",
          }}
        >
          <Map />
        </Box>
        {/* //!================================Map end=================================== */}
      </Box>
    </Box>
  );
};

export default StudioList;

// Funky Dance Center - это не просто танцевальный центр, это одно из тех немногих мест, где раскрывают таланты. И занимаются здесь раскрытием Ваших тала...
