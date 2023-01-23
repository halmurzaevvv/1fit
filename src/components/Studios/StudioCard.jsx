import React, { useContext } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../Contexts/OutContext";
import { Box, Grid, Paper, Item, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const StudioCard = ({ item }) => {
    const { deleteProduct, saveEditStudio } = useContext(productContext);
	const navigate = useNavigate()

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <Box
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
							pr: 50,
							// pb: 8,
							display: "inline-block",
						}}
					>
						<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
              <Grid item xs={12}>
                <Item>
						<CardMedia
							sx={{
								height: "210px",
								borderRadius: "20px",
							}}
							component="img"
							alt="green iguana"
							height="140"
							image={item.image}
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
								{item.title}
							</Typography>
						</CardContent>
						<CardActions>
							<Typography variant="h6">⭐4.9</Typography>
							<Typography
								sx={{
									fontSize: "18px",
									whiteSpace: "nowrap" /* Запрещаем перенос строк */,
									overflow:
										"hidden" /* Обрезаем все, что не помещается в область */,
									padding: "5px" /* Поля вокруг текста */,
									textOverflow: "ellipsis" /* Добавляем многоточие */,
								}}
								variant="h6"
								color="text.secondary"
							>
								{item.address}
							</Typography>
              <Typography
			 sx={{
				height: "100px",
				fontSize: "18px",
				whiteSpace: "nowrap" /* Запрещаем перенос строк */,
				overflow:
					"hidden" /* Обрезаем все, что не помещается в область */,
				padding: "5px" /* Поля вокруг текста */,
				textOverflow: "ellipsis" /* Добавляем многоточие */,
			}} 
			  variant="h6">{item.description}</Typography>
			  <Button size="small" onClick={() => deleteProduct(item.id)}>Delete</Button>
			  <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
						</CardActions>
            </Item>
            </Grid>
            </Grid>
					</Box>
				</Box>
        </div>
    );
};

export default StudioCard;