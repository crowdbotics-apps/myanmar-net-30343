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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b16/a4cb/b84b3eb59b5d9128ae73fac2e75c91b9"
        }}
        style={styles.ImageBackground_1864_10260}
      />
      <View style={styles.View_1864_10261} />
      <View style={styles.View_1864_10262}>
        <Text style={styles.Text_1864_10262}>Available Credit : 0 Ks</Text>
      </View>
      <View style={styles.View_1864_10263}>
        <Text style={styles.Text_1864_10263}>Recent Activity</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7138/a722/4972df04f340cefe234beb289cb1a6e7"
        }}
        style={styles.ImageBackground_1864_10264}
      />
      <View style={styles.View_1864_10265} />
      <View style={styles.View_1864_10266} />
      <View style={styles.View_1864_10267}>
        <Text style={styles.Text_1864_10267}>500,000 Ks</Text>
      </View>
      <View style={styles.View_1864_10268}>
        <Text style={styles.Text_1864_10268}>500,000 Ks</Text>
      </View>
      <View style={styles.View_1864_10269}>
        <Text style={styles.Text_1864_10269}>Credit</Text>
      </View>
      <View style={styles.View_1864_10270}>
        <Text style={styles.Text_1864_10270}>Credit limit</Text>
      </View>
      <View style={styles.View_1864_10271}>
        <Text style={styles.Text_1864_10271}>
          The credit amount will be deducted from your next top up.
        </Text>
      </View>
      <View style={styles.View_1864_10272}>
        <Text style={styles.Text_1864_10272}>SINV/19/04/146391</Text>
      </View>
      <View style={styles.View_1864_10273}>
        <Text style={styles.Text_1864_10273}>SINV/19/03/146391</Text>
      </View>
      <View style={styles.View_1864_10274}>
        <Text style={styles.Text_1864_10274}>Bill Pay</Text>
      </View>
      <View style={styles.View_1864_10275}>
        <Text style={styles.Text_1864_10275}>Bill Pay</Text>
      </View>
      <View style={styles.View_1864_10276}>
        <Text style={styles.Text_1864_10276}>Date : 23.12.2019 </Text>
      </View>
      <View style={styles.View_1864_10277}>
        <Text style={styles.Text_1864_10277}>Date : 23.12.2019 </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d11/218e/6f86d694a9145f97cc4a87f0caa7dd27"
        }}
        style={styles.ImageBackground_1864_10278}
      />
      <View style={styles.View_1864_10279}>
        <Text style={styles.Text_1864_10279}>- 250,00 Ks</Text>
      </View>
      <View style={styles.View_1864_10280}>
        <Text style={styles.Text_1864_10280}>- 250,00 Ks</Text>
      </View>
      <View style={styles.View_1864_10281} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e49/e3f1/69144c2c5798bf2b4bf0b8e2f9256384"
        }}
        style={styles.ImageBackground_1864_10282}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/a42f/04f3e9eaf692334d09ad09a3e97ea678"
        }}
        style={styles.ImageBackground_1864_10286}
      />
      <View style={styles.View_1864_10307}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d873/560b/cae2af5dee7982f2ee8351cd3bb670bd"
          }}
          style={styles.ImageBackground_1864_10308}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5c/2b78/6d5904f2b0de4a7f5714bb778d911a27"
        }}
        style={styles.ImageBackground_1864_10310}
      />
      <View style={styles.View_1864_10311} />
      <View style={styles.View_1864_10312}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5345/6e93/13df8dfc4c0b426c51b83472e8c6402e"
          }}
          style={styles.ImageBackground_1864_10313}
        />
        <View style={styles.View_1864_10314}>
          <Text style={styles.Text_1864_10314}>
            09-765338440 (9:00 AM to 7:30 PM Everyday)
          </Text>
        </View>
      </View>
      <View style={styles.View_1864_10315}>
        <Text style={styles.Text_1864_10315}>
          No.(33), Pyay Road, Quarter(5), Mayangone Township, Yangon
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d86a/1c07/7e759385bba8fb770347632d4c30bca9"
        }}
        style={styles.ImageBackground_1864_10316}
      />
      <View style={styles.View_1864_10317} />
      <View style={styles.View_1864_10318}>
        <Text style={styles.Text_1864_10318}>
          Myanmar Net © 2018. All Rights Reserved.
        </Text>
      </View>
      <View style={styles.View_1864_10319}>
        <View style={styles.View_1864_10320}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/4a27/84fcac200d36d95c026d1aa28f0d7d99"
            }}
            style={styles.ImageBackground_1864_10321}
          />
        </View>
      </View>
      <View style={styles.View_1864_10324}>
        <View style={styles.View_1864_10325} />
        <View style={styles.View_1864_10326}>
          <View style={styles.View_1864_10327}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/169d/f553531c03c71999460fc45a2ebcd0d4"
              }}
              style={styles.ImageBackground_1864_10328}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_10331}>
        <View style={styles.View_1864_10332} />
        <View style={styles.View_1864_10333}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/4fe4/a6afb654428cf2ba9092b632ec3618d3"
            }}
            style={styles.ImageBackground_1864_10334}
          />
        </View>
      </View>
      <View style={styles.View_1864_10337}>
        <View style={styles.View_1864_10338} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4460/a3ca/1f4b2974d2072810bfadf487be93519b"
          }}
          style={styles.ImageBackground_1864_10339}
        />
      </View>
      <View style={styles.View_1864_10340}>
        <View style={styles.View_1864_10341}>
          <View style={styles.View_1864_10342}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/9cb8/5d037e7bdaf90d0e59934c83a7830364"
              }}
              style={styles.ImageBackground_1864_10343}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1864_10350}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f58/c10a/c92240950d799786ce9e36a1e9a58f7b"
          }}
          style={styles.ImageBackground_1864_10351}
        />
      </View>
      <View style={styles.View_1864_10369}>
        <Text style={styles.Text_1864_10369}>Home &gt; Credit</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140.84699453551912%") },
  ImageBackground_1864_10260: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82125603864735%"),
    top: hp("6.284153005464481%")
  },
  View_1864_10261: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("59.97267759562842%"),
    minHeight: hp("59.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10262: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("20.081967213114755%"),
    justifyContent: "flex-start"
  },
  Text_1864_10262: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10263: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("48.224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_1864_10263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10264: {
    width: wp("92.512077294686%"),
    minWidth: wp("92.512077294686%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("45.62841530054645%")
  },
  View_1864_10265: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("30.46448087431694%"),
    backgroundColor: "rgba(228, 228, 228, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10266: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("30.46448087431694%"),
    backgroundColor: "rgba(193, 0, 12, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1864_10267: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.18840579710145%"),
    top: hp("26.229508196721312%"),
    justifyContent: "flex-start"
  },
  Text_1864_10267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10268: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("26.229508196721312%"),
    justifyContent: "flex-start"
  },
  Text_1864_10268: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10269: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("33.19672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1864_10269: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10270: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.42995169082126%"),
    top: hp("33.19672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1864_10270: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10271: {
    width: wp("76.32850241545893%"),
    minWidth: wp("76.32850241545893%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("38.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_1864_10271: {
    color: "rgba(99, 99, 99, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10272: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("56.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1864_10272: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10273: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("69.26229508196722%"),
    justifyContent: "flex-start"
  },
  Text_1864_10273: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10274: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_1864_10274: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10275: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("65.98360655737704%"),
    justifyContent: "flex-start"
  },
  Text_1864_10275: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10276: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("60.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_1864_10276: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10277: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("72.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1864_10277: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10278: {
    width: wp("84.30124181480222%"),
    minWidth: wp("84.30124181480222%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.211145078502415%"),
    top: hp("64.31010928961749%")
  },
  View_1864_10279: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.60386473429952%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_1864_10279: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10280: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.84541062801932%"),
    top: hp("65.98360655737704%"),
    justifyContent: "flex-start"
  },
  Text_1864_10280: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10281: {
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
  ImageBackground_1864_10282: {
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
  ImageBackground_1864_10286: {
    width: wp("38.64734299516908%"),
    height: hp("4.496882391757652%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.676328502415455%")
  },
  View_1864_10307: {
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
  ImageBackground_1864_10308: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10310: {
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
  View_1864_10311: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108.87978142076503%"),
    backgroundColor: "rgba(54, 54, 54, 1)"
  },
  View_1864_10312: {
    width: wp("77.23926046620244%"),
    minWidth: wp("77.23926046620244%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.851553064613526%"),
    top: hp("113.66120218579235%")
  },
  ImageBackground_1864_10313: {
    width: wp("3.6319400953209917%"),
    minWidth: wp("3.6319400953209917%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1864_10314: {
    width: wp("70.21750482384134%"),
    minWidth: wp("70.21750482384134%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.021696671195652%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1864_10314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10315: {
    width: wp("82.56610372792119%"),
    minWidth: wp("82.56610372792119%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.82009548611111%"),
    top: hp("117.89617486338797%"),
    justifyContent: "flex-start"
  },
  Text_1864_10315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1864_10316: {
    width: wp("4.842586793761323%"),
    minWidth: wp("4.842586793761323%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("117.75956284153007%"),
    resizeMode: "cover"
  },
  View_1864_10317: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135.92896174863387%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_1864_10318: {
    width: wp("54.96335974062122%"),
    minWidth: wp("54.96335974062122%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.76003925120773%"),
    top: hp("137.43169398907105%"),
    justifyContent: "flex-start"
  },
  Text_1864_10318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1864_10319: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("128.0054644808743%")
  },
  View_1864_10320: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1864_10321: {
    width: wp("5.50835973398697%"),
    height: hp("1.9170802799078936%"),
    top: hp("0.6653832607582046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19590221165458743%")
  },
  View_1864_10324: {
    width: wp("5.882024995370763%"),
    minWidth: wp("5.882024995370763%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10325: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001179423309238814%"),
    top: hp("0%")
  },
  View_1864_10326: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0.22179442025273488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10327: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10328: {
    width: wp("5.881133977917657%"),
    height: hp("2.918653019139024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10331: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.1214145531401%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10332: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1864_10333: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1864_10334: {
    width: wp("5.866029988164487%"),
    height: hp("3.326654955337608%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10337: {
    width: wp("5.882058627363564%"),
    minWidth: wp("5.882058627363564%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10338: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1864_10339: {
    width: wp("5.881911660162147%"),
    height: hp("3.0605224963745785%"),
    top: hp("0.13314335724044213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00011794233090967055%")
  },
  View_1864_10340: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("128.14207650273224%")
  },
  View_1864_10341: {
    width: wp("5.881911660162147%"),
    minWidth: wp("5.881911660162147%"),
    height: hp("3.326654955337608%"),
    minHeight: hp("3.326654955337608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1864_10342: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0.17009797643444813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3921582503019323%")
  },
  ImageBackground_1864_10343: {
    width: wp("5.097655512860431%"),
    height: hp("3.0404247221399525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10350: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("129.5081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%")
  },
  ImageBackground_1864_10351: {
    width: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1864_10369: {
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
  Text_1864_10369: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
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
