// import React from "react";
// import { ScrollView, View } from "react-native";
// import HeaderSection from "../../components/HeaderSection";
// import SearchBar from "../../components/SearchBar";
// import Carousel from "../../components/carosuel";
// import WeeklyMenuTabs from "../../components/WeeklyMenuTabs";
// import CategoryFilters from "../../components/CategoryFilters";
// import FoodList from "../../components/FoodList";
// import BottomTabBar from "../../components/BottomTabBar";
// const Dashboard = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <HeaderSection />
//         <SearchBar/>
//           <Carousel />
//           <WeeklyMenuTabs/>
//           <CategoryFilters/>
//           <FoodList/>         
//       {/* <BottomTabBar/> */}
//       </ScrollView>
//     </View>
//   );
// };
// export default Dashboard;

import React from "react";
import { View, FlatList } from "react-native";
import HeaderSection from "../../components/HeaderSection";
import SearchBar from "../../components/SearchBar";
import Carousel from "../../components/carosuel";
import WeeklyMenuTabs from "../../components/WeeklyMenuTabs";
import CategoryFilters from "../../components/CategoryFilters";
import FoodList from "../../components/FoodList";
import BottomTabBar from "../../components/BottomTabBar";

const Dashboard = () => {
  const dummyData = [{}]; // Add a single item to trigger FlatList rendering

  return (
    <FlatList
      data={dummyData}
      renderItem={() => (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <HeaderSection />
          <SearchBar />
          <Carousel />
          <WeeklyMenuTabs />
          <CategoryFilters />
          <FoodList />
        
        </View>
        
      )}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Dashboard;


