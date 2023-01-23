import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../Contexts/OutContext';


const Edit = () => {
    const {saveEditStudio, getProducts, getCategories} = useContext(productContext)
    const navigate = useNavigate()
    const params = useParams()

    const [product, setProduct] = useState(getCategories)

    useEffect(() => {
        getProducts(params.id)
    }, [])

    useEffect(() => {
        setProduct(getCategories)
    }, [getCategories])

    const handleInp = (e) => {
        if (e.target.name === "price") {
			let obj = { ...product, [e.target.name]: Number(e.target.value) }
			setProduct(obj)
		} else {
			let obj = { ...product, [e.target.name]: e.target.value }
			setProduct(obj)
		}
    }
    return (
        <div className="edit">
			<Box
				className="edit-block"
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<Typography variant="h5" className="text-title-edit">
					Edit Product Panel
				</Typography>
				<TextField
					value={product.title || ""}
					onChange={handleInp}
					name="title"
					id="outlined-basic"
					label="Title"
					variant="outlined"
				/>
				<TextField
					value={product.img || ""}
					onChange={handleInp}
					name="img"
					id="outlined-basic"
					label="Image"
					variant="outlined"
				/>
				<TextField
					value={product.desc || ""}
					onChange={handleInp}
					name="desc"
					id="outlined-basic"
					label="Description"
					variant="outlined"
				/>
				<TextField
					value={product.price || ""}
					onChange={handleInp}
					name="price"
					id="outlined-basic"
					label="Price"
					variant="outlined"
				/>
				<TextField
					value={product.type || ""}
					onChange={handleInp}
					name="type"
					id="outlined-basic"
					label="Type"
					variant="outlined"
				/>
				<Button
					onClick={() => {
						saveEditStudio(product, params.id)
						navigate("/products")
					}}
					variant="outlined"
				>
					Edit
				</Button>
			</Box>
		</div>
    );
};

export default Edit;