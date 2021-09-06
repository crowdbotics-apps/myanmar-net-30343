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
      <View style={styles.View_1864_7929}>
        <Text style={styles.Text_1864_7929}>Loan History</Text>
      </View>
      <View style={styles.View_1864_7930} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_7931}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_7935}
      />
      <View style={styles.View_1864_7956}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_7957}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_7959}
      />
      <View style={styles.View_1864_7960}>
        <Text style={styles.Text_1864_7960}>History &gt; Loan History</Text>
      </View>
      <View style={styles.View_1864_7961} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7962}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7963}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7964}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7965}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7966}
      />
      <View style={styles.View_1864_7967}>
        <Text style={styles.Text_1864_7967}>5 %</Text>
      </View>
      <View style={styles.View_1864_7968}>
        <Text style={styles.Text_1864_7968}>74,000</Text>
      </View>
      <View style={styles.View_1864_7969}>
        <Text style={styles.Text_1864_7969}>444,000</Text>
      </View>
      <View style={styles.View_1864_7970}>
        <Text style={styles.Text_1864_7970}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_7971}>
        <Text style={styles.Text_1864_7971}>Monthly Interest Rate</Text>
      </View>
      <View style={styles.View_1864_7972}>
        <Text style={styles.Text_1864_7972}>Monthly Repayment</Text>
      </View>
      <View style={styles.View_1864_7973}>
        <Text style={styles.Text_1864_7973}>Total Repayment Amount</Text>
      </View>
      <View style={styles.View_1864_7974}>
        <Text style={styles.Text_1864_7974}>Date</Text>
      </View>
      <View style={styles.View_1864_7975}>
        <Text style={styles.Text_1864_7975}>400,000</Text>
      </View>
      <View style={styles.View_1864_7976}>
        <Text style={styles.Text_1864_7976}>6 months</Text>
      </View>
      <View style={styles.View_1864_7977}>
        <Text style={styles.Text_1864_7977}>Applied Loan</Text>
      </View>
      <View style={styles.View_1864_7978}>
        <Text style={styles.Text_1864_7978}>Loan Term</Text>
      </View>
      <View style={styles.View_1864_7979}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_7980}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_7929: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("16.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_7929: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7930: {
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
  ImageBackground_1864_7931: {
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
  ImageBackground_1864_7935: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_7956: {
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
  ImageBackground_1864_7957: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7959: {
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
  View_1864_7960: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_7960: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7961: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("41.12021857923497%"),
    minHeight: hp("41.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("22.404371584699454%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  ImageBackground_1864_7962: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("29.345969945355193%")
  },
  ImageBackground_1864_7963: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("36.20218579234973%")
  },
  ImageBackground_1864_7964: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("43.0327868852459%")
  },
  ImageBackground_1864_7965: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("49.86338797814208%")
  },
  ImageBackground_1864_7966: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("56.69398907103825%")
  },
  View_1864_7967: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.19759586352657%"),
    top: hp("38.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_1864_7967: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7968: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.12513209541062%"),
    top: hp("45.3551912568306%"),
    justifyContent: "flex-start"
  },
  Text_1864_7968: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7969: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.43431083937197%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_1864_7969: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7970: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.36231884057972%"),
    top: hp("59.01639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_7970: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7971: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.970542723429952%"),
    top: hp("38.3879781420765%"),
    justifyContent: "flex-start"
  },
  Text_1864_7971: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7972: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.970542723429952%"),
    top: hp("45.3551912568306%"),
    justifyContent: "flex-start"
  },
  Text_1864_7972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7973: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.970542723429952%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_1864_7973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7974: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("59.01639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_7974: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7975: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: hp("24.726775956284154%"),
    justifyContent: "flex-start"
  },
  Text_1864_7975: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7976: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99516908212561%"),
    top: hp("31.420765027322407%"),
    justifyContent: "flex-start"
  },
  Text_1864_7976: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7977: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("24.726775956284154%"),
    justifyContent: "flex-start"
  },
  Text_1864_7977: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7978: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("31.420765027322407%"),
    justifyContent: "flex-start"
  },
  Text_1864_7978: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7979: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("112.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%")
  },
  ImageBackground_1864_7980: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
