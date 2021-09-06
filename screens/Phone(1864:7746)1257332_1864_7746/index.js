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
      <View style={styles.View_1864_7747}>
        <Text style={styles.Text_1864_7747}>History</Text>
      </View>
      <View style={styles.View_1864_7748} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_7749}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/bced/393d0fa7a0a3d9b93e0c7dbcbcf48c4a"
        }}
        style={styles.ImageBackground_1864_7753}
      />
      <View style={styles.View_1864_7774}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_7775}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_7777}
      />
      <View style={styles.View_1864_7778} />
      <View style={styles.View_1864_7779}>
        <Text style={styles.Text_1864_7779}>Account ID:</Text>
      </View>
      <View style={styles.View_1864_7780}>
        <Text style={styles.Text_1864_7780}>Level:</Text>
      </View>
      <View style={styles.View_1864_7781}>
        <Text style={styles.Text_1864_7781}>423665935</Text>
      </View>
      <View style={styles.View_1864_7782}>
        <View style={styles.View_1864_7783}>
          <View style={styles.View_1864_7784} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fe7/379a/b432970e8b7f1b211afca9ea4a2a599d"
            }}
            style={styles.ImageBackground_1864_7785}
          />
        </View>
        <View style={styles.View_1864_7786}>
          <Text style={styles.Text_1864_7786}>Registered user</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fe/3ae8/e7af46b2d92a2aab4ac7ac5767cf3d17"
        }}
        style={styles.ImageBackground_1864_7787}
      />
      <View style={styles.View_1864_7788} />
      <View style={styles.View_1864_7789}>
        <Text style={styles.Text_1864_7789}>Top up history</Text>
      </View>
      <View style={styles.View_1864_7790}>
        <Text style={styles.Text_1864_7790}>Pack History</Text>
      </View>
      <View style={styles.View_1864_7791}>
        <Text style={styles.Text_1864_7791}>Usage History</Text>
      </View>
      <View style={styles.View_1864_7792}>
        <Text style={styles.Text_1864_7792}>Videos Only Packs History</Text>
      </View>
      <View style={styles.View_1864_7793}>
        <Text style={styles.Text_1864_7793}>Transaction History</Text>
      </View>
      <View style={styles.View_1864_7794}>
        <Text style={styles.Text_1864_7794}>Bill Pay History</Text>
      </View>
      <View style={styles.View_1864_7795}>
        <Text style={styles.Text_1864_7795}>Loan History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7796}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7797}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7798}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7799}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7800}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7801}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_1864_7802}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7803}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7804}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7805}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7806}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7807}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_7808}
      />
      <View style={styles.View_1864_7809}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/9499/bac441cb005bd828afa02be8ddc83cad"
          }}
          style={styles.ImageBackground_1864_7810}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_7747: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("25.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_1864_7747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7748: {
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
  ImageBackground_1864_7749: {
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
  ImageBackground_1864_7753: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_7774: {
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
  ImageBackground_1864_7775: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7777: {
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
  View_1864_7778: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344263%"),
    backgroundColor: "rgba(241, 250, 255, 1)"
  },
  View_1864_7779: {
    width: wp("20.048309178743963%"),
    minWidth: wp("20.048309178743963%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("12.568306010928962%"),
    justifyContent: "flex-start"
  },
  Text_1864_7779: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7780: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("17.21311475409836%"),
    justifyContent: "flex-start"
  },
  Text_1864_7780: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7781: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.053140096618357%"),
    top: hp("12.568306010928962%"),
    justifyContent: "flex-start"
  },
  Text_1864_7781: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7782: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("16.530054644808743%")
  },
  View_1864_7783: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("0%")
  },
  View_1864_7784: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_1864_7785: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("1.366120218579237%")
  },
  View_1864_7786: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%"),
    justifyContent: "flex-start"
  },
  Text_1864_7786: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_7787: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("12.431693989071038%"),
    resizeMode: "cover"
  },
  View_1864_7788: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("48.08743169398907%"),
    minHeight: hp("48.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1864_7789: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("33.33333333333333%"),
    justifyContent: "flex-start"
  },
  Text_1864_7789: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7790: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_1864_7790: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7791: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("40.16393442622951%"),
    justifyContent: "flex-start"
  },
  Text_1864_7791: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7792: {
    width: wp("39.61352657004831%"),
    minWidth: wp("39.61352657004831%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("53.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_1864_7792: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7793: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("60.65573770491803%"),
    justifyContent: "flex-start"
  },
  Text_1864_7793: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7794: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("67.62295081967213%"),
    justifyContent: "flex-start"
  },
  Text_1864_7794: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7795: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("74.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_7795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_7796: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7797: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7798: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7799: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("54.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7800: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7801: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7802: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("74.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.54589371980676%")
  },
  ImageBackground_1864_7803: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("37.84153005464481%")
  },
  ImageBackground_1864_7804: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("44.67213114754098%")
  },
  ImageBackground_1864_7805: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("51.502732240437155%")
  },
  ImageBackground_1864_7806: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("58.333333333333336%")
  },
  ImageBackground_1864_7807: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("65.1639344262295%")
  },
  ImageBackground_1864_7808: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("72.1311475409836%")
  },
  View_1864_7809: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("112.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%")
  },
  ImageBackground_1864_7810: {
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
