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
      <View style={styles.View_1864_11801} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b27/8561/ddf7806f2e5a4888b1b7365f82927572"
        }}
        style={styles.ImageBackground_1864_11802}
      />
      <View style={styles.View_1864_11823}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_11824}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_11826}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e0e/6983/46ca83bd9320e54293bc9889080ec1ef"
        }}
        style={styles.ImageBackground_1864_11827}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68ba/df0a/27d80ab907d021269da2dc3ba000242c"
        }}
        style={styles.ImageBackground_1864_11828}
      />
      <View style={styles.View_1864_11829} />
      <View style={styles.View_1864_11830}>
        <Text style={styles.Text_1864_11830}>Home</Text>
      </View>
      <View style={styles.View_1864_11831}>
        <Text style={styles.Text_1864_11831}>Packages</Text>
      </View>
      <View style={styles.View_1864_11832}>
        <Text style={styles.Text_1864_11832}>News</Text>
      </View>
      <View style={styles.View_1864_11833}>
        <Text style={styles.Text_1864_11833}>Account</Text>
      </View>
      <View style={styles.View_1864_11834}>
        <Text style={styles.Text_1864_11834}>FAQs</Text>
      </View>
      <View style={styles.View_1864_11835}>
        <Text style={styles.Text_1864_11835}>Eng</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3f/2f1a/f9f345b27f6496bd7eaf73ffd7a88b52"
        }}
        style={styles.ImageBackground_1864_11836}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec7/0c01/88539a39a3670d9f8662e790074e8512"
        }}
        style={styles.ImageBackground_1864_11837}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_11801: {
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
  ImageBackground_1864_11802: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_11823: {
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
  ImageBackground_1864_11824: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_11826: {
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
  ImageBackground_1864_11827: {
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
  ImageBackground_1864_11828: {
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
  View_1864_11829: {
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
  View_1864_11830: {
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
  Text_1864_11830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11831: {
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
  Text_1864_11831: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11832: {
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
  Text_1864_11832: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11833: {
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
  Text_1864_11833: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11834: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("37.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_1864_11834: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_11835: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("46.03825136612022%"),
    justifyContent: "flex-start"
  },
  Text_1864_11835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_11836: {
    width: wp("90.34106858110658%"),
    minWidth: wp("90.34106858110658%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("42.759562841530055%")
  },
  ImageBackground_1864_11837: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
