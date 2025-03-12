import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/images/Banner1.png"),
  require("../assets/images/Banner2.png"),
  require("../assets/images/Banner3.png"),
];

const Carousel = () => {
  const scrollViewRef = useRef();
  let scrollPosition = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollPosition += width - 40;
        if (scrollPosition > (width - 40) * (images.length - 1)) {
          scrollPosition = 0;
        }
        scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={image} style={styles.banner} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
  },
  scrollContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageWrapper: {
    width: width - 40,
    borderRadius: 15,
    overflow: "hidden",
  },
  banner: {
    width: "100%",
    height: 160, // Adjusted for perfect aspect ratio
    borderRadius: 15,
    resizeMode: "cover",
  },
});

export default Carousel;
