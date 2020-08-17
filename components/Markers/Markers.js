// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import { Marker, Callout, CalloutSubview } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

// Vector-Icons
import { AntDesign } from "@expo/vector-icons";

// FETCH CALLS
import { createFavorite, destroyFavorite } from '../../apiCalls'

// MAP COMPONENT
const Markers = ({ latitude, longitude, fmid, location, user, setUser }) => {
  
  // // HOOKS // //
  const [markerFav, setMarkerFav] = useState(false)

  return (
      <Marker
        key={`${Math.random()}`}
        id={fmid}
        coordinate={{ latitude: latitude, longitude: longitude }}
        pinColor="#F25C54"
      >
        { markerFav ? <Image
          source={require("../../assets/FMM_icon_no_border_favorites.png")}
          style={{ height: 50, width: 38 }}
        /> 
        :
        <Image
          source={require("../../assets/FMM_icon_no_border.png")}
          style={{ height: 50, width: 38 }}
        />}
        <Callout style={styles.callOut}>
          <View style={styles.views}>
            <Text>{location.marketname}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.texts}>
              {location.street} {location.city}, {location.state} {location.zip}
            </Text>
          </View>
          <View style={styles.views}>
            <Text>Distance Away: {Math.round(location.distance)} mile(s)</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.texts}>
              Season Info: {location.seasonDates}
            </Text>
          </View>

          <CalloutSubview
            onPress={() => Linking.openURL(`${location.website}`)}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.views}>View Market Website</Text>
            </TouchableOpacity>
          </CalloutSubview>
          <CalloutSubview
            onPress={() => {
              if(markerFav) {
                setMarkerFav(false)
                // deleting fav
                destroyFavorite(fmid, user, setUser)
              }else {
                setMarkerFav(true)
                //send to favorites
                createFavorite(fmid, user, setUser)
              }
            }}
          >
            <TouchableOpacity style={styles.favButton}>
              {markerFav ? (
                <AntDesign name="heart" size={40} color="#80ED99" id={fmid} />
              ) : (
                <AntDesign name="hearto" size={40} color="#80ED99" id={fmid} />
              )}
              <Text>FAVORITE THIS MARKET</Text>
            </TouchableOpacity>
          </CalloutSubview>
        </Callout>
      </Marker>
    );
  };

  // CSS: Styling
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    borderRadius: 4,
    color: "#05668D",
    height: 40,
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    width: "100%",
  },
  mapView: {
    height: "72%",
  },
  callOut: { width: 300, height: 300 },
  views: { margin: 5 },
  texts: { flexWrap: "wrap" },
  favButton: {
    alignItems: "center",
    height: 40,
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    width: "100%",
  },
});

export default Markers;