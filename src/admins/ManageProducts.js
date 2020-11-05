import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import TableProducts from './TableProducts';
import Modal from "./FormCustom";
import { FetchProductsPageAdmin, CreateProduct, UpdateProduct } from "../actions/ProductsAction";
import { UpdateStateExc } from "../actions/Common";
import { getListProductsPageAdmin, getListStatusProduct, getListTypes, getListBrands , getCategories, getStatusExecute, getCategoryById} from "../selectors/AdminSelectors";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useFormik } from "formik";
import * as Yup from 'yup';

let formik;

function FormProducts(props){

    const dispatch = useDispatch();
    let status = useSelector(state => getStatusExecute(state));
    let cateById = useSelector(state => getCategoryById(state));

    formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: cateById?.name ?? "",
            img : cateById?.img ?? "",
            price : cateById?.price ?? "",
            statusId : cateById?.statusId ?? "",
            typeId : cateById?.typeId ?? "",
            categorieId : cateById?.categorieId ?? "",
            brandId : cateById?.brandId ?? ""

        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            price: Yup.number().min(0).required(),
            typeId: Yup.string().required(),
            categorieId : Yup.string().required(),
            brandId : Yup.string().required(),
            img : Yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            if(status === "create") {
                dispatch(CreateProduct(values));
            }
            if(status === "update"){
                let id = cateById.id;
                dispatch(UpdateProduct(id, values));
            }
            document.getElementById("close-modal").click();
            resetForm();
        }
    });
    const handleChange = (event) => {
        event.preventDefault();
        let files = event.target.files;
        formik.handleChange(event);

    	let reader = new FileReader();
    	reader.readAsDataURL(files[0]);
    	reader.onload = (e) => {
            let value = e.target.result;
            formik.setFieldValue('img',  value);
    	}
    }

    return (
        <form noValidate autoComplete="off" className="row" onSubmit={formik.handleSubmit} >
            <div className="col-6 mt-3">
                <TextField id="outlined-basic" value={formik.values.name} onChange={ formik.handleChange }  name="name" label="Product" variant="outlined" />
                <span className="error-message"> {formik.touched.name && formik.errors.name}</span>
            </div>
            <div className="col-6 mt-3">
                <TextField id="outlined-basic" value={formik.values.price} onChange={formik.handleChange}  type="number" name="price" label="price" variant="outlined" />
                <span className="error-message"> {formik.touched.price && formik.errors.price}</span>
            </div>
            <div className="col-6 mt-4" >
                <InputLabel id="demo-controlled-open-select-label"> Types </InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    native
                    value={formik.values.typeId}
                    onChange={ formik.handleChange }
                    name="typeId"
                >
                    <option value="">none</option>
                    {
                        props.types && props.types.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Select>
                <span className="error-message">{formik.touched.typeId && formik.errors.typeId}</span>
            </div>
            <div className="col-6 mt-4" >
                <InputLabel id="demo-controlled-open-select-label"> Status Product  </InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    native
                    name="statusId"
                    value={formik.values.statusId}
                    onChange={ formik.handleChange }
                >
                    <option value="">none</option>
                    {
                        props.status && props.status.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Select>
                <span className="error-message">{formik.touched.statusId && formik.errors.statusId}</span>
            </div>
            <div className="col-6 mt-4" >
                <InputLabel id="demo-controlled-open-select-label"> Brands  </InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    
                    native
                    value={formik.values.brandId}
                    onChange={ formik.handleChange }
                    name="brandId"
                >
                    <option value="">none</option>
                    {
                        props.brands && props.brands.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Select>
                <span className="error-message">{formik.touched.brandId && formik.errors.brandId}</span>
            </div>
            <div className="col-6 mt-4" >
                <InputLabel id="demo-controlled-open-select-label"> Category  </InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    
                    native
                    value={formik.values.categorieId}
                    onChange={ formik.handleChange }
                    name="categorieId"
                >
                    <option value="">none</option>
                    {
                        props.categories && props.categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Select>
                <span className="error-message">{formik.touched.categorieId && formik.errors.categorieId}</span>
            </div>
            <div className="col-12 text-center mt-5" >
                <label htmlFor="upImg" className="custom-button-upload-img">
                    <i className="fas fa-upload"></i>
                    Image for product
                </label>
                    <input  onChange={ handleChange } name="img" id="upImg" accept="image/*" type="file" />
                {formik.values.img && (<img src={formik.values.img} className="product__img-upload" alt={formik.values.product} />) }
                <span className="error-message">{formik.touched.img && formik.errors.img}</span>
            </div>
        </form>
    )
}


export default function ManageProducts() {
    const dispatch = useDispatch();

    let dataTitle = ["Product", "Image", "price", "Status", "Type", "Category", "Brand", "Actions"];
    let status_product = useSelector(state => getListStatusProduct(state));
    let types = useSelector(state => getListTypes(state));
    let brands = useSelector(state => getListBrands(state));
    let categories = useSelector(state => getCategories(state));
    let status = useSelector(state => getStatusExecute(state));
    let title = status === "create" ? "Create Product" : "Update Product";

    useEffect(() => {
        dispatch(FetchProductsPageAdmin());
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(UpdateStateExc("create"));
    }

    return (
        <div className="product">
            <div className="row mt-5">
                <div className="col-10">
                    <span className="category__title">
                        List Products
                   </span>
                </div>
                <div className="col-2 text-right">
                    <button type="button" id="product" onClick={handleClick} className="category__icon--format" data-toggle="modal" data-target="#modalProduct">
                        <i className="fas fa-plus"></i>
                        Add Product
                     </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <TableProducts title={dataTitle} />
                    <Modal  title={title}  children = { <FormProducts  types={types} status={status_product} brands={brands} categories={categories } /> } formik={ formik }/>
                </div>
            </div>
        </div>
    )
}
