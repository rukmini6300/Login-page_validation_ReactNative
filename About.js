import {View,Text,SafeAreaView,ScrollView,Image,TextInput} from "react-native";
import Externalstyle from "./Externalstyle";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={Externalstyle.sub_main}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={Externalstyle.cont_mrng}>
          <Text style={Externalstyle.hi_cont}>
            Hi, Good morning kelven
            <Entypo name="hand" size={24} color="#ebae34"  />
          </Text>
          <Ionicons name="notifications-outline" size={24} color="#000" style={{textAlignVertical: "center"}}/>
        </View>
        <View style={{ paddingTop: 10,flexDirection:'row',justifyContent:'space-between' }}>
          <TextInput
            style={Externalstyle.input_cont}
            placeholder="search"
            placeholderTextColor={"#000"}
          ></TextInput>
          <Icon
            name="search"
            size={18}
            color="#000"
            style={Externalstyle.icon_cont}
          />
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>All Subjects</Text>
        </View>

        <ScrollView  showsHorizontalScrollIndicator={false} horizontal = {true}>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <View style={Externalstyle.box_cont}>
              <Image source={require('../assets/user1.jpg')} style={Externalstyle.img_cont}/>
              <Text style={Externalstyle.sub_cont}>Physics</Text>
              <Text style={{color:'#fff'}}>Ali</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <View style={Externalstyle.box_cont1}>
              <Image source={require('../assets/user1.jpg')} style={Externalstyle.img_cont}/>
              <Text style={Externalstyle.sub_cont}>Mathematics</Text>
              <Text style={{color:'#fff'}}>Ali</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <View style={Externalstyle.box_cont2}>
              <Image source={require('../assets/user1.jpg')} style={Externalstyle.img_cont}/>
              <Text style={Externalstyle.sub_cont}>Chemistry</Text>
              <Text style={{color:'#fff'}}>Ali</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <View style={Externalstyle.box_cont3}>
              <Image source={require('../assets/user1.jpg')} style={Externalstyle.img_cont}/>
              <Text style={Externalstyle.sub_cont}>History</Text>
              <Text style={{color:'#fff'}}>Ali</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <View style={Externalstyle.box_cont4}>
              <Image source={require('../assets/user1.jpg')} style={Externalstyle.img_cont}/>
              <Text style={Externalstyle.sub_cont}>Biology</Text>
              <Text style={{color:'#fff'}}>Ali</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      <View style={Externalstyle.ongoing}>
        <Text style={{fontSize:18,fontWeight:'bold'}}>Ongoing Classess</Text>
        <Text style={{color:'#ebae34'}}>See All</Text>
      </View>

      <View style={{paddingTop:20}}>
      <View style={Externalstyle.figma_cont}>
        <View>
          <Text style={{fontSize:16,paddingBottom:10,fontWeight:'bold'}}>Algbra and Divider</Text>
          <Text style={{paddingBottom:10}}>2 Task- Today at 23:50</Text>
          <Text style={Externalstyle.upload_btn}>upload</Text>
        </View>
        <View>
          <Image source={require('../assets/figma.png')} style={Externalstyle.figma} />
        </View>
      </View>
      <View style={Externalstyle.figma_cont}>
        <View>
          <Text style={{fontSize:16,paddingBottom:10,fontWeight:'bold'}}>Algbra and Divider</Text>
          <Text style={{paddingBottom:10}}>2 Task- Today at 23:50</Text>
          <Text style={Externalstyle.upload_btn}>upload</Text>
        </View>
        <View>
          <Image source={require('../assets/figma.png')} style={Externalstyle.figma} />
        </View>
      </View>
      <View style={Externalstyle.figma_cont}>
        <View>
          <Text style={{fontSize:16,paddingBottom:10,fontWeight:'bold'}}>Algbra and Divider</Text>
          <Text style={{paddingBottom:10}}>2 Task- Today at 23:50</Text>
          <Text style={Externalstyle.upload_btn}>upload</Text>
        </View>
        <View>
          <Image source={require('../assets/figma.png')} style={Externalstyle.figma} />
        </View>
      </View>
      <View style={Externalstyle.figma_cont}>
        <View>
          <Text style={{fontSize:16,paddingBottom:10,fontWeight:'bold'}}>Algbra and Divider</Text>
          <Text style={{paddingBottom:10}}>2 Task- Today at 23:50</Text>
          <Text style={Externalstyle.upload_btn}>upload</Text>
        </View>
        <View>
          <Image source={require('../assets/figma.png')} style={Externalstyle.figma} />
        </View>
      </View>
      <View style={Externalstyle.figma_cont}>
        <View>
          <Text style={{fontSize:16,paddingBottom:10,fontWeight:'bold'}}>Algbra and Divider</Text>
          <Text style={{paddingBottom:10}}>2 Task- Today at 23:50</Text>
          <Text style={Externalstyle.upload_btn}>upload</Text>
        </View>
        <View>
          <Image source={require('../assets/figma.png')} style={Externalstyle.figma} />
        </View>
      </View>
      </View>
      </ScrollView>
       {/* bottom content */}
       <View style={Externalstyle.bt_main}>
      <Icon name="home" size={24} color="" />
       <Icon name="search" size={24} color="black" />
        <Icon name="wechat" size={24} color="black" />
       <Icon name="home" size={24} color="black" />
       
      </View>
    </SafeAreaView>
  );
};
export default About;
