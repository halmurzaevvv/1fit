import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Map from "../Map/Map";
import { Pagination, InputBase } from "@mui/material";
import { productContext } from "../Contexts/OutContext";
import StudioCard from "./StudioCard";

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
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
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
        </Box>

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
            width: "40%",
            // height: "100vh",
            position: "sticky",
            bottom: "0px",
            right: "0px",
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
