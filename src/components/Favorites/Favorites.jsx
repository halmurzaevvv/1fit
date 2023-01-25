import React, { useContext, useEffect } from 'react';
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { cartContext } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableContainer } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

export default function Favorites() {
    const { getFavorite, favorite, deleteFavorite } = useContext(cartContext);

    useEffect(() => {
        getFavorite();
    }, []);

    const navigate = useNavigate();

    return (
        <TableContainer component={Paper} className="cart-block">
      <Table
        sx={{ maxWidth: 1000 }}
        aria-label="customized table"
        className="cart-bg"
      >
        <TableBody>
          {favorite?.products.map((row) => (
            <TableRow key={row.item.id}>
              {/* <StyledTableCell align="right">
                <img src={row.item.img} alt="" width={70} height={70} />
              </StyledTableCell> */}
              <StyledTableCell align="right">{row.item.title}</StyledTableCell>
              <StyledTableCell align="right">{row.item.description}</StyledTableCell>
              <StyledTableCell align="right">{row.item.address}</StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right"> {row.item.category}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.subPrice}</StyledTableCell> */}
              <StyledTableCell align="right">
                <Button onClick={() => deleteFavorite(row.item.id)}>
                  DELETE
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )




}