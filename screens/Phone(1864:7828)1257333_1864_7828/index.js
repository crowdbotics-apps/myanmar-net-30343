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
      <View style={styles.View_1864_7829}>
        <Text style={styles.Text_1864_7829}>Top Up History</Text>
      </View>
      <View style={styles.View_1864_7830} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_7831}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b27/8561/ddf7806f2e5a4888b1b7365f82927572"
        }}
        style={styles.ImageBackground_1864_7835}
      />
      <View style={styles.View_1864_7856}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_7857}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_7859}
      />
      <View style={styles.View_1864_7860}>
        <Text style={styles.Text_1864_7860}>History &gt; Top Up History</Text>
      </View>
      <View style={styles.View_1864_7861}>
        <View style={styles.View_1864_7862} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7863}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7864}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7865}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7866}
        />
        <View style={styles.View_1864_7867}>
          <Text style={styles.Text_1864_7867}>423665935</Text>
        </View>
        <View style={styles.View_1864_7868}>
          <Text style={styles.Text_1864_7868}>23.12.2019</Text>
        </View>
        <View style={styles.View_1864_7869}>
          <Text style={styles.Text_1864_7869}>+ 3000 Kyats</Text>
        </View>
        <View style={styles.View_1864_7870}>
          <Text style={styles.Text_1864_7870}>Top Up By</Text>
        </View>
        <View style={styles.View_1864_7871}>
          <Text style={styles.Text_1864_7871}>Date</Text>
        </View>
        <View style={styles.View_1864_7872}>
          <Text style={styles.Text_1864_7872}>Amount</Text>
        </View>
        <View style={styles.View_1864_7873}>
          <Text style={styles.Text_1864_7873}>Top up</Text>
        </View>
        <View style={styles.View_1864_7874}>
          <Text style={styles.Text_1864_7874}>
            Topup by 423665935 with 1603280001000245
          </Text>
        </View>
        <View style={styles.View_1864_7875}>
          <Text style={styles.Text_1864_7875}>Category</Text>
        </View>
        <View style={styles.View_1864_7876}>
          <Text style={styles.Text_1864_7876}>Serial Number</Text>
        </View>
      </View>
      <View style={styles.View_1864_7877}>
        <View style={styles.View_1864_7878} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7879}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7880}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7881}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7882}
        />
        <View style={styles.View_1864_7883}>
          <Text style={styles.Text_1864_7883}>423665935</Text>
        </View>
        <View style={styles.View_1864_7884}>
          <Text style={styles.Text_1864_7884}>23.12.2019</Text>
        </View>
        <View style={styles.View_1864_7885}>
          <Text style={styles.Text_1864_7885}>+ 3000 Kyats</Text>
        </View>
        <View style={styles.View_1864_7886}>
          <Text style={styles.Text_1864_7886}>Top Up By</Text>
        </View>
        <View style={styles.View_1864_7887}>
          <Text style={styles.Text_1864_7887}>Date</Text>
        </View>
        <View style={styles.View_1864_7888}>
          <Text style={styles.Text_1864_7888}>Amount</Text>
        </View>
        <View style={styles.View_1864_7889}>
          <Text style={styles.Text_1864_7889}>Top up</Text>
        </View>
        <View style={styles.View_1864_7890}>
          <Text style={styles.Text_1864_7890}>
            Topup by 423665935 with 1603280001000245
          </Text>
        </View>
        <View style={styles.View_1864_7891}>
          <Text style={styles.Text_1864_7891}>Category</Text>
        </View>
        <View style={styles.View_1864_7892}>
          <Text style={styles.Text_1864_7892}>Serial Number</Text>
        </View>
      </View>
      <View style={styles.View_1864_7893}>
        <View style={styles.View_1864_7894} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7895}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7896}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7897}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
          }}
          style={styles.ImageBackground_1864_7898}
        />
        <View style={styles.View_1864_7899}>
          <Text style={styles.Text_1864_7899}>423665935</Text>
        </View>
        <View style={styles.View_1864_7900}>
          <Text style={styles.Text_1864_7900}>23.12.2019</Text>
        </View>
        <View style={styles.View_1864_7901}>
          <Text style={styles.Text_1864_7901}>+ 3000 Kyats</Text>
        </View>
        <View style={styles.View_1864_7902}>
          <Text style={styles.Text_1864_7902}>Top Up By</Text>
        </View>
        <View style={styles.View_1864_7903}>
          <Text style={styles.Text_1864_7903}>Date</Text>
        </View>
        <View style={styles.View_1864_7904}>
          <Text style={styles.Text_1864_7904}>Amount</Text>
        </View>
        <View style={styles.View_1864_7905}>
          <Text style={styles.Text_1864_7905}>Top up</Text>
        </View>
        <View style={styles.View_1864_7906}>
          <Text style={styles.Text_1864_7906}>
            Topup by 423665935 with 1603280001000245
          </Text>
        </View>
        <View style={styles.View_1864_7907}>
          <Text style={styles.Text_1864_7907}>Category</Text>
        </View>
        <View style={styles.View_1864_7908}>
          <Text style={styles.Text_1864_7908}>Serial Number</Text>
        </View>
      </View>
      <View style={styles.View_1864_7909}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_7910}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1864_7829: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("16.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_7829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7830: {
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
  ImageBackground_1864_7831: {
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
  ImageBackground_1864_7835: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_7856: {
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
  ImageBackground_1864_7857: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_7859: {
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
  View_1864_7860: {
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
  Text_1864_7860: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7861: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("22.404371584699454%")
  },
  View_1864_7862: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  ImageBackground_1864_7863: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.941598360655739%")
  },
  ImageBackground_1864_7864: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.437158469945352%")
  },
  ImageBackground_1864_7865: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.267759562841526%")
  },
  ImageBackground_1864_7866: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.0983606557377%")
  },
  View_1864_7867: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25556687801932%"),
    top: hp("17.486338797814206%"),
    justifyContent: "flex-start"
  },
  Text_1864_7867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7868: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25556687801932%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_7868: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7869: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84010794082126%"),
    top: hp("31.284153005464482%"),
    justifyContent: "flex-start"
  },
  Text_1864_7869: {
    color: "rgba(57, 151, 42, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7870: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("17.622950819672127%"),
    justifyContent: "flex-start"
  },
  Text_1864_7870: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7871: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_7871: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7872: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("31.284153005464482%"),
    justifyContent: "flex-start"
  },
  Text_1864_7872: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7873: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.53623188405797%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_1864_7873: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7874: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("9.016393442622952%"),
    justifyContent: "flex-start"
  },
  Text_1864_7874: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7875: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_1864_7875: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7876: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("9.016393442622952%"),
    justifyContent: "flex-start"
  },
  Text_1864_7876: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7877: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("94.53551912568307%")
  },
  View_1864_7878: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  ImageBackground_1864_7879: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.941598360655746%")
  },
  ImageBackground_1864_7880: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.437158469945345%")
  },
  ImageBackground_1864_7881: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.26775956284152%")
  },
  ImageBackground_1864_7882: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737707%")
  },
  View_1864_7883: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25556687801932%"),
    top: hp("17.4863387978142%"),
    justifyContent: "flex-start"
  },
  Text_1864_7883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7884: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25556687801932%"),
    top: hp("24.590163934426215%"),
    justifyContent: "flex-start"
  },
  Text_1864_7884: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7885: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84010794082126%"),
    top: hp("31.28415300546446%"),
    justifyContent: "flex-start"
  },
  Text_1864_7885: {
    color: "rgba(57, 151, 42, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7886: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("17.622950819672127%"),
    justifyContent: "flex-start"
  },
  Text_1864_7886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7887: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("24.590163934426215%"),
    justifyContent: "flex-start"
  },
  Text_1864_7887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7888: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("31.28415300546446%"),
    justifyContent: "flex-start"
  },
  Text_1864_7888: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7889: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.53623188405797%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_1864_7889: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7890: {
    width: wp("46.61835748792271%"),
    minWidth: wp("46.61835748792271%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("9.016393442622942%"),
    justifyContent: "flex-start"
  },
  Text_1864_7890: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7891: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_1864_7891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7892: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("9.016393442622942%"),
    justifyContent: "flex-start"
  },
  Text_1864_7892: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7893: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("58.46994535519126%")
  },
  View_1864_7894: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  ImageBackground_1864_7895: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.941598360655746%")
  },
  ImageBackground_1864_7896: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.43715846994536%")
  },
  ImageBackground_1864_7897: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.26775956284152%")
  },
  ImageBackground_1864_7898: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737707%")
  },
  View_1864_7899: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25556687801932%"),
    top: hp("17.4863387978142%"),
    justifyContent: "flex-start"
  },
  Text_1864_7899: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7900: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25556687801932%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_7900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7901: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84010794082126%"),
    top: hp("31.28415300546449%"),
    justifyContent: "flex-start"
  },
  Text_1864_7901: {
    color: "rgba(57, 151, 42, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7902: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("17.622950819672127%"),
    justifyContent: "flex-start"
  },
  Text_1864_7902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7903: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_1864_7903: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7904: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864262530193237%"),
    top: hp("31.28415300546449%"),
    justifyContent: "flex-start"
  },
  Text_1864_7904: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7905: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.53623188405797%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_1864_7905: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7906: {
    width: wp("46.61835748792271%"),
    minWidth: wp("46.61835748792271%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("9.016393442622942%"),
    justifyContent: "flex-start"
  },
  Text_1864_7906: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7907: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_1864_7907: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7908: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169067%"),
    top: hp("9.016393442622942%"),
    justifyContent: "flex-start"
  },
  Text_1864_7908: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_7909: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("112.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%")
  },
  ImageBackground_1864_7910: {
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
