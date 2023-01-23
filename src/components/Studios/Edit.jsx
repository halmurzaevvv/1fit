import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../Contexts/OutContext';


const Edit = () => {
    const {saveEditStudio, oneProduct, getOneProduct } = useContext(productContext)
    const navigate = useNavigate()
    const params = useParams()

    const [product, setProduct] = useState(oneProduct)

    useEffect(() => {
        getOneProduct(params.id)
    }, [])



		useEffect(() => {
			setProduct(oneProduct)
		}, [oneProduct])

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
					value={product.address || ""}
					onChange={handleInp}
					name="address"
					id="outlined-basic"
					label="Addres"
					variant="outlined"
				/>
				<TextField
					value={product.description || ""}
					onChange={handleInp}
					name="description"
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
					value={product.category || ""}
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