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
      <View style={styles.View_1864_12084}>
        <Text style={styles.Text_1864_12084}>My Profile</Text>
      </View>
      <View style={styles.View_1864_12085} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_12086}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acf8/d372/00a7d61c0f3f60c6dac05ff77c98e455"
        }}
        style={styles.ImageBackground_1864_12090}
      />
      <View style={styles.View_1864_12111}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_12112}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_12114}
      />
      <View style={styles.View_1864_12115}>
        <Text style={styles.Text_1864_12115}>
          Account Setting &gt; My Profile{" "}
        </Text>
      </View>
      <View style={styles.View_1864_12116}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_12117}
        />
      </View>
      <View style={styles.View_1864_12135} />
      <View style={styles.View_1864_12136}>
        <Text style={styles.Text_1864_12136}>Name</Text>
      </View>
      <View style={styles.View_1864_12137}>
        <Text style={styles.Text_1864_12137}>Aung Aung</Text>
      </View>
      <View style={styles.View_1864_12138}>
        <Text style={styles.Text_1864_12138}>Phone Number</Text>
      </View>
      <View style={styles.View_1864_12139} />
      <View style={styles.View_1864_12140}>
        <Text style={styles.Text_1864_12140}>+95 9423665935</Text>
      </View>
      <View style={styles.View_1864_12141} />
      <View style={styles.View_1864_12142}>
        <Text style={styles.Text_1864_12142}>Email (optional)</Text>
      </View>
      <View style={styles.View_1864_12143}>
        <Text style={styles.Text_1864_12143}>xxx@email.com</Text>
      </View>
      <View style={styles.View_1864_12144}>
        <Text style={styles.Text_1864_12144}>Address</Text>
      </View>
      <View style={styles.View_1864_12145} />
      <View style={styles.View_1864_12146}>
        <Text style={styles.Text_1864_12146}>xxx street , city name</Text>
      </View>
      <View style={styles.View_1864_12147}>
        <View style={styles.View_1864_12148} />
        <View style={styles.View_1864_12149}>
          <Text style={styles.Text_1864_12149}>Submit</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_12084: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("17.48633879781421%"),
    justifyContent: "flex-start"
  },
  Text_1864_12084: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12085: {
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
  ImageBackground_1864_12086: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("4.2349726775956285%")
  },
  ImageBackground_1864_12090: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_12111: {
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
  ImageBackground_1864_12112: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_12114: {
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
  View_1864_12115: {
    width: wp("57.00483091787439%"),
    minWidth: wp("57.00483091787439%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_12115: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12116: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("112.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%")
  },
  ImageBackground_1864_12117: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_12135: {
    width: wp("81.88405797101449%"),
    minWidth: wp("81.88405797101449%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_12136: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("22.950819672131146%"),
    justifyContent: "center"
  },
  Text_1864_12136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12137: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("28.005464480874316%"),
    justifyContent: "center"
  },
  Text_1864_12137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12138: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("34.83606557377049%"),
    justifyContent: "center"
  },
  Text_1864_12138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12139: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("38.3879781420765%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_12140: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("39.89071038251366%"),
    justifyContent: "center"
  },
  Text_1864_12140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12141: {
    width: wp("81.88405797101449%"),
    minWidth: wp("81.88405797101449%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("50.27322404371585%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_12142: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("46.72131147540984%"),
    justifyContent: "center"
  },
  Text_1864_12142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12143: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("51.775956284153004%"),
    justifyContent: "center"
  },
  Text_1864_12143: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12144: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("58.606557377049185%"),
    justifyContent: "center"
  },
  Text_1864_12144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12145: {
    width: wp("81.64251207729468%"),
    minWidth: wp("81.64251207729468%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("62.431693989071036%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_12146: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("64.07103825136612%"),
    justifyContent: "center"
  },
  Text_1864_12146: {
    color: "rgba(100, 100, 100, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_12147: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.92270531400966%"),
    top: hp("70.62841530054644%")
  },
  View_1864_12148: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_12149: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_1864_12149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
