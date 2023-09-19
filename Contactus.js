import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Externalstyle from "./Externalstyle";

function Contactus() {
  return (
    <View style={Externalstyle.mathes_main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Externalstyle.math_cont}>
          <View>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 10 }}
            >
              Mathematics
            </Text>
            <Text style={{ paddingBottom: 7 }}>Alex Soniza</Text>
            <Text style={Externalstyle.chat_cont}>Chat</Text>
          </View>
          <View>
            <Image
              source={require("../assets/scooty.png")}
              style={Externalstyle.img_size}
            />
          </View>
        </View>
        <View style={Externalstyle.ass_cont}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Assigments</Text>
          <Text>12 Assigments</Text>
        </View>

        <View style={{ paddingTop: 20 }}>
          <View style={Externalstyle.figma_cont}>
            <View>
              <Text
                style={{ fontSize: 16, paddingBottom: 10, fontWeight: "bold" }}
              >
                Algbra and Divider
              </Text>
              <Text style={{ paddingBottom: 10 }}>2 Task- Today at 23:50</Text>
              <Text style={Externalstyle.upload_btn}>upload</Text>
            </View>
            <View>
              <Image
                source={require("../assets/figma.png")}
                style={Externalstyle.figma}
              />
            </View>
          </View>

          <View style={Externalstyle.figma_cont}>
            <View>
              <Text
                style={{ fontSize: 16, paddingBottom: 10, fontWeight: "bold" }}
              >
                2 Dimensional Figure
              </Text>
              <Text style={{ paddingBottom: 10 }}>2 Task- Today at 23:50</Text>
              <Text style={Externalstyle.upload_btn}>upload</Text>
            </View>
            <View>
              <Image
                source={require("../assets/figma.png")}
                style={Externalstyle.figma}
              />
            </View>
          </View>

          <View style={Externalstyle.figma_cont}>
            <View>
              <Text
                style={{ fontSize: 16, paddingBottom: 10, fontWeight: "bold" }}
              >
                Logarithm
              </Text>
              <Text style={{ paddingBottom: 10 }}>2 Task- Today at 23:50</Text>
              <Text style={Externalstyle.upload_btn}>upload</Text>
            </View>
            <View>
              <Image
                source={require("../assets/figma.png")}
                style={Externalstyle.figma}
              />
            </View>
          </View>

          <View style={Externalstyle.figma_cont}>
            <View>
              <Text
                style={{ fontSize: 16, paddingBottom: 10, fontWeight: "bold" }}
              >
                Algbra and Divider
              </Text>
              <Text style={{ paddingBottom: 10 }}>2 Task- Today at 23:50</Text>
              <Text style={Externalstyle.upload_btn}>upload</Text>
            </View>
            <View>
              <Image
                source={require("../assets/figma.png")}
                style={Externalstyle.figma}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Contactus;
