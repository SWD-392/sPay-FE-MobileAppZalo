import React, { useRef, useEffect, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { Button, Text, View } from 'react-native';

const QRCodeScanner = () => {
  const cameraRef = useRef(null);
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    const handleBarCodeScanned = ({ type, data }) => {
      setScannedData(data);
      cameraRef.current.pausePreview();
    };

    const subscription = cameraRef.current.camera.subscribe('barcodeScanned', handleBarCodeScanned);

    return () => subscription.remove();
  }, []);

  const handleScanAgain = () => {
    setScannedData('');
    cameraRef.current.resumePreview();
  };

  if (scannedData) {
    return (
      <View>
        <Text>{`Scanned Data: ${scannedData}`}</Text>
        <Button title="Scan Again" onPress={handleScanAgain} />
      </View>
    );
  }

  return (
    <RNCamera ref={cameraRef} style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
        <Text style={{ flex: 0.7, color: 'white', fontSize: 18, margin: 10, textAlign: 'center' }}>
          Scan QR Code
        </Text>
      </View>
    </RNCamera>
  );
};

export default QRCodeScanner;