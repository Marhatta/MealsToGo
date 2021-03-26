import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  padding: 10px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'My restaurant',
    icon,
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/18/31/15/5e/getlstd-property-photo.jpg',
    ],
    address = 'Some random address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
