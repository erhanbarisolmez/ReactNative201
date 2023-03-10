import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
const Camera = () => {
  const handleCapture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.takePictureAsync(options)
    }
  }

  const [{cameraRef}, {takePicture}] = useCamera(null);
  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Button title="Capture" color="#1eb900" onPress={handleCapture} />
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
