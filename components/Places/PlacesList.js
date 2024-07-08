import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

function PlaceList({places}) {
    if(!places || places.length === 0) {
        return <View style={styles.fallBackContainer}>
            <Text style={styles.fallBackText}>No Places Added Yet - Plz Add Some Places !!</Text>
        </View>
    }

    return (
    <FlatList 
    data={places}
    keyExtractor={(item) => item.id} 
    renderItem={({item}) => <PlaceItem place={item}/>}/>
    )
}
export default PlaceList;

const styles = StyleSheet.create({
    fallBackContainer :{ 
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
 },
    fallBackText:{
        fontSize: 16, 
        color: Colors.primary200,
    },
})