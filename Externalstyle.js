import { StyleSheet } from "react-native";
const Externalstyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    padding: 20,
    alignItems: "center",
    
  },
  cont: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    textAlign: "center",
  },
  cont1: {
    marginVertical: 10,
    fontSize: 15,
    paddingTop: 15,
    marginHorizontal: 10,
  },
  cont_img: {
    alignItems: "center",
    backgroundColor:'#fff'
  },
  dot: {
    width: 20,
    height: 12,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#F4BB41",
  },
  btn: {
    borderWidth: 1,
    paddingHorizontal: 40,
    height: 38,
    paddingVertical: 5,
    borderRadius: 7,
    backgroundColor: "#F4BB41",
    borderColor: "#F4BB41",
    color: "#fff",
  },
  sub_main: {
    padding: 20,
    position:'relative',
    backgroundColor:'#fff',
    borderRadius:30,

  },
  cont_mrng: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom:10
  },
  hi_cont: {
    fontSize: 20,
    fontWeight: "bold",
    width: 200,
    textAlignVertical: "center",
  },
  icon: {
    textAlignVertical: "center",
  },
  input_cont: {
    height: 45,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    position: "relative",
    width:'85%',
    textAlignVertical:'center'
  },
  icon_cont: {
     paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF',
    
    borderRadius:10,
    textAlignVertical:'center'
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
  },
  mathes_main: {
    padding: 20,
    backgroundColor:'#fff'
  },
  math_cont: {
    borderRadius: 10,
    backgroundColor: "#80de9e",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  chat_cont: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 90,
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  img_size: {
    width: 90,
    height: 150,
  },
  ass_cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  figma_cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    
    padding: 15,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
  upload_btn: {
    backgroundColor: "#F4BB41",
    borderRadius: 20,
    width: 90,
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: "#fff",
  },
  figma: {
    width: 60,
    height: 80,
  },
  box_cont:{
    backgroundColor:'blue',
    // backgroundColor:'#80de9e',
    padding:18,
    width:130,
    borderRadius:30,
  
  },
  box_cont1:{
   backgroundColor:'#80de9e',
    padding:18,
    width:130,
    borderRadius:30,
    marginLeft:10
  },
  box_cont2:{
    backgroundColor:'#eb7d34',
    padding:18,
    width:130,
    borderRadius:30,
    marginLeft:10
  },
  box_cont3:{
    backgroundColor:'red',
    padding:18,
    width:130,
    borderRadius:30,
    marginLeft:10
  },
  box_cont4:{
    backgroundColor:'#ebd834',
    padding:18,
    width:130,
    borderRadius:30,
    marginLeft:10
  },
  img_cont:{
    width:40,
    height:40,
    borderRadius:50
  },
  sub_cont:{
    fontSize:16,
    fontWeight:'bold',
    color:'#fff',
    paddingTop:20
  },
  ongoing:{
    paddingTop:8,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bt_main:{
    flexDirection:'row',
    position:'absolute',
    bottom:0,
   paddingHorizontal:15,
   backgroundColor: '#fff',
   height: 40,
  right: 0,
  left: 0,
  paddingTop: 10,
  justifyContent: 'space-between',
  }
});

export default Externalstyle;
