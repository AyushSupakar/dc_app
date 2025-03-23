import { gql, GraphQLClient, request } from 'graphql-request'



const getCategories= async ()=>{
  const query2 = gql`
  query MyQuery {
  categories {
    id
    name
    icon {
      url
    }
  }
}`

const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm8k55xjp0c8p07uoweby2stp/master', query2);

    return result;


}



const getSlider = async ()=>{

    
    const query1 = gql`query GetSliders {
  sliders {
    id
    name
    image {
      url
    }
  }
}`


 const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm8k55xjp0c8p07uoweby2stp/master', query1);

    return result;
    }

export default {
    getSlider,
    getCategories
}
