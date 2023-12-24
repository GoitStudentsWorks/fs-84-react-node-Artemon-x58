import {
  Container,
  Title,
  Wrapper,
  IllustrationImg,
  List,
} from './Recommented.styled';
import IllustrationSrc from '../../img/Ketogenic-diet.png';
import FoodItem from 'components/assets/FoodItem/FootItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectDatarecommended } from 'redux/recommendedFood/recommendedSelectors';
import { fetchAllRecommendedProduct } from 'redux/recommendedFood/recommendedOperations';
const Recommented = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecommendedProduct());
  }, [dispatch]);
  const recommendedList = useSelector(selectDatarecommended);
  const FoodCollections = recommendedList.map(item => {
    return (
      <FoodItem
        key={item.name}
        img={item.img}
        title={item.name}
        weight={item.amount}
        calories={item.calories}
      />
    );
  });
  return (
    <Container>
      <Title>Recommented food</Title>
      <Wrapper>
        <IllustrationImg src={IllustrationSrc} alt="illustration" />
        <List>{FoodCollections}</List>
      </Wrapper>
    </Container>
  );
};

export default Recommented;
