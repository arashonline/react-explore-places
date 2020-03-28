import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ENV from '../env';

const MapPreview = props => {
  let imagePreviewUrl;

  if (props.location) {
      imagePreviewUrl = `https://www.mapquestapi.com/staticmap/v5/map?key=${ENV.openStreetMap}&center=${props.location.lat},${props.location.lng}&size=@2x`
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%'
  }
});

export default MapPreview;
