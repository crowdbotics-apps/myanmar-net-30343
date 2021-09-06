import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1864_11927} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_11928}
      />
      <View style={styles.View_1864_11949}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_11950}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_11952}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e0e/6983/46ca83bd9320e54293bc9889080ec1ef"
        }}
        style={styles.ImageBackground_1864_11953}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68ba/df0a/27d80ab907d021269da2dc3ba000242c"
        }}
        style={styles.ImageBackground_1864_11954}
      />
      <View style={styles.View_1864_11955} />
      <View style={styles.View_1864_11956} />
      <View style={styles.View_1864_11957}>
        <Text style={styles.Text_1864_11957}>Home</Text>
      </View>
      <View style={styles.View_1864_11958}>
        <Text style={styles.Text_1864_11958}>Packages</Text>
      </View>
      <View style={styles.View_1864_11959}>
        <Text style={styles.Text_1864_11959}>News</Text>
      </View>
      <View style={styles.View_1864_11960}>
        <Text style={styles.Text_1864_11960}>Account</Text>
      </View>
      <View style={styles.View_1864_11961}>
        <Text style={styles.Text_1864_11961}>FAQs</Text>
      </View>
      <View style={styles.View_1864_11962}>
        <Text style={styles.Text_1864_11962}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3f/2f1a/f9f345b27f6496bd7eaf73ffd7a88b52"
        }}
        style={styles.ImageBackground_1864_11963}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0064/aa8c/62458763d966e26b943ed0f7086a06d4"
        }}
        style={styles.ImageBackground_1864_11964}
      />
      <View style={styles.View_1864_11965}>
        <Text style={styles.Text_1864_11965}>Account Setting</Text>
      </View>
      <View style={styles.View_1864_11966}>
        <Text style={styles.Text_1864_11966}>Auto Renew Pack</Text>
      </View>
      <View style={styles.View_1864_11967}>
        <Text style={styles.Text_1864_11967}>CPE Setting</Text>
      </View>
      <View style={styles.View_1864_11968}>
        <Text style={styles.Text_1864_11968}>History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/960f/1279/25509f5917e432add60047bb264855ac"
        }}
        style={styles.ImageBackground_1864_11969}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_11927: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  ImageBackground_1864_11928: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_11949: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.06280193236715%"),
    top: hp("4.508196721311475%")
  },
  ImageBackground_1864_11950: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_11952: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.92753623188406%"),
    top: hp("4.098360655737705%")
  },
  ImageBackground_1864_11953: {
    width: wp("4.380764247138719%"),
    minWidth: wp("4.380764247138719%"),
    height: hp("2.3224046321514527%"),
    minHeight: hp("2.3224046321514527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("4.098360655737705%")
  },
  ImageBackground_1864_11954: {
    width: wp("4.380764247138719%"),
    minWidth: wp("4.380764247138719%"),
    height: hp("2.3224046321514527%"),
    minHeight: hp("2.3224046321514527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.039439915458937%"),
    top: hp("4.098360655737705%")
  },
  View_1864_11955: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("112.1584699453552%"),
    minHeight: hp("112.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(62, 62, 62, 1)"
  },
  View_1864_11956: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.47540983606557%"),
    backgroundColor: "rgba(58, 58, 58, 1)"
  },
  View_1864_11957: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("13.524590163934427%"),
    justifyContent: "flex-start"
  },
  Text_1864_11957: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11958: {
    width: wp("28.985507246376812%"),
    minWidth: wp("28.985507246376812%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("19.398907103825135%"),
    justifyContent: "flex-start"
  },
  Text_1864_11958: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11959: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("25.273224043715846%"),
    justifyContent: "flex-start"
  },
  Text_1864_11959: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11960: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("31.147540983606557%"),
    justifyContent: "flex-start"
  },
  Text_1864_11960: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11961: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("62.158469945355186%"),
    justifyContent: "flex-start"
  },
  Text_1864_11961: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11962: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("71.03825136612022%"),
    justifyContent: "flex-start"
  },
  Text_1864_11962: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11963: {
    width: wp("90.34106858110658%"),
    minWidth: wp("90.34106858110658%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("68.0327868852459%")
  },
  ImageBackground_1864_11964: {
    width: wp("5.7971019099875924%"),
    height: hp("3.278688785156917%"),
    top: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%")
  },
  View_1864_11965: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("38.9344262295082%"),
    justifyContent: "flex-start"
  },
  Text_1864_11965: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11966: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("49.04371584699454%"),
    justifyContent: "flex-start"
  },
  Text_1864_11966: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11967: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("43.98907103825137%"),
    justifyContent: "flex-start"
  },
  Text_1864_11967: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11968: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("54.09836065573771%"),
    justifyContent: "flex-start"
  },
  Text_1864_11968: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11969: {
    width: wp("0.0000013725799661644866%"),
    minWidth: wp("0.0000013725799661644866%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("38.9344262295082%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
