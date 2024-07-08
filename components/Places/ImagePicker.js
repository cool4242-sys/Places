import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {launchCameraAsync , useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermission, requestPermission] = useCameraPermissions();

async function VerifyPermissions() {
    if(cameraPermission.status === PermissionStatus.UNDETERMINED){
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
    }
    if(cameraPermission.status === PermissionStatus.DENIED){
        Alert.alert('Insufficient Permissions!',
            'Please grant Permissions to use this App.'
        )
        return false;
    }
    return true;
}

async function ImageHandler() {
    const hasPermission = await VerifyPermissions();
    if(!hasPermission){
        return;
    }

    const Image=await launchCameraAsync({
        allowsEditing:true,
        aspect:[16,9],
        quality:0.5,
    });
    setPickedImage(Image.uri);
}

    let imagePreview = <Text>Not image taken yet.</Text>

    if(pickedImage) {
        imagePreview = <Image style={styles.image} source={{uri:pickedImage}}/>
    }
    return <View>
        <View style={styles.imageContainer} >{imagePreview}</View>
        <Button title="Take Image" onPress={ImageHandler}/>
    </View>
}
export default ImagePicker;

const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: 200,
        marginVertical: 8,
        backgroundColor: Colors.primary100,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    image:{
        width:'100%',
        height:'100%'
    }
});