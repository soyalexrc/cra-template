import CategoryBox from "../../components/categories/CategoryBox";
import {Grid} from '@mui/material';
import sampleCategory from '../../assets/img/sample-category.jpg';

export default function AttributesList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <CategoryBox isEmpty/>
      </Grid>

      {
        Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((el, index) => (
          <Grid key={index + 1} item xs={12} sm={6} md={4}>
            <CategoryBox title='Categoria de ejemplo' amount={20} img={sampleCategory}/>
          </Grid>
        ))
      }



    </Grid>
  )
}
