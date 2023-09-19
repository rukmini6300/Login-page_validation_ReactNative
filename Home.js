import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image, Button, SafeAreaView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Externalstyle from "./Externalstyle";
const SLIDER_WIDTH = Dimensions.get("window").width + 50;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
import { TouchableOpacity } from "react-native";

const data = [
  {
    id: 1,
    name: "Learning made easier with us now!",
    name1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg",
  },
  {
    id: 2,
    name: "Learning made easier with us now!",
    name1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "https://app.dubbpie.com/assets/images/login-img.png",
  },
  {
    id: 3,
    name: "Learning made easier with us now!",
    name1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "https://midoshriks-school.netlify.app/assets/sing/imgs/login-form-img.png",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={Externalstyle.main}>
      <Image
        source={{ uri: item.url }}
        style={{ width: "100%", height: 350 }}
      />

      <View>
        <Text style={Externalstyle.cont}>{item.name}</Text>
        <Text style={Externalstyle.cont1}>{item.name1}</Text>
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <SafeAreaView style={Externalstyle.cont_img}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={Externalstyle.dot}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: "black",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text style={Externalstyle.btn}> Next</Text>
      </TouchableOpacity>
      <Text style={{ paddingTop: 20 }}>Skip</Text>
    </SafeAreaView>
  );
};

export default Home;
