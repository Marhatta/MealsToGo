import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/icons/star';
import open from '../../../../assets/icons/open';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Text} from '../../../components/typography/text.component';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
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
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((rating, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Section>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="small" />
            <Icon source={{uri: icon}} />
          </Section>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
