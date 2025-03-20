import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TrackOrderScreen = () => {
  const driverLocation = {
    latitude: 37.7749,
    longitude: -122.4194,
  };

  const destination = {
    latitude: 37.7849,
    longitude: -122.4094,
  };

  const routeCoordinates = [
    driverLocation,
    { latitude: 37.7799, longitude: -122.4144 },
    destination,
  ];

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
     provider="google"
  style={{ flex: 1 }}
  initialRegion={{
    latitude: 37.7799,
    longitude: -122.4144,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }}>
        {/* Driver Marker */}
        <Marker coordinate={driverLocation}>
          <Ionicons name="car" size={28} color="orangered" />
        </Marker>
        
        {/* Destination Marker */}
        <Marker coordinate={destination}>
          <Ionicons name="location" size={28} color="black" />
        </Marker>
        
        {/* Route Line */}
        <Polyline coordinates={routeCoordinates} strokeWidth={4} strokeColor="orangered" />
      </MapView>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        {/* Driver Info */}
        <View style={styles.driverInfo}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.driverImage} />
          <View>
            <Text style={styles.driverName}>John Smith</Text>
            <Text style={styles.driverDetails}>⭐ 4.9  |  DW8125</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Ionicons name="chatbubble-ellipses-outline" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="call-outline" size={22} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Status */}
        <View style={styles.orderStatus}>
          <MaterialIcons name="local-shipping" size={20} color="orangered" />
          <MaterialIcons name="storefront" size={20} color="orangered" style={{ marginLeft: 10 }} />
          <MaterialIcons name="fastfood" size={20} color="orangered" style={{ marginLeft: 10 }} />
        </View>

        {/* Estimated Time */}
        <Text style={styles.estimatedTime}>Estimated Delivery Time: <Text style={styles.boldText}>10:25</Text></Text>

        {/* Order Details */}
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>My Order</Text>
          <TouchableOpacity>
            <Text style={styles.detailsButton}>Details</Text>
          </TouchableOpacity>
        </View>

        {/* Cancel Order Button */}
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  bottomCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  driverName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  driverDetails: {
    fontSize: 12,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  estimatedTime: {
    fontSize: 14,
    marginTop: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  orderText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  detailsButton: {
    color: "orangered",
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
    alignItems: "center",
  },
  cancelText: {
    color: "orangered",
    fontWeight: "bold",
  },
});

export default TrackOrderScreen;
