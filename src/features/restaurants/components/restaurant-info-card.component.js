import React from 'react';
import {Card} from 'react-native-paper';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/icons/star';
import open from '../../../../assets/icons/open';
import {Spacer} from '../../../components/spacer/spacer.component';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'My restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/18/31/15/5e/getlstd-property-photo.jpg',
    ],
    address = 'Some random address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((rating, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="label" style={{color: 'red', fontSize: 12}}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <Section>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="small" />
            <Image style={{width: 15, height: 15}} source={{uri: icon}} />
          </Section>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
