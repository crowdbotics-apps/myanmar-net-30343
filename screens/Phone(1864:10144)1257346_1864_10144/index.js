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
      <View style={styles.View_1864_10145} />
      <View style={styles.View_1864_10146} />
      <View style={styles.View_1864_10147} />
      <View style={styles.View_1864_10148}>
        <Text style={styles.Text_1864_10148}>Bill pay</Text>
      </View>
      <View style={styles.View_1864_10149}>
        <Text style={styles.Text_1864_10149}>Bill pay</Text>
      </View>
      <View style={styles.View_1864_10150}>
        <Text style={styles.Text_1864_10150}>Bill pay</Text>
      </View>
      <View style={styles.View_1864_10151}>
        <Text style={styles.Text_1864_10151}>SINV/20/07/00684</Text>
      </View>
      <View style={styles.View_1864_10152}>
        <Text style={styles.Text_1864_10152}>SINV/20/07/00567</Text>
      </View>
      <View style={styles.View_1864_10153}>
        <Text style={styles.Text_1864_10153}>SINV/20/07/00567</Text>
      </View>
      <View style={styles.View_1864_10154}>
        <Text style={styles.Text_1864_10154}>Category</Text>
      </View>
      <View style={styles.View_1864_10155}>
        <Text style={styles.Text_1864_10155}>Category</Text>
      </View>
      <View style={styles.View_1864_10156}>
        <Text style={styles.Text_1864_10156}>Category</Text>
      </View>
      <View style={styles.View_1864_10157}>
        <Text style={styles.Text_1864_10157}>Invoice Number</Text>
      </View>
      <View style={styles.View_1864_10158}>
        <Text style={styles.Text_1864_10158}>Invoice Number</Text>
      </View>
      <View style={styles.View_1864_10159}>
        <Text style={styles.Text_1864_10159}>Invoice Number</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10163}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10165}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10166}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10167}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10168}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10169}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10170}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10171}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10173}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10174}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10175}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10176}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab2/4647/f7acf0f40629031610921d6cb3171995"
        }}
        style={styles.ImageBackground_1864_10177}
      />
      <View style={styles.View_1864_10178}>
        <Text style={styles.Text_1864_10178}>2020-03-13</Text>
      </View>
      <View style={styles.View_1864_10179}>
        <Text style={styles.Text_1864_10179}>2020-03-13</Text>
      </View>
      <View style={styles.View_1864_10180}>
        <Text style={styles.Text_1864_10180}>2020-03-13</Text>
      </View>
      <View style={styles.View_1864_10181}>
        <Text style={styles.Text_1864_10181}>Service Month</Text>
      </View>
      <View style={styles.View_1864_10182}>
        <Text style={styles.Text_1864_10182}>Service Month</Text>
      </View>
      <View style={styles.View_1864_10183}>
        <Text style={styles.Text_1864_10183}>Service Month</Text>
      </View>
      <View style={styles.View_1864_10184}>
        <Text style={styles.Text_1864_10184}>Su Su</Text>
      </View>
      <View style={styles.View_1864_10185}>
        <Text style={styles.Text_1864_10185}>Su Su</Text>
      </View>
      <View style={styles.View_1864_10186}>
        <Text style={styles.Text_1864_10186}>Su Su</Text>
      </View>
      <View style={styles.View_1864_10187}>
        <Text style={styles.Text_1864_10187}>2120075</Text>
      </View>
      <View style={styles.View_1864_10188}>
        <Text style={styles.Text_1864_10188}>2120075</Text>
      </View>
      <View style={styles.View_1864_10189}>
        <Text style={styles.Text_1864_10189}>2120075</Text>
      </View>
      <View style={styles.View_1864_10190}>
        <Text style={styles.Text_1864_10190}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_10191}>
        <Text style={styles.Text_1864_10191}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_10192}>
        <Text style={styles.Text_1864_10192}>23.12.2019</Text>
      </View>
      <View style={styles.View_1864_10193}>
        <Text style={styles.Text_1864_10193}>94,000</Text>
      </View>
      <View style={styles.View_1864_10194}>
        <Text style={styles.Text_1864_10194}>94,000</Text>
      </View>
      <View style={styles.View_1864_10195}>
        <Text style={styles.Text_1864_10195}>94,000</Text>
      </View>
      <View style={styles.View_1864_10196}>
        <Text style={styles.Text_1864_10196}>Customer Name</Text>
      </View>
      <View style={styles.View_1864_10197}>
        <Text style={styles.Text_1864_10197}>Customer Name</Text>
      </View>
      <View style={styles.View_1864_10198}>
        <Text style={styles.Text_1864_10198}>Customer Name</Text>
      </View>
      <View style={styles.View_1864_10199}>
        <Text style={styles.Text_1864_10199}>Customer ID</Text>
      </View>
      <View style={styles.View_1864_10200}>
        <Text style={styles.Text_1864_10200}>Customer ID</Text>
      </View>
      <View style={styles.View_1864_10201}>
        <Text style={styles.Text_1864_10201}>Customer ID</Text>
      </View>
      <View style={styles.View_1864_10202}>
        <Text style={styles.Text_1864_10202}>Date</Text>
      </View>
      <View style={styles.View_1864_10203}>
        <Text style={styles.Text_1864_10203}>Date</Text>
      </View>
      <View style={styles.View_1864_10204}>
        <Text style={styles.Text_1864_10204}>Date</Text>
      </View>
      <View style={styles.View_1864_10205}>
        <Text style={styles.Text_1864_10205}>Amount</Text>
      </View>
      <View style={styles.View_1864_10206}>
        <Text style={styles.Text_1864_10206}>Amount</Text>
      </View>
      <View style={styles.View_1864_10207}>
        <Text style={styles.Text_1864_10207}>Amount</Text>
      </View>
      <View style={styles.View_1864_10208} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_10209}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a0/6689/02fc154db7272f3035351e6858c578fd"
        }}
        style={styles.ImageBackground_1864_10213}
      />
      <View style={styles.View_1864_10234}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_10235}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_10237}
      />
      <View style={styles.View_1864_10238}>
        <Text style={styles.Text_1864_10238}>Bill Pay History</Text>
      </View>
      <View style={styles.View_1864_10239}>
        <Text style={styles.Text_1864_10239}>
          History &gt; Bill Pay History
        </Text>
      </View>
      <View style={styles.View_1864_10240}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_10241}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140.84699453551912%") },
  View_1864_10145: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("21.994535519125684%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  View_1864_10146: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("117.62295081967213%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  View_1864_10147: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("69.80874316939891%"),
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1
  },
  View_1864_10148: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%"),
    top: hp("24.316939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_10148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10149: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%"),
    top: hp("71.99453551912568%"),
    justifyContent: "flex-start"
  },
  Text_1864_10149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10150: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%"),
    top: hp("119.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_10150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10151: {
    width: wp("35.02415458937198%"),
    minWidth: wp("35.02415458937198%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.2463768115942%"),
    top: hp("31.147540983606557%"),
    justifyContent: "flex-start"
  },
  Text_1864_10151: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10152: {
    width: wp("35.02415458937198%"),
    minWidth: wp("35.02415458937198%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.2463768115942%"),
    top: hp("79.09836065573771%"),
    justifyContent: "flex-start"
  },
  Text_1864_10152: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10153: {
    width: wp("35.02415458937198%"),
    minWidth: wp("35.02415458937198%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.2463768115942%"),
    top: hp("126.91256830601093%"),
    justifyContent: "flex-start"
  },
  Text_1864_10153: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10154: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("24.316939890710383%"),
    justifyContent: "flex-start"
  },
  Text_1864_10154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10155: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("71.99453551912568%"),
    justifyContent: "flex-start"
  },
  Text_1864_10155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10156: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("119.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_10156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10157: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("31.147540983606557%"),
    justifyContent: "flex-start"
  },
  Text_1864_10157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10158: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("78.68852459016394%"),
    justifyContent: "flex-start"
  },
  Text_1864_10158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10159: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("126.50273224043715%"),
    justifyContent: "flex-start"
  },
  Text_1864_10159: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10160: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("28.936133879781423%")
  },
  ImageBackground_1864_10161: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("76.75034153005464%")
  },
  ImageBackground_1864_10162: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("124.56454918032787%")
  },
  ImageBackground_1864_10163: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("35.65573770491803%")
  },
  ImageBackground_1864_10164: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("83.46994535519126%")
  },
  ImageBackground_1864_10165: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("131.28415300546447%")
  },
  ImageBackground_1864_10166: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("42.48633879781421%")
  },
  ImageBackground_1864_10167: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("90.30054644808743%")
  },
  ImageBackground_1864_10168: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("138.11475409836063%")
  },
  ImageBackground_1864_10169: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("49.31693989071038%")
  },
  ImageBackground_1864_10170: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("97.1311475409836%")
  },
  ImageBackground_1864_10171: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("144.94535519125685%")
  },
  ImageBackground_1864_10172: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("56.14754098360656%")
  },
  ImageBackground_1864_10173: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("103.9617486338798%")
  },
  ImageBackground_1864_10174: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("151.775956284153%")
  },
  ImageBackground_1864_10175: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.86520606884058%"),
    top: hp("62.97814207650273%")
  },
  ImageBackground_1864_10176: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("110.79234972677597%")
  },
  ImageBackground_1864_10177: {
    width: wp("92.029899560311%"),
    minWidth: wp("92.029899560311%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.865677838164251%"),
    top: hp("158.60655737704917%")
  },
  View_1864_10178: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.1207729468599%"),
    top: hp("37.84153005464481%"),
    justifyContent: "flex-start"
  },
  Text_1864_10178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10179: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.1207729468599%"),
    top: hp("85.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_1864_10179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10180: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.1207729468599%"),
    top: hp("133.46994535519124%"),
    justifyContent: "flex-start"
  },
  Text_1864_10180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10181: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("37.84153005464481%"),
    justifyContent: "flex-start"
  },
  Text_1864_10181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10182: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("85.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_1864_10182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10183: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("133.46994535519124%"),
    justifyContent: "flex-start"
  },
  Text_1864_10183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10184: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.57487922705315%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_10184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10185: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.57487922705315%"),
    top: hp("92.4863387978142%"),
    justifyContent: "flex-start"
  },
  Text_1864_10185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10186: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.57487922705315%"),
    top: hp("140.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_10186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10187: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("51.63934426229508%"),
    justifyContent: "flex-start"
  },
  Text_1864_10187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10188: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("99.31693989071039%"),
    justifyContent: "flex-start"
  },
  Text_1864_10188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10189: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("147.1311475409836%"),
    justifyContent: "flex-start"
  },
  Text_1864_10189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10190: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.1207729468599%"),
    top: hp("58.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_1864_10190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10191: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.1207729468599%"),
    top: hp("106.14754098360655%"),
    justifyContent: "flex-start"
  },
  Text_1864_10191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10192: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.1207729468599%"),
    top: hp("153.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_1864_10192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10193: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88405797101449%"),
    top: hp("65.1639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_10193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10194: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88405797101449%"),
    top: hp("112.8415300546448%"),
    justifyContent: "flex-start"
  },
  Text_1864_10194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10195: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88405797101449%"),
    top: hp("160.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_1864_10195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10196: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_1864_10196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10197: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("92.4863387978142%"),
    justifyContent: "flex-start"
  },
  Text_1864_10197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10198: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("140.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_1864_10198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10199: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("51.63934426229508%"),
    justifyContent: "flex-start"
  },
  Text_1864_10199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10200: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("99.31693989071039%"),
    justifyContent: "flex-start"
  },
  Text_1864_10200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10201: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("147.1311475409836%"),
    justifyContent: "flex-start"
  },
  Text_1864_10201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10202: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("58.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_1864_10202: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10203: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("106.14754098360655%"),
    justifyContent: "flex-start"
  },
  Text_1864_10203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10204: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("153.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_1864_10204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10205: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("65.1639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1864_10205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10206: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.73041213768116%"),
    top: hp("112.8415300546448%"),
    justifyContent: "flex-start"
  },
  Text_1864_10206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10207: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.73041213768116%"),
    top: hp("160.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_1864_10207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10208: {
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
  ImageBackground_1864_10209: {
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
  ImageBackground_1864_10213: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_10234: {
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
  ImageBackground_1864_10235: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10237: {
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
  View_1864_10238: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("16.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_1864_10238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10239: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_1864_10239: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10240: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("128.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%")
  },
  ImageBackground_1864_10241: {
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
