import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";


function PlaceForm() {
const [enterTitle, setEnterTitle] = useState('');

function TitleChangeHandler(enterText) {
    setEnterTitle(enterText);
}
    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={TitleChangeHandler} value={enterTitle}/>
            </View>
            <ImagePicker/>
        </ScrollView>
    )
}
export default PlaceForm;

const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:26,          
    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color: Colors.primary500,
    },
    input:{
        marginVertical:8,
        paddingHorizontal:4,
        paddingVertical:8,
        borderBottomColor:Colors.primary700,
        fontSize:16,
        borderBottomWidth:2,
        backgroundColor:Colors.primary100,
    },
});