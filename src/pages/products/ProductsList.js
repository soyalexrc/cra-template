import CategoryBox from "../../components/categories/CategoryBox";
import {Grid} from '@mui/material';
import sampleCategory from '../../assets/img/sample-category.jpg';
import ProductBox from "../../components/products/ProductBox";

export default function ProductsList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductBox isEmpty/>
      </Grid>

      {
        Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((el, index) => (
          <Grid key={index + 1} item xs={12} sm={6} md={4}>
            <ProductBox
              title='Producto de ejemplo'
              code='COD 1234'
              mayorPrice={15000}
              packagePrice={15000}
              detailPrice={12000}
              stock={50}
              img={sampleCategory}
            />
          </Grid>
        ))
      }

    </Grid>
  )
}
